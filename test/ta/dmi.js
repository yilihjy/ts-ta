"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ma_1 = require("./ma");
function MINUS_DM(high, low, timeperiod = 14) {
    let minusDM = [0];
    for (let i = 1; i < high.length; i++) {
        let deltaHigh = high[i - 1] - high[i];
        let deltaLow = low[i] - low[i - 1];
        if ((deltaHigh < 0 && deltaLow < 0) || deltaHigh == deltaLow) {
            minusDM.push(0);
        }
        else if (deltaHigh > deltaLow) {
            minusDM.push(0);
        }
        else if (deltaHigh < deltaLow) {
            minusDM.push(deltaLow);
        }
    }
    return minusDM;
}
exports.MINUS_DM = MINUS_DM;
function PLUS_DM(high, low, timeperiod = 14) {
    let plusDM = [0];
    for (let i = 1; i < high.length; i++) {
        let deltaHigh = high[i - 1] - high[i];
        let deltaLow = low[i] - low[i - 1];
        if ((deltaHigh < 0 && deltaLow < 0) || deltaHigh == deltaLow) {
            plusDM.push(0);
        }
        else if (deltaHigh > deltaLow) {
            plusDM.push(deltaHigh);
        }
        else if (deltaHigh < deltaLow) {
            plusDM.push(0);
        }
    }
    return plusDM;
}
exports.PLUS_DM = PLUS_DM;
function TR(high, low, close, timeperiod = 14) {
    let trueR = [high[0] - low[0]];
    for (let i = 1; i < high.length; i++) {
        let trueHigh;
        let trueLow;
        if (high[i] > close[i - 1]) {
            trueHigh = high[i];
        }
        else {
            trueHigh = close[i - 1];
        }
        if (low[i] < close[i - 1]) {
            trueLow = low[i];
        }
        else {
            trueLow = close[i - 1];
        }
        trueR.push(trueHigh - trueLow);
    }
    return trueR;
}
exports.TR = TR;
function PLUS_DI(high, low, close, timeperiod = 14) {
    let plusDM = [0];
    let trueR = [high[0] - low[0]];
    for (let i = 1; i < high.length; i++) {
        let deltaHigh = high[i - 1] - high[i];
        let deltaLow = low[i] - low[i - 1];
        if ((deltaHigh < 0 && deltaLow < 0) || deltaHigh == deltaLow) {
            plusDM.push(0);
        }
        else if (deltaHigh > deltaLow) {
            plusDM.push(deltaHigh);
        }
        else if (deltaHigh < deltaLow) {
            plusDM.push(0);
        }
        let trueHigh;
        let trueLow;
        if (high[i] > close[i - 1]) {
            trueHigh = high[i];
        }
        else {
            trueHigh = close[i - 1];
        }
        if (low[i] < close[i - 1]) {
            trueLow = low[i];
        }
        else {
            trueLow = close[i - 1];
        }
        trueR.push(trueHigh - trueLow);
    }
    let plusDMSum = [];
    let trueRSum = [];
    for (let i = 0; i < timeperiod - 1; i++) {
        plusDMSum.push(null);
        trueRSum.push(null);
    }
    plusDMSum.push(plusDM.slice(0, timeperiod).reduce((pre, cur, index, arr) => {
        return pre + cur;
    }));
    trueRSum.push(trueR.slice(0, timeperiod).reduce((pre, cur, index, arr) => {
        return pre + cur;
    }));
    for (let i = timeperiod - 1; i < high.length; i++) {
        plusDMSum.push(plusDMSum[i - 1] - plusDMSum[i - 1] / timeperiod + plusDM[i]);
        trueRSum.push(trueRSum[i - 1] - trueRSum[i - 1] / timeperiod + trueR[i]);
    }
    let plusDI = [];
    for (let i = 0; i < close.length; i++) {
        if (trueRSum[i] !== null) {
            plusDI.push(100 * (plusDMSum[i] / trueRSum[i]));
        }
        else {
            plusDI.push(null);
        }
    }
    return plusDI;
}
exports.PLUS_DI = PLUS_DI;
function MINUS_DI(high, low, close, timeperiod = 14) {
    let minusDM = [0];
    let trueR = [high[0] - low[0]];
    for (let i = 1; i < high.length; i++) {
        let deltaHigh = high[i - 1] - high[i];
        let deltaLow = low[i] - low[i - 1];
        if ((deltaHigh < 0 && deltaLow < 0) || deltaHigh == deltaLow) {
            minusDM.push(0);
        }
        else if (deltaHigh > deltaLow) {
            minusDM.push(0);
        }
        else if (deltaHigh < deltaLow) {
            minusDM.push(deltaLow);
        }
        let trueHigh;
        let trueLow;
        if (high[i] > close[i - 1]) {
            trueHigh = high[i];
        }
        else {
            trueHigh = close[i - 1];
        }
        if (low[i] < close[i - 1]) {
            trueLow = low[i];
        }
        else {
            trueLow = close[i - 1];
        }
        trueR.push(trueHigh - trueLow);
    }
    let minusDMSum = [];
    let trueRSum = [];
    for (let i = 0; i < timeperiod - 1; i++) {
        minusDMSum.push(null);
        trueRSum.push(null);
    }
    minusDMSum.push(minusDM.slice(0, timeperiod).reduce((pre, cur, index, arr) => {
        return pre + cur;
    }));
    trueRSum.push(trueR.slice(0, timeperiod).reduce((pre, cur, index, arr) => {
        return pre + cur;
    }));
    for (let i = timeperiod - 1; i < high.length; i++) {
        minusDMSum.push(minusDMSum[i - 1] - minusDMSum[i - 1] / timeperiod + minusDM[i]);
        trueRSum.push(trueRSum[i - 1] - trueRSum[i - 1] / timeperiod + trueR[i]);
    }
    let minusDI = [];
    for (let i = 0; i < close.length; i++) {
        if (trueRSum[i] !== null) {
            minusDI.push(100 * (minusDMSum[i] / trueRSum[i]));
        }
        else {
            minusDI.push(null);
        }
    }
    return minusDI;
}
exports.MINUS_DI = MINUS_DI;
function DX(high, low, close, timeperiod = 14) {
    let minusDM = [0];
    let plusDM = [0];
    let trueR = [high[0] - low[0]];
    for (let i = 1; i < high.length; i++) {
        let deltaHigh = high[i - 1] - high[i];
        let deltaLow = low[i] - low[i - 1];
        if ((deltaHigh < 0 && deltaLow < 0) || deltaHigh == deltaLow) {
            plusDM.push(0);
            minusDM.push(0);
        }
        else if (deltaHigh > deltaLow) {
            plusDM.push(deltaHigh);
            minusDM.push(0);
        }
        else if (deltaHigh < deltaLow) {
            plusDM.push(0);
            minusDM.push(deltaLow);
        }
        let trueHigh;
        let trueLow;
        if (high[i] > close[i - 1]) {
            trueHigh = high[i];
        }
        else {
            trueHigh = close[i - 1];
        }
        if (low[i] < close[i - 1]) {
            trueLow = low[i];
        }
        else {
            trueLow = close[i - 1];
        }
        trueR.push(trueHigh - trueLow);
    }
    let plusDMSum = [];
    let minusDMSum = [];
    let trueRSum = [];
    for (let i = 0; i < timeperiod - 1; i++) {
        plusDMSum.push(null);
        minusDMSum.push(null);
        trueRSum.push(null);
    }
    plusDMSum.push(plusDM.slice(0, timeperiod).reduce((pre, cur, index, arr) => {
        return pre + cur;
    }));
    minusDMSum.push(minusDM.slice(0, timeperiod).reduce((pre, cur, index, arr) => {
        return pre + cur;
    }));
    trueRSum.push(trueR.slice(0, timeperiod).reduce((pre, cur, index, arr) => {
        return pre + cur;
    }));
    for (let i = timeperiod - 1; i < high.length; i++) {
        plusDMSum.push(plusDMSum[i - 1] - plusDMSum[i - 1] / timeperiod + plusDM[i]);
        minusDMSum.push(minusDMSum[i - 1] - minusDMSum[i - 1] / timeperiod + minusDM[i]);
        trueRSum.push(trueRSum[i - 1] - trueRSum[i - 1] / timeperiod + trueR[i]);
    }
    let minusDI = [];
    let plusDI = [];
    for (let i = 0; i < close.length; i++) {
        if (trueRSum[i] !== null) {
            plusDI.push(100 * (plusDMSum[i] / trueRSum[i]));
            minusDI.push(100 * (minusDMSum[i] / trueRSum[i]));
        }
        else {
            minusDI.push(null);
            plusDI.push(null);
        }
    }
    let dx = [];
    for (let i = 0; i < close.length; i++) {
        if (minusDI[i] !== null && plusDI[i] !== null) {
            dx.push(Math.abs(plusDI[i] - minusDI[i]) / (plusDI[i] + minusDI[i]) * 100);
        }
        else {
            dx.push(null);
        }
    }
    return dx;
}
exports.DX = DX;
function ADX(high, low, close, timeperiod = 14) {
    return ma_1.SMA(DX(high, low, close, timeperiod), timeperiod);
}
exports.ADX = ADX;
function ADXR(high, low, close, timeperiod = 14) {
    let adx = ADX(high, low, close, timeperiod);
    let adxr = [];
    for (let i = 0; i < timeperiod; i++) {
        adxr.push(null);
    }
    for (let i = timeperiod; i < adx.length; i++) {
        adxr.push((adx[i] - adx[i - timeperiod]) / 2);
    }
    return adxr;
}
exports.ADXR = ADXR;
function DMI(high, low, close, timeperiod = 14) {
    let minusDM = [0];
    let plusDM = [0];
    let trueR = [high[0] - low[0]];
    for (let i = 1; i < high.length; i++) {
        let deltaHigh = high[i - 1] - high[i];
        let deltaLow = low[i] - low[i - 1];
        if ((deltaHigh < 0 && deltaLow < 0) || deltaHigh == deltaLow) {
            plusDM.push(0);
            minusDM.push(0);
        }
        else if (deltaHigh > deltaLow) {
            plusDM.push(deltaHigh);
            minusDM.push(0);
        }
        else if (deltaHigh < deltaLow) {
            plusDM.push(0);
            minusDM.push(deltaLow);
        }
        let trueHigh;
        let trueLow;
        if (high[i] > close[i - 1]) {
            trueHigh = high[i];
        }
        else {
            trueHigh = close[i - 1];
        }
        if (low[i] < close[i - 1]) {
            trueLow = low[i];
        }
        else {
            trueLow = close[i - 1];
        }
        trueR.push(trueHigh - trueLow);
    }
    let plusDMSum = [];
    let minusDMSum = [];
    let trueRSum = [];
    for (let i = 0; i < timeperiod - 1; i++) {
        plusDMSum.push(null);
        minusDMSum.push(null);
        trueRSum.push(null);
    }
    plusDMSum.push(plusDM.slice(0, timeperiod).reduce((pre, cur, index, arr) => {
        return pre + cur;
    }));
    minusDMSum.push(minusDM.slice(0, timeperiod).reduce((pre, cur, index, arr) => {
        return pre + cur;
    }));
    trueRSum.push(trueR.slice(0, timeperiod).reduce((pre, cur, index, arr) => {
        return pre + cur;
    }));
    for (let i = timeperiod - 1; i < high.length; i++) {
        plusDMSum.push(plusDMSum[i - 1] - plusDMSum[i - 1] / timeperiod + plusDM[i]);
        minusDMSum.push(minusDMSum[i - 1] - minusDMSum[i - 1] / timeperiod + minusDM[i]);
        trueRSum.push(trueRSum[i - 1] - trueRSum[i - 1] / timeperiod + trueR[i]);
    }
    let minusDI = [];
    let plusDI = [];
    for (let i = 0; i < close.length; i++) {
        if (trueRSum[i] !== null) {
            plusDI.push(100 * (plusDMSum[i] / trueRSum[i]));
            minusDI.push(100 * (minusDMSum[i] / trueRSum[i]));
        }
        else {
            minusDI.push(null);
            plusDI.push(null);
        }
    }
    let dx = [];
    for (let i = 0; i < close.length; i++) {
        if (minusDI[i] !== null && plusDI[i] !== null) {
            dx.push(Math.abs(plusDI[i] - minusDI[i]) / (plusDI[i] + minusDI[i]) * 100);
        }
        else {
            dx.push(null);
        }
    }
    let adx = ma_1.SMA(dx, timeperiod);
    let adxr = [];
    for (let i = 0; i < timeperiod; i++) {
        adxr.push(null);
    }
    for (let i = timeperiod; i < adx.length; i++) {
        adxr.push((adx[i] - adx[i - timeperiod]) / 2);
    }
    return [minusDI, plusDI, adx, adxr];
}
exports.DMI = DMI;
