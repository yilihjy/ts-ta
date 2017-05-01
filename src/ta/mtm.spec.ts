import { MTM } from './mtm';

describe('Test functions in roc.ts:', () => {

    it("test ROC function", () => {
        let close = [];
        for (let i = 0; i < 300; i++) {
            close.push(Math.floor(Math.random() * 100));
        }
        let mtm = MTM(close, 12);
        for (let i = 0; i < 12; i++) {
            expect(mtm[i]).toBeNull();
        }
        for (let i = 12; i < close.length; i++) {
            expect(mtm[i]).toEqual(close[i] - close[i - 12]);
        }
    });
});