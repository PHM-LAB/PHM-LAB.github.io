 var myChart = echarts.init(document.getElementById('history_user_info'));
        

                var data=[];
            urls=["历史逾期还款期数.txt","历史正常还款期数.txt","历史成功借款次数.txt","历史成功借款金额.txt",
            ];
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
    var ops=[];
 function aa(){

  for(var item in a[1]){


        ops.push(
             {

           
            series: [
                
               {
                      data:a[0][item], 

                  },
                  {
                      data:a[1][item], 

                  },
                  {
                      data:a[2][item], 

                  },
                  {
                      data:a[3][item], 

                  },
                 
                 
                  
                
                 

               

     
            ]
        });
    }
return ops;
}
ops=aa();
option = {
    baseOption: {
        timeline: {
            // y: 0,
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
        {
            top:15,
            left:"12%",
            text:"历史逾期还款期数",
            textStyle:{
                color:"gray",
                fontWeight:"lighter",
            }
        },
        
         {
            top:15,
            left:"65%",
            text:"历史正常还款期数",
            textStyle:{
                color:"gray",
                fontWeight:"lighter",
            }
        },
       
         {
            top:"50%",
            left:"12%",
            text:"历史成功借款次数",
            textStyle:{
                color:"gray",
                fontWeight:"lighter",
            }
        },
         
         {
            top:"50%",
            left:"65%",
            text:"历史成功借款金额",
            textStyle:{
                color:"gray",
                fontWeight:"lighter",
            }
        },


        ],
        tooltip: {
        },
    
    grid:[{
                    left:"0%",
                    right:"65%",
                    top:"10%",
                    bottom:"60%",
                    containLabel:true
                  },
                  {
                    left:"50%",
                    right:"15%",
                    top:"10%",
                    bottom:"60%",
                    containLabel:true
                  },
                  {
                    left:"0%",
                    right:"65%",
                    top:"60%",
                    bottom:"10%",
                    containLabel:true
                  },
                  {
                    left:"50%",
                    right:"15%",
                    top:"60%",
                    bottom:"10%",
                    containLabel:true
                  },
                  ],
                  xAxis:[{
                    type:"category",
                    name:"期数/期",
                    data:["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","20+"],
                    aXisTick:{
                      alignWithLabel:true
                    }
                  },
                  {gridIndex:1,
                    type:"category",
                    name:"期数/期",
                     data:["0","2","4","6","8","10","12","14","16","18","20","22","12","24","26","28","30","32","34","36","38","40","42","44","46","46+"],
                    aXisTick:{
                      alignWithLabel:true
                    }
                  },
                  {gridIndex:2,
                    type:"category",
                    name:"次数/次",
                    data:["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"],
                    aXisTick:{
                      alignWithLabel:true
                    }
                  },
                  {gridIndex:3,
                    type:"category",
                    name:"金额/元",
                     data:["2000","4000","6000","8000","10000","12000","14000","16000","18000","20000","22000","24000","26000","28000","30000","32000",
                     "34000","36000","38000","40000","42000","44000","46000","48000","50000","50000+"],
                    aXisTick:{
                      alignWithLabel:true
                    }
                  },
                  ],
                  yAxis:[{
                    type:"value",
                    name:"人次/人"
                  },
                  {
                    gridIndex:1,
                    type:"value",
                    name:"人次/人"
                  },
                  {
                    gridIndex:2,
                    type:"value",
                    name:"人次/人"
                  },
                  {
                    gridIndex:3,
                    type:"value",
                    name:"人次/人"
                  },
                  ],
        calculable : true,

        series: [
          
           { 
                      name:"历史逾期还款期数",
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
                    { 
                        xAxisIndex:1,
                        yAxisIndex:1,
                      name:"历史正常还款期数",
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
                    { 
                        xAxisIndex:2,
                        yAxisIndex:2,
                      name:"历史成功借款次数",
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
                    { 
                        xAxisIndex:3,
                        yAxisIndex:3,
                      name:"历史成功借款金额",
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

    
    options:ops
};
// if (option && typeof option === "object") {
    myChart.setOption(option, true);