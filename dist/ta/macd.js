"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ma_1 = require("./ma");
function MACD(close, fastperiod = 12, slowperiod = 26, signalperiod = 9) {
    let ema1 = ma_1.EMA(close, fastperiod);
    let ema2 = ma_1.EMA(close, slowperiod);
    let diff = [];
    for (let i = 0; i < close.length; i++) {
        diff.push(ema2[i] - ema1[i]);
    }
    let dea = ma_1.SMA(diff, signalperiod);
    let macd = [];
    for (let i = 0; i < close.length; i++) {
        if (dea[i] !== null) {
            macd.push(diff[i] - dea[i]);
        }
        else {
            macd.push(null);
        }
    }
    return [diff, dea, macd];
}
exports.MACD = MACD;
