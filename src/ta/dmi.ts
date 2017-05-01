import { SMA } from './ma';

export function MINUS_DM(high: number[], low: number[], timeperiod = 14): number[] {
    let minusDM: number[] = [0];
    for (let i = 1; i < high.length; i++) {
        let deltaHigh = high[i - 1] - high[i];
        let deltaLow = low[i] - low[i - 1];
        if ((deltaHigh < 0 && deltaLow < 0) || deltaHigh == deltaLow) {
            minusDM.push(0);
        } else if (deltaHigh > deltaLow) {
            minusDM.push(0);
        } else if (deltaHigh < deltaLow) {
            minusDM.push(deltaLow);
        }
    }
    return minusDM;
}

export function PLUS_DM(high: number[], low: number[], timeperiod = 14) {
    let plusDM: number[] = [0];
    for (let i = 1; i < high.length; i++) {
        let deltaHigh = high[i - 1] - high[i];
        let deltaLow = low[i] - low[i - 1];
        if ((deltaHigh < 0 && deltaLow < 0) || deltaHigh == deltaLow) {
            plusDM.push(0);
        } else if (deltaHigh > deltaLow) {
            plusDM.push(deltaHigh);
        } else if (deltaHigh < deltaLow) {
            plusDM.push(0);
        }
    }
    return plusDM;
}

export function TR(high: number[], low: number[], close: number[], timeperiod = 14): number[] {
    let trueR: number[] = [high[0] - low[0]];
    for (let i = 1; i < high.length; i++) {
        let trueHigh: number;
        let trueLow: number;
        if (high[i] > close[i - 1]) {
            trueHigh = high[i];
        } else {
            trueHigh = close[i - 1];
        }
        if (low[i] < close[i - 1]) {
            trueLow = low[i];
        } else {
            trueLow = close[i - 1];
        }
        trueR.push(trueHigh - trueLow);
    }
    return trueR;
}

export function PLUS_DI(high: number[], low: number[], close: number[], timeperiod = 14): number[] {
    let plusDM: number[] = [0];
    let trueR: number[] = [high[0] - low[0]];
    for (let i = 1; i < high.length; i++) {
        let deltaHigh = high[i - 1] - high[i];
        let deltaLow = low[i] - low[i - 1];
        if ((deltaHigh < 0 && deltaLow < 0) || deltaHigh == deltaLow) {
            plusDM.push(0);
        } else if (deltaHigh > deltaLow) {
            plusDM.push(deltaHigh);
        } else if (deltaHigh < deltaLow) {
            plusDM.push(0);
        }
        let trueHigh: number;
        let trueLow: number;
        if (high[i] > close[i - 1]) {
            trueHigh = high[i];
        } else {
            trueHigh = close[i - 1];
        }
        if (low[i] < close[i - 1]) {
            trueLow = low[i];
        } else {
            trueLow = close[i - 1];
        }
        trueR.push(trueHigh - trueLow);
    }
    let plusDMSum: number[] = [];
    let trueRSum: number[] = [];
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
    let plusDI: number[] = [];
    for (let i = 0; i < close.length; i++) {
        if (trueRSum[i] !== null) {
            plusDI.push(100 * (plusDMSum[i] / trueRSum[i]));
        } else {
            plusDI.push(null);
        }
    }
    return plusDI;
}

export function MINUS_DI(high: number[], low: number[], close: number[], timeperiod = 14): number[] {
    let minusDM: number[] = [0];
    let trueR: number[] = [high[0] - low[0]];
    for (let i = 1; i < high.length; i++) {
        let deltaHigh = high[i - 1] - high[i];
        let deltaLow = low[i] - low[i - 1];
        if ((deltaHigh < 0 && deltaLow < 0) || deltaHigh == deltaLow) {
            minusDM.push(0);
        } else if (deltaHigh > deltaLow) {
            minusDM.push(0);
        } else if (deltaHigh < deltaLow) {
            minusDM.push(deltaLow);
        }
        let trueHigh: number;
        let trueLow: number;
        if (high[i] > close[i - 1]) {
            trueHigh = high[i];
        } else {
            trueHigh = close[i - 1];
        }
        if (low[i] < close[i - 1]) {
            trueLow = low[i];
        } else {
            trueLow = close[i - 1];
        }
        trueR.push(trueHigh - trueLow);
    }
    let minusDMSum: number[] = [];
    let trueRSum: number[] = [];
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
    let minusDI: number[] = [];
    for (let i = 0; i < close.length; i++) {
        if (trueRSum[i] !== null) {
            minusDI.push(100 * (minusDMSum[i] / trueRSum[i]));
        } else {
            minusDI.push(null);
        }
    }
    return minusDI;
}

export function DX(high: number[], low: number[], close: number[], timeperiod = 14): number[] {
    let minusDM: number[] = [0];
    let plusDM: number[] = [0];
    let trueR: number[] = [high[0] - low[0]];
    for (let i = 1; i < high.length; i++) {
        let deltaHigh = high[i - 1] - high[i];
        let deltaLow = low[i] - low[i - 1];
        if ((deltaHigh < 0 && deltaLow < 0) || deltaHigh == deltaLow) {
            plusDM.push(0);
            minusDM.push(0);
        } else if (deltaHigh > deltaLow) {
            plusDM.push(deltaHigh);
            minusDM.push(0);
        } else if (deltaHigh < deltaLow) {
            plusDM.push(0);
            minusDM.push(deltaLow);
        }
        let trueHigh: number;
        let trueLow: number;
        if (high[i] > close[i - 1]) {
            trueHigh = high[i];
        } else {
            trueHigh = close[i - 1];
        }
        if (low[i] < close[i - 1]) {
            trueLow = low[i];
        } else {
            trueLow = close[i - 1];
        }
        trueR.push(trueHigh - trueLow);
    }
    let plusDMSum: number[] = [];
    let minusDMSum: number[] = [];
    let trueRSum: number[] = [];
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
    let minusDI: number[] = [];
    let plusDI: number[] = [];
    for (let i = 0; i < close.length; i++) {
        if (trueRSum[i] !== null) {
            plusDI.push(100 * (plusDMSum[i] / trueRSum[i]));
            minusDI.push(100 * (minusDMSum[i] / trueRSum[i]));
        } else {
            minusDI.push(null);
            plusDI.push(null);
        }
    }
    let dx: number[] = [];
    for (let i = 0; i < close.length; i++) {
        if (minusDI[i] !== null && plusDI[i] !== null) {
            dx.push(Math.abs(plusDI[i] - minusDI[i]) / (plusDI[i] + minusDI[i]) * 100);
        } else {
            dx.push(null);
        }
    }
    return dx;
}

export function ADX(high: number[], low: number[], close: number[], timeperiod = 14): number[] {
    return SMA(DX(high, low, close, timeperiod), timeperiod);
}

export function ADXR(high: number[], low: number[], close: number[], timeperiod = 14): number[] {
    let adx = ADX(high, low, close, timeperiod);
    let adxr: number[] = [];
    for (let i = 0; i < timeperiod; i++) {
        adxr.push(null);
    }
    for (let i = timeperiod; i < adx.length; i++) {
        adxr.push((adx[i] - adx[i - timeperiod]) / 2);
    }
    return adxr;
}

export function DMI(high: number[], low: number[], close: number[], timeperiod = 14): number[][] {
    let minusDM: number[] = [0];
    let plusDM: number[] = [0];
    let trueR: number[] = [high[0] - low[0]];
    for (let i = 1; i < high.length; i++) {
        let deltaHigh = high[i - 1] - high[i];
        let deltaLow = low[i] - low[i - 1];
        if ((deltaHigh < 0 && deltaLow < 0) || deltaHigh == deltaLow) {
            plusDM.push(0);
            minusDM.push(0);
        } else if (deltaHigh > deltaLow) {
            plusDM.push(deltaHigh);
            minusDM.push(0);
        } else if (deltaHigh < deltaLow) {
            plusDM.push(0);
            minusDM.push(deltaLow);
        }
        let trueHigh: number;
        let trueLow: number;
        if (high[i] > close[i - 1]) {
            trueHigh = high[i];
        } else {
            trueHigh = close[i - 1];
        }
        if (low[i] < close[i - 1]) {
            trueLow = low[i];
        } else {
            trueLow = close[i - 1];
        }
        trueR.push(trueHigh - trueLow);
    }
    let plusDMSum: number[] = [];
    let minusDMSum: number[] = [];
    let trueRSum: number[] = [];
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
    let minusDI: number[] = [];
    let plusDI: number[] = [];
    for (let i = 0; i < close.length; i++) {
        if (trueRSum[i] !== null) {
            plusDI.push(100 * (plusDMSum[i] / trueRSum[i]));
            minusDI.push(100 * (minusDMSum[i] / trueRSum[i]));
        } else {
            minusDI.push(null);
            plusDI.push(null);
        }
    }
    let dx: number[] = [];
    for (let i = 0; i < close.length; i++) {
        if (minusDI[i] !== null && plusDI[i] !== null) {
            dx.push(Math.abs(plusDI[i] - minusDI[i]) / (plusDI[i] + minusDI[i]) * 100);
        } else {
            dx.push(null);
        }
    }
    let adx = SMA(dx, timeperiod);
    let adxr: number[] = [];
    for (let i = 0; i < timeperiod; i++) {
        adxr.push(null);
    }
    for (let i = timeperiod; i < adx.length; i++) {
        adxr.push((adx[i] - adx[i - timeperiod]) / 2);
    }
    return [minusDI, plusDI, adx, adxr];
}