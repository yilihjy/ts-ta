"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ma_1 = require("./ma");
const tools_1 = require("./tools");
function KDJ(high, low, close, n = 9, m1 = 3, m2 = 3) {
    let highestHigh = tools_1.highest(high, n);
    let lowestLow = tools_1.lowest(low, n);
    let rsv = [];
    for (let i = 0; i < close.length; i++) {
        rsv.push((close[i] - lowestLow[i]) / (highestHigh[i] - lowestLow[i]) * 100);
    }
    let k = ma_1.SMA(rsv, m1);
    let d = ma_1.SMA(k, m2);
    let j = [];
    for (let i = 0; i < close.length; i++) {
        j.push(3 * k[i] - 2 * d[i]);
    }
    return [k, d, j];
}
exports.KDJ = KDJ;
