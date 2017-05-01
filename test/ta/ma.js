"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function SMA(close, timeperiod = 30) {
    let result = [];
    let queue = [];
    for (let i = 0; i < timeperiod - 1; i++) {
        queue.push(close[i]);
        result.push(null);
    }
    for (let i = timeperiod - 1; i < close.length; i++) {
        queue.push(close[i]);
        result.push(queue.reduce((pre, cur, index, arr) => {
            return pre + cur;
        }) / timeperiod);
        queue.shift();
    }
    return result;
}
exports.SMA = SMA;
function EMA(close, timeperiod = 30) {
    let k = 2 / (timeperiod + 1);
    let result = [close[0]];
    for (let i = 1; i < close.length; i++) {
        result.push(k * close[i] + (1 - k) * result[i - 1]);
    }
    return result;
}
exports.EMA = EMA;
