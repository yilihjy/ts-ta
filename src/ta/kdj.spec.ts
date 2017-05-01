import { SMA } from './ma';
import { highest, lowest } from './tools';
import { KDJ } from './kdj';

describe('Test functions in kdj.ts:', () => {

    it('test KDJ function', () => {
        let close = [];
        let high = [];
        let low = [];
        for (let i = 0; i < 300; i++) {
            high.push(Math.floor(Math.random() * 100));
            low.push(Math.floor(Math.random() * 100));
            close.push(Math.floor(Math.random() * 100));
        }
        let [k, d, j] = KDJ(high, low, close, 9, 3, 3);
        let highestHigh = highest(high, 9);
        let lowestLow = lowest(low, 9);
        let rsv: number[]=[];
        for (let i = 0; i < close.length; i++) {
            rsv.push((close[i] - lowestLow[i]) / (highestHigh[i] - lowestLow[i]) * 100);
        }
        let k_test = SMA(rsv, 3);
        let d_test = SMA(k, 3);
        let j_test: number[] = []
        for (let i = 0; i < close.length; i++) {
            j_test.push(3 * k[i] - 2 * d[i]);
        }
        for (let i = 0; i < close.length; i++) {
            expect(k[i]).toEqual(k_test[i]);
            expect(d[i]).toEqual(d_test[i]);
            expect(j[i]).toEqual(j_test[i]);
        }
    });
});