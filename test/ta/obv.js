"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function OBV(close, volume) {
    let obv = [volume[0]];
    for (let i = 1; i < close.length; i++) {
        if (close[i] > close[i - 1]) {
            obv.push(obv[i - 1] + volume[i]);
        }
        else if (close[i] < close[i - 1]) {
            obv.push(obv[i - 1] - volume[i]);
        }
        else {
            obv.push(obv[i - 1]);
        }
    }
    return obv;
}
exports.OBV = OBV;
