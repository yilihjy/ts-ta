import { SMA } from './ma';

export function lowest(arr: number[], timeporid: number): number[] {
    let result: number[] = [];
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

export function highest(arr: number[], timeporid: number): number[] {
    let result: number[] = [];
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

export function standardDeviation(arr: number[], timeperiod: number):number[] {
    let result: number[] = [];
    let queue = [];
    for (let i = 0; i < timeperiod - 1; i++) {
        queue.push(arr[i]);
        result.push(null);
    }
    for (let i = timeperiod - 1; i < arr.length; i++) {
        queue.push(arr[i]);
        let ave = queue.reduce(
            (pre, cur, index, arr) => {
                return pre + cur;
            }
        ) / queue.length;
        let d=0;
        for(let x=0;x<queue.length;x++){
            d = d + Math.pow(queue[x]-ave,2);
        }
        let sd = Math.sqrt(d/queue.length);
        result.push(sd);
        queue.shift();
    }
    return result;
}