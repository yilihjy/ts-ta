import { EMA, SMA } from "./ma";
import { TRIX } from './trix';

describe("Test functions in trix.ts:", () => {
    it("test TRIX function", () => {
        let close = [];
        for (let i = 0; i < 300; i++) {
            close.push(Math.floor(Math.random() * 100));
        }
        let trix = TRIX(close, 12);
        let tr = EMA(EMA(EMA(close, 12), 12), 12);
        expect(trix[0]).toBeNull();
        for (let i = 1; i < close.length; i++) {
            expect(trix[i]).toEqual((tr[i] - tr[i - 1]) / tr[i] * 100);
        }
    });
});