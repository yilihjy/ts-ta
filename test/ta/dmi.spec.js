"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dmi_1 = require("./dmi");
const ma_1 = require("./ma");
describe("Test functions in dmi.ts:", () => {
    let close = [];
    let high = [];
    let low = [];
    let timeperiod = 14;
    beforeEach(() => {
        for (let i = 0; i < 300; i++) {
            close.push(Math.floor(Math.random() * 100));
            high.push(Math.floor(Math.random() * 100));
            low.push(Math.floor(Math.random() * 100));
        }
    });
    afterEach(() => {
        close = [];
        high = [];
        low = [];
    });
    it("test MINUS_DM function ", () => {
        let minusDM = dmi_1.MINUS_DM(high, low);
        for (let i = 1; i < high.length; i++) {
            let deltaHigh = high[i - 1] - high[i];
            let deltaLow = low[i] - low[i - 1];
            if ((deltaHigh < 0 && deltaLow < 0) || deltaHigh == deltaLow) {
                expect(minusDM[i]).toEqual(0);
            }
            else if (deltaHigh > deltaLow) {
                expect(minusDM[i]).toEqual(0);
            }
            else if (deltaHigh < deltaLow) {
                expect(minusDM[i]).toEqual(deltaLow);
            }
        }
    });
    it("test PLUS_DM function", () => {
        let plusDM = dmi_1.PLUS_DM(high, low);
        for (let i = 1; i < high.length; i++) {
            let deltaHigh = high[i - 1] - high[i];
            let deltaLow = low[i] - low[i - 1];
            if ((deltaHigh < 0 && deltaLow < 0) || deltaHigh == deltaLow) {
                expect(plusDM[i]).toEqual(0);
            }
            else if (deltaHigh > deltaLow) {
                expect(plusDM[i]).toEqual(deltaHigh);
            }
            else if (deltaHigh < deltaLow) {
                expect(plusDM[i]).toEqual(0);
            }
        }
    });
    it("test TR function", () => {
        let tr = dmi_1.TR(high, low, close);
        expect(tr[0]).toEqual(high[0] - low[0]);
        for (let i = 1; i < high.length; i++) {
            let trueHigh;
            let trueLow;
            if (high[i] > close[i - 1]) {
                trueHigh = high[i];
            }
            else {
                trueHigh = close[i - 1];
            }
            if (low[i] < close[i - 1]) {
                trueLow = low[i];
            }
            else {
                trueLow = close[i - 1];
            }
            expect(tr[i]).toEqual(trueHigh - trueLow);
        }
    });
    it("test PLUS_DI function", () => {
        let plusDI = dmi_1.PLUS_DI(high, low, close);
        let plusDM = dmi_1.PLUS_DM(high, low);
        let tr = dmi_1.TR(high, low, close);
        let plusDMSum = [];
        let trueRSum = [];
        for (let i = 0; i < timeperiod - 1; i++) {
            plusDMSum.push(null);
            trueRSum.push(null);
        }
        plusDMSum.push(plusDM.slice(0, timeperiod).reduce((pre, cur, index, arr) => {
            return pre + cur;
        }));
        trueRSum.push(tr.slice(0, timeperiod).reduce((pre, cur, index, arr) => {
            return pre + cur;
        }));
        for (let i = timeperiod - 1; i < high.length; i++) {
            plusDMSum.push(plusDMSum[i - 1] - plusDMSum[i - 1] / timeperiod + plusDM[i]);
            trueRSum.push(trueRSum[i - 1] - trueRSum[i - 1] / timeperiod + tr[i]);
        }
        for (let i = 0; i < close.length; i++) {
            if (trueRSum[i] !== null) {
                expect(plusDI[i]).toEqual(100 * (plusDMSum[i] / trueRSum[i]));
            }
            else {
                expect(plusDI[i]).toBeNull();
            }
        }
    });
    it("test MINUS_DI function", () => {
        let minusDI = dmi_1.MINUS_DI(high, low, close);
        let minusDM = dmi_1.MINUS_DM(high, low);
        let tr = dmi_1.TR(high, low, close);
        let minusDMSum = [];
        let trueRSum = [];
        for (let i = 0; i < timeperiod - 1; i++) {
            minusDMSum.push(null);
            trueRSum.push(null);
        }
        minusDMSum.push(minusDM.slice(0, timeperiod).reduce((pre, cur, index, arr) => {
            return pre + cur;
        }));
        trueRSum.push(tr.slice(0, timeperiod).reduce((pre, cur, index, arr) => {
            return pre + cur;
        }));
        for (let i = timeperiod - 1; i < high.length; i++) {
            minusDMSum.push(minusDMSum[i - 1] - minusDMSum[i - 1] / timeperiod + minusDM[i]);
            trueRSum.push(trueRSum[i - 1] - trueRSum[i - 1] / timeperiod + tr[i]);
        }
        for (let i = 0; i < close.length; i++) {
            if (trueRSum[i] !== null) {
                expect(minusDI[i]).toEqual(100 * (minusDMSum[i] / trueRSum[i]));
            }
            else {
                expect(minusDI[i]).toBeNull();
            }
        }
    });
    it("test DX function", () => {
        let dx = dmi_1.DX(high, low, close);
        let minusDI = dmi_1.MINUS_DI(high, low, close);
        let plusDI = dmi_1.PLUS_DI(high, low, close);
        for (let i = 0; i < close.length; i++) {
            if (minusDI[i] !== null && plusDI[i] !== null) {
                expect(dx[i]).toEqual(Math.abs(plusDI[i] - minusDI[i]) / (plusDI[i] + minusDI[i]) * 100);
            }
            else {
                expect(dx[i]).toBeNull();
            }
        }
    });
    it("test ADX function", () => {
        let dx = dmi_1.DX(high, low, close);
        let adx = dmi_1.ADX(high, low, close);
        let adx_test = ma_1.SMA(dx, timeperiod);
        for (let i = 0; i < timeperiod - 1; i++) {
            expect(adx[i]).toBeNull();
        }
        for (let i = timeperiod; i < dx.length; i++) {
            expect(adx[i]).toEqual(adx_test[i]);
        }
    });
    it("test ADXR function", () => {
        let adx = dmi_1.ADX(high, low, close);
        let adxr = dmi_1.ADXR(high, low, close);
        for (let i = 0; i < timeperiod; i++) {
            expect(adxr[i]).toBeNull();
        }
        for (let i = timeperiod; i < adx.length; i++) {
            expect(adxr[i]).toEqual((adx[i] - adx[i - timeperiod]) / 2);
        }
    });
    it("test DMI function", () => {
        let [minusDI, plusDI, adx, adxr] = dmi_1.DMI(high, low, close);
        let minusDI_test = dmi_1.MINUS_DI(high, low, close);
        let plusDI_test = dmi_1.PLUS_DI(high, low, close);
        let adx_test = dmi_1.ADX(high, low, close);
        let adxr_test = dmi_1.ADXR(high, low, close);
        for (let i = 0; i < close.length; i++) {
            expect(minusDI[i]).toEqual(minusDI_test[i]);
            expect(plusDI[i]).toEqual(plusDI_test[i]);
            expect(adx[i]).toEqual(adx[i]);
            expect(adxr[i]).toEqual(adxr[i]);
        }
    });
});
