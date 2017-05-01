import { EMA,SMA} from './ma';
import { MACD} from './macd';

describe("Test functions in macd.ts:", () => {
    it("test MACD function", () => {
        let close = [];
        for (let i = 0; i < 300; i++) {
            close.push(Math.floor(Math.random() * 100));
        }
        let [diff, dea, macd] = MACD(close, 12, 26, 9);
        let ema1 = EMA(close, 12);
        let ema2 = EMA(close, 26);
        for (let i = 0; i < close.length; i++) {
            expect(diff[i]).toBeCloseTo(ema2[i] - ema1[i]);
        }
        let dea_test = SMA(diff, 9);
        for (let i = 0; i < close.length; i++) {
            expect(dea[i]).toBeCloseTo(dea_test[i]);
        }
        for (let i = 0; i < close.length; i++) {
            if (dea[i]) {
                expect(macd[i]).toBeCloseTo(diff[i] - dea[i]);
            } else {
                expect(macd[i]).toBeNull();
            }
        }
    })
});