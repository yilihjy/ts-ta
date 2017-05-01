"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ma_1 = require("./ma");
function TRIX(close, n = 12) {
    let tr = ma_1.EMA(ma_1.EMA(ma_1.EMA(close, n), n), n);
    let trix = [null];
    for (let i = 1; i < close.length; i++) {
        trix.push((tr[i] - tr[i - 1]) / tr[i] * 100);
    }
    return trix;
}
exports.TRIX = TRIX;
