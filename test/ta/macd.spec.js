"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ma_1 = require("./ma");
const macd_1 = require("./macd");
describe("Test functions in macd.ts:", () => {
    it("test MACD function", () => {
        let close = [];
        for (let i = 0; i < 300; i++) {
            close.push(Math.floor(Math.random() * 100));
        }
        let [diff, dea, macd] = macd_1.MACD(close, 12, 26, 9);
        let ema1 = ma_1.EMA(close, 12);
        let ema2 = ma_1.EMA(close, 26);
        for (let i = 0; i < close.length; i++) {
            expect(diff[i]).toBeCloseTo(ema2[i] - ema1[i]);
        }
        let dea_test = ma_1.SMA(diff, 9);
        for (let i = 0; i < close.length; i++) {
            expect(dea[i]).toBeCloseTo(dea_test[i]);
        }
        for (let i = 0; i < close.length; i++) {
            if (dea[i]) {
                expect(macd[i]).toBeCloseTo(diff[i] - dea[i]);
            }
            else {
                expect(macd[i]).toBeNull();
            }
        }
    });
});
