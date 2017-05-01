import { SMA } from './ma';
import { highest,lowest } from './tools';

export function KDJ(high: number[], low: number[], close: number[], n = 9, m1 = 3, m2 = 3): number[][] {
    let highestHigh = highest(high, n);
    let lowestLow = lowest(low, n);
    let rsv: number[]=[];
    for (let i = 0; i < close.length; i++) {
        rsv.push((close[i] - lowestLow[i]) / (highestHigh[i] - lowestLow[i]) * 100);
    }
    let k = SMA(rsv, m1);
    let d = SMA(k, m2);
    let j: number[] = []
    for (let i = 0; i < close.length; i++) {
        j.push(3 * k[i] - 2 * d[i]);
    }
    return [k, d, j];
}