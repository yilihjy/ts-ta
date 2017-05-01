"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ROC(close, n = 12) {
    let roc = [];
    for (let i = 0; i < n; i++) {
        roc.push(null);
    }
    for (let i = n; i < close.length; i++) {
        roc.push((close[i] - close[i - n]) / close[i - n] * 100);
    }
    return roc;
}
exports.ROC = ROC;
