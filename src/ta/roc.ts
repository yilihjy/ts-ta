export function ROC(close: number[], n = 12): number[] {
    let roc: number[] = [];
    for (let i = 0; i < n; i++) {
        roc.push(null);
    }
    for (let i = n; i < close.length; i++) {
        roc.push((close[i] - close[i - n]) / close[i - n] * 100)
    }
    return roc;
}