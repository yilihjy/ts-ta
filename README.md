# TS-TA
一个使用typescript写的纯javascript技术分析库。 
注意：目前这个项目没有在维护。

# 注意
从v0.3.0版本开始使用了全新的API接口，不兼容之前的API接口。  
本库的计算结果可能存在偏差或是错误，对技术指标计算结果准确性有要求的请勿使用本库。

# 安装
`npm install --save ts-ta`

# 示例
```javascript
let close = [];
for (let i = 0; i < 300; i++) {
    close.push(Math.floor(Math.random() * 100));
}
let [diff, dea, macd] = MACD(close, 12, 26, 9);
```

# 支持的指标
* SMA
* EMA
* BOLL
* CCI
* DMA
* DMI
* KDJ
* MACD
* MTM
* OBV
* ROC
* RSI
* TRIX

# 文档
待补完

# Change log
* 2017/05/03 v0.3.0 使用全新API接口，不兼容先前版本

# License
MIT License

Copyright (c) 2017 yilihjy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
