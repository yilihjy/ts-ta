export function MTM(close: number[], n = 12): number[] {
    let mtm: number[] = [];
    for (let i = 0; i < n; i++) {
        mtm.push(null);
    }
    for (let i = n; i < close.length; i++) {
        mtm.push(close[i] - close[i - n])
    }
    return mtm;
}