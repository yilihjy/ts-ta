import { SMA } from './ma';
import { highest, lowest } from './tools';
import { CCI } from './cci';

describe('Test functions in cci.ts', () => {

    it('test CCI function', () => {
        let close = [];
        let high = [];
        let low = [];
        for (let i = 0; i < 300; i++) {
            high.push(Math.floor(Math.random() * 100));
            low.push(Math.floor(Math.random() * 100));
            close.push(Math.floor(Math.random() * 100));
        }
        let cci = CCI(high, low, close, 14);
        let highestHigh = highest(high, 14);
        let lowestLow = lowest(low, 14);
        let tp: number[] = [];
        for (let i = 0; i < close.length; i++) {
            tp.push((highestHigh[i] + lowestLow[i] + close[i]) / 3);
        }
        let atp = SMA(tp, 14);
        let di: number[] = [];
        for (let i = 0; i < close.length; i++) {
            di.push(atp[i] - close[i]);
        }
        let md = SMA(di, 14);
        for (let i = 0; i < close.length; i++) {
            expect(cci[i]).toEqual((tp[i] - atp[i]) / (0.015 * md[i]));
        }
    });
});
