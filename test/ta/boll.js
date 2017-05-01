"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("./tools");
const ma_1 = require("./ma");
function BOLL(high, low, close, m = 20) {
    let tp = [];
    for (let i = 0; i < close.length; i++) {
        tp.push((high[i] + low[i] + close[i]) / 3);
    }
    let mb = ma_1.SMA(tp, m);
    let sd = tools_1.standardDeviation(tp, m);
    let ub = [];
    let lb = [];
    for (let i = 0; i < close.length; i++) {
        if (sd[i] !== null && mb[i] !== null) {
            ub.push(mb[i] + 2 * sd[i]);
            lb.push(mb[i] - 2 * sd[i]);
        }
        else {
            ub.push(null);
            lb.push(null);
        }
    }
    return [lb, mb, ub];
}
exports.BOLL = BOLL;
