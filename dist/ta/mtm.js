"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function MTM(close, n = 12) {
    let mtm = [];
    for (let i = 0; i < n; i++) {
        mtm.push(null);
    }
    for (let i = n; i < close.length; i++) {
        mtm.push(close[i] - close[i - n]);
    }
    return mtm;
}
exports.MTM = MTM;
