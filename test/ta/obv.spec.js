"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obv_1 = require("./obv");
describe("Test functions in obv.ts:", () => {
    it("test OBV function", () => {
        let close = [];
        let volume = [];
        for (let i = 0; i < 300; i++) {
            close.push(Math.floor(Math.random() * 100));
            volume.push(Math.floor(Math.random() * 100));
        }
        let obv = obv_1.OBV(close, volume);
        expect(obv[0]).toEqual(volume[0]);
        for (let i = 1; i < close.length; i++) {
            if (close[i] > close[i - 1]) {
                expect(obv[i]).toEqual(obv[i - 1] + volume[i]);
            }
            else if (close[i] < close[i - 1]) {
                expect(obv[i]).toEqual(obv[i - 1] - volume[i]);
            }
            else {
                expect(obv[i]).toEqual(obv[i - 1]);
            }
        }
    });
});
