$(function () {
    window.onresize = function ()　{
            gaugeChart.resize();
                }
                var gaugeChart = echarts.init(document.getElementById("echarts-gauge-chart"));


option = {
    title: {
        x: "center",
        top: 10,


    },
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    series: [{
        name: '信用分',
        type: 'gauge',
         
        radius : '100%',
        // startAngle: 180,
        // endAngle: 0,
        min:350,
        max:950,
        axisLine: {
            show: true,
            lineStyle: {
                width: 30,
                shadowBlur: 0,
                color: [[0.2, '#E43F3D'],[0.4, '#E98E2C'],[0.6, '#DDBD4D'],[0.8, '#7CBB55'],[1, '#9CD6CE']]
            }
        },
        axisTick: {
            show: true,
            splitNumber: 1
        },
        splitLine:{
            show: false,
        },
        axisLabel: {
            formatter: function(e) {
                switch (e + "") {
                    case "410":
                        return "较差";
                    case "530":
                        return "中等";
                    case "650":
                        return "良好";
                    case "770":
                        return "优秀";
                    case "890":
                        return "极好";
                    default:
                        return e;
                }
            },
            textStyle: {
                fontSize: 15,
                fontWeight: ""
            }
        },
        pointer: {
            show: true,
        },
        detail: {
            formatter: '{value}',
            // offsetCenter: [0, -10],
            textStyle: {
                fontSize: 50
            }
        },
        data: [{
            name: "信用分",
            value: 720
        }]
    }]
};
 gaugeChart.setOption(option, true);
setInterval(function () {
    option.series[0].data[0].value = (Math.random() * 1000).toFixed(2) - 0;
    gaugeChart.setOption(option, true);
},2000);
});