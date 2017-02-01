"use strict";
const ta_1 = require("./ta");
describe("Test MA", () => {
    it("test ma5", () => {
        let data = [{ day: "2017-01-19", open: "20.700", high: "20.880", low: "20.550", close: "20.600", volume: "21688806" }, { day: "2017-01-20", open: "20.600", high: "20.830", low: "20.540", close: "20.680", volume: "21505311" }, { day: "2017-01-23", open: "20.700", high: "20.850", low: "20.700", close: "20.740", volume: "15637306" }, { day: "2017-01-24", open: "20.770", high: "20.800", low: "20.650", close: "20.690", volume: "15931840" }, { day: "2017-01-25", open: "20.680", high: "20.730", low: "20.520", close: "20.610", volume: "15464746" }, { day: "2017-01-26", open: "20.650", high: "20.770", low: "20.650", close: "20.680", volume: "14124823" }];
        ta_1.TA.MA(data, 5);
        expect(data[0]["MA5"]).toBeNull();
        expect(data[1]["MA5"]).toBeNull();
        expect(data[2]["MA5"]).toBeNull();
        expect(data[3]["MA5"]).toBeNull();
        expect(data[4]["MA5"]).toBeCloseTo(20.664);
        expect(data[5]["MA5"]).toBeCloseTo(20.680);
    });
});
describe("Test ASI", () => {
    let data;
    beforeEach(function () {
        data = [{ day: "2017-01-18", open: "20.670", high: "21.180", low: "20.530", close: "20.920", volume: "32477225" }, { day: "2017-01-19", open: "20.700", high: "20.880", low: "20.550", close: "20.600", volume: "21688806" }, { day: "2017-01-20", open: "20.600", high: "20.830", low: "20.540", close: "20.680", volume: "21505311" }, { day: "2017-01-23", open: "20.700", high: "20.850", low: "20.700", close: "20.740", volume: "15637306" }, { day: "2017-01-24", open: "20.770", high: "20.800", low: "20.650", close: "20.690", volume: "15931840" }, { day: "2017-01-25", open: "20.680", high: "20.730", low: "20.520", close: "20.610", volume: "15464746" }, { day: "2017-01-26", open: "20.650", high: "20.770", low: "20.650", close: "20.680", volume: "14124823" }];
    });
    afterEach(function () {
        data = null;
    });
    it("test ASI(6)", () => {
        ta_1.TA.ASI(data, 6);
        expect(data[0]["ASI"]).toBeNull();
        expect(data[0]["ASIT"]).toBeNull();
        expect(data[1]["ASIT"]).toBeNull();
        expect(data[2]["ASIT"]).toBeNull();
        expect(data[3]["ASIT"]).toBeNull();
        expect(data[4]["ASIT"]).toBeNull();
        expect(data[5]["ASIT"]).toBeNull();
        expect(data[1]["ASI"]).toBeCloseTo(-2.25);
        expect(data[6]["ASIT"]).toBeCloseTo((data[1]["ASI"] + data[2]["ASI"] + data[3]["ASI"] + data[4]["ASI"] + data[5]["ASI"] + data[6]["ASI"]) / 6);
    });
    it("test ASI(5)", () => {
        ta_1.TA.ASI(data, 5);
        expect(data[0]["ASI"]).toBeNull();
        expect(data[0]["ASIT"]).toBeNull();
        expect(data[1]["ASIT"]).toBeNull();
        expect(data[2]["ASIT"]).toBeNull();
        expect(data[3]["ASIT"]).toBeNull();
        expect(data[4]["ASIT"]).toBeNull();
        expect(data[1]["ASI"]).toBeCloseTo(-2.25);
        expect(data[5]["ASIT"]).toBeCloseTo((data[1]["ASI"] + data[2]["ASI"] + data[3]["ASI"] + data[4]["ASI"] + data[5]["ASI"]) / 5);
        expect(data[6]["ASIT"]).toBeCloseTo((data[2]["ASI"] + data[3]["ASI"] + data[4]["ASI"] + data[5]["ASI"] + data[6]["ASI"]) / 5);
    });
});
describe("Test DMA", () => {
    let data;
    beforeEach(() => {
        data = [{ day: "2016-08-29", open: "22.860", high: "23.250", low: "22.750", close: "22.910", volume: "78244619" }, { day: "2016-08-30", open: "22.950", high: "23.060", low: "22.550", close: "22.660", volume: "90926253" }, { day: "2016-08-31", open: "22.680", high: "24.930", low: "22.600", close: "24.930", volume: "238312574" }, { day: "2016-09-01", open: "25.000", high: "25.010", low: "23.190", close: "23.440", volume: "256560340" }, { day: "2016-09-02", open: "23.140", high: "24.600", low: "23.010", close: "23.770", volume: "192507913" }, { day: "2016-09-05", open: "23.600", high: "23.680", low: "23.100", close: "23.440", volume: "102887958" }, { day: "2016-09-06", open: "23.400", high: "23.660", low: "23.000", close: "23.320", volume: "98212851" }, { day: "2016-09-07", open: "23.540", high: "23.540", low: "23.100", close: "23.270", volume: "79453934" }, { day: "2016-09-08", open: "23.230", high: "24.450", low: "23.130", close: "23.620", volume: "142468390" }, { day: "2016-09-09", open: "23.500", high: "23.590", low: "23.010", close: "23.170", volume: "88429677" }, { day: "2016-09-12", open: "22.600", high: "23.970", low: "22.500", close: "23.500", volume: "137974564" }, { day: "2016-09-13", open: "23.380", high: "23.680", low: "23.200", close: "23.580", volume: "88741809" }, { day: "2016-09-14", open: "23.350", high: "23.800", low: "23.330", close: "23.580", volume: "78557476" }, { day: "2016-09-19", open: "23.580", high: "24.000", low: "23.510", close: "23.630", volume: "58683788" }, { day: "2016-09-20", open: "23.630", high: "23.690", low: "23.230", close: "23.620", volume: "62565662" }, { day: "2016-09-21", open: "23.550", high: "24.620", low: "23.410", close: "24.620", volume: "222750209" }, { day: "2016-09-22", open: "24.800", high: "27.080", low: "24.410", close: "27.000", volume: "356745679" }, { day: "2016-09-23", open: "26.320", high: "26.550", low: "25.240", close: "25.480", volume: "197838372" }, { day: "2016-09-26", open: "25.190", high: "25.350", low: "24.400", close: "24.680", volume: "132417339" }, { day: "2016-09-27", open: "24.610", high: "25.690", low: "24.510", close: "25.140", volume: "155341790" }, { day: "2016-09-28", open: "24.880", high: "26.380", low: "24.330", close: "25.800", volume: "156409060" }, { day: "2016-09-29", open: "25.680", high: "26.300", low: "25.380", close: "25.990", volume: "128298586" }, { day: "2016-09-30", open: "25.900", high: "27.450", low: "25.810", close: "26.170", volume: "135841060" }, { day: "2016-10-10", open: "25.000", high: "25.980", low: "24.660", close: "25.970", volume: "143551183" }, { day: "2016-10-11", open: "25.750", high: "27.410", low: "25.560", close: "26.230", volume: "150728616" }, { day: "2016-10-12", open: "26.000", high: "26.670", low: "25.630", close: "26.600", volume: "87775400" }, { day: "2016-10-13", open: "26.510", high: "27.200", low: "26.300", close: "26.810", volume: "101557433" }, { day: "2016-10-14", open: "26.920", high: "27.250", low: "26.620", close: "26.840", volume: "91514322" }, { day: "2016-10-17", open: "26.500", high: "26.750", low: "25.730", close: "26.000", volume: "92915134" }, { day: "2016-10-18", open: "25.900", high: "26.130", low: "25.510", close: "26.000", volume: "64177355" }, { day: "2016-10-19", open: "26.000", high: "26.480", low: "25.790", close: "25.830", volume: "60460544" }, { day: "2016-10-20", open: "25.720", high: "26.690", low: "25.510", close: "25.940", volume: "89241935" }, { day: "2016-10-21", open: "25.700", high: "25.880", low: "25.160", close: "25.250", volume: "81870576" }, { day: "2016-10-24", open: "25.250", high: "25.450", low: "25.010", close: "25.240", volume: "53319635" }, { day: "2016-10-25", open: "25.200", high: "25.340", low: "24.800", close: "25.010", volume: "71149209" }, { day: "2016-10-26", open: "25.000", high: "25.250", low: "24.880", close: "25.170", volume: "58382553" }, { day: "2016-10-27", open: "25.070", high: "25.070", low: "24.700", close: "24.770", volume: "43647995" }, { day: "2016-10-28", open: "24.580", high: "25.250", low: "24.500", close: "24.750", volume: "63141299" }, { day: "2016-10-31", open: "24.750", high: "25.500", low: "24.510", close: "24.920", volume: "54827410" }, { day: "2016-11-01", open: "25.200", high: "26.100", low: "25.060", close: "25.790", volume: "135877207" }, { day: "2016-11-02", open: "25.450", high: "25.670", low: "24.900", close: "24.900", volume: "101736108" }, { day: "2016-11-03", open: "24.770", high: "25.190", low: "24.710", close: "24.870", volume: "51922997" }, { day: "2016-11-04", open: "24.840", high: "25.000", low: "24.460", close: "24.590", volume: "58209922" }, { day: "2016-11-07", open: "24.470", high: "24.580", low: "24.030", close: "24.160", volume: "41989356" }, { day: "2016-11-08", open: "24.160", high: "24.490", low: "24.150", close: "24.220", volume: "29006609" }, { day: "2016-11-09", open: "24.430", high: "26.640", low: "24.350", close: "26.300", volume: "401716139" }, { day: "2016-11-10", open: "26.000", high: "28.280", low: "25.580", close: "26.560", volume: "243030035" }, { day: "2016-11-11", open: "26.150", high: "26.770", low: "25.700", close: "25.990", volume: "95846280" }, { day: "2016-11-14", open: "26.230", high: "26.250", low: "25.310", close: "25.700", volume: "87878021" }, { day: "2016-11-15", open: "25.600", high: "27.800", low: "25.460", close: "26.940", volume: "148588573" }, { day: "2016-11-16", open: "26.640", high: "27.220", low: "26.090", close: "26.680", volume: "82711736" }, { day: "2016-11-17", open: "26.620", high: "27.000", low: "26.310", close: "27.000", volume: "59513404" }, { day: "2016-11-18", open: "27.800", high: "29.000", low: "27.510", close: "27.720", volume: "150316488" }, { day: "2016-11-21", open: "27.270", high: "28.250", low: "26.010", close: "27.400", volume: "139065510" }, { day: "2016-11-22", open: "27.040", high: "27.420", low: "26.900", close: "27.300", volume: "53038988" }, { day: "2016-11-23", open: "27.900", high: "28.070", low: "26.980", close: "27.220", volume: "74090683" }, { day: "2016-11-24", open: "27.080", high: "27.190", low: "26.700", close: "26.930", volume: "41224639" }, { day: "2016-11-25", open: "26.790", high: "27.600", low: "26.710", close: "27.200", volume: "64594659" }, { day: "2016-11-28", open: "27.360", high: "27.420", low: "25.480", close: "26.380", volume: "125593915" }, { day: "2016-11-29", open: "26.170", high: "26.530", low: "25.900", close: "26.160", volume: "78060059" }, { day: "2016-11-30", open: "27.350", high: "27.990", low: "26.770", close: "26.980", volume: "119318381" }, { day: "2016-12-01", open: "26.560", high: "27.300", low: "26.300", close: "26.970", volume: "95017059" }, { day: "2016-12-02", open: "26.710", high: "26.850", low: "26.370", close: "26.450", volume: "51572972" }, { day: "2016-12-05", open: "25.080", high: "25.980", low: "24.860", close: "25.500", volume: "68906336" }, { day: "2016-12-06", open: "25.150", high: "25.630", low: "25.150", close: "25.380", volume: "35645541" }, { day: "2016-12-07", open: "25.350", high: "25.370", low: "24.180", close: "25.140", volume: "49462389" }, { day: "2016-12-08", open: "25.100", high: "25.130", low: "24.700", close: "24.740", volume: "38055084" }, { day: "2016-12-09", open: "24.610", high: "25.170", low: "24.370", close: "24.810", volume: "48168045" }, { day: "2016-12-12", open: "24.780", high: "24.780", low: "23.070", close: "23.260", volume: "78901945" }, { day: "2016-12-13", open: "23.020", high: "23.280", low: "21.860", close: "23.060", volume: "48450098" }, { day: "2016-12-14", open: "22.670", high: "22.900", low: "22.200", close: "22.290", volume: "41281457" }, { day: "2016-12-15", open: "22.150", high: "22.620", low: "21.880", close: "22.330", volume: "35562867" }, { day: "2016-12-16", open: "22.120", high: "22.750", low: "22.120", close: "22.460", volume: "29397618" }, { day: "2016-12-19", open: "22.000", high: "22.000", low: "21.040", close: "21.100", volume: "70048497" }, { day: "2016-12-20", open: "21.000", high: "21.000", low: "20.150", close: "20.330", volume: "71906542" }, { day: "2016-12-21", open: "20.200", high: "20.700", low: "20.200", close: "20.480", volume: "53130409" }, { day: "2016-12-22", open: "20.300", high: "20.770", low: "20.100", close: "20.610", volume: "49971724" }, { day: "2016-12-23", open: "20.470", high: "20.670", low: "20.250", close: "20.300", volume: "32435908" }, { day: "2016-12-26", open: "20.210", high: "20.690", low: "20.120", close: "20.650", volume: "37812479" }, { day: "2016-12-27", open: "20.650", high: "21.980", low: "20.590", close: "21.420", volume: "74330548" }, { day: "2016-12-28", open: "21.240", high: "21.480", low: "21.010", close: "21.200", volume: "32151732" }, { day: "2016-12-29", open: "21.290", high: "21.320", low: "20.700", close: "20.840", volume: "32204601" }, { day: "2016-12-30", open: "20.880", high: "20.960", low: "20.450", close: "20.550", volume: "26115000" }, { day: "2017-01-03", open: "20.550", high: "20.880", low: "20.550", close: "20.730", volume: "21701669" }, { day: "2017-01-04", open: "20.740", high: "20.950", low: "20.450", close: "20.850", volume: "33155480" }, { day: "2017-01-05", open: "20.850", high: "21.230", low: "20.780", close: "20.930", volume: "31012563" }, { day: "2017-01-06", open: "20.940", high: "21.040", low: "20.610", close: "20.640", volume: "23591954" }, { day: "2017-01-09", open: "20.600", high: "20.750", low: "20.530", close: "20.660", volume: "15095445" }, { day: "2017-01-10", open: "20.670", high: "20.690", low: "20.520", close: "20.580", volume: "15917148" }, { day: "2017-01-11", open: "20.520", high: "20.630", low: "20.400", close: "20.400", volume: "16865220" }, { day: "2017-01-13", open: "21.000", high: "22.400", low: "20.900", close: "21.810", volume: "106426641" }, { day: "2017-01-16", open: "21.810", high: "21.810", low: "20.310", close: "21.000", volume: "55324012" }, { day: "2017-01-17", open: "20.730", high: "20.960", low: "20.390", close: "20.800", volume: "32104040" }, { day: "2017-01-18", open: "20.670", high: "21.180", low: "20.530", close: "20.920", volume: "32477225" }, { day: "2017-01-19", open: "20.700", high: "20.880", low: "20.550", close: "20.600", volume: "21688806" }, { day: "2017-01-20", open: "20.600", high: "20.830", low: "20.540", close: "20.680", volume: "21505311" }, { day: "2017-01-23", open: "20.700", high: "20.850", low: "20.700", close: "20.740", volume: "15637306" }, { day: "2017-01-24", open: "20.770", high: "20.800", low: "20.650", close: "20.690", volume: "15931840" }, { day: "2017-01-25", open: "20.680", high: "20.730", low: "20.520", close: "20.610", volume: "15464746" }, { day: "2017-01-26", open: "20.650", high: "20.770", low: "20.650", close: "20.680", volume: "14124823" }];
    });
    afterEach(() => {
        data = null;
    });
    it("test DMA()", () => {
        ta_1.TA.DMA(data);
        for (let i = 0; i < 49; i++) {
            expect(data[i]["DMA"]).toBeNull();
            expect(data[i]["AMA"]).toBeNull();
        }
        let ma1 = 0;
        for (let i = 40; i < 50; i++) {
            ma1 += (+data[i]["close"]);
        }
        ma1 /= 10;
        let ma2 = 0;
        for (let i = 0; i < 50; i++) {
            ma2 += (+data[i]["close"]);
        }
        ma2 /= 50;
        expect(data[49]["DMA"]).toBeCloseTo(ma1 - ma2);
        let ama = 0;
        for (let i = 49; i < 59; i++) {
            ama += data[i]["DMA"];
        }
        expect(data[58]["AMA"]).toBeCloseTo(ama / 10);
    });
    it("test DMA(5,25,5)", () => {
        ta_1.TA.DMA(data, 5, 25, 5);
        for (let i = 0; i < 24; i++) {
            expect(data[i]["DMA"]).toBeNull();
            expect(data[i]["AMA"]).toBeNull();
        }
        let ma1 = 0;
        for (let i = 20; i < 25; i++) {
            ma1 += (+data[i]["close"]);
        }
        ma1 /= 5;
        let ma2 = 0;
        for (let i = 0; i < 25; i++) {
            ma2 += (+data[i]["close"]);
        }
        ma2 /= 25;
        expect(data[24]["DMA"]).toBeCloseTo(ma1 - ma2);
        let ama = 0;
        for (let i = 24; i < 29; i++) {
            ama += data[i]["DMA"];
        }
        expect(data[28]["AMA"]).toBeCloseTo(ama / 5);
    });
});
describe("Test DMI", () => {
    let data;
    beforeEach(() => {
        data = [{ day: "2016-08-29", open: "22.860", high: "23.250", low: "22.750", close: "22.910", volume: "78244619" }, { day: "2016-08-30", open: "22.950", high: "23.060", low: "22.550", close: "22.660", volume: "90926253" }, { day: "2016-08-31", open: "22.680", high: "24.930", low: "22.600", close: "24.930", volume: "238312574" }, { day: "2016-09-01", open: "25.000", high: "25.010", low: "23.190", close: "23.440", volume: "256560340" }, { day: "2016-09-02", open: "23.140", high: "24.600", low: "23.010", close: "23.770", volume: "192507913" }, { day: "2016-09-05", open: "23.600", high: "23.680", low: "23.100", close: "23.440", volume: "102887958" }, { day: "2016-09-06", open: "23.400", high: "23.660", low: "23.000", close: "23.320", volume: "98212851" }, { day: "2016-09-07", open: "23.540", high: "23.540", low: "23.100", close: "23.270", volume: "79453934" }, { day: "2016-09-08", open: "23.230", high: "24.450", low: "23.130", close: "23.620", volume: "142468390" }, { day: "2016-09-09", open: "23.500", high: "23.590", low: "23.010", close: "23.170", volume: "88429677" }, { day: "2016-09-12", open: "22.600", high: "23.970", low: "22.500", close: "23.500", volume: "137974564" }, { day: "2016-09-13", open: "23.380", high: "23.680", low: "23.200", close: "23.580", volume: "88741809" }, { day: "2016-09-14", open: "23.350", high: "23.800", low: "23.330", close: "23.580", volume: "78557476" }, { day: "2016-09-19", open: "23.580", high: "24.000", low: "23.510", close: "23.630", volume: "58683788" }, { day: "2016-09-20", open: "23.630", high: "23.690", low: "23.230", close: "23.620", volume: "62565662" }, { day: "2016-09-21", open: "23.550", high: "24.620", low: "23.410", close: "24.620", volume: "222750209" }, { day: "2016-09-22", open: "24.800", high: "27.080", low: "24.410", close: "27.000", volume: "356745679" }, { day: "2016-09-23", open: "26.320", high: "26.550", low: "25.240", close: "25.480", volume: "197838372" }, { day: "2016-09-26", open: "25.190", high: "25.350", low: "24.400", close: "24.680", volume: "132417339" }, { day: "2016-09-27", open: "24.610", high: "25.690", low: "24.510", close: "25.140", volume: "155341790" }, { day: "2016-09-28", open: "24.880", high: "26.380", low: "24.330", close: "25.800", volume: "156409060" }, { day: "2016-09-29", open: "25.680", high: "26.300", low: "25.380", close: "25.990", volume: "128298586" }, { day: "2016-09-30", open: "25.900", high: "27.450", low: "25.810", close: "26.170", volume: "135841060" }, { day: "2016-10-10", open: "25.000", high: "25.980", low: "24.660", close: "25.970", volume: "143551183" }, { day: "2016-10-11", open: "25.750", high: "27.410", low: "25.560", close: "26.230", volume: "150728616" }, { day: "2016-10-12", open: "26.000", high: "26.670", low: "25.630", close: "26.600", volume: "87775400" }, { day: "2016-10-13", open: "26.510", high: "27.200", low: "26.300", close: "26.810", volume: "101557433" }, { day: "2016-10-14", open: "26.920", high: "27.250", low: "26.620", close: "26.840", volume: "91514322" }, { day: "2016-10-17", open: "26.500", high: "26.750", low: "25.730", close: "26.000", volume: "92915134" }, { day: "2016-10-18", open: "25.900", high: "26.130", low: "25.510", close: "26.000", volume: "64177355" }, { day: "2016-10-19", open: "26.000", high: "26.480", low: "25.790", close: "25.830", volume: "60460544" }, { day: "2016-10-20", open: "25.720", high: "26.690", low: "25.510", close: "25.940", volume: "89241935" }, { day: "2016-10-21", open: "25.700", high: "25.880", low: "25.160", close: "25.250", volume: "81870576" }, { day: "2016-10-24", open: "25.250", high: "25.450", low: "25.010", close: "25.240", volume: "53319635" }, { day: "2016-10-25", open: "25.200", high: "25.340", low: "24.800", close: "25.010", volume: "71149209" }, { day: "2016-10-26", open: "25.000", high: "25.250", low: "24.880", close: "25.170", volume: "58382553" }, { day: "2016-10-27", open: "25.070", high: "25.070", low: "24.700", close: "24.770", volume: "43647995" }, { day: "2016-10-28", open: "24.580", high: "25.250", low: "24.500", close: "24.750", volume: "63141299" }, { day: "2016-10-31", open: "24.750", high: "25.500", low: "24.510", close: "24.920", volume: "54827410" }, { day: "2016-11-01", open: "25.200", high: "26.100", low: "25.060", close: "25.790", volume: "135877207" }, { day: "2016-11-02", open: "25.450", high: "25.670", low: "24.900", close: "24.900", volume: "101736108" }, { day: "2016-11-03", open: "24.770", high: "25.190", low: "24.710", close: "24.870", volume: "51922997" }, { day: "2016-11-04", open: "24.840", high: "25.000", low: "24.460", close: "24.590", volume: "58209922" }, { day: "2016-11-07", open: "24.470", high: "24.580", low: "24.030", close: "24.160", volume: "41989356" }, { day: "2016-11-08", open: "24.160", high: "24.490", low: "24.150", close: "24.220", volume: "29006609" }, { day: "2016-11-09", open: "24.430", high: "26.640", low: "24.350", close: "26.300", volume: "401716139" }, { day: "2016-11-10", open: "26.000", high: "28.280", low: "25.580", close: "26.560", volume: "243030035" }, { day: "2016-11-11", open: "26.150", high: "26.770", low: "25.700", close: "25.990", volume: "95846280" }, { day: "2016-11-14", open: "26.230", high: "26.250", low: "25.310", close: "25.700", volume: "87878021" }, { day: "2016-11-15", open: "25.600", high: "27.800", low: "25.460", close: "26.940", volume: "148588573" }, { day: "2016-11-16", open: "26.640", high: "27.220", low: "26.090", close: "26.680", volume: "82711736" }, { day: "2016-11-17", open: "26.620", high: "27.000", low: "26.310", close: "27.000", volume: "59513404" }, { day: "2016-11-18", open: "27.800", high: "29.000", low: "27.510", close: "27.720", volume: "150316488" }, { day: "2016-11-21", open: "27.270", high: "28.250", low: "26.010", close: "27.400", volume: "139065510" }, { day: "2016-11-22", open: "27.040", high: "27.420", low: "26.900", close: "27.300", volume: "53038988" }, { day: "2016-11-23", open: "27.900", high: "28.070", low: "26.980", close: "27.220", volume: "74090683" }, { day: "2016-11-24", open: "27.080", high: "27.190", low: "26.700", close: "26.930", volume: "41224639" }, { day: "2016-11-25", open: "26.790", high: "27.600", low: "26.710", close: "27.200", volume: "64594659" }, { day: "2016-11-28", open: "27.360", high: "27.420", low: "25.480", close: "26.380", volume: "125593915" }, { day: "2016-11-29", open: "26.170", high: "26.530", low: "25.900", close: "26.160", volume: "78060059" }, { day: "2016-11-30", open: "27.350", high: "27.990", low: "26.770", close: "26.980", volume: "119318381" }, { day: "2016-12-01", open: "26.560", high: "27.300", low: "26.300", close: "26.970", volume: "95017059" }, { day: "2016-12-02", open: "26.710", high: "26.850", low: "26.370", close: "26.450", volume: "51572972" }, { day: "2016-12-05", open: "25.080", high: "25.980", low: "24.860", close: "25.500", volume: "68906336" }, { day: "2016-12-06", open: "25.150", high: "25.630", low: "25.150", close: "25.380", volume: "35645541" }, { day: "2016-12-07", open: "25.350", high: "25.370", low: "24.180", close: "25.140", volume: "49462389" }, { day: "2016-12-08", open: "25.100", high: "25.130", low: "24.700", close: "24.740", volume: "38055084" }, { day: "2016-12-09", open: "24.610", high: "25.170", low: "24.370", close: "24.810", volume: "48168045" }, { day: "2016-12-12", open: "24.780", high: "24.780", low: "23.070", close: "23.260", volume: "78901945" }, { day: "2016-12-13", open: "23.020", high: "23.280", low: "21.860", close: "23.060", volume: "48450098" }, { day: "2016-12-14", open: "22.670", high: "22.900", low: "22.200", close: "22.290", volume: "41281457" }, { day: "2016-12-15", open: "22.150", high: "22.620", low: "21.880", close: "22.330", volume: "35562867" }, { day: "2016-12-16", open: "22.120", high: "22.750", low: "22.120", close: "22.460", volume: "29397618" }, { day: "2016-12-19", open: "22.000", high: "22.000", low: "21.040", close: "21.100", volume: "70048497" }, { day: "2016-12-20", open: "21.000", high: "21.000", low: "20.150", close: "20.330", volume: "71906542" }, { day: "2016-12-21", open: "20.200", high: "20.700", low: "20.200", close: "20.480", volume: "53130409" }, { day: "2016-12-22", open: "20.300", high: "20.770", low: "20.100", close: "20.610", volume: "49971724" }, { day: "2016-12-23", open: "20.470", high: "20.670", low: "20.250", close: "20.300", volume: "32435908" }, { day: "2016-12-26", open: "20.210", high: "20.690", low: "20.120", close: "20.650", volume: "37812479" }, { day: "2016-12-27", open: "20.650", high: "21.980", low: "20.590", close: "21.420", volume: "74330548" }, { day: "2016-12-28", open: "21.240", high: "21.480", low: "21.010", close: "21.200", volume: "32151732" }, { day: "2016-12-29", open: "21.290", high: "21.320", low: "20.700", close: "20.840", volume: "32204601" }, { day: "2016-12-30", open: "20.880", high: "20.960", low: "20.450", close: "20.550", volume: "26115000" }, { day: "2017-01-03", open: "20.550", high: "20.880", low: "20.550", close: "20.730", volume: "21701669" }, { day: "2017-01-04", open: "20.740", high: "20.950", low: "20.450", close: "20.850", volume: "33155480" }, { day: "2017-01-05", open: "20.850", high: "21.230", low: "20.780", close: "20.930", volume: "31012563" }, { day: "2017-01-06", open: "20.940", high: "21.040", low: "20.610", close: "20.640", volume: "23591954" }, { day: "2017-01-09", open: "20.600", high: "20.750", low: "20.530", close: "20.660", volume: "15095445" }, { day: "2017-01-10", open: "20.670", high: "20.690", low: "20.520", close: "20.580", volume: "15917148" }, { day: "2017-01-11", open: "20.520", high: "20.630", low: "20.400", close: "20.400", volume: "16865220" }, { day: "2017-01-13", open: "21.000", high: "22.400", low: "20.900", close: "21.810", volume: "106426641" }, { day: "2017-01-16", open: "21.810", high: "21.810", low: "20.310", close: "21.000", volume: "55324012" }, { day: "2017-01-17", open: "20.730", high: "20.960", low: "20.390", close: "20.800", volume: "32104040" }, { day: "2017-01-18", open: "20.670", high: "21.180", low: "20.530", close: "20.920", volume: "32477225" }, { day: "2017-01-19", open: "20.700", high: "20.880", low: "20.550", close: "20.600", volume: "21688806" }, { day: "2017-01-20", open: "20.600", high: "20.830", low: "20.540", close: "20.680", volume: "21505311" }, { day: "2017-01-23", open: "20.700", high: "20.850", low: "20.700", close: "20.740", volume: "15637306" }, { day: "2017-01-24", open: "20.770", high: "20.800", low: "20.650", close: "20.690", volume: "15931840" }, { day: "2017-01-25", open: "20.680", high: "20.730", low: "20.520", close: "20.610", volume: "15464746" }, { day: "2017-01-26", open: "20.650", high: "20.770", low: "20.650", close: "20.680", volume: "14124823" }];
    });
    afterEach(() => {
        data = null;
    });
    it("test DMI()", () => {
        ta_1.TA.DMI(data);
        let a = Math.abs(+data[1].high - +data[1].low);
        let b = Math.abs(+data[1].low - +data[0].close);
        let c = Math.abs(+data[1].high - +data[0].close);
        if (a >= b && a >= c) {
            expect(data[1]["TR"]).toBeCloseTo(a);
        }
        else if (b >= a && b >= c) {
            expect(data[1]["TR"]).toBeCloseTo(b);
        }
        else {
            expect(data[1]["TR"]).toBeCloseTo(c);
        }
        let u_dm = +data[1].high - +data[0].high;
        let d_dm = +data[0].low - +data[1].low;
        if (u_dm > Math.abs(d_dm)) {
            expect(data[1]["+DM"]).toBeCloseTo(u_dm);
        }
        else {
            expect(data[1]["+DM"]).toBeCloseTo(0);
        }
        if (d_dm > Math.abs(u_dm)) {
            expect(data[1]["-DM"]).toBeCloseTo(d_dm);
        }
        else {
            expect(data[1]["-DM"]).toBeCloseTo(0);
        }
        let tr14 = 0;
        let u_dm14 = 0;
        let d_dm14 = 0;
        for (let i = 1; i < 15; i++) {
            tr14 += data[i]["TR"];
            u_dm14 += data[i]["+DM"];
            d_dm14 += data[i]["-DM"];
        }
        expect(data[14]["TR14"]).toBeCloseTo(tr14 / 14);
        expect(data[14]["+DM14"]).toBeCloseTo(u_dm14 / 14);
        expect(data[14]["-DM14"]).toBeCloseTo(d_dm14 / 14);
        for (let i = 14; i < data.length; i++) {
            expect(data[i]["+DI"]).toBeCloseTo(data[i]["+DM14"] / data[i]["TR14"] * 100);
            expect(data[i]["-DI"]).toBeCloseTo(data[i]["-DM14"] / data[i]["TR14"] * 100);
            expect(data[i]["DX"]).toBeCloseTo(Math.abs(data[i]["+DI"] - data[i]["-DI"]) / (data[i]["+DI"] + data[i]["-DI"]) * 100);
        }
        let adx = 0;
        for (let i = 27; i < 41; i++) {
            adx += data[i]["DX"];
        }
        expect(data[40]["ADX"]).toBeCloseTo(adx / 14);
        expect(data[40 + 14]["ADXR"]).toBeCloseTo((data[40 + 14]["ADX"] + data[40]["ADX"]) / 2);
    });
    it("test DMI(12)", () => {
        ta_1.TA.DMI(data, 12);
        let a = Math.abs(+data[1].high - +data[1].low);
        let b = Math.abs(+data[1].low - +data[0].close);
        let c = Math.abs(+data[1].high - +data[0].close);
        if (a >= b && a >= c) {
            expect(data[1]["TR"]).toBeCloseTo(a);
        }
        else if (b >= a && b >= c) {
            expect(data[1]["TR"]).toBeCloseTo(b);
        }
        else {
            expect(data[1]["TR"]).toBeCloseTo(c);
        }
        let u_dm = +data[1].high - +data[0].high;
        let d_dm = +data[0].low - +data[1].low;
        if (u_dm > Math.abs(d_dm)) {
            expect(data[1]["+DM"]).toBeCloseTo(u_dm);
        }
        else {
            expect(data[1]["+DM"]).toBeCloseTo(0);
        }
        if (d_dm > Math.abs(u_dm)) {
            expect(data[1]["-DM"]).toBeCloseTo(d_dm);
        }
        else {
            expect(data[1]["-DM"]).toBeCloseTo(0);
        }
        let tr12 = 0;
        let u_dm12 = 0;
        let d_dm12 = 0;
        for (let i = 1; i < 13; i++) {
            tr12 += data[i]["TR"];
            u_dm12 += data[i]["+DM"];
            d_dm12 += data[i]["-DM"];
        }
        expect(data[12]["TR12"]).toBeCloseTo(tr12 / 12);
        expect(data[12]["+DM12"]).toBeCloseTo(u_dm12 / 12);
        expect(data[12]["-DM12"]).toBeCloseTo(d_dm12 / 12);
        for (let i = 12; i < data.length; i++) {
            expect(data[i]["+DI"]).toBeCloseTo(data[i]["+DM12"] / data[i]["TR12"] * 100);
            expect(data[i]["-DI"]).toBeCloseTo(data[i]["-DM12"] / data[i]["TR12"] * 100);
            expect(data[i]["DX"]).toBeCloseTo(Math.abs(data[i]["+DI"] - data[i]["-DI"]) / (data[i]["+DI"] + data[i]["-DI"]) * 100);
        }
        let adx = 0;
        for (let i = 23; i < 35; i++) {
            adx += data[i]["DX"];
        }
        expect(data[34]["ADX"]).toBeCloseTo(adx / 12);
        expect(data[34 + 12]["ADXR"]).toBeCloseTo((data[34 + 12]["ADX"] + data[34]["ADX"]) / 2);
    });
});
describe("Test EMA", () => {
    let data;
    beforeEach(() => {
        data = [{ day: "2016-08-29", open: "22.860", high: "23.250", low: "22.750", close: "22.910", volume: "78244619" }, { day: "2016-08-30", open: "22.950", high: "23.060", low: "22.550", close: "22.660", volume: "90926253" }, { day: "2016-08-31", open: "22.680", high: "24.930", low: "22.600", close: "24.930", volume: "238312574" }, { day: "2016-09-01", open: "25.000", high: "25.010", low: "23.190", close: "23.440", volume: "256560340" }, { day: "2016-09-02", open: "23.140", high: "24.600", low: "23.010", close: "23.770", volume: "192507913" }, { day: "2016-09-05", open: "23.600", high: "23.680", low: "23.100", close: "23.440", volume: "102887958" }, { day: "2016-09-06", open: "23.400", high: "23.660", low: "23.000", close: "23.320", volume: "98212851" }, { day: "2016-09-07", open: "23.540", high: "23.540", low: "23.100", close: "23.270", volume: "79453934" }, { day: "2016-09-08", open: "23.230", high: "24.450", low: "23.130", close: "23.620", volume: "142468390" }, { day: "2016-09-09", open: "23.500", high: "23.590", low: "23.010", close: "23.170", volume: "88429677" }, { day: "2016-09-12", open: "22.600", high: "23.970", low: "22.500", close: "23.500", volume: "137974564" }, { day: "2016-09-13", open: "23.380", high: "23.680", low: "23.200", close: "23.580", volume: "88741809" }, { day: "2016-09-14", open: "23.350", high: "23.800", low: "23.330", close: "23.580", volume: "78557476" }, { day: "2016-09-19", open: "23.580", high: "24.000", low: "23.510", close: "23.630", volume: "58683788" }, { day: "2016-09-20", open: "23.630", high: "23.690", low: "23.230", close: "23.620", volume: "62565662" }, { day: "2016-09-21", open: "23.550", high: "24.620", low: "23.410", close: "24.620", volume: "222750209" }, { day: "2016-09-22", open: "24.800", high: "27.080", low: "24.410", close: "27.000", volume: "356745679" }, { day: "2016-09-23", open: "26.320", high: "26.550", low: "25.240", close: "25.480", volume: "197838372" }, { day: "2016-09-26", open: "25.190", high: "25.350", low: "24.400", close: "24.680", volume: "132417339" }, { day: "2016-09-27", open: "24.610", high: "25.690", low: "24.510", close: "25.140", volume: "155341790" }, { day: "2016-09-28", open: "24.880", high: "26.380", low: "24.330", close: "25.800", volume: "156409060" }, { day: "2016-09-29", open: "25.680", high: "26.300", low: "25.380", close: "25.990", volume: "128298586" }, { day: "2016-09-30", open: "25.900", high: "27.450", low: "25.810", close: "26.170", volume: "135841060" }, { day: "2016-10-10", open: "25.000", high: "25.980", low: "24.660", close: "25.970", volume: "143551183" }, { day: "2016-10-11", open: "25.750", high: "27.410", low: "25.560", close: "26.230", volume: "150728616" }, { day: "2016-10-12", open: "26.000", high: "26.670", low: "25.630", close: "26.600", volume: "87775400" }, { day: "2016-10-13", open: "26.510", high: "27.200", low: "26.300", close: "26.810", volume: "101557433" }, { day: "2016-10-14", open: "26.920", high: "27.250", low: "26.620", close: "26.840", volume: "91514322" }, { day: "2016-10-17", open: "26.500", high: "26.750", low: "25.730", close: "26.000", volume: "92915134" }, { day: "2016-10-18", open: "25.900", high: "26.130", low: "25.510", close: "26.000", volume: "64177355" }, { day: "2016-10-19", open: "26.000", high: "26.480", low: "25.790", close: "25.830", volume: "60460544" }, { day: "2016-10-20", open: "25.720", high: "26.690", low: "25.510", close: "25.940", volume: "89241935" }, { day: "2016-10-21", open: "25.700", high: "25.880", low: "25.160", close: "25.250", volume: "81870576" }, { day: "2016-10-24", open: "25.250", high: "25.450", low: "25.010", close: "25.240", volume: "53319635" }, { day: "2016-10-25", open: "25.200", high: "25.340", low: "24.800", close: "25.010", volume: "71149209" }, { day: "2016-10-26", open: "25.000", high: "25.250", low: "24.880", close: "25.170", volume: "58382553" }, { day: "2016-10-27", open: "25.070", high: "25.070", low: "24.700", close: "24.770", volume: "43647995" }, { day: "2016-10-28", open: "24.580", high: "25.250", low: "24.500", close: "24.750", volume: "63141299" }, { day: "2016-10-31", open: "24.750", high: "25.500", low: "24.510", close: "24.920", volume: "54827410" }, { day: "2016-11-01", open: "25.200", high: "26.100", low: "25.060", close: "25.790", volume: "135877207" }, { day: "2016-11-02", open: "25.450", high: "25.670", low: "24.900", close: "24.900", volume: "101736108" }, { day: "2016-11-03", open: "24.770", high: "25.190", low: "24.710", close: "24.870", volume: "51922997" }, { day: "2016-11-04", open: "24.840", high: "25.000", low: "24.460", close: "24.590", volume: "58209922" }, { day: "2016-11-07", open: "24.470", high: "24.580", low: "24.030", close: "24.160", volume: "41989356" }, { day: "2016-11-08", open: "24.160", high: "24.490", low: "24.150", close: "24.220", volume: "29006609" }, { day: "2016-11-09", open: "24.430", high: "26.640", low: "24.350", close: "26.300", volume: "401716139" }, { day: "2016-11-10", open: "26.000", high: "28.280", low: "25.580", close: "26.560", volume: "243030035" }, { day: "2016-11-11", open: "26.150", high: "26.770", low: "25.700", close: "25.990", volume: "95846280" }, { day: "2016-11-14", open: "26.230", high: "26.250", low: "25.310", close: "25.700", volume: "87878021" }, { day: "2016-11-15", open: "25.600", high: "27.800", low: "25.460", close: "26.940", volume: "148588573" }, { day: "2016-11-16", open: "26.640", high: "27.220", low: "26.090", close: "26.680", volume: "82711736" }, { day: "2016-11-17", open: "26.620", high: "27.000", low: "26.310", close: "27.000", volume: "59513404" }, { day: "2016-11-18", open: "27.800", high: "29.000", low: "27.510", close: "27.720", volume: "150316488" }, { day: "2016-11-21", open: "27.270", high: "28.250", low: "26.010", close: "27.400", volume: "139065510" }, { day: "2016-11-22", open: "27.040", high: "27.420", low: "26.900", close: "27.300", volume: "53038988" }, { day: "2016-11-23", open: "27.900", high: "28.070", low: "26.980", close: "27.220", volume: "74090683" }, { day: "2016-11-24", open: "27.080", high: "27.190", low: "26.700", close: "26.930", volume: "41224639" }, { day: "2016-11-25", open: "26.790", high: "27.600", low: "26.710", close: "27.200", volume: "64594659" }, { day: "2016-11-28", open: "27.360", high: "27.420", low: "25.480", close: "26.380", volume: "125593915" }, { day: "2016-11-29", open: "26.170", high: "26.530", low: "25.900", close: "26.160", volume: "78060059" }, { day: "2016-11-30", open: "27.350", high: "27.990", low: "26.770", close: "26.980", volume: "119318381" }, { day: "2016-12-01", open: "26.560", high: "27.300", low: "26.300", close: "26.970", volume: "95017059" }, { day: "2016-12-02", open: "26.710", high: "26.850", low: "26.370", close: "26.450", volume: "51572972" }, { day: "2016-12-05", open: "25.080", high: "25.980", low: "24.860", close: "25.500", volume: "68906336" }, { day: "2016-12-06", open: "25.150", high: "25.630", low: "25.150", close: "25.380", volume: "35645541" }, { day: "2016-12-07", open: "25.350", high: "25.370", low: "24.180", close: "25.140", volume: "49462389" }, { day: "2016-12-08", open: "25.100", high: "25.130", low: "24.700", close: "24.740", volume: "38055084" }, { day: "2016-12-09", open: "24.610", high: "25.170", low: "24.370", close: "24.810", volume: "48168045" }, { day: "2016-12-12", open: "24.780", high: "24.780", low: "23.070", close: "23.260", volume: "78901945" }, { day: "2016-12-13", open: "23.020", high: "23.280", low: "21.860", close: "23.060", volume: "48450098" }, { day: "2016-12-14", open: "22.670", high: "22.900", low: "22.200", close: "22.290", volume: "41281457" }, { day: "2016-12-15", open: "22.150", high: "22.620", low: "21.880", close: "22.330", volume: "35562867" }, { day: "2016-12-16", open: "22.120", high: "22.750", low: "22.120", close: "22.460", volume: "29397618" }, { day: "2016-12-19", open: "22.000", high: "22.000", low: "21.040", close: "21.100", volume: "70048497" }, { day: "2016-12-20", open: "21.000", high: "21.000", low: "20.150", close: "20.330", volume: "71906542" }, { day: "2016-12-21", open: "20.200", high: "20.700", low: "20.200", close: "20.480", volume: "53130409" }, { day: "2016-12-22", open: "20.300", high: "20.770", low: "20.100", close: "20.610", volume: "49971724" }, { day: "2016-12-23", open: "20.470", high: "20.670", low: "20.250", close: "20.300", volume: "32435908" }, { day: "2016-12-26", open: "20.210", high: "20.690", low: "20.120", close: "20.650", volume: "37812479" }, { day: "2016-12-27", open: "20.650", high: "21.980", low: "20.590", close: "21.420", volume: "74330548" }, { day: "2016-12-28", open: "21.240", high: "21.480", low: "21.010", close: "21.200", volume: "32151732" }, { day: "2016-12-29", open: "21.290", high: "21.320", low: "20.700", close: "20.840", volume: "32204601" }, { day: "2016-12-30", open: "20.880", high: "20.960", low: "20.450", close: "20.550", volume: "26115000" }, { day: "2017-01-03", open: "20.550", high: "20.880", low: "20.550", close: "20.730", volume: "21701669" }, { day: "2017-01-04", open: "20.740", high: "20.950", low: "20.450", close: "20.850", volume: "33155480" }, { day: "2017-01-05", open: "20.850", high: "21.230", low: "20.780", close: "20.930", volume: "31012563" }, { day: "2017-01-06", open: "20.940", high: "21.040", low: "20.610", close: "20.640", volume: "23591954" }, { day: "2017-01-09", open: "20.600", high: "20.750", low: "20.530", close: "20.660", volume: "15095445" }, { day: "2017-01-10", open: "20.670", high: "20.690", low: "20.520", close: "20.580", volume: "15917148" }, { day: "2017-01-11", open: "20.520", high: "20.630", low: "20.400", close: "20.400", volume: "16865220" }, { day: "2017-01-13", open: "21.000", high: "22.400", low: "20.900", close: "21.810", volume: "106426641" }, { day: "2017-01-16", open: "21.810", high: "21.810", low: "20.310", close: "21.000", volume: "55324012" }, { day: "2017-01-17", open: "20.730", high: "20.960", low: "20.390", close: "20.800", volume: "32104040" }, { day: "2017-01-18", open: "20.670", high: "21.180", low: "20.530", close: "20.920", volume: "32477225" }, { day: "2017-01-19", open: "20.700", high: "20.880", low: "20.550", close: "20.600", volume: "21688806" }, { day: "2017-01-20", open: "20.600", high: "20.830", low: "20.540", close: "20.680", volume: "21505311" }, { day: "2017-01-23", open: "20.700", high: "20.850", low: "20.700", close: "20.740", volume: "15637306" }, { day: "2017-01-24", open: "20.770", high: "20.800", low: "20.650", close: "20.690", volume: "15931840" }, { day: "2017-01-25", open: "20.680", high: "20.730", low: "20.520", close: "20.610", volume: "15464746" }, { day: "2017-01-26", open: "20.650", high: "20.770", low: "20.650", close: "20.680", volume: "14124823" }];
    });
    afterEach(() => {
        data = null;
    });
    it("test EMA()", () => {
        ta_1.TA.EMA(data, 12);
        ta_1.TA.EMA(data, 50);
        expect(data[0]["EMA12"]).toBeCloseTo(+data[0].close);
        expect(data[0]["EMA50"]).toBeCloseTo(+data[0].close);
        for (let i = 1; i < data.length; i++) {
            expect(data[i]["EMA12"]).toBeCloseTo((+data[i].close - data[i - 1][`EMA12`]) * (2 / (12 + 1)) + data[i - 1][`EMA12`]);
            expect(data[i]["EMA50"]).toBeCloseTo((+data[i].close - data[i - 1][`EMA50`]) * (2 / (50 + 1)) + data[i - 1][`EMA50`]);
        }
    });
    it("test EMA(15,60)", () => {
        ta_1.TA.EMA(data, 15);
        ta_1.TA.EMA(data, 60);
        expect(data[0]["EMA15"]).toBeCloseTo(+data[0].close);
        expect(data[0]["EMA60"]).toBeCloseTo(+data[0].close);
        for (let i = 1; i < data.length; i++) {
            expect(data[i]["EMA15"]).toBeCloseTo((+data[i].close - data[i - 1][`EMA15`]) * (2 / (15 + 1)) + data[i - 1][`EMA15`]);
            expect(data[i]["EMA60"]).toBeCloseTo((+data[i].close - data[i - 1][`EMA60`]) * (2 / (60 + 1)) + data[i - 1][`EMA60`]);
        }
    });
});
describe("Test MACD", () => {
    let data;
    beforeEach(() => {
        data = [{ day: "2016-08-29", open: "22.860", high: "23.250", low: "22.750", close: "22.910", volume: "78244619" }, { day: "2016-08-30", open: "22.950", high: "23.060", low: "22.550", close: "22.660", volume: "90926253" }, { day: "2016-08-31", open: "22.680", high: "24.930", low: "22.600", close: "24.930", volume: "238312574" }, { day: "2016-09-01", open: "25.000", high: "25.010", low: "23.190", close: "23.440", volume: "256560340" }, { day: "2016-09-02", open: "23.140", high: "24.600", low: "23.010", close: "23.770", volume: "192507913" }, { day: "2016-09-05", open: "23.600", high: "23.680", low: "23.100", close: "23.440", volume: "102887958" }, { day: "2016-09-06", open: "23.400", high: "23.660", low: "23.000", close: "23.320", volume: "98212851" }, { day: "2016-09-07", open: "23.540", high: "23.540", low: "23.100", close: "23.270", volume: "79453934" }, { day: "2016-09-08", open: "23.230", high: "24.450", low: "23.130", close: "23.620", volume: "142468390" }, { day: "2016-09-09", open: "23.500", high: "23.590", low: "23.010", close: "23.170", volume: "88429677" }, { day: "2016-09-12", open: "22.600", high: "23.970", low: "22.500", close: "23.500", volume: "137974564" }, { day: "2016-09-13", open: "23.380", high: "23.680", low: "23.200", close: "23.580", volume: "88741809" }, { day: "2016-09-14", open: "23.350", high: "23.800", low: "23.330", close: "23.580", volume: "78557476" }, { day: "2016-09-19", open: "23.580", high: "24.000", low: "23.510", close: "23.630", volume: "58683788" }, { day: "2016-09-20", open: "23.630", high: "23.690", low: "23.230", close: "23.620", volume: "62565662" }, { day: "2016-09-21", open: "23.550", high: "24.620", low: "23.410", close: "24.620", volume: "222750209" }, { day: "2016-09-22", open: "24.800", high: "27.080", low: "24.410", close: "27.000", volume: "356745679" }, { day: "2016-09-23", open: "26.320", high: "26.550", low: "25.240", close: "25.480", volume: "197838372" }, { day: "2016-09-26", open: "25.190", high: "25.350", low: "24.400", close: "24.680", volume: "132417339" }, { day: "2016-09-27", open: "24.610", high: "25.690", low: "24.510", close: "25.140", volume: "155341790" }, { day: "2016-09-28", open: "24.880", high: "26.380", low: "24.330", close: "25.800", volume: "156409060" }, { day: "2016-09-29", open: "25.680", high: "26.300", low: "25.380", close: "25.990", volume: "128298586" }, { day: "2016-09-30", open: "25.900", high: "27.450", low: "25.810", close: "26.170", volume: "135841060" }, { day: "2016-10-10", open: "25.000", high: "25.980", low: "24.660", close: "25.970", volume: "143551183" }, { day: "2016-10-11", open: "25.750", high: "27.410", low: "25.560", close: "26.230", volume: "150728616" }, { day: "2016-10-12", open: "26.000", high: "26.670", low: "25.630", close: "26.600", volume: "87775400" }, { day: "2016-10-13", open: "26.510", high: "27.200", low: "26.300", close: "26.810", volume: "101557433" }, { day: "2016-10-14", open: "26.920", high: "27.250", low: "26.620", close: "26.840", volume: "91514322" }, { day: "2016-10-17", open: "26.500", high: "26.750", low: "25.730", close: "26.000", volume: "92915134" }, { day: "2016-10-18", open: "25.900", high: "26.130", low: "25.510", close: "26.000", volume: "64177355" }, { day: "2016-10-19", open: "26.000", high: "26.480", low: "25.790", close: "25.830", volume: "60460544" }, { day: "2016-10-20", open: "25.720", high: "26.690", low: "25.510", close: "25.940", volume: "89241935" }, { day: "2016-10-21", open: "25.700", high: "25.880", low: "25.160", close: "25.250", volume: "81870576" }, { day: "2016-10-24", open: "25.250", high: "25.450", low: "25.010", close: "25.240", volume: "53319635" }, { day: "2016-10-25", open: "25.200", high: "25.340", low: "24.800", close: "25.010", volume: "71149209" }, { day: "2016-10-26", open: "25.000", high: "25.250", low: "24.880", close: "25.170", volume: "58382553" }, { day: "2016-10-27", open: "25.070", high: "25.070", low: "24.700", close: "24.770", volume: "43647995" }, { day: "2016-10-28", open: "24.580", high: "25.250", low: "24.500", close: "24.750", volume: "63141299" }, { day: "2016-10-31", open: "24.750", high: "25.500", low: "24.510", close: "24.920", volume: "54827410" }, { day: "2016-11-01", open: "25.200", high: "26.100", low: "25.060", close: "25.790", volume: "135877207" }, { day: "2016-11-02", open: "25.450", high: "25.670", low: "24.900", close: "24.900", volume: "101736108" }, { day: "2016-11-03", open: "24.770", high: "25.190", low: "24.710", close: "24.870", volume: "51922997" }, { day: "2016-11-04", open: "24.840", high: "25.000", low: "24.460", close: "24.590", volume: "58209922" }, { day: "2016-11-07", open: "24.470", high: "24.580", low: "24.030", close: "24.160", volume: "41989356" }, { day: "2016-11-08", open: "24.160", high: "24.490", low: "24.150", close: "24.220", volume: "29006609" }, { day: "2016-11-09", open: "24.430", high: "26.640", low: "24.350", close: "26.300", volume: "401716139" }, { day: "2016-11-10", open: "26.000", high: "28.280", low: "25.580", close: "26.560", volume: "243030035" }, { day: "2016-11-11", open: "26.150", high: "26.770", low: "25.700", close: "25.990", volume: "95846280" }, { day: "2016-11-14", open: "26.230", high: "26.250", low: "25.310", close: "25.700", volume: "87878021" }, { day: "2016-11-15", open: "25.600", high: "27.800", low: "25.460", close: "26.940", volume: "148588573" }, { day: "2016-11-16", open: "26.640", high: "27.220", low: "26.090", close: "26.680", volume: "82711736" }, { day: "2016-11-17", open: "26.620", high: "27.000", low: "26.310", close: "27.000", volume: "59513404" }, { day: "2016-11-18", open: "27.800", high: "29.000", low: "27.510", close: "27.720", volume: "150316488" }, { day: "2016-11-21", open: "27.270", high: "28.250", low: "26.010", close: "27.400", volume: "139065510" }, { day: "2016-11-22", open: "27.040", high: "27.420", low: "26.900", close: "27.300", volume: "53038988" }, { day: "2016-11-23", open: "27.900", high: "28.070", low: "26.980", close: "27.220", volume: "74090683" }, { day: "2016-11-24", open: "27.080", high: "27.190", low: "26.700", close: "26.930", volume: "41224639" }, { day: "2016-11-25", open: "26.790", high: "27.600", low: "26.710", close: "27.200", volume: "64594659" }, { day: "2016-11-28", open: "27.360", high: "27.420", low: "25.480", close: "26.380", volume: "125593915" }, { day: "2016-11-29", open: "26.170", high: "26.530", low: "25.900", close: "26.160", volume: "78060059" }, { day: "2016-11-30", open: "27.350", high: "27.990", low: "26.770", close: "26.980", volume: "119318381" }, { day: "2016-12-01", open: "26.560", high: "27.300", low: "26.300", close: "26.970", volume: "95017059" }, { day: "2016-12-02", open: "26.710", high: "26.850", low: "26.370", close: "26.450", volume: "51572972" }, { day: "2016-12-05", open: "25.080", high: "25.980", low: "24.860", close: "25.500", volume: "68906336" }, { day: "2016-12-06", open: "25.150", high: "25.630", low: "25.150", close: "25.380", volume: "35645541" }, { day: "2016-12-07", open: "25.350", high: "25.370", low: "24.180", close: "25.140", volume: "49462389" }, { day: "2016-12-08", open: "25.100", high: "25.130", low: "24.700", close: "24.740", volume: "38055084" }, { day: "2016-12-09", open: "24.610", high: "25.170", low: "24.370", close: "24.810", volume: "48168045" }, { day: "2016-12-12", open: "24.780", high: "24.780", low: "23.070", close: "23.260", volume: "78901945" }, { day: "2016-12-13", open: "23.020", high: "23.280", low: "21.860", close: "23.060", volume: "48450098" }, { day: "2016-12-14", open: "22.670", high: "22.900", low: "22.200", close: "22.290", volume: "41281457" }, { day: "2016-12-15", open: "22.150", high: "22.620", low: "21.880", close: "22.330", volume: "35562867" }, { day: "2016-12-16", open: "22.120", high: "22.750", low: "22.120", close: "22.460", volume: "29397618" }, { day: "2016-12-19", open: "22.000", high: "22.000", low: "21.040", close: "21.100", volume: "70048497" }, { day: "2016-12-20", open: "21.000", high: "21.000", low: "20.150", close: "20.330", volume: "71906542" }, { day: "2016-12-21", open: "20.200", high: "20.700", low: "20.200", close: "20.480", volume: "53130409" }, { day: "2016-12-22", open: "20.300", high: "20.770", low: "20.100", close: "20.610", volume: "49971724" }, { day: "2016-12-23", open: "20.470", high: "20.670", low: "20.250", close: "20.300", volume: "32435908" }, { day: "2016-12-26", open: "20.210", high: "20.690", low: "20.120", close: "20.650", volume: "37812479" }, { day: "2016-12-27", open: "20.650", high: "21.980", low: "20.590", close: "21.420", volume: "74330548" }, { day: "2016-12-28", open: "21.240", high: "21.480", low: "21.010", close: "21.200", volume: "32151732" }, { day: "2016-12-29", open: "21.290", high: "21.320", low: "20.700", close: "20.840", volume: "32204601" }, { day: "2016-12-30", open: "20.880", high: "20.960", low: "20.450", close: "20.550", volume: "26115000" }, { day: "2017-01-03", open: "20.550", high: "20.880", low: "20.550", close: "20.730", volume: "21701669" }, { day: "2017-01-04", open: "20.740", high: "20.950", low: "20.450", close: "20.850", volume: "33155480" }, { day: "2017-01-05", open: "20.850", high: "21.230", low: "20.780", close: "20.930", volume: "31012563" }, { day: "2017-01-06", open: "20.940", high: "21.040", low: "20.610", close: "20.640", volume: "23591954" }, { day: "2017-01-09", open: "20.600", high: "20.750", low: "20.530", close: "20.660", volume: "15095445" }, { day: "2017-01-10", open: "20.670", high: "20.690", low: "20.520", close: "20.580", volume: "15917148" }, { day: "2017-01-11", open: "20.520", high: "20.630", low: "20.400", close: "20.400", volume: "16865220" }, { day: "2017-01-13", open: "21.000", high: "22.400", low: "20.900", close: "21.810", volume: "106426641" }, { day: "2017-01-16", open: "21.810", high: "21.810", low: "20.310", close: "21.000", volume: "55324012" }, { day: "2017-01-17", open: "20.730", high: "20.960", low: "20.390", close: "20.800", volume: "32104040" }, { day: "2017-01-18", open: "20.670", high: "21.180", low: "20.530", close: "20.920", volume: "32477225" }, { day: "2017-01-19", open: "20.700", high: "20.880", low: "20.550", close: "20.600", volume: "21688806" }, { day: "2017-01-20", open: "20.600", high: "20.830", low: "20.540", close: "20.680", volume: "21505311" }, { day: "2017-01-23", open: "20.700", high: "20.850", low: "20.700", close: "20.740", volume: "15637306" }, { day: "2017-01-24", open: "20.770", high: "20.800", low: "20.650", close: "20.690", volume: "15931840" }, { day: "2017-01-25", open: "20.680", high: "20.730", low: "20.520", close: "20.610", volume: "15464746" }, { day: "2017-01-26", open: "20.650", high: "20.770", low: "20.650", close: "20.680", volume: "14124823" }];
    });
    afterEach(() => {
        data = null;
    });
    it("test MACD()", () => {
        ta_1.TA.MACD(data);
        for (let i = 1; i < data.length; i++) {
            expect(data[i]["DEA9"]).toBeUndefined();
            expect(data[i]["DIFF"]).toBeCloseTo(data[i]["EMA12"] - data[i]["EMA26"]);
            expect(data[i]["DEA"]).toBeCloseTo((+data[i]["DIFF"] - data[i - 1][`DEA`]) * (2 / (9 + 1)) + data[i - 1][`DEA`]);
            expect(data[i]["MACD"]).toBeCloseTo(data[i]["DIFF"] - data[i]["DEA"]);
        }
    });
    it("test MACD(10,20,8)", () => {
        ta_1.TA.MACD(data, 10, 20, 8);
        for (let i = 1; i < data.length; i++) {
            expect(data[i]["DEA8"]).toBeUndefined();
            expect(data[i]["DIFF"]).toBeCloseTo(data[i]["EMA10"] - data[i]["EMA20"]);
            expect(data[i]["DEA"]).toBeCloseTo((+data[i]["DIFF"] - data[i - 1][`DEA`]) * (2 / (8 + 1)) + data[i - 1][`DEA`]);
            expect(data[i]["MACD"]).toBeCloseTo(data[i]["DIFF"] - data[i]["DEA"]);
        }
    });
});
describe("Test KDJ", () => {
    let data;
    beforeEach(() => {
        data = [{ day: "2016-08-29", open: "22.860", high: "23.250", low: "22.750", close: "22.910", volume: "78244619" }, { day: "2016-08-30", open: "22.950", high: "23.060", low: "22.550", close: "22.660", volume: "90926253" }, { day: "2016-08-31", open: "22.680", high: "24.930", low: "22.600", close: "24.930", volume: "238312574" }, { day: "2016-09-01", open: "25.000", high: "25.010", low: "23.190", close: "23.440", volume: "256560340" }, { day: "2016-09-02", open: "23.140", high: "24.600", low: "23.010", close: "23.770", volume: "192507913" }, { day: "2016-09-05", open: "23.600", high: "23.680", low: "23.100", close: "23.440", volume: "102887958" }, { day: "2016-09-06", open: "23.400", high: "23.660", low: "23.000", close: "23.320", volume: "98212851" }, { day: "2016-09-07", open: "23.540", high: "23.540", low: "23.100", close: "23.270", volume: "79453934" }, { day: "2016-09-08", open: "23.230", high: "24.450", low: "23.130", close: "23.620", volume: "142468390" }, { day: "2016-09-09", open: "23.500", high: "23.590", low: "23.010", close: "23.170", volume: "88429677" }, { day: "2016-09-12", open: "22.600", high: "23.970", low: "22.500", close: "23.500", volume: "137974564" }, { day: "2016-09-13", open: "23.380", high: "23.680", low: "23.200", close: "23.580", volume: "88741809" }, { day: "2016-09-14", open: "23.350", high: "23.800", low: "23.330", close: "23.580", volume: "78557476" }, { day: "2016-09-19", open: "23.580", high: "24.000", low: "23.510", close: "23.630", volume: "58683788" }, { day: "2016-09-20", open: "23.630", high: "23.690", low: "23.230", close: "23.620", volume: "62565662" }, { day: "2016-09-21", open: "23.550", high: "24.620", low: "23.410", close: "24.620", volume: "222750209" }, { day: "2016-09-22", open: "24.800", high: "27.080", low: "24.410", close: "27.000", volume: "356745679" }, { day: "2016-09-23", open: "26.320", high: "26.550", low: "25.240", close: "25.480", volume: "197838372" }, { day: "2016-09-26", open: "25.190", high: "25.350", low: "24.400", close: "24.680", volume: "132417339" }, { day: "2016-09-27", open: "24.610", high: "25.690", low: "24.510", close: "25.140", volume: "155341790" }, { day: "2016-09-28", open: "24.880", high: "26.380", low: "24.330", close: "25.800", volume: "156409060" }, { day: "2016-09-29", open: "25.680", high: "26.300", low: "25.380", close: "25.990", volume: "128298586" }, { day: "2016-09-30", open: "25.900", high: "27.450", low: "25.810", close: "26.170", volume: "135841060" }, { day: "2016-10-10", open: "25.000", high: "25.980", low: "24.660", close: "25.970", volume: "143551183" }, { day: "2016-10-11", open: "25.750", high: "27.410", low: "25.560", close: "26.230", volume: "150728616" }, { day: "2016-10-12", open: "26.000", high: "26.670", low: "25.630", close: "26.600", volume: "87775400" }, { day: "2016-10-13", open: "26.510", high: "27.200", low: "26.300", close: "26.810", volume: "101557433" }, { day: "2016-10-14", open: "26.920", high: "27.250", low: "26.620", close: "26.840", volume: "91514322" }, { day: "2016-10-17", open: "26.500", high: "26.750", low: "25.730", close: "26.000", volume: "92915134" }, { day: "2016-10-18", open: "25.900", high: "26.130", low: "25.510", close: "26.000", volume: "64177355" }, { day: "2016-10-19", open: "26.000", high: "26.480", low: "25.790", close: "25.830", volume: "60460544" }, { day: "2016-10-20", open: "25.720", high: "26.690", low: "25.510", close: "25.940", volume: "89241935" }, { day: "2016-10-21", open: "25.700", high: "25.880", low: "25.160", close: "25.250", volume: "81870576" }, { day: "2016-10-24", open: "25.250", high: "25.450", low: "25.010", close: "25.240", volume: "53319635" }, { day: "2016-10-25", open: "25.200", high: "25.340", low: "24.800", close: "25.010", volume: "71149209" }, { day: "2016-10-26", open: "25.000", high: "25.250", low: "24.880", close: "25.170", volume: "58382553" }, { day: "2016-10-27", open: "25.070", high: "25.070", low: "24.700", close: "24.770", volume: "43647995" }, { day: "2016-10-28", open: "24.580", high: "25.250", low: "24.500", close: "24.750", volume: "63141299" }, { day: "2016-10-31", open: "24.750", high: "25.500", low: "24.510", close: "24.920", volume: "54827410" }, { day: "2016-11-01", open: "25.200", high: "26.100", low: "25.060", close: "25.790", volume: "135877207" }, { day: "2016-11-02", open: "25.450", high: "25.670", low: "24.900", close: "24.900", volume: "101736108" }, { day: "2016-11-03", open: "24.770", high: "25.190", low: "24.710", close: "24.870", volume: "51922997" }, { day: "2016-11-04", open: "24.840", high: "25.000", low: "24.460", close: "24.590", volume: "58209922" }, { day: "2016-11-07", open: "24.470", high: "24.580", low: "24.030", close: "24.160", volume: "41989356" }, { day: "2016-11-08", open: "24.160", high: "24.490", low: "24.150", close: "24.220", volume: "29006609" }, { day: "2016-11-09", open: "24.430", high: "26.640", low: "24.350", close: "26.300", volume: "401716139" }, { day: "2016-11-10", open: "26.000", high: "28.280", low: "25.580", close: "26.560", volume: "243030035" }, { day: "2016-11-11", open: "26.150", high: "26.770", low: "25.700", close: "25.990", volume: "95846280" }, { day: "2016-11-14", open: "26.230", high: "26.250", low: "25.310", close: "25.700", volume: "87878021" }, { day: "2016-11-15", open: "25.600", high: "27.800", low: "25.460", close: "26.940", volume: "148588573" }, { day: "2016-11-16", open: "26.640", high: "27.220", low: "26.090", close: "26.680", volume: "82711736" }, { day: "2016-11-17", open: "26.620", high: "27.000", low: "26.310", close: "27.000", volume: "59513404" }, { day: "2016-11-18", open: "27.800", high: "29.000", low: "27.510", close: "27.720", volume: "150316488" }, { day: "2016-11-21", open: "27.270", high: "28.250", low: "26.010", close: "27.400", volume: "139065510" }, { day: "2016-11-22", open: "27.040", high: "27.420", low: "26.900", close: "27.300", volume: "53038988" }, { day: "2016-11-23", open: "27.900", high: "28.070", low: "26.980", close: "27.220", volume: "74090683" }, { day: "2016-11-24", open: "27.080", high: "27.190", low: "26.700", close: "26.930", volume: "41224639" }, { day: "2016-11-25", open: "26.790", high: "27.600", low: "26.710", close: "27.200", volume: "64594659" }, { day: "2016-11-28", open: "27.360", high: "27.420", low: "25.480", close: "26.380", volume: "125593915" }, { day: "2016-11-29", open: "26.170", high: "26.530", low: "25.900", close: "26.160", volume: "78060059" }, { day: "2016-11-30", open: "27.350", high: "27.990", low: "26.770", close: "26.980", volume: "119318381" }, { day: "2016-12-01", open: "26.560", high: "27.300", low: "26.300", close: "26.970", volume: "95017059" }, { day: "2016-12-02", open: "26.710", high: "26.850", low: "26.370", close: "26.450", volume: "51572972" }, { day: "2016-12-05", open: "25.080", high: "25.980", low: "24.860", close: "25.500", volume: "68906336" }, { day: "2016-12-06", open: "25.150", high: "25.630", low: "25.150", close: "25.380", volume: "35645541" }, { day: "2016-12-07", open: "25.350", high: "25.370", low: "24.180", close: "25.140", volume: "49462389" }, { day: "2016-12-08", open: "25.100", high: "25.130", low: "24.700", close: "24.740", volume: "38055084" }, { day: "2016-12-09", open: "24.610", high: "25.170", low: "24.370", close: "24.810", volume: "48168045" }, { day: "2016-12-12", open: "24.780", high: "24.780", low: "23.070", close: "23.260", volume: "78901945" }, { day: "2016-12-13", open: "23.020", high: "23.280", low: "21.860", close: "23.060", volume: "48450098" }, { day: "2016-12-14", open: "22.670", high: "22.900", low: "22.200", close: "22.290", volume: "41281457" }, { day: "2016-12-15", open: "22.150", high: "22.620", low: "21.880", close: "22.330", volume: "35562867" }, { day: "2016-12-16", open: "22.120", high: "22.750", low: "22.120", close: "22.460", volume: "29397618" }, { day: "2016-12-19", open: "22.000", high: "22.000", low: "21.040", close: "21.100", volume: "70048497" }, { day: "2016-12-20", open: "21.000", high: "21.000", low: "20.150", close: "20.330", volume: "71906542" }, { day: "2016-12-21", open: "20.200", high: "20.700", low: "20.200", close: "20.480", volume: "53130409" }, { day: "2016-12-22", open: "20.300", high: "20.770", low: "20.100", close: "20.610", volume: "49971724" }, { day: "2016-12-23", open: "20.470", high: "20.670", low: "20.250", close: "20.300", volume: "32435908" }, { day: "2016-12-26", open: "20.210", high: "20.690", low: "20.120", close: "20.650", volume: "37812479" }, { day: "2016-12-27", open: "20.650", high: "21.980", low: "20.590", close: "21.420", volume: "74330548" }, { day: "2016-12-28", open: "21.240", high: "21.480", low: "21.010", close: "21.200", volume: "32151732" }, { day: "2016-12-29", open: "21.290", high: "21.320", low: "20.700", close: "20.840", volume: "32204601" }, { day: "2016-12-30", open: "20.880", high: "20.960", low: "20.450", close: "20.550", volume: "26115000" }, { day: "2017-01-03", open: "20.550", high: "20.880", low: "20.550", close: "20.730", volume: "21701669" }, { day: "2017-01-04", open: "20.740", high: "20.950", low: "20.450", close: "20.850", volume: "33155480" }, { day: "2017-01-05", open: "20.850", high: "21.230", low: "20.780", close: "20.930", volume: "31012563" }, { day: "2017-01-06", open: "20.940", high: "21.040", low: "20.610", close: "20.640", volume: "23591954" }, { day: "2017-01-09", open: "20.600", high: "20.750", low: "20.530", close: "20.660", volume: "15095445" }, { day: "2017-01-10", open: "20.670", high: "20.690", low: "20.520", close: "20.580", volume: "15917148" }, { day: "2017-01-11", open: "20.520", high: "20.630", low: "20.400", close: "20.400", volume: "16865220" }, { day: "2017-01-13", open: "21.000", high: "22.400", low: "20.900", close: "21.810", volume: "106426641" }, { day: "2017-01-16", open: "21.810", high: "21.810", low: "20.310", close: "21.000", volume: "55324012" }, { day: "2017-01-17", open: "20.730", high: "20.960", low: "20.390", close: "20.800", volume: "32104040" }, { day: "2017-01-18", open: "20.670", high: "21.180", low: "20.530", close: "20.920", volume: "32477225" }, { day: "2017-01-19", open: "20.700", high: "20.880", low: "20.550", close: "20.600", volume: "21688806" }, { day: "2017-01-20", open: "20.600", high: "20.830", low: "20.540", close: "20.680", volume: "21505311" }, { day: "2017-01-23", open: "20.700", high: "20.850", low: "20.700", close: "20.740", volume: "15637306" }, { day: "2017-01-24", open: "20.770", high: "20.800", low: "20.650", close: "20.690", volume: "15931840" }, { day: "2017-01-25", open: "20.680", high: "20.730", low: "20.520", close: "20.610", volume: "15464746" }, { day: "2017-01-26", open: "20.650", high: "20.770", low: "20.650", close: "20.680", volume: "14124823" }];
    });
    afterEach(() => {
        data = null;
    });
    it("test KDJ()", () => {
        ta_1.TA.KDJ(data);
        let stack = new Array();
        for (let i = 0; i < 9 - 1; i++) {
            stack.push(data[i]);
        }
        for (let i = 9 - 1; i < data.length; i++) {
            stack.push(data[i]);
            let close = +data[i].close;
            let high = +data[0].high;
            let low = +data[0].low;
            for (let m = 1; m < stack.length; m++) {
                if (+stack[i].high > high) {
                    high = +stack[i].high;
                }
                if (stack[i].low < low) {
                    low = +stack[i].low;
                }
            }
            let RSV = (close - low) / (high - low) * 100;
            let k;
            let d;
            if (i == 9 - 1) {
                k = 50;
                d = 50;
            }
            else {
                k = data[i - 1]["K"];
                d = data[i - 1]["D"];
            }
            expect(data[i]["K"]).toBeCloseTo(1 / 3 * RSV + (1 - 1 / 3) * k);
            expect(data[i]["D"]).toBeCloseTo(1 / 3 * data[i]["K"] + (1 - 1 / 3) * k);
            expect(data[i]["J"]).toBeCloseTo(3 * data[i]["K"] - 2 * data[i]["D"]);
        }
    });
    it("test KDJ(7)", () => {
        ta_1.TA.KDJ(data, 7);
        let stack = new Array();
        for (let i = 0; i < 7 - 1; i++) {
            stack.push(data[i]);
        }
        for (let i = 7 - 1; i < data.length; i++) {
            stack.push(data[i]);
            let close = +data[i].close;
            let high = +data[0].high;
            let low = +data[0].low;
            for (let m = 1; m < stack.length; m++) {
                if (+stack[i].high > high) {
                    high = +stack[i].high;
                }
                if (stack[i].low < low) {
                    low = +stack[i].low;
                }
            }
            let RSV = (close - low) / (high - low) * 100;
            let k;
            let d;
            if (i == 7 - 1) {
                k = 50;
                d = 50;
            }
            else {
                k = data[i - 1]["K"];
                d = data[i - 1]["D"];
            }
            expect(data[i]["K"]).toBeCloseTo(1 / 3 * RSV + (1 - 1 / 3) * k);
            expect(data[i]["D"]).toBeCloseTo(1 / 3 * data[i]["K"] + (1 - 1 / 3) * k);
            expect(data[i]["J"]).toBeCloseTo(3 * data[i]["K"] - 2 * data[i]["D"]);
        }
    });
    it("test KDJ(7,1/4)", () => {
        ta_1.TA.KDJ(data, 7, 1 / 4);
        let stack = new Array();
        for (let i = 0; i < 7 - 1; i++) {
            stack.push(data[i]);
        }
        for (let i = 7 - 1; i < data.length; i++) {
            stack.push(data[i]);
            let close = +data[i].close;
            let high = +data[0].high;
            let low = +data[0].low;
            for (let m = 1; m < stack.length; m++) {
                if (+stack[i].high > high) {
                    high = +stack[i].high;
                }
                if (stack[i].low < low) {
                    low = +stack[i].low;
                }
            }
            let RSV = (close - low) / (high - low) * 100;
            let k;
            let d;
            if (i == 7 - 1) {
                k = 50;
                d = 50;
            }
            else {
                k = data[i - 1]["K"];
                d = data[i - 1]["D"];
            }
            expect(data[i]["K"]).toBeCloseTo(1 / 4 * RSV + (1 - 1 / 4) * k);
            expect(data[i]["D"]).toBeCloseTo(1 / 4 * data[i]["K"] + (1 - 1 / 4) * k);
            expect(data[i]["J"]).toBeCloseTo(3 * data[i]["K"] - 2 * data[i]["D"]);
        }
    });
});
