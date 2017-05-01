import { standardDeviation } from './tools';
import { SMA } from './ma';

export function BOLL(high: number[], low: number[], close: number[], m = 20): number[][] {
    let tp = [];
    for (let i = 0; i < close.length; i++) {
        tp.push((high[i] + low[i] + close[i]) / 3)
    }
    let mb = SMA(tp, m);
    let sd = standardDeviation(tp, m);
    let ub = [];
    let lb = [];
    for (let i = 0; i < close.length; i++) {
        if (sd[i] !== null && mb[i] !== null) {
            ub.push(mb[i] + 2 * sd[i]);
            lb.push(mb[i] - 2 * sd[i]);
        }else{
            ub.push(null);
            lb.push(null);
        }

    }
    return [lb, mb, ub]
}