import { SMA } from './ma';

export function DMA(close: number[], n1 = 10, n2 = 50): number[] {
    let result1 = SMA(close, n1);
    let result2 = SMA(close, n2);
    let dif: number[] = [];
    for (let i = 0; i < close.length; i++) {
        dif.push(result1[i] - result2[i]);
    }
    return dif;
}