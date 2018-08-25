$(function () {
 window.onresize = function ()　{
            lineChart1.resize();
            lineChart2.resize();
            lineChart3.resize();
                }
                $.ajaxSetup({async:false}); 
                function getDate(datestr){
  var temp = datestr.split("-");
  var date = new Date(temp[0],temp[1],temp[2]);
  return date;
}
function getDateRange(start,end){
var dr=[];
var startTime = getDate(start);
var endTime = getDate(end);
while((endTime.getTime()-startTime.getTime())>=0){
  var year = startTime.getFullYear();
  var month = startTime.getMonth()<9?"0"+(startTime.getMonth()+1).toString():startTime.getMonth();
  var day = startTime.getDate().toString().length==1?"0"+startTime.getDate():startTime.getDate();
  dr.push(year+"-"+month+"-"+day);
  startTime.setDate(startTime.getDate()+1);
}
return dr;
}
dr=getDateRange('2015-02-01','2017-00-31');

var lineChart1 = echarts.init(document.getElementById('demo-stk-lft-tab-1'));
var zhishu={"借款人总待还本金":[],"历史成功借款金额":[],"有历史逾期还款的借款人数":[],"借款成功数量":[],"借款金额":[]}       
$.getJSON("data/标的指数.txt",function(data){ 
               for(var i in data){
                zhishu['借款人总待还本金'].push(data[i]['借款人总待还本金']);
                zhishu['历史成功借款金额'].push(data[i]['历史成功借款金额']);
                zhishu['有历史逾期还款的借款人数'].push(data[i]['有历史逾期还款的借款人数']);
                zhishu['借款成功数量'].push(data[i]['借款成功数量']);
                zhishu['借款金额'].push(data[i]['借款金额']);
                
                }

                }); 
               
option1= {
    
    title: {
        text: '借款成功数量',
        left: 'center',
         textStyle:{
                      color:"gray",
                    }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false
        }
    },

    dataZoom: [
       {
                type: 'slider',
                show: true,
                realtime: true,
                start: 0,
                end: 30,
                xAxisIndex: [0],
                handleSize: 10,//滑动条的 左右2个滑动条的大小
                height: 8,//组件高度
                left: 30, //左边的距离
                right: 40,//右边的距离
                bottom: 30,//右边的距离
                handleColor: '#ddd',//h滑动图标的颜色
                handleStyle: {
                    borderColor: "#cacaca",
                    borderWidth: "1",
                    shadowBlur: 2,
                    background: "#ddd",
                    shadowColor: "#ddd",
                },
                fillerColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    //给颜色设置渐变色 前面4个参数，给第一个设置1，第四个设置0 ，就是水平渐变
                    //给第一个设置0，第四个设置1，就是垂直渐变
                    offset: 0,
                    color: '#1eb5e5'
                }, {
                    offset: 1,
                    color: '#5ccbb1'
                }]),
                backgroundColor: '#ddd',//两边未选中的滑动条区域的颜色
                showDataShadow: false,//是否显示数据阴影 默认auto
                showDetail: false,//即拖拽时候是否显示详细数值信息 默认true
                handleIcon: 'M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z',
                filterMode: 'filter',
            },
        {
            type: 'inside',
            realtime: true,
            start: 0,
            end: 30,
           
        }
    ],
    grid: {
       left:100,
        right: 50,
        // height: '35%'
    },
    xAxis : 
        {
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: true},
            data: dr
        },
        
    yAxis : 
        {
            name : '数量/笔',
            type : 'value',
          //  max : 600
        },
       
    series : [
        {
            name:'借款成功数量',
            type:'line',
            symbolSize: 8,
            hoverAnimation: false,
            data:zhishu['借款成功数量']
        },
        
    ]
};

    lineChart1.setOption(option1, true);
var lineChart2 = echarts.init(document.getElementById('demo-stk-lft-tab-2'));

option2= {
    
    title: {
        text: '借款人借款金额',
        left: 'center',
         textStyle:{
                      color:"gray",
                    }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false
        }
    },

    dataZoom: [
        
        {
                type: 'slider',
                show: true,
                realtime: true,
                start: 0,
                end: 30,
                xAxisIndex: [0],
                handleSize: 10,//滑动条的 左右2个滑动条的大小
                height: 8,//组件高度
                left: 30, //左边的距离
                right: 40,//右边的距离
                bottom: 30,//右边的距离
                handleColor: '#ddd',//h滑动图标的颜色
                handleStyle: {
                    borderColor: "#cacaca",
                    borderWidth: "1",
                    shadowBlur: 2,
                    background: "#ddd",
                    shadowColor: "#ddd",
                },
                fillerColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    //给颜色设置渐变色 前面4个参数，给第一个设置1，第四个设置0 ，就是水平渐变
                    //给第一个设置0，第四个设置1，就是垂直渐变
                    offset: 0,
                    color: '#1eb5e5'
                }, {
                    offset: 1,
                    color: '#5ccbb1'
                }]),
                backgroundColor: '#ddd',//两边未选中的滑动条区域的颜色
                showDataShadow: false,//是否显示数据阴影 默认auto
                showDetail: false,//即拖拽时候是否显示详细数值信息 默认true
                handleIcon: 'M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z',
                filterMode: 'filter',
            },
        {
            type: 'inside',
            realtime: true,
            start: 0,
            end: 30,
           
        }
    ],
    grid: {
       left:100,
        right: 50,
        // height: '35%'
    },
    xAxis : 
        {
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: true},
            data: dr
        },
        
    yAxis : 
        {
            name : '金额/元',
            type : 'value',
          //  max : 600
        },
       
    series : [
        {
            name:'借款人借款金额',
            type:'line',
            symbolSize: 8,
            hoverAnimation: false,
            data:zhishu['借款金额']
        },
        
    ]
};

    lineChart2.setOption(option2, true);
var lineChart3 = echarts.init(document.getElementById('demo-stk-lft-tab-3'));

option3= {
    
    title: {
        text: '历史逾期还款人数',
        left: 'center',
         textStyle:{
                      color:"gray",
                    }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false
        }
    },

    dataZoom: [
       {
                type: 'slider',
                show: true,
                realtime: true,
                start: 0,
                end: 30,
                xAxisIndex: [0],
                handleSize: 10,//滑动条的 左右2个滑动条的大小
                height: 8,//组件高度
                left: 30, //左边的距离
                right: 40,//右边的距离
                bottom: 30,//右边的距离
                handleColor: '#ddd',//h滑动图标的颜色
                handleStyle: {
                    borderColor: "#cacaca",
                    borderWidth: "1",
                    shadowBlur: 2,
                    background: "#ddd",
                    shadowColor: "#ddd",
                },
                fillerColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    //给颜色设置渐变色 前面4个参数，给第一个设置1，第四个设置0 ，就是水平渐变
                    //给第一个设置0，第四个设置1，就是垂直渐变
                    offset: 0,
                    color: '#1eb5e5'
                }, {
                    offset: 1,
                    color: '#5ccbb1'
                }]),
                backgroundColor: '#ddd',//两边未选中的滑动条区域的颜色
                showDataShadow: false,//是否显示数据阴影 默认auto
                showDetail: false,//即拖拽时候是否显示详细数值信息 默认true
                handleIcon: 'M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z',
                filterMode: 'filter',
            },
        {
            type: 'inside',
            realtime: true,
            start: 0,
            end: 30,
           
        }
    ],
    grid: {
       left:100,
        right: 50,
        // height: '35%'
        
    },
    xAxis : 
        {
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: true},
            data: dr
        },
        
    yAxis : 
        {
            name : '人数/人',
            type : 'value',
          //  max : 600
        },
       
    series : [
        {
            name:'历史逾期还款人数',
            type:'line',
            symbolSize: 8,
            hoverAnimation: false,
            data:zhishu['有历史逾期还款的借款人数']
        },
        
    ]
};

    lineChart3.setOption(option3, true);
var lineChart4 = echarts.init(document.getElementById('demo-stk-lft-tab-4'));
option4= {
    
    title: {
        text: '借款人总待还本金',
        left: 'center',
         textStyle:{
                      color:"gray",
                    }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false
        }
    },

    dataZoom: [
       {
                type: 'slider',
                show: true,
                realtime: true,
                start: 0,
                end: 30,
                xAxisIndex: [0],
                handleSize: 10,//滑动条的 左右2个滑动条的大小
                height: 8,//组件高度
                left: 30, //左边的距离
                right: 40,//右边的距离
                bottom: 30,//右边的距离
                handleColor: '#ddd',//h滑动图标的颜色
                handleStyle: {
                    borderColor: "#cacaca",
                    borderWidth: "1",
                    shadowBlur: 2,
                    background: "#ddd",
                    shadowColor: "#ddd",
                },
                fillerColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    //给颜色设置渐变色 前面4个参数，给第一个设置1，第四个设置0 ，就是水平渐变
                    //给第一个设置0，第四个设置1，就是垂直渐变
                    offset: 0,
                    color: '#1eb5e5'
                }, {
                    offset: 1,
                    color: '#5ccbb1'
                }]),
                backgroundColor: '#ddd',//两边未选中的滑动条区域的颜色
                showDataShadow: false,//是否显示数据阴影 默认auto
                showDetail: false,//即拖拽时候是否显示详细数值信息 默认true
                handleIcon: 'M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z',
                filterMode: 'filter',
            },
        {
            type: 'inside',
            realtime: true,
            start: 0,
            end: 30,
           
        }
    ],
    grid: {
       left:100,
        right: 50,
        // height: '35%'
    },
    xAxis : 
        {
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: true},
            data: dr
        },
        
    yAxis : 
        {
            name : '金额/元',
            type : 'value',
          //  max : 600
        },
       
    series : [
        {
            name:'借款人总待还本金',
            type:'line',
            symbolSize: 8,
            hoverAnimation: false,
            data:zhishu['有历史逾期还款的借款人数']
        },
        
    ]
};

    lineChart4.setOption(option4, true);
var lineChart5 = echarts.init(document.getElementById('demo-stk-lft-tab-5'));

option5= {
    
    title: {
        text: '历史成功借款金额',
        left: 'center',
         textStyle:{
                      color:"gray",
                    }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false
        }
    },

    dataZoom: [
        {
                type: 'slider',
                show: true,
                realtime: true,
                start: 0,
                end: 30,
                xAxisIndex: [0],
                handleSize: 10,//滑动条的 左右2个滑动条的大小
                height: 8,//组件高度
                left: 30, //左边的距离
                right: 40,//右边的距离
                bottom: 30,//右边的距离
                handleColor: '#ddd',//h滑动图标的颜色
                handleStyle: {
                    borderColor: "#cacaca",
                    borderWidth: "1",
                    shadowBlur: 2,
                    background: "#ddd",
                    shadowColor: "#ddd",
                },
                fillerColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    //给颜色设置渐变色 前面4个参数，给第一个设置1，第四个设置0 ，就是水平渐变
                    //给第一个设置0，第四个设置1，就是垂直渐变
                    offset: 0,
                    color: '#1eb5e5'
                }, {
                    offset: 1,
                    color: '#5ccbb1'
                }]),
                backgroundColor: '#ddd',//两边未选中的滑动条区域的颜色
                showDataShadow: false,//是否显示数据阴影 默认auto
                showDetail: false,//即拖拽时候是否显示详细数值信息 默认true
                handleIcon: 'M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z',
                filterMode: 'filter',
            },
        {
            type: 'inside',
            realtime: true,
            start: 0,
            end: 30,
           
        }
    ],
    grid: {
       left:100,
        right: 50,
        // height: '35%'
    },
    xAxis : 
        {
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: true},
            data: dr
        },
        
    yAxis : 
        {
            name : '金额/元',
            type : 'value',
          //  max : 600
        },
       
    series : [
        {
            name:'历史成功借款金额',
            type:'line',
            symbolSize: 8,
            hoverAnimation: false,
            data:zhishu['历史成功借款金额']
        },
        
    ]
};

    lineChart5.setOption(option5, true);

	 });