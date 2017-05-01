"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("./tools");
const ma_1 = require("./ma");
const boll_1 = require("./boll");
describe("Test functions in boll.ts:", () => {
    it("test BOLL function", () => {
        let close = [];
        let high = [];
        let low = [];
        for (let i = 0; i < 300; i++) {
            high.push(Math.floor(Math.random() * 100));
            low.push(Math.floor(Math.random() * 100));
            close.push(Math.floor(Math.random() * 100));
        }
        let [lb, mb, ub] = boll_1.BOLL(high, low, close, 20);
        let tp = [];
        for (let i = 0; i < close.length; i++) {
            tp.push((high[i] + low[i] + close[i]) / 3);
        }
        let mb_test = ma_1.SMA(tp, 20);
        let sd = tools_1.standardDeviation(tp, 20);
        for (let i = 0; i < close.length; i++) {
            expect(mb[i]).toEqual(mb_test[i]);
            if (mb_test[i] !== null && sd[i] !== null) {
                expect(ub[i]).toEqual(mb_test[i] + 2 * sd[i]);
                expect(lb[i]).toEqual(mb_test[i] - 2 * sd[i]);
            }
            else {
                expect(ub[i]).toBeNull();
                expect(lb[i]).toBeNull();
            }
        }
    });
});
