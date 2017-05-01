"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const roc_1 = require("./roc");
describe('Test functions in roc.ts:', () => {
    it("test ROC function", () => {
        let close = [];
        for (let i = 0; i < 300; i++) {
            close.push(Math.floor(Math.random() * 100));
        }
        let roc = roc_1.ROC(close, 12);
        for (let i = 0; i < 12; i++) {
            expect(roc[i]).toBeNull();
        }
        for (let i = 12; i < close.length; i++) {
            expect(roc[i]).toEqual((close[i] - close[i - 12]) / close[i - 12] * 100);
        }
    });
});
