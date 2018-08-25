$(function () {


                window.onresize = function ()　{
            barChart1.resize();
            pieChart1.resize();
            pieChart2.resize();
            pieChart3.resize();
            pieChart4.resize();
            pieChart5.resize();
            pieChart6.resize();
            pieChart7.resize();
                }
                var data=[];
            urls=["Sex.txt","ShouJiRenZheng.txt","HuKouRenZheng.txt","ShiPinRenZheng.txt","XueLiRenzheng.txt",
            "ZhengXinRenZheng.txt","TaoBaoRenZheng.txt"];
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
         
        var a=getdata(urls);
        var age_list=[];
$.getJSON("data/Age.txt",function(data){
                age_list=data;

                });  
        

    var barChart1 = echarts.init(document.getElementById("echarts-bar1-chart"));
     var ops1=[];
    function aa(ops){

var i =0;
  for(var item in a[1]){

  
   var age_name=[];
  var age_num=[];  
 for(var j in age_list[i][item]){
age_name.push(j);
age_num.push(age_list[i][item][j]);
    }
i=i+1;

        ops.push(
             {
         xAxis:{
            // type:'category',
            data:age_name
        },
           title: {text: item},
            series: [
               
                

                {
                      data:age_num, 

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
                    bottom:"3%",
                    containLabel:true
                  },
                  xAxis:{
                    type:"category",
                    name:"年龄/岁",
                    data:[],
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
                      name:"年龄",
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

i=i+1;

        ops.push(
             {
                  title: {text: item},
                legend: {
                    orient:'vertical',
            x: 'left',
            data: ["男","女"],
            selectedMode: false,
        },
           
            series: [
               { data: [
                    {name: '男', value: a[0][item][1]},
                    {name: '女', value: a[0][item][0]},
                  
                   
                ]
                
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
                name: '性别',
                type: 'pie',
                center: ['55%', '45%'],
                // radius: '75%',

                label:{
                    normal:{
                        show:true ,
                         formatter: '{d}%' ,
                        position : 'inside'
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

  
i=i+1;

        ops.push(
             {  title: {text: item},
                legend: {
                    orient:'vertical',
            x: 'left',
            data: ["成功认证","未成功认证"],
            selectedMode: false,
        },
           
            series: [
                 {
                       data: [
                    {name: '成功认证', value: a[1][item][0]},
                    {name: '未成功认证', value: a[1][item][1]},
                  
                   
                ]},
                
                 
    
     
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
                name: '手机认证',
                type: 'pie',
                center: ['55%', '45%'],
                // radius: '75%',
                label:{
                    normal:{
                        show:true ,
                         formatter: '{d}%' ,
                        position : 'inside'
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
            data: ["成功认证","未成功认证"],
            selectedMode: false,
        },
           
            series: [
               {
                       data: [
                    {name: '成功认证', value: a[2][item][0]},
                    {name: '未成功认证', value: a[2][item][1]},
                  
                   
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
                name: '户口认证',
                type: 'pie',
                center: ['55%', '45%'],
                // radius: '75%',
                label:{
                    normal:{
                        show:true ,
                         formatter: '{d}%' ,
                        position : 'inside'
                            },
                        emphasis:{
                            show :true
                        }
                        },
                color: ['#E87C25','#FE8463',
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
            data: ["成功认证","未成功认证"],
            selectedMode: false,
        },
           
            series: [
               {
                       data: [
                    {name: '成功认证', value: a[3][item][0]},
                    {name: '未成功认证', value: a[3][item][1]},
                  
                   
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
                name: '视频认证',
                type: 'pie',
                center: ['55%', '45%'],
                // radius: '75%',
                 radius: ['50%', '70%'],
                label:{
                    normal:{
                         show:true ,
                         formatter: '{d}%' ,
                        position : 'inside'
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
            data: ['成功认证',"未成功认证"],
            selectedMode: false,
        },
           
            series: [
             {
                       data: [
                    {name: '成功认证', value: a[4][item][0]},
                    {name: '未成功认证', value: a[4][item][1]},
                  
                   
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
                name: '学历认证',
                type: 'pie',
                center: ['55%', '45%'],
                // radius: '75%',
                 radius: ['50%', '70%'],
                label:{
                    normal:{
                         show:true ,
                         formatter: '{d}%' ,
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


var pieChart6 = echarts.init(document.getElementById("echarts-pie6-chart"));
     var ops7=[];
 function gg(ops){
    for(var item in a[1]){
        ops.push(
             {  title: {text: item},
                legend: {
                    orient:'vertical',
            x: 'left',
            data: ['成功认证',"未成功认证"],
            selectedMode: false,
        },
           
            series: [
             {
                       data: [
                    {name: '成功认证', value: a[5][item][0]},
                    {name: '未成功认证', value: a[5][item][1]},
                  
                   
                ]},
                
                 
    
     
            ]
        });
    }
return ops;
}
ops7=gg(ops7);
    option7 = {
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
                name: '征信认证',
                type: 'pie',
                center: ['55%', '45%'],
                // radius: '75%',
                 radius: ['50%', '70%'],
                label:{
                    normal:{
                         show:true ,
                         formatter: '{d}%' ,
                        position : 'inside'
                            },
                        emphasis:{
                            show :true
                        }
                        },
                color: ['#C6E579','#F4E001','#F0805A','#26C0C0'
                            ]

            }   
        ]
    },

    
    options:ops7
};
// if (option && typeof option === "object") {
    pieChart6.setOption(option7, true);
    

    var pieChart7 = echarts.init(document.getElementById("echarts-pie7-chart"));
     var ops8=[];
 function hh(ops){
    for(var item in a[1]){
        ops.push(
             {  title: {text: item},
                legend: {
                    orient:'vertical',
            x: 'left',
            data: ['成功认证',"未成功认证"],
            selectedMode: false,
        },
           
            series: [
             {
                       data: [
                    {name: '成功认证', value: a[6][item][0]},
                    {name: '未成功认证', value: a[6][item][1]},
                  
                   
                ]},
                
                 
    
     
            ]
        });
    }
return ops;
}
ops8=hh(ops8);
    option8 = {
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
                name: '淘宝认证',
                type: 'pie',
                center: ['55%', '45%'],
                // radius: '75%',
                 radius: ['50%', '70%'],
                label:{
                    normal:{
                        show:true ,
                         formatter: '{d}%' ,
                        position : 'inside'
                            },
                        emphasis:{
                            show :true
                        }
                        },
                color: ['#F0805A','#26C0C0'
                            ]

            }   
        ]
    },

    
    options:ops8
};
// if (option && typeof option === "object") {
    pieChart7.setOption(option8, true);

            });