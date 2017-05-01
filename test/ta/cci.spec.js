"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ma_1 = require("./ma");
const tools_1 = require("./tools");
const cci_1 = require("./cci");
describe('Test functions in cci.ts', () => {
    it('test CCI function', () => {
        let close = [];
        let high = [];
        let low = [];
        for (let i = 0; i < 300; i++) {
            high.push(Math.floor(Math.random() * 100));
            low.push(Math.floor(Math.random() * 100));
            close.push(Math.floor(Math.random() * 100));
        }
        let cci = cci_1.CCI(high, low, close, 14);
        let highestHigh = tools_1.highest(high, 14);
        let lowestLow = tools_1.lowest(low, 14);
        let tp = [];
        for (let i = 0; i < close.length; i++) {
            tp.push((highestHigh[i] + lowestLow[i] + close[i]) / 3);
        }
        let atp = ma_1.SMA(tp, 14);
        let di = [];
        for (let i = 0; i < close.length; i++) {
            di.push(atp[i] - close[i]);
        }
        let md = ma_1.SMA(di, 14);
        for (let i = 0; i < close.length; i++) {
            expect(cci[i]).toEqual((tp[i] - atp[i]) / (0.015 * md[i]));
        }
    });
});
