"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ma_1 = require("./ma");
const rsi_1 = require("./rsi");
describe('Test functions in rsi.ts:', () => {
    it('test RSI function', () => {
        let close = [];
        for (let i = 0; i < 300; i++) {
            close.push(Math.floor(Math.random() * 100));
        }
        let rsi = rsi_1.RSI(close, 10);
        let up = [0];
        let dn = [0];
        for (let i = 1; i < close.length; i++) {
            if (close[i] > close[i - 1]) {
                up.push(close[i] - close[i - 1]);
                dn.push(0);
            }
            else {
                up.push(0);
                dn.push(close[i - 1] - close[i]);
            }
        }
        let upma = ma_1.SMA(up, 10);
        let dnma = ma_1.SMA(dn, 10);
        for (let i = 0; i < close.length; i++) {
            expect(rsi[i]).toEqual(upma[i] / (upma[i] + dnma[i]) * 100);
        }
    });
});
