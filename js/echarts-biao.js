$(function () {


                window.onresize = function ()　{
            barChart1.resize();
            pieChart1.resize();
            pieChart2.resize();
            pieChart3.resize();
            pieChart4.resize();
            pieChart5.resize();
            barChart2.resize();
            barChart3.resize();
            barChart4.resize();
            barChart5.resize();
                }
                var data=[];
            urls=["ChuShiPingJi.txt","JieKuanType.txt","ShiFouShouBiao.txt","JieKuanJinE.txt",
            "历史逾期还款期数.txt","历史正常还款期数.txt","历史成功借款次数.txt","历史成功借款金额.txt"];
            $.ajaxSetup({async:false}); 
           function getdata(urls){
            for(var url in urls){
                // alert(urls[url]);
             var arr={
                };
            $.getJSON("data/"+urls[url],function(data){ 
               
                arr=data;
                
              

                }); 
                data.push(arr);

             }
          
           return data;
         }
         var qixian_list=[];
$.getJSON("data/JieKuanQiXian.txt",function(data){
                qixian_list=data;

                }); 
var rate_list=[];
$.getJSON("data/JieKuanRate.txt",function(data){
                rate_list=data;

                }); 
        var a=getdata(urls);

    var barChart1 = echarts.init(document.getElementById("echarts-bar1-chart"));
     var ops1=[];
    function aa(ops){

var i =0;
  for(var item in a[1]){

  var qixian=[];  
 for(var j in qixian_list[i][item]){
    var obj=new Object(); 
    obj.name=j; 
    obj.value=qixian_list[i][item][j];
qixian.push(obj);
    }
  var rate=[];  
 for(var j in rate_list[i][item]){
    var obj=new Object(); 
    obj.name=j; 
    obj.value=rate_list[i][item][j];
rate.push(obj);
    }
i=i+1;

        ops.push(
             {

           title: {text: item},
            series: [
               
                

                {
                      data:a[3][item], 

                  },

     
            ]
        });
    }
return ops;
}
ops1=aa(ops1);

   option1 = {
    
    baseOption: {

        timeline: {
            // y: 0,
            top:"bottom",
            show:false,
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 1200,
            // controlStyle: {
            //     position: 'left'
            // },
            data: [
                '2015-01','2015-02','2015-03','2015-04','2015-05','2015-06','2015-07','2015-08','2015-09',
                '2015-10','2015-11','2015-12','2016-01','2016-02','2016-03','2016-04','2016-05','2016-06',
                '2016-07','2016-08','2016-09','2016-10','2016-11','2016-12','2017-01'
               
            ],
            label: {
                formatter : function(s) {
                    return s.substring(0,7);
                }
            }

        },
        title: [
        {
            top:-5,
            right:-5,
            // text:"借款金额",
            textStyle:{
                color:"gray",
                fontWeight:"lighter",
            }
        }

        ],
        tooltip: {
        },
    
    grid:{
                    left:"0%",
                    right:"10%",
                    top:"13%",
                    bottom:"0%",
                    containLabel:true
                  },
                  xAxis:{
                    type:"category",
                    name:"金额/元",
                    data:[1000,,2000,3000,4000,5000,
                    6000,7000,8000,9000,10000,11000,
                    12000,13000,14000,15000,16000,
                    17000,18000,19000,20000,40000,60000,100000],
                    aXisTick:{
                      alignWithLabel:true
                    },
                    splitLine:{
　　　　show:false
　　}
                  },
                  yAxis:{
                    type:"value",
                    name:"人次/人",
                    splitLine:{
　　　　show:false
　　}
                  },
        calculable : true,

        series: [
          
           { 
                      name:"借款金额",
                      type:"bar",
                      barWidth:"60%",
                      itemStyle: {
                    normal: {
　　　　　　　　　　　　　　//好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = [
                              '#C1232B',
                              '#B5C334','#FCCE10','#E87C25','#27727B',
                               '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                               '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                            ];
                            return colorList[params.dataIndex]
                        },
　　　　　　　　　　　　　　//以下为是否显示，显示位置和显示格式的设置了
                        label: {
                            show: true,
                            position: 'top',
//                             formatter: '{c}'
                            formatter: '{c}'
                        }
                    }
                },
                      
                    },
        ]
    },

    
    options:ops1
};
// if (option && typeof option === "object") {
    barChart1.setOption(option1, true);

    var pieChart1 = echarts.init(document.getElementById("echarts-pie1-chart"));
     var ops2=[];
 function bb(ops){

var i =0;
  for(var item in a[1]){

  var qixian=[]; var qixian_name=[]; 
 for(var j in qixian_list[i][item]){
    var obj=new Object(); 
    obj.name=j; 
    qixian_name.push(j);
    obj.value=qixian_list[i][item][j];
qixian.push(obj);
    }
  var rate=[];  
 for(var j in rate_list[i][item]){
    var obj=new Object(); 
    obj.name=j; 
    obj.value=rate_list[i][item][j];
rate.push(obj);
    }
i=i+1;

        ops.push(
             {
                  title: {text: item},
                legend: {
                    orient:'vertical',
            x: 'left',
            data: qixian_name,
            selectedMode: false,
        },
           
            series: [
                {data: qixian
            },
                
                 
    
     
            ]
        });
    }
return ops;
}
ops2=bb(ops2);
    option2 = {
    baseOption: {
        // backgroundColor: '#ba68c8',//背景色
        timeline: {
            // y: 0,
            top:"bottom",
            show:false,
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 1200,
            // controlStyle: {
            //     position: 'left'
            // },
            data: [
                '2015-01','2015-02','2015-03','2015-04','2015-05','2015-06','2015-07','2015-08','2015-09',
                '2015-10','2015-11','2015-12','2016-01','2016-02','2016-03','2016-04','2016-05','2016-06',
                '2016-07','2016-08','2016-09','2016-10','2016-11','2016-12','2017-01'
               
            ],
            label: {
                formatter : function(s) {
                    return s.substring(0,7);
                }
            }

        },
        title: [
        {
            top:-5,
            right:-5,
            // text:"借款金额",
            textStyle:{
                color:"gray",
                fontWeight:"lighter",
            }
        }

        ],
        tooltip: {
            trigger: 'item', 
             formatter: "{a} <br/>{b} : {c} ({d}%)" 
        },
    
        calculable : true,

        series: [
          
         
            {
                name: '借款期限',
                type: 'pie',
                center: ['55%', '45%'],
                // radius: '75%',
                label:{
                    normal:{
                        show:false ,
                        position : 'outside'
                            },
                        emphasis:{
                            show :true
                        }
                        },
                color: ['#E87C25','#27727B','#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                        '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                            ]

            }   
        ]
    },

    
    options:ops2
};
// if (option && typeof option === "object") {
    pieChart1.setOption(option2, true);
    
    var pieChart2 = echarts.init(document.getElementById("echarts-pie2-chart"));
     var ops3=[];
 function cc(ops){

var i =0;
  for(var item in a[1]){

  var qixian=[]; 
 for(var j in qixian_list[i][item]){
    var obj=new Object(); 
    obj.name=j; 
    
    obj.value=qixian_list[i][item][j];
qixian.push(obj);
    }
  var rate=[];  var rate_name=[]; 
 for(var j in rate_list[i][item]){
    var obj=new Object(); 
    obj.name=j; 
    rate_name.push(j);
    obj.value=rate_list[i][item][j];
rate.push(obj);
    }
i=i+1;

        ops.push(
             {  title: {text: item},
                legend: {
                    orient:'vertical',
            x: 'left',
            data: rate_name,
            selectedMode: false,
        },
           
            series: [
                {data: rate
            },
                
                 
    
     
            ]
        });
    }
return ops;
}
ops3=cc(ops3);
    option3 = {
    baseOption: {
        // backgroundColor: '#ba68c8',//背景色
        timeline: {
            // y: 0,
            top:"bottom",
            show:false,
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 1200,
            // controlStyle: {
            //     position: 'left'
            // },
            data: [
                '2015-01','2015-02','2015-03','2015-04','2015-05','2015-06','2015-07','2015-08','2015-09',
                '2015-10','2015-11','2015-12','2016-01','2016-02','2016-03','2016-04','2016-05','2016-06',
                '2016-07','2016-08','2016-09','2016-10','2016-11','2016-12','2017-01'
               
            ],
            label: {
                formatter : function(s) {
                    return s.substring(0,7);
                }
            }

        },
        title: [
        {
            top:-5,
            right:-5,
            // text:"借款金额",
            textStyle:{
                color:"gray",
                fontWeight:"lighter",
            }
        }

        ],
        tooltip: {
            trigger: 'item', 
             formatter: "{a} <br/>{b} : {c} ({d}%)" 
        },
    
        calculable : true,

        series: [
          
         
            {
                name: '借款利率',
                type: 'pie',
                center: ['55%', '45%'],
                // radius: '75%',
                label:{
                    normal:{
                        show:false ,
                        position : 'outside'
                            },
                        emphasis:{
                            show :true
                        }
                        },
                color: ['#C1232B','#B5C334','#FCCE10','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                        '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                            ]

            }   
        ]
    },

    
    options:ops3
};
// if (option && typeof option === "object") {
    pieChart2.setOption(option3, true);
    
        var pieChart3 = echarts.init(document.getElementById("echarts-pie3-chart"));
     var ops4=[];
 function dd(ops){
    for(var item in a[1]){
        ops.push(
             {  title: {text: item},
                legend: {
                    orient:'vertical',
            x: 'left',
            data: ['A','B','C','D','E'],
            selectedMode: false,
        },
           
            series: [
               {
                      data: [
                    {name: 'A', value: a[0][item][0]},
                    {name: 'B', value: a[0][item][1]},
                    {name: 'C', value: a[0][item][2]},
                    {name: 'D', value: a[0][item][3]},
                    {name: 'E', value: a[0][item][4]},
                  
                ]},
                
                 
    
     
            ]
        });
    }
return ops;
}
ops4=dd(ops4);
    option4 = {
    baseOption: {
        // backgroundColor: '#ba68c8',//背景色
        timeline: {
            // y: 0,
            top:"bottom",
            show:false,
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 1200,
            // controlStyle: {
            //     position: 'left'
            // },
            data: [
                '2015-01','2015-02','2015-03','2015-04','2015-05','2015-06','2015-07','2015-08','2015-09',
                '2015-10','2015-11','2015-12','2016-01','2016-02','2016-03','2016-04','2016-05','2016-06',
                '2016-07','2016-08','2016-09','2016-10','2016-11','2016-12','2017-01'
               
            ],
            label: {
                formatter : function(s) {
                    return s.substring(0,7);
                }
            }

        },
        title: [
        {
            top:-5,
            right:-5,
            // text:"借款金额",
            textStyle:{
                color:"gray",
                fontWeight:"lighter",
            }
        }

        ],
        tooltip: {
            trigger: 'item', 
             formatter: "{a} <br/>{b} : {c} ({d}%)" 
        },
    
        calculable : true,

        series: [
          
         
            {
                name: '初始评级',
                type: 'pie',
                center: ['55%', '45%'],
                // radius: '75%',
                label:{
                    normal:{
                        show:false ,
                        position : 'outside'
                            },
                        emphasis:{
                            show :true
                        }
                        },
                color: ['#C1232B','#B5C334','#FCCE10','#E87C25','#27727B','#FE8463',
                        '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                            ]

            }   
        ]
    },

    
    options:ops4
};
// if (option && typeof option === "object") {
    pieChart3.setOption(option4, true);

    var pieChart4 = echarts.init(document.getElementById("echarts-pie4-chart"));
     var ops5=[];
 function ee(ops){
    for(var item in a[1]){
        ops.push(
             {  title: {text: item},
                legend: {
                    orient:'vertical',
            x: 'left',
            data: ['APP','其他','普通','电商'],
            selectedMode: false,
        },
           
            series: [
               {
                      data: [
                    {name: 'APP', value: a[1][item][0]},
                    {name: '其他',value: a[1][item][1]},
                    {name: '普通',value: a[1][item][2]},
                    {name: '电商',value: a[1][item][3]},
                ]},
                
                 
    
     
            ]
        });
    }
return ops;
}
ops5=ee(ops5);
    option5 = {
    baseOption: {
        // backgroundColor: '#ba68c8',//背景色
        timeline: {
            // y: 0,
            top:"bottom",
            show:false,
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 1200,
            // controlStyle: {
            //     position: 'left'
            // },
            data: [
                '2015-01','2015-02','2015-03','2015-04','2015-05','2015-06','2015-07','2015-08','2015-09',
                '2015-10','2015-11','2015-12','2016-01','2016-02','2016-03','2016-04','2016-05','2016-06',
                '2016-07','2016-08','2016-09','2016-10','2016-11','2016-12','2017-01'
               
            ],
            label: {
                formatter : function(s) {
                    return s.substring(0,7);
                }
            }

        },
        title: [
        {
            top:-5,
            right:-5,
            // text:"借款金额",
            textStyle:{
                color:"gray",
                fontWeight:"lighter",
            }
        }

        ],
        tooltip: {
            trigger: 'item', 
             formatter: "{a} <br/>{b} : {c} ({d}%)" 
        },
    
        calculable : true,

        series: [
          
         
            {
                name: '借款类型',
                type: 'pie',
                center: ['55%', '45%'],
                // radius: '75%',
                 radius: ['50%', '70%'],
                label:{
                    normal:{
                        show:false ,
                        position : 'outside'
                            },
                        emphasis:{
                            show :true
                        }
                        },
                color: ['#FE8463','#9BCA63','#60C0DD',
                        '#D7504B','#F0805A','#26C0C0'
                            ]

            }   
        ]
    },

    
    options:ops5
};
// if (option && typeof option === "object") {
    pieChart4.setOption(option5, true);
   
   var pieChart5 = echarts.init(document.getElementById("echarts-pie5-chart"));
     var ops6=[];
 function ff(ops){
    for(var item in a[1]){
        ops.push(
             {  title: {text: item},
                legend: {
                    orient:'vertical',
            x: 'left',
            data: ['是','否'],
            selectedMode: false,
        },
           
            series: [
              {
                      data: [
                    {name: '否', value: a[2][item][0]},
                    {name: '是', value: a[2][item][1]},
                  
                   
                ]},
                
                 
    
     
            ]
        });
    }
return ops;
}
ops6=ff(ops6);
    option6 = {
    baseOption: {
        // backgroundColor: '#ba68c8',//背景色
        timeline: {
            // y: 0,
            top:"bottom",
            show:false,
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 1200,
            // controlStyle: {
            //     position: 'left'
            // },
            data: [
                '2015-01','2015-02','2015-03','2015-04','2015-05','2015-06','2015-07','2015-08','2015-09',
                '2015-10','2015-11','2015-12','2016-01','2016-02','2016-03','2016-04','2016-05','2016-06',
                '2016-07','2016-08','2016-09','2016-10','2016-11','2016-12','2017-01'
               
            ],
            label: {
                formatter : function(s) {
                    return s.substring(0,7);
                }
            }

        },
        title: [
        {
            top:-5,
            right:-5,
            // text:"借款金额",
            textStyle:{
                color:"gray",
                fontWeight:"lighter",
            }
        }

        ],
        tooltip: {
            trigger: 'item', 
             formatter: "{a} <br/>{b} : {c} ({d}%)" 
        },
    
        calculable : true,

        series: [
          
         
            {
                name: '是否首标',
                type: 'pie',
                center: ['55%', '45%'],
                // radius: '75%',
                 radius: ['50%', '70%'],
                label:{
                    normal:{
                        show:false ,
                        position : 'outside'
                            },
                        emphasis:{
                            show :true
                        }
                        },
                // color: ['#C1232B','#B5C334','#FCCE10','#E87C25','#27727B','#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                        // '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                            // ]

            }   
        ]
    },

    
    options:ops6
};
// if (option && typeof option === "object") {
    pieChart5.setOption(option6, true);

    var barChart2 = echarts.init(document.getElementById("echarts-bar2-chart"));
        var ops7=[];
 function gg(ops){

  for(var item in a[1]){


        ops.push(
             {

           
            series: [
                
               {
                      data:a[4][item], 

                  },
     
            ]
        });
    }
return ops;
}
ops7=gg(ops7);
    option7 = {
    baseOption: {
        timeline: {
            // y: 0,
            show:false,
            top:"bottom",
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 1200,
            // controlStyle: {
            //     position: 'left'
            // },
            data: [
                '2015-01','2015-02','2015-03','2015-04','2015-05','2015-06','2015-07','2015-08','2015-09',
                '2015-10','2015-11','2015-12','2016-01','2016-02','2016-03','2016-04','2016-05','2016-06',
                '2016-07','2016-08','2016-09','2016-10','2016-11','2016-12','2017-01'
               
            ],
            label: {
                formatter : function(s) {
                    return s.substring(0,7);
                }
            }

        },
        title: [

        ],
        tooltip: {
        },
    
    grid:[{
                    left:"0%",
                    right:"0%",
                    top:"0%",
                    bottom:"0%",
                    containLabel:true
                  },
                  
                  
                  
                  ],
                  xAxis:[{
                    // show:false,
                    axisLine: {
                   lineStyle: {
                       type: 'solid',
                       color:'#dddddd',
                       width:'2'
                   }
               }, 
                    axisLabel: {
                                show: true,
                                textStyle: {
                                    color: 'white'
                                }
                            }, 
                    type:"category",
                    name:"期数/期",
                    data:["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","20+"],
                    aXisTick:{
                      alignWithLabel:true
                    },
                     splitLine:{
　　　　show:false
　　}
                  }
                  
                  
                  ],
                  yAxis:[{
                    show:false, 
                    color:"gray", 
                     splitLine:{
　　　　show:false
　　},
                    type:"value",
                    name:"人次/人"
                  }
                  ],
        calculable : true,

        series: [
          
           { 
                      name:"历史逾期还款期数",
                      type:"bar",
                      barWidth:"50%",
                      itemStyle: {
                    normal: {
　　　　　　　　　　　　　　
                        color: '#dddddd',
                        label: {
                            show: false,
                            position: 'top',
                            formatter: '{c}'
                        }
                    }
                },
                      
                    },
             
        ]
    },

    
    options:ops7
};
    barChart2.setOption(option7, true);

    var barChart3 = echarts.init(document.getElementById("echarts-bar3-chart"));
        var ops8=[];
 function hh(ops){

  for(var item in a[1]){


        ops.push(
             {

           
            series: [
                
               {
                      data:a[5][item], 

                  },
     
            ]
        });
    }
return ops;
}
ops8=hh(ops8);
    option8 = {
    baseOption: {
        timeline: {
            // y: 0,
            show:false,
            top:"bottom",
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 1200,
            // controlStyle: {
            //     position: 'left'
            // },
            data: [
                '2015-01','2015-02','2015-03','2015-04','2015-05','2015-06','2015-07','2015-08','2015-09',
                '2015-10','2015-11','2015-12','2016-01','2016-02','2016-03','2016-04','2016-05','2016-06',
                '2016-07','2016-08','2016-09','2016-10','2016-11','2016-12','2017-01'
               
            ],
            label: {
                formatter : function(s) {
                    return s.substring(0,7);
                }
            }

        },
        title: [

        ],
        tooltip: {
        },
    
    grid:[{
                    left:"0%",
                    right:"0%",
                    top:"0%",
                    bottom:"0%",
                    containLabel:true
                  },
                  
                  
                  
                  ],
                  xAxis:[{
                    // show:false, 
                    axisLine: {
                   lineStyle: {
                       type: 'solid',
                       color:'#dddddd',
                       width:'2'
                   }
               }, 
                    axisLabel: {
                                show: true,
                                textStyle: {
                                    color: 'white'
                                }
                            },  
                    type:"category",
                    name:"期数/期",
                    data:["0","2","4","6","8","10","12","14","16","18","20","22","12","24","26","28","30","32","34","36","38","40","42","44","46","46+"],
                    aXisTick:{
                      alignWithLabel:true
                    },
                     splitLine:{
　　　　show:false
　　}
                  }
                  
                  
                  ],
                  yAxis:[{
                    show:false,  
                     splitLine:{
　　　　show:false
　　},
                    type:"value",
                    name:"人次/人"
                  }
                  ],
        calculable : true,

        series: [
          
           { 
                      name:"历史正常还款期数",
                      type:"bar",
                      barWidth:"50%",
                      itemStyle: {
                    normal: {
　　　　　　　　　　　　　　
                        color: 'white',
                        label: {
                            show: false,
                            position: 'top',
                            formatter: '{c}'
                        }
                    }
                },
                      
                    },
             
        ]
    },

    
    options:ops8
};
    barChart3.setOption(option8, true);

     var barChart4 = echarts.init(document.getElementById("echarts-bar4-chart"));
        var ops9=[];
 function ii(ops){

  for(var item in a[1]){


        ops.push(
             {

           
            series: [
                
               {
                      data:a[6][item], 

                  },
     
            ]
        });
    }
return ops;
}
ops9=ii(ops9);
    option9 = {
    baseOption: {
        timeline: {
            // y: 0,
            show:false,
            top:"bottom",
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 1200,
            // controlStyle: {
            //     position: 'left'
            // },
            data: [
                '2015-01','2015-02','2015-03','2015-04','2015-05','2015-06','2015-07','2015-08','2015-09',
                '2015-10','2015-11','2015-12','2016-01','2016-02','2016-03','2016-04','2016-05','2016-06',
                '2016-07','2016-08','2016-09','2016-10','2016-11','2016-12','2017-01'
               
            ],
            label: {
                formatter : function(s) {
                    return s.substring(0,7);
                }
            }

        },
        title: [

        ],
        tooltip: {
        },
    
    grid:[{
                    left:"0%",
                    right:"0%",
                    top:"0%",
                    bottom:"0%",
                    containLabel:true
                  },
                  
                  
                  
                  ],
                  xAxis:[{
                    // show:false,
                    axisLine: {
                   lineStyle: {
                       type: 'solid',
                       color:'#dddddd',
                       width:'2'
                   }
               }, 
                    axisLabel: {
                                show: true,
                                textStyle: {
                                    color: 'white'
                                }
                            },   
                    type:"category",
                    name:"期数/期",
                     data:["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"],
                    aXisTick:{
                      alignWithLabel:true
                    },
                     splitLine:{
　　　　show:false
　　}
                  }
                  
                  
                  ],
                  yAxis:[{
                    show:false,  
                     splitLine:{
　　　　show:false
　　},
                    type:"value",
                    name:"人次/人"
                  }
                  ],
        calculable : true,

        series: [
          
           { 
                      name:"历史成功借款次数",
                      type:"bar",
                      barWidth:"50%",
                      itemStyle: {
                    normal: {
　　　　　　　　　　　　　　
                        color: '#dddddd',
                        label: {
                            show: false,
                            position: 'top',
                            formatter: '{c}'
                        }
                    }
                },
                      
                    },
             
        ]
    },

    
    options:ops9
};
    barChart4.setOption(option9, true);

    var barChart5 = echarts.init(document.getElementById("echarts-bar5-chart"));
        var ops10=[];
 function jj(ops){

  for(var item in a[1]){


        ops.push(
             {

           
            series: [
                
               {
                      data:a[7][item], 

                  },
     
            ]
        });
    }
return ops;
}
ops10=jj(ops10);
    option10 = {
    baseOption: {
        timeline: {
            // y: 0,
            show:false,
            top:"bottom",
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 1200,
            // controlStyle: {
            //     position: 'left'
            // },
            data: [
                '2015-01','2015-02','2015-03','2015-04','2015-05','2015-06','2015-07','2015-08','2015-09',
                '2015-10','2015-11','2015-12','2016-01','2016-02','2016-03','2016-04','2016-05','2016-06',
                '2016-07','2016-08','2016-09','2016-10','2016-11','2016-12','2017-01'
               
            ],
            label: {
                formatter : function(s) {
                    return s.substring(0,7);
                }
            }

        },
        title: [

        ],
        tooltip: {
        },
    
    grid:[{
                    left:"0%",
                    right:"0%",
                    top:"0%",
                    bottom:"0%",
                    containLabel:true
                  },
                  
                  
                  
                  ],
                  xAxis:[{
                    // show:false, 
                    axisLine: {
                   lineStyle: {
                       type: 'solid',
                       color:'#dddddd',
                       width:'2'
                   }
               }, 
                    axisLabel: {
                                show: true,
                                textStyle: {
                                    color: 'white'
                                }
                            },  
                    type:"category",
                    name:"期数/期",
                   data:["2000","4000","6000","8000","10000","12000","14000","16000","18000","20000","22000","24000","26000","28000","30000","32000",
                     "34000","36000","38000","40000","42000","44000","46000","48000","50000","50000+"],
                    aXisTick:{
                      alignWithLabel:true
                    },
                     splitLine:{
　　　　show:false
　　}
                  }
                  
                  
                  ],
                  yAxis:[{
                    show:false,  
                     splitLine:{
　　　　show:false
　　},
                    type:"value",
                    name:"人次/人"
                  }
                  ],
        calculable : true,

        series: [
          
           { 
                      name:"历史成功借款金额",
                      type:"bar",
                      barWidth:"50%",
                      itemStyle: {
                    normal: {
　　　　　　　　　　　　　　
                        color: 'white',
                        label: {
                            show: false,
                            position: 'top',
                            formatter: '{c}'
                        }
                    }
                },
                      
                    },
             
        ]
    },

    
    options:ops10
};
    barChart5.setOption(option10, true);


            });