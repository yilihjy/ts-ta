"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dma_1 = require("./dma");
const ma_1 = require("./ma");
describe("Test functions in dma.ts:", () => {
    it("test DMA function", () => {
        let close = [];
        for (let i = 0; i < 300; i++) {
            close.push(Math.floor(Math.random() * 100));
        }
        let dif = dma_1.DMA(close, 10, 50);
        let n1 = ma_1.SMA(close, 10);
        let n2 = ma_1.SMA(close, 50);
        for (let i = 0; i < close.length; i++) {
            expect(dif[i]).toEqual(n1[i] - n2[i]);
        }
    });
});
