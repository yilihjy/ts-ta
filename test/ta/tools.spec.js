"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("./tools");
describe('Test functions in tools.ts', () => {
    let arr = [];
    beforeEach(() => {
        for (let i = 0; i < 300; i++) {
            arr.push(Math.floor(Math.random() * 100));
        }
    });
    afterEach(() => {
        arr = [];
    });
    it("test highest function", () => {
        let result = tools_1.highest(arr, 5);
        let queue = [];
        for (let i = 0; i < 5 - 1; i++) {
            queue.push(arr[i]);
            expect(result[i]).toEqual(Math.max.apply(null, queue));
        }
        for (let i = 5 - 1; i < result.length; i++) {
            queue.push(arr[i]);
            expect(result[i]).toEqual(Math.max.apply(null, queue));
            queue.shift();
        }
    });
    it("test lowest function", () => {
        let result = tools_1.lowest(arr, 5);
        let queue = [];
        for (let i = 0; i < 5 - 1; i++) {
            queue.push(arr[i]);
            expect(result[i]).toEqual(Math.min.apply(null, queue));
        }
        for (let i = 5 - 1; i < result.length; i++) {
            queue.push(arr[i]);
            expect(result[i]).toEqual(Math.min.apply(null, queue));
            queue.shift();
        }
    });
    it("test standardDeviation function", () => {
        let result = tools_1.standardDeviation(arr, 3);
        for (let i = 0; i < arr.length; i++) {
            if (i < 2) {
                expect(result[i]).toBeNull();
            }
            else {
                let ave = (arr[i] + arr[i - 1] + arr[i - 2]) / 3;
                let sd = Math.sqrt((Math.pow(arr[i] - ave, 2) + Math.pow(arr[i - 1] - ave, 2) + Math.pow(arr[i - 2] - ave, 2)) / 3);
                expect(result[i]).toBeCloseTo(sd);
            }
        }
    });
});
