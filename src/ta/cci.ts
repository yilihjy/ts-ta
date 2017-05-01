import { SMA } from './ma';
import { highest, lowest } from './tools';

export function CCI(high: number[], low: number[], close: number[], timeperiod = 14): number[] {
    let highestHigh = highest(high, timeperiod);
    let lowestLow = lowest(low, timeperiod);
    let tp: number[] = [];
    for (let i = 0; i < close.length; i++) {
        tp.push((highestHigh[i] + lowestLow[i] + close[i]) / 3);
    }
    let atp = SMA(tp, timeperiod);
    let di: number[] = [];
    for (let i = 0; i < close.length; i++) {
        di.push(atp[i] - close[i]);
    }
    let md = SMA(di, timeperiod);
    let cci: number[] = [];
    for (let i = 0; i < close.length; i++) {
        cci.push((tp[i] - atp[i]) / (0.015 * md[i]))
    }
    return cci;
}