"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ma_1 = require("./ma");
function DMA(close, n1 = 10, n2 = 50) {
    let result1 = ma_1.SMA(close, n1);
    let result2 = ma_1.SMA(close, n2);
    let dif = [];
    for (let i = 0; i < close.length; i++) {
        dif.push(result1[i] - result2[i]);
    }
    return dif;
}
exports.DMA = DMA;
