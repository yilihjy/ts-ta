"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function lowest(arr, timeporid) {
    let result = [];
    let queue = [];
    for (let i = 0; i < timeporid - 1; i++) {
        queue.push(arr[i]);
        result.push(Math.min.apply(null, queue));
    }
    for (let i = timeporid - 1; i < arr.length; i++) {
        queue.push(arr[i]);
        result.push(Math.min.apply(null, queue));
        queue.shift();
    }
    return result;
}
exports.lowest = lowest;
function highest(arr, timeporid) {
    let result = [];
    let queue = [];
    for (let i = 0; i < timeporid - 1; i++) {
        queue.push(arr[i]);
        result.push(Math.max.apply(null, queue));
    }
    for (let i = timeporid - 1; i < arr.length; i++) {
        queue.push(arr[i]);
        result.push(Math.max.apply(null, queue));
        queue.shift();
    }
    return result;
}
exports.highest = highest;
function standardDeviation(arr, timeperiod) {
    let result = [];
    let queue = [];
    for (let i = 0; i < timeperiod - 1; i++) {
        queue.push(arr[i]);
        result.push(null);
    }
    for (let i = timeperiod - 1; i < arr.length; i++) {
        queue.push(arr[i]);
        let ave = queue.reduce((pre, cur, index, arr) => {
            return pre + cur;
        }) / queue.length;
        let d = 0;
        for (let x = 0; x < queue.length; x++) {
            d = d + Math.pow(queue[x] - ave, 2);
        }
        let sd = Math.sqrt(d / queue.length);
        result.push(sd);
        queue.shift();
    }
    return result;
}
exports.standardDeviation = standardDeviation;
