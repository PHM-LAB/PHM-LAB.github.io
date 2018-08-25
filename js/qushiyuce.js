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
dr=getDateRange('2015-02-01','2017-08-15');
df=getDateRange('2015-02-01','2017-00-31');

 $.ajaxSetup({async:false}); 
var lineChart1 = echarts.init(document.getElementById('demo-stk-lft-tab-1'));
var zhishu={"借款人总待还本金":[],"历史成功借款金额":[],"有历史逾期还款的借款人数":[],"借款成功数量":[],"借款金额":[]}
var a1={"fit":[],"upr":[],'lwr':[],'h-l':[]};
for(var i=0;i< df.length;i++){
    a1['fit'].push('-');
    a1['upr'].push('-');
    a1['lwr'].push('-');
    a1['h-l'].push('-');
   
}

  $.getJSON("data/标的指数.txt",function(data){ 
               for(var i in data){
                zhishu['借款人总待还本金'].push(data[i]['借款人总待还本金']);
                zhishu['历史成功借款金额'].push(data[i]['历史成功借款金额']);
                zhishu['有历史逾期还款的借款人数'].push(data[i]['有历史逾期还款的借款人数']);
                zhishu['借款成功数量'].push(data[i]['借款成功数量']);
                zhishu['借款金额'].push(data[i]['借款金额']);
                
                }

                }); 
  $.getJSON("data/借款成功数量1.txt",function(data){ 
               for(var i in data){
                a1['fit'].push(data[i]['fit']);
                a1['upr'].push(data[i]['upr']);
                a1['lwr'].push(data[i]['lwr']);
                a1['h-l'].push(data[i]['upr']-data[i]['lwr']);
                }
                zhishu['借款成功数量'].push(data[0]['fit']);
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
     toolbox: {
        feature: {
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },

    dataZoom: [
       {
                type: 'slider',
                show: true,
                realtime: true,
                start:500,
                end: 70,
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
            start: 500,
            end: 70,
           
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
          //  max : 700
        },
       
    series : [
        {
            name:'借款成功数量',
            type:'line',
            symbolSize: 8,
            hoverAnimation: false,

            itemStyle : {  
                                normal : {  
                                     color:"#F7A71C",
                                    lineStyle:{  
                                        color:'#F7A71C'  
                                    }  
                                }  
                            }, 
            data:zhishu['借款成功数量']
        },
        {
            name:'借款成功数量',
            type:'line',
            symbolSize: 8,
            hoverAnimation: false,

            
            data:a1['fit']
        },
        {
            name:'置信下界',
            type:'line',
             stack: '总量',
            symbolSize: 8,
            hoverAnimation: false,
            itemStyle : {  
                                normal : {  
                                     color:"#fff",
                                    lineStyle:{  
                                        color:'#fff'  
                                    }  
                                }  
                            }, 
            areaStyle : {  
                                normal : {  
                                     color:"#fff",
                                   
                                }  
                            }, 
            data:a1['lwr']
        },
        {
            name:'置信上界',
            type:'line',
             stack: '总量',
             itemStyle : {  
                                normal : {  
                                     color:"#fff",
                                    lineStyle:{  
                                        color:'#fff'  
                                    }  
                                }  
                            }, 
            areaStyle : {  
                                normal : {  
                                     color:"#78ADF5",
                                      
                                   
                                }  
                            }, 
            data:a1['h-l']
        },
         
        
    ]
};

    lineChart1.setOption(option1, true);
var lineChart2 = echarts.init(document.getElementById('demo-stk-lft-tab-2'));

var b1={"fit":[],"upr":[],'lwr':[],'h-l':[]};
for(var i=0;i< df.length;i++){
    b1['fit'].push('-');
    b1['upr'].push('-');
    b1['lwr'].push('-');
    b1['h-l'].push('-');
}

 
 
  $.getJSON("data/借款金额1.txt",function(data){ 
               for(var i in data){
                b1['fit'].push(data[i]['fit']);
                b1['upr'].push(data[i]['upr']);
                b1['lwr'].push(data[i]['lwr']);
                b1['h-l'].push(data[i]['upr']-data[i]['lwr'])
                }
                zhishu['借款金额'].push(data[0]['fit']);
                }); 

          
            
                   
        
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
    toolbox: {
        feature: {
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    dataZoom: [
         {
                type: 'slider',
                show: true,
                realtime: true,
                start: 500,
                end: 70,
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
            start: 500,
            end: 70,
           
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
          //  max : 700
        },
       
    series : [
        {
            name:'借款人借款金额',
            type:'line',
            symbolSize: 8,
            hoverAnimation: false,

            itemStyle : {  
                                normal : {  
                                     color:"#F7A71C",
                                    lineStyle:{  
                                        color:'#F7A71C'  
                                    }  
                                }  
                            }, 
            data:zhishu['借款金额']
        },
        {
            name:'借款人借款金额',
            type:'line',
            symbolSize: 8,
            hoverAnimation: false,

            
            data:b1['fit']
        },
        {
            name:'置信下界',
            type:'line',
             stack: '总量',
            symbolSize: 8,
            hoverAnimation: false,
            itemStyle : {  
                                normal : {  
                                     color:"#fff",
                                    lineStyle:{  
                                        color:'#fff'  
                                    }  
                                }  
                            }, 
            areaStyle : {  
                                normal : {  
                                     color:"#fff",
                                   
                                }  
                            }, 
            data:b1['lwr']
        },
        {
            name:'置信上界',
            type:'line',
             stack: '总量',
             itemStyle : {  
                                normal : {  
                                     color:"#fff",
                                    lineStyle:{  
                                        color:'#fff'  
                                    }  
                                }  
                            }, 
            areaStyle : {  
                                normal : {  
                                     color:"#78ADF5",
                                      
                                   
                                }  
                            }, 
            data:b1['h-l']
        },
         
        
    ]
};

    lineChart2.setOption(option2, true);
var lineChart3 = echarts.init(document.getElementById('demo-stk-lft-tab-3'));
var c1={"fit":[],"upr":[],'lwr':[],'h-l':[]};
for(var i=0;i< df.length;i++){
    c1['fit'].push('-');
    c1['upr'].push('-');
    c1['lwr'].push('-');
    c1['h-l'].push('-');
}

 
  $.getJSON("data/有历史逾期还款的借款人数1.txt",function(data){ 
               for(var i in data){
                c1['fit'].push(data[i]['fit']);
                c1['upr'].push(data[i]['upr']);
                c1['lwr'].push(data[i]['lwr']);
                c1['h-l'].push(data[i]['upr']-data[i]['lwr']);
                }
                zhishu['有历史逾期还款的借款人数'].push(data[0]['fit']);
                }); 

          
            
                   
        
option3= {
    
    title: {
        text: '逾期还款人数',
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
    toolbox: {
        feature: {
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    dataZoom: [
         {
                type: 'slider',
                show: true,
                realtime: true,
                start: 500,
                end: 70,
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
            start: 500,
            end: 70,
           
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
          //  max : 700
        },
       
    series : [
        {
            name:'逾期还款人数',
            type:'line',
            symbolSize: 8,
            hoverAnimation: false,

            itemStyle : {  
                                normal : {  
                                     color:"#F7A71C",
                                    lineStyle:{  
                                        color:'#F7A71C'  
                                    }  
                                }  
                            }, 
            data: zhishu['有历史逾期还款的借款人数']
        },
        {
            name:'逾期还款人数',
            type:'line',
            symbolSize: 8,
            hoverAnimation: false,

            
            data:c1['fit']
        },
        {
            name:'置信下界',
            type:'line',
             stack: '总量',
            symbolSize: 8,
            hoverAnimation: false,
            itemStyle : {  
                                normal : {  
                                     color:"#fff",
                                    lineStyle:{  
                                        color:'#fff'  
                                    }  
                                }  
                            }, 
            areaStyle : {  
                                normal : {  
                                     color:"#fff",
                                   
                                }  
                            }, 
            data:c1['lwr']
        },
        {
            name:'置信上界',
            type:'line',
             stack: '总量',
             itemStyle : {  
                                normal : {  
                                     color:"#fff",
                                    lineStyle:{  
                                        color:'#fff'  
                                    }  
                                }  
                            }, 
            areaStyle : {  
                                normal : {  
                                     color:"#78ADF5",
                                      
                                   
                                }  
                            }, 
            data:c1['h-l']
        },
         
        
    ]
};

    lineChart3.setOption(option3, true);
    var lineChart4 = echarts.init(document.getElementById('demo-stk-lft-tab-4'));

var d1={"fit":[],"upr":[],'lwr':[],'h-l':[]};
for(var i=0;i< df.length;i++){
    d1['fit'].push('-');
    d1['upr'].push('-');
    d1['lwr'].push('-');
    d1['h-l'].push('-');
}

 
  $.getJSON("data/借款人总待还本金1.txt",function(data){ 
               for(var i in data){
                d1['fit'].push(data[i]['fit']);
                d1['upr'].push(data[i]['upr']);
                d1['lwr'].push(data[i]['lwr']);
                d1['h-l'].push(data[i]['upr']-data[i]['lwr']);
                }
                zhishu['借款人总待还本金'].push(data[0]['fit']);
                }); 

          
            
                   
        
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
    toolbox: {
        feature: {
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    dataZoom: [
        {
                type: 'slider',
                show: true,
                realtime: true,
                start: 500,
                end: 70,
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
            start: 500,
            end: 70,
           
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
          //  max : 700
        },
       
    series : [
        {
            name:'借款人总待还本金',
            type:'line',
            symbolSize: 8,
            hoverAnimation: false,

            itemStyle : {  
                                normal : {  
                                     color:"#F7A71C",
                                    lineStyle:{  
                                        color:'#F7A71C'  
                                    }  
                                }  
                            }, 
            data:zhishu['借款人总待还本金']
        },
        {
            name:'借款人总待还本金',
            type:'line',
            symbolSize: 8,
            hoverAnimation: false,

            
            data:d1['fit']
        },
        {
            name:'置信下界',
            type:'line',
             stack: '总量',
            symbolSize: 8,
            hoverAnimation: false,
            itemStyle : {  
                                normal : {  
                                     color:"#fff",
                                    lineStyle:{  
                                        color:'#fff'  
                                    }  
                                }  
                            }, 
            areaStyle : {  
                                normal : {  
                                     color:"#fff",
                                   
                                }  
                            }, 
            data:d1['lwr']
        },
        {
            name:'置信上界',
            type:'line',
             stack: '总量',
             itemStyle : {  
                                normal : {  
                                     color:"#fff",
                                    lineStyle:{  
                                        color:'#fff'  
                                    }  
                                }  
                            }, 
            areaStyle : {  
                                normal : {  
                                     color:"#78ADF5",
                                      
                                   
                                }  
                            }, 
            data:d1['h-l']
        },
         
        
    ]
};

    lineChart4.setOption(option4, true);
    var lineChart5 = echarts.init(document.getElementById('demo-stk-lft-tab-5'));
var e1={"fit":[],"upr":[],'lwr':[],'h-l':[]};
for(var i=0;i< df.length;i++){
    e1['fit'].push('-');
    e1['upr'].push('-');
    e1['lwr'].push('-');
    e1['h-l'].push('-');
}

 
  $.getJSON("data/借款人历史成功借款金额1.txt",function(data){ 
               for(var i in data){
                e1['fit'].push(data[i]['fit']);
                e1['upr'].push(data[i]['upr']);
                e1['lwr'].push(data[i]['lwr']);
                e1['h-l'].push(data[i]['upr']-data[i]['lwr']);
                }
                zhishu['历史成功借款金额'].push(data[0]['fit']);
                }); 

          
            
                   
     
option5= {
    
    title: {
        text: '成功借款金额',
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
    toolbox: {
        feature: {
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    dataZoom: [
       {
                type: 'slider',
                show: true,
                realtime: true,
                start: 500,
                end: 70,
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
            start: 500,
            end: 70,
           
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
          //  max : 700
        },
       
    series : [
        {
            name:'成功借款金额',
            type:'line',
            symbolSize: 8,
            hoverAnimation: false,

            itemStyle : {  
                                normal : {  
                                     color:"#F7A71C",
                                    lineStyle:{  
                                        color:'#F7A71C'  
                                    }  
                                }  
                            }, 
            data:zhishu['历史成功借款金额']
        },
        {
            name:'成功借款金额',
            type:'line',
            symbolSize: 8,
            hoverAnimation: false,

            
            data:e1['fit']
        },
        {
            name:'置信下界',
            type:'line',
             stack: '总量',
            symbolSize: 8,
            hoverAnimation: false,
            itemStyle : {  
                                normal : {  
                                     color:"#fff",
                                    lineStyle:{  
                                        color:'#fff'  
                                    }  
                                }  
                            }, 
            areaStyle : {  
                                normal : {  
                                     color:"#fff",
                                   
                                }  
                            }, 
            data:e1['lwr']
        },
        {
            name:'置信上界',
            type:'line',
             stack: '总量',
             itemStyle : {  
                                normal : {  
                                     color:"#fff",
                                    lineStyle:{  
                                        color:'#fff'  
                                    }  
                                }  
                            }, 
            areaStyle : {  
                                normal : {  
                                     color:"#78ADF5",
                                      
                                   
                                }  
                            }, 
            data:e1['h-l']
        },
         
        
    ]
};

    lineChart5.setOption(option5, true);
	 });