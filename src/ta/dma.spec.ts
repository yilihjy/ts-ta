import { DMA } from './dma';
import { SMA } from './ma';

describe("Test functions in dma.ts:", () => {

    it("test DMA function", () => {
        let close = [];
        for (let i = 0; i < 300; i++) {
            close.push(Math.floor(Math.random() * 100));
        }
        let dif = DMA(close,10,50);
        let n1 = SMA(close,10);
        let n2 = SMA(close,50);
        for(let i=0;i<close.length;i++){
            expect(dif[i]).toEqual(n1[i]-n2[i]);
        }       
    });
});