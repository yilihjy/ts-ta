import { SMA, EMA } from './ma';

describe("Test functions in ma.ts:", () => {

    let close: number[] = [];

    beforeEach(() => {
        for (let i = 0; i < 300; i++) {
            close.push(Math.floor(Math.random() * 100));
        }
    });

    afterEach(()=>{
        close = [];
    });

    it("test SMA function", () => {
        let result = SMA(close, 5);
        for (let i = 0; i < 4; i++) {
            expect(result[i]).toBeNull();
        }
        for (let i = 4; i < close.length; i++) {
            expect(result[i]).toBeCloseTo((close[i] + close[i - 1] + close[i - 2] + close[i - 3] + close[i - 4]) / 5);
        }
    });

    it("test EMA function by 12", () => {
        let result = EMA(close, 12);
        expect(result[0]).toBeCloseTo(close[0]);
        let k = 2 / (12 + 1);
        for (let i = 1; i < close.length; i++) {
            expect(result[i]).toBeCloseTo(k * close[i] + (1 - k) * result[i - 1]);
        }
    });

    it("test EMA function by 26", () => {
        let result = EMA(close, 26);
        expect(result[0]).toBeCloseTo(close[0]);
        let k = 2 / (26 + 1);
        for (let i = 1; i < close.length; i++) {
            expect(result[i]).toBeCloseTo(k * close[i] + (1 - k) * result[i - 1]);
        }
    });
});
