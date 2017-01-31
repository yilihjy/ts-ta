export interface MIN {
    day: string;
    close: number | string;
    [propName: string]: any;
}
export interface PRICE_BASE extends MIN {
    open: number | string;
    high: number | string;
    low: number | string;
}
export interface BASE extends PRICE_BASE {
    volume: number | string;
}
