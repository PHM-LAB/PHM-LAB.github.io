 var myChart = echarts.init(document.getElementById('biao_info'));
        window.onresize = function ()　{
            myChart.resize();
                }

               

                var data=[];
            urls=["ChuShiPingJi.txt","JieKuanType.txt","ShiFouShouBiao.txt","JieKuanJinE.txt"];
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
    var ops=[];
 function aa(){

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

           
            series: [
                {data: qixian
            },
                {
                      data: rate},
                 {
                      data: [
                    {name: 'A', value: a[0][item][0]},
                    {name: 'B', value: a[0][item][1]},
                    {name: 'C', value: a[0][item][2]},
                    {name: 'D', value: a[0][item][3]},
                    {name: 'E', value: a[0][item][4]},
                  
                ]},
                  {
                      data: [
                    {name: 'APP', value: a[1][item][0]},
                    {name: '其他',value: a[1][item][1]},
                    {name: '普通',value: a[1][item][2]},
                    {name: '电商',value: a[1][item][3]},
                ]},
                  {
                      data: [
                    {name: '否', value: a[2][item][0]},
                    {name: '是', value: a[2][item][1]},
                  
                   
                ]},

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
            top:15,
            left:"12%",
            text:"借款金额",
            textStyle:{
                color:"gray",
                fontWeight:"lighter",
            }
        },
        {
            top:15,
            left:"42%",
            text:"借款期限",
            textStyle:{
                color:"gray",
                fontWeight:"lighter",
            }
        },
         {
            top:15,
            left:"72%",
            text:"借款利率",
            textStyle:{
                color:"gray",
                fontWeight:"lighter",
            }
        },
         {
            top:"50%",
            left:"12%",
            text:"初始评级",
            textStyle:{
                color:"gray",
                fontWeight:"lighter",
            }
        },
         {
            top:"50%",
            left:"42%",
            text:"借款类型",
            textStyle:{
                color:"gray",
                fontWeight:"lighter",
            }
        },
         {
            top:"50%",
            left:"72%",
            text:"借款期限",
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
                    right:"68%",
                    top:"10%",
                    bottom:"60%",
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
                    }
                  },
                  yAxis:{
                    type:"value",
                    name:"人次/人"
                  },
        calculable : true,

        series: [
          
         
            {
                name: '借款期限',
                type: 'pie',
                center: ['45%', '25%'],
                radius: '25%',

                color: ['#C1232B','#B5C334','#FCCE10','#E87C25','#27727B','#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                        '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                            ]

            },
             {
                name: '借款利率',
                type: 'pie',
                center: ['75%', '25%'],
                radius: '25%',
                color: ['#C1232B','#B5C334','#FCCE10','#E87C25','#27727B','#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                        '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                            ]

            },
            {
                name: '初始评级',
                type: 'pie',
                center: ['15%', '70%'],
                radius: '25%',
                 color: ['#C1232B','#B5C334','#FCCE10','#E87C25','#27727B','#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                        '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                            ]
            },
            {
                name: '借款类型',
                type: 'pie',
                center: ['45%', '70%'],
                radius: '25%',
               color: ['#C1232B','#B5C334','#FCCE10','#E87C25','#27727B','#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                        '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                            ]

            },
            {
                name: '是否首标',
                type: 'pie',
                center: ['75%', '70%'],
                radius: '25%',
                 color: ['#C1232B','#B5C334','#FCCE10','#E87C25','#27727B','#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                        '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                            ]

            },
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

    
    options:ops
};
// if (option && typeof option === "object") {
    myChart.setOption(option, true);