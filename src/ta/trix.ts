import { EMA, SMA } from './ma';

export function TRIX(close: number[], n = 12): number[] {
    let tr = EMA(EMA(EMA(close, n), n), n);
    let trix: number[] = [null];
    for (let i = 1; i < close.length; i++) {
        trix.push((tr[i] - tr[i - 1]) / tr[i] * 100);
    }
    return trix;
}