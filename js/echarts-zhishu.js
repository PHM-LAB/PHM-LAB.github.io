$(function () {


                window.onresize = function ()　{
            mapChart1.resize();
            
                }

$.ajaxSetup({async:false});
var dd=[];
$.getJSON("data/result2016.txt",function(data){
        dd=data;
     });
kk=[];
volume=[];
rs=[];
time=[];
for (var item in dd){
    for (var date in dd[item]){
        ss=[];
        time.push(date);
        volume.push(dd[item][date][5]['成交量']);
        rs.push(dd[item][date][6]['rsi']);
       
           
               
                ss.push(dd[item][date][2]['开盘']);
                ss.push(dd[item][date][2]['收盘']);
                ss.push(dd[item][date][2]['最低']);
                ss.push(dd[item][date][2]['最高']);

           

            kk.push(ss);
        }
    }
   
total=[];
count=[];
for(var item in dd[dd.length-1]){
    total=dd[dd.length-1][item][0];
    count=dd[dd.length-1][item][1];
}


if(total['flag']==1){
$('#total').css('color','#d81e06');
$('#flag').attr('src','picture/up.png');
$('#updown').css('color','#d81e06');
$('#rate').css('color','#d81e06');
$('#total').html(total['总体指数']);
$('#updown').html(total['涨跌']);
$('#rate').html(total['涨跌比率']);
}
if(total['flag']==0){
$('#total').css('color','#008000');
$('#flag').attr('src','picture/down.png');
$('#updown').css('color','#008000');
$('#rate').css('color','#008000');
$('#total').html(total['总体指数']);
$('#updown').html(total['涨跌']);
$('#rate').html(total['涨跌比率']);
}
$('#highest').html(count['当日最高借款金额']);
$('#lowest').html(count['当日最低借款金额']);
$('#success_rent_money').html(count['当日累计成功借款金额']);
$('#success_rent_num').html(count['当日累计成功借款数量']);
$('#total_success_money').html(count['总累计成功借款金额']);
$('#total_success_num').html(count['总累计成功借款数量']);
//数组处理
function splitData(rawData) {
  var datas = [];
  var times = [];
  var vols = [];
  var macds = []; var difs = []; var deas = [];
  for (var i = 0; i < rawData.length; i++) {
      datas.push(rawData[i].slice(1,5));
      times.push(rawData[i].splice(0, 1)[0]);
      vols.push(rawData[i][4]);
      macds.push(rawData[i][6]);
      difs.push(rawData[i][7]);
      deas.push(rawData[i][8]);
  }
  return {
      datas: datas,
      times: times,
      vols: vols,
      macds: macds,
      difs: difs,
      deas: deas
  };
}



//MA计算公式
function calculateMA(dayCount) {
  var result = [];
  for (var i = 0, len = time.length; i < len; i++) {
      if (i < dayCount) {
          result.push('-');
          continue;
      }
      var sum = 0;
      for (var j = 0; j < dayCount; j++) {
          sum += kk[i - j][1];
      }
      result.push((sum / dayCount).toFixed(2));
  }
  return result;
}
var mapChart1 = echarts.init(document.getElementById("kline"));
var option = {
     backgroundColor: '#21202D',
  title: {
      text: '',
      left: 0
  },
  tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'line'
      }
  },
  legend: {
      data: ['KLine', 'MA5','MA10','MA20','MA30'],
      textStyle:{color: '#8392A5' }
  },
  grid: [           {
      left: '6%',
      right: '1%',
      height: '55%'
  },{
      left: '6%',
      right: '1%',
      top: '67%',
      height: '10%'
  },{
      left: '6%',
      right: '1%',
      top: '80%',
      height: '14%'
  }],
  xAxis: [{
      type: 'category',
      data: time,
      scale: true,
      boundaryGap: false,
      axisLine: { onZero: false,
      lineStyle: { color: '#8392A5' } },
      splitLine: { show: false },
      splitNumber: 20,
      min: 'dataMin',
      max: 'dataMax'
  },{
      type: 'category',
      gridIndex: 1,
      data: time,
      axisLine: { 
      lineStyle: { color: '#8392A5' } },
      axisLabel: {show: false}
  },{
      type: 'category',
      gridIndex: 2,
      data: time,
      axisLine: { 
      lineStyle: { color: '#8392A5' } },
      axisLabel: {show: false}
  }],
  yAxis: [{
      scale: true,
      splitArea: {
          show: false
      },
       splitLine: { show: false },
       axisLine: {
      lineStyle: { color: '#8392A5' } },
  },{
      gridIndex: 1,
      splitNumber: 3,
     axisLine: { onZero: false,
      lineStyle: { color: '#8392A5' } },
      axisTick: {show: false},
      splitLine: {show: false},
      axisLabel: {show: true}
  },{
      gridIndex: 2,
      splitNumber: 4,
     axisLine: { onZero: false,
      lineStyle: { color: '#8392A5' } },
      axisTick: {show: false},
      splitLine: {show: false},
      axisLabel: {show: true}
  }],
  dataZoom: [{
        textStyle: {
            color: '#8392A5'
        },
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        dataBackground: {
            areaStyle: {
                color: '#8392A5'
            },
            lineStyle: {
                opacity: 0.8,
                color: '#8392A5'
            }
        },
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2,
        },
         type: 'inside',
          xAxisIndex: [0, 0],
          start: 60,
          end: 100
    },
          {
          show: true,
          xAxisIndex: [0, 1],
          type: 'slider',
          top: '97%',
          start: 60,
          end: 100
    },{
      show: false,
      xAxisIndex: [0, 2],
      type: 'slider',
      start: 60,
      end: 100
  }],
  series: [{
          name: 'KLine',
          type: 'candlestick',
          data: kk,
          itemStyle: {
              normal: {
                  color: '#ef232a',
                  color0: '#14b143',
                  borderColor: '#ef232a',
                  borderColor0: '#14b143'
              }
          },
          
          markPoint: {
              data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
              ]
          },
         
      }, {
          name: 'MA5',
          type: 'line',
          data: calculateMA(5),
          smooth: true,
          lineStyle: {
              normal: {
                  opacity: 0.5
              }
          }
      },
      {
          name: 'MA10',
          type: 'line',
          data: calculateMA(10),
          smooth: true,
          lineStyle: {
              normal: {
                  opacity: 0.5
              }
          }
      },
      {
          name: 'MA20',
          type: 'line',
          data: calculateMA(20),
          smooth: true,
          lineStyle: {
              normal: {
                  opacity: 0.5
              }
          }
      },
      {
          name: 'MA30',
          type: 'line',
          data: calculateMA(30),
          smooth: true,
          lineStyle: {
              normal: {
                  opacity: 0.5
              }
          }
      },
      {
          name: 'Volumn',
          type: 'bar',
          xAxisIndex: 1,
          yAxisIndex: 1,
          data: volume,
          itemStyle: {
              normal: {
                  color: function(params) {
                      var colorList;
                      if (volume[params.dataIndex]>volume[params.dataIndex-1]) {

                          colorList = '#ef232a';
                      } else {
                          colorList = '#14b143';
                      }
                      return colorList;
                  },
              }
          }
      },{
          name: 'rsi',
          type: 'line',
          xAxisIndex: 2,
          yAxisIndex: 2,
          color:["orange"],
          data: rs
      }
  ]
};  
 mapChart1.setOption(option, true);
 mapChart1.on('click', function (params) {
    alert(params.name);
    });

  });

