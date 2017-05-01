"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ma_1 = require("./ma");
const tools_1 = require("./tools");
function CCI(high, low, close, timeperiod = 14) {
    let highestHigh = tools_1.highest(high, timeperiod);
    let lowestLow = tools_1.lowest(low, timeperiod);
    let tp = [];
    for (let i = 0; i < close.length; i++) {
        tp.push((highestHigh[i] + lowestLow[i] + close[i]) / 3);
    }
    let atp = ma_1.SMA(tp, timeperiod);
    let di = [];
    for (let i = 0; i < close.length; i++) {
        di.push(atp[i] - close[i]);
    }
    let md = ma_1.SMA(di, timeperiod);
    let cci = [];
    for (let i = 0; i < close.length; i++) {
        cci.push((tp[i] - atp[i]) / (0.015 * md[i]));
    }
    return cci;
}
exports.CCI = CCI;
