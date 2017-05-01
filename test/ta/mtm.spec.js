"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mtm_1 = require("./mtm");
describe('Test functions in roc.ts:', () => {
    it("test ROC function", () => {
        let close = [];
        for (let i = 0; i < 300; i++) {
            close.push(Math.floor(Math.random() * 100));
        }
        let mtm = mtm_1.MTM(close, 12);
        for (let i = 0; i < 12; i++) {
            expect(mtm[i]).toBeNull();
        }
        for (let i = 12; i < close.length; i++) {
            expect(mtm[i]).toEqual(close[i] - close[i - 12]);
        }
    });
});
