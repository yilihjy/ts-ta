export function SMA(close: number[], timeperiod = 30): number[] {
    let result: number[] = [];
    let queue = [];
    for (let i = 0; i < timeperiod - 1; i++) {
        queue.push(close[i]);
        result.push(null);
    }
    for (let i = timeperiod - 1; i < close.length; i++) {
        queue.push(close[i]);
        result.push(queue.reduce(
            (pre, cur, index, arr) => {
                return pre + cur;
            }
        ) / timeperiod);
        queue.shift();
    }
    return result;
}

export function EMA(close: number[], timeperiod = 30): number[] {
    let k = 2 / (timeperiod + 1);
    let result = [close[0]];
    for (let i = 1; i < close.length; i++) {
        result.push(k * close[i] + (1 - k) * result[i - 1]);
    }
    return result;
}