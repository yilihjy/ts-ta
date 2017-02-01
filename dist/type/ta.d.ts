import { MIN, PRICE_BASE } from './interface';
/**
 * 计算技术指标，目前支持MA、ASI、DMA、DMI、EMA、MACD等6个指标
 */
export declare class TA {
    /**
     * 计算移动平均线
     * @param source 必填参数，为一个数组对象[{day:string,close:string|number}...]，注意：如果对象中没有close参数则要指定input_property参数
     * @param n 必填参数，如计算MA5则填5
     * @param input_property 选填参数，不填则默认为close
     * @param output_property 选填参数，不填则默认为MAn，这里n就是前面的参数n
     * @param start 选填参数，开始索引，默认为0
     */
    static MA(source: MIN[], n: number, input_property?: string, output_property?: string, start?: number): void;
    /**
     * 计算振动升降指标ASI
     * @param source 必填参数，为一个数组对象[{day:string,close:string|number,open:string|number,high:string|number,low:string|number}...]
     * @param n 必填参数，ASI的移动平均天数
     */
    static ASI(source: PRICE_BASE[], n: number): void;
    /**
     * 计算平均线差DMA
     * @param source 必填参数，为一个数组对象[{day:string,close:string|number}...]
     * @param short 选填参数，短期移动平均线天数，默认为10
     * @param long 选填参数，长期移动平均线天数，默认为50
     * @param n 选填参数，DMA移动平均线天数，默认为10
     */
    static DMA(source: MIN[], short?: number, long?: number, n?: number): void;
    /**
     * 计算动向指数DMI
     * @param source 必填参数，为一个数组对象[{day:string,close:string|number,open:string|number,high:string|number,low:string|number}...]
     * @param n 必填参数，移动平均天数，默认为14
     */
    static DMI(source: PRICE_BASE[], n?: number): void;
    /**
     * 计算指数平均数EMA(EXPMA)
     * @param source 必填参数，为一个数组对象[{day:string,close:string|number}...]，注意：如果对象中没有close参数则要指定input_property参数
     * @param n 周期
     * @param input_property 选填参数，不填则默认为close
     * @param output_property 选填参数，不填则默认为EMAn，这里n就是前面的参数n
     * @param start 选填参数，开始索引，默认为0
     */
    static EMA(source: MIN[], n: number, input_property?: string, output_property?: string, start?: number): void;
    /**
     * 计算平滑异同移动平均线MACD
     * @param source 必填参数，为一个数组对象[{day:string,close:string|number}...]
     * @param fast 选填参数，快线，默认为12
     * @param slow 选填参数，慢线，默认为26
     * @param n 选填参数，DMA的移动平均日，默认为9
     */
    static MACD(source: MIN[], fast?: number, slow?: number, n?: number): void;
    /**
     * 计算振动升降指标ASI
     * @param source 必填参数，为一个数组对象[{day:string,close:string|number,open:string|number,high:string|number,low:string|number}...]
     * @param n 选填参数，天数，默认为9
     * @param α 选填参数，平滑系数，默认为1/3
     */
    static KDJ(source: PRICE_BASE[], n?: number, α?: number): void;
}
