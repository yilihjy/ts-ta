import { MIN, PRICE_BASE } from './interface';

/**
 * 计算技术指标，目前支持MA、ASI、DMA、DMI、EMA、MACD等6个指标
 */
export class TA {
    /**
     * 计算移动平均线
     * @param source 必填参数，为一个数组对象[{day:string,close:string|number}...]，注意：如果对象中没有close参数则要指定input_property参数
     * @param n 必填参数，如计算MA5则填5
     * @param input_property 选填参数，不填则默认为close
     * @param output_property 选填参数，不填则默认为MAn，这里n就是前面的参数n
     */
    public static MA(source: MIN[], n: number, input_property?: string, output_property?: string, start?: number): void {
        if (!input_property) {
            input_property = "close";
        }
        if (!output_property) {
            output_property = `MA${n}`;
        }
        if (!start) {
            start = 0;
        }
        let deque = new Array<number>();
        for (let i = start; i < start + n - 1; i++) {
            source[i][output_property] = null;
            deque.push(+source[i][input_property])
        }
        for (let i = start + n - 1; i < source.length; i++) {
            deque.push(+source[i][input_property]);
            let sum: number = 0;
            for (let n = 0; n < deque.length; n++) {
                sum += deque[n];
            }
            source[i][output_property] = sum / n;
            deque.shift();
        }
    }

    /**
     * 计算振动升降指标ASI
     * @param source 必填参数，为一个数组对象[{day:string,close:string|number,open:string|number,high:string|number,low:string|number}...]
     * @param n 必填参数，ASI的移动平均天数
     */
    public static ASI(source: PRICE_BASE[], n: number): void {
        let stack = new Array<PRICE_BASE>();
        let ASI = 0;
        source[0]["ASI"] = null;
        source[0]["ASIT"] = null;
        stack.push(source[0]);
        for (let i = 1; i < source.length; i++) {
            stack.push(source[i]);
            let a: number = Math.abs(+stack[1].high - +stack[0].close);
            let b: number = Math.abs(+stack[1].low - +stack[0].close);
            let c: number = Math.abs(+stack[1].high - +stack[0].low);
            let d: number = Math.abs(+stack[0].close - +stack[0].open);
            let e: number = +stack[1].close - +stack[0].close;
            let f: number = +stack[1].close - +stack[1].open;
            let g: number = +stack[0].close - +stack[0].open;
            let x: number = e + 1 / (2 * f) + g;
            let k = b;
            if (a > b) {
                k = a;
            }
            let r: number;
            if (a >= b && a >= c) {
                r = a + 1 / (2 * b) + 1 / (4 * d);
            } else if (b >= a && b >= c) {
                r = b + 1 / (2 * a) + 1 / (4 * d);
            } else {
                r = c + 1 / (4 * d);
            }
            let l = 3;
            let SI = 50 * x / r * k / l;
            ASI += SI;
            source[i]["ASI"] = ASI;
            stack.shift()
        }
        TA.MA(source, n, "ASI", "ASIT", 1);
    }

    /**
     * 计算平均线差DMA
     * @param source 必填参数，为一个数组对象[{day:string,close:string|number}...]
     * @param short 选填参数，短期移动平均线天数，默认为10
     * @param long 选填参数，长期移动平均线天数，默认为50
     * @param n 选填参数，DMA移动平均线天数，默认为10
     */
    public static DMA(source: MIN[], short?: number, long?: number, n?: number) {
        if (!short) {
            short = 10;
        }
        if (!long) {
            long = 50;
        }
        if (!n) {
            n = 10;
        }
        let short_queue = new Array<number>();
        let long_queue = new Array<number>();
        for (let i = 0; i < source.length; i++) {
            if (i < long - short) {
                long_queue.push(+source[i].close);
                source[i]["DMA"] = null;
                source[i]["AMA"] = null;
            } else if (i < long - 1) {
                long_queue.push(+source[i].close);
                short_queue.push(+source[i].close);
                source[i]["DMA"] = null;
                source[i]["AMA"] = null;
            } else {
                long_queue.push(+source[i].close);
                short_queue.push(+source[i].close);
                let ma1 = 0;
                let ma2 = 0;
                for (let m = 0; m < long_queue.length; m++) {
                    ma2 += long_queue[m];
                }
                for (let n = 0; n < short_queue.length; n++) {
                    ma1 += short_queue[n];
                }
                source[i]["DMA"] = (ma1 / short) - (ma2 / long);
            }
        }
        TA.MA(source, n, "DMA", "AMA", long - 1);
    }
    /**
     * 计算动向指数DMI
     * @param source 必填参数，为一个数组对象[{day:string,close:string|number,open:string|number,high:string|number,low:string|number}...]
     * @param n 必填参数，移动平均天数，默认为14
     */
    public static DMI(source: PRICE_BASE[], n?: number) {
        if (!n) {
            n = 14;
        }
        //初始化
        for (let i = 0; i < source.length; i++) {
            source[i][`TR`] = null;
            source[i][`+DM`] = null;
            source[i][`-DM`] = null;
            source[i][`TR${n}`] = null;
            source[i][`+DM${n}`] = null;
            source[i][`-DM${n}`] = null;
            source[i][`+DI`] = null;
            source[i][`-DI`] = null;
            source[i][`DX`] = null;
            source[i][`ADX`] = null;
            source[i][`ADXR`] = null;
        }
        let queue = new Array<PRICE_BASE>();
        queue.push(source[0]);//入队
        for (let i = 1; i < source.length; i++) {
            queue.push(source[i]);//入队
            //开始计算真实波幅TR
            let a = Math.abs(+queue[1].high - +queue[1].low);
            let b = Math.abs(+queue[1].low - +queue[0].close);
            let c = Math.abs(+queue[1].high - +queue[0].close);
            if (a >= b && a >= c) {
                source[i]["TR"] = a;
            } else if (b >= a && b >= c) {
                source[i]["TR"] = b;
            } else {
                source[i]["TR"] = c;
            }
            //计算当日动向值
            let u_dm = +queue[1].high - +queue[0].high;
            let d_dm = +queue[0].low - +queue[1].low;
            if (u_dm > Math.abs(d_dm)) {
                source[i]["+DM"] = u_dm;
            } else {
                source[i]["+DM"] = 0;
            }
            if (d_dm > Math.abs(u_dm)) {
                source[i]["-DM"] = d_dm;
            } else {
                source[i]["-DM"] = 0;
            }
            //计算TR、+DM、-DM的平均值
            TA.MA(source, n, "TR", `TR${n}`, 1);
            TA.MA(source, n, "+DM", `+DM${n}`, 1);
            TA.MA(source, n, "-DM", `-DM${n}`, 1);
            queue.shift();//出队
        }
        //计算上升指标、下降指标、动向指数
        for (let i = n; i < source.length; i++) {
            source[i]["+DI"] = source[i][`+DM${n}`] / source[i][`TR${n}`] * 100;
            source[i]["-DI"] = source[i][`-DM${n}`] / source[i][`TR${n}`] * 100;
            source[i]["DX"] = Math.abs(source[i]["+DI"] - source[i]["-DI"]) / (source[i]["+DI"] + source[i]["-DI"]) * 100;
        }
        TA.MA(source, n, "DX", "ADX", 14);
        for (let i = 3 * n - 1; i < source.length; i++) {
            source[i]["ADXR"] = (source[i - n]["ADX"] + source[i]["ADX"]) / 2;
        }
    }

    /**
     * 计算指数平均数EMA(EXPMA)
     * @param source 必填参数，为一个数组对象[{day:string,close:string|number}...]，注意：如果对象中没有close参数则要指定input_property参数
     * @param n1 选填参数，默认为12
     * @param n2 选填参数，默认为50
     * @param input_property 选填参数，不填则默认为close
     * @param output_property 选填参数，不填则默认为EMAn，这里n就是前面的参数n
     */
    public static EMA(source: MIN[], n1?: number, n2?: number, input_property?: string, output_property?: string) {
        if (!n1) {
            n1 = 12;
        }
        if (!n2) {
            n2 = 50;
        }
        if (!input_property) {
            input_property = "close";
        }
        if (!output_property) {
            output_property = "EMA"
        }
        let co1 = 2 / (n1 + 1);
        let co2;
        if (n1 != n2) {
            co2 = 2 / (n2 + 1);
        }
        for (let i = 0; i < source.length; i++) {
            source[i][`${output_property}${n1}`] = null;
            if (n1 != n2) {
                source[i][`${output_property}${n2}`] = null;
            }

        }
        source[0][`${output_property}${n1}`] = +source[0][`${input_property}`];
        if (n1 != n2) {
            source[0][`${output_property}${n2}`] = +source[0][`${input_property}`];
        }

        for (let i = 1; i < source.length; i++) {
            source[i][`${output_property}${n1}`] = (+source[i][`${input_property}`] - source[i - 1][`${output_property}${n1}`]) * co1 + source[i - 1][`${output_property}${n1}`];
            if (n1 != n2) {
                source[i][`${output_property}${n2}`] = (+source[i][`${input_property}`] - source[i - 1][`${output_property}${n2}`]) * co2 + source[i - 1][`${output_property}${n2}`];

            }
        }
    }

    /**
     * 计算平滑异同移动平均线MACD
     * @param source 必填参数，为一个数组对象[{day:string,close:string|number}...]
     * @param fast 选填参数，快线，默认为12
     * @param slow 选填参数，慢线，默认为26
     * @param n 选填参数，DMA的移动平均日，默认为9
     */
    public static MACD(source: MIN[], fast?: number, slow?: number, n?: number) {
        if (!fast) {
            fast = 12;
        }
        if (!slow) {
            slow = 26;
        }
        if (!n) {
            n = 9;
        }
        TA.EMA(source, fast, slow);
        for(let i = 0;i<source.length;i++){
            source[i]["DIFF"]=source[i][`EMA${fast}`]-source[i][`EMA${slow}`]
        }
        TA.EMA(source,n,n,"DIFF","DEA");
        for(let i =0;i<source.length;i++){
            source[i][`DEA`] = source[i][`DEA${n}`];
            delete source[i][`DEA${n}`];
            source[i][`MACD`] = source[i]["DIFF"]-source[i][`DEA`];
        }
    }


}