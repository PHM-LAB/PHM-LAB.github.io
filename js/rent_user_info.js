 var myChart = echarts.init(document.getElementById('rent_user_info'));
        

               

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
    var ops=[];
 function aa(){
var age_list=[];
$.getJSON("data/Age.txt",function(data){
                age_list=data;

                }); 

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
            series: [
                { data: [
                    {name: '男', value: a[0][item][0]},
                    {name: '女', value: a[0][item][1]},
                  
                   
                ]
                
            },
                {
                       data: [
                    {name: '成功认证', value: a[1][item][0]},
                    {name: '未成功认证', value: a[1][item][1]},
                  
                   
                ]},
                 {
                      data: [
                    {name: '成功认证', value: a[2][item][0]},
                    {name: '未成功认证', value: a[2][item][1]},
                   
                  
                ]},
                  {
                      data: [
                    {name: '成功认证', value: a[3][item][0]},
                    {name: '未成功认证',value: a[3][item][1]},
                    
                ]},
                  {
                      data: [
                    {name: '成功认证', value: a[4][item][0]},
                    {name: '未成功认证', value: a[4][item][1]},
                  
                   
                ]},
                 {
                      data: [
                    {name: '成功认证', value: a[5][item][0]},
                    {name: '未成功认证', value: a[5][item][1]},
                  
                   
                ]
            },
                 {
                      data: [
                    {name: '成功认证', value: a[6][item][0]},
                    {name: '未成功认证', value: a[6][item][1]},
                  
                   
                ]},

                {
                      data:age_num, 

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
            text:"年龄",
            textStyle:{
                color:"gray",
                fontWeight:"lighter",
            }
        },
        {
            top:15,
            left:"38%",
            text:"性别",
            textStyle:{
                color:"gray",
                fontWeight:"lighter",
            }
        },
         {
            top:15,
            left:"58%",
            text:"手机认证",
            textStyle:{
                color:"gray",
                fontWeight:"lighter",
            }
        },
        {
            top:15,
            left:"78%",
            text:"户口认证",
            textStyle:{
                color:"gray",
                fontWeight:"lighter",
            }
        },
         {
            top:"50%",
            left:"12%",
            text:"视频认证",
            textStyle:{
                color:"gray",
                fontWeight:"lighter",
            }
        },
         {
            top:"50%",
            left:"38%",
            text:"学历认证",
            textStyle:{
                color:"gray",
                fontWeight:"lighter",
            }
        },
         {
            top:"50%",
            left:"58%",
            text:"征信认证",
            textStyle:{
                color:"gray",
                fontWeight:"lighter",
            }
        },
        {
            top:"50%",
            left:"78%",
            text:"淘宝认证",
            textStyle:{
                color:"gray",
                fontWeight:"lighter",
            }
        },

        ],
        tooltip: {
        },
    
    grid:{
                    left:"0%",
                    right:"75%",
                    top:"10%",
                    bottom:"60%",
                    containLabel:true
                  },
                  xAxis:{
                    type:"category",
                    name:"年龄/岁",
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
                name: '性别',
                type: 'pie',
                center: ['40%', '25%'],
                radius: '25%',

                color: ['#26C0C0','#FE8463',
                            ]

            },
             {
                name: '手机认证',
                type: 'pie',
                center: ['60%', '25%'],
                radius: '25%',
                color:  ['#26C0C0','#F0805A',
                            ]
            },
             {
                name: '户口认证',
                type: 'pie',
                center: ['80%', '25%'],
                radius: '25%',
                 color: ['#27727B','#FE8463',
                            ]

            },
            {
                name: '视频认证',
                type: 'pie',
                center: ['15%', '70%'],
                radius: '25%',
                 color: ['#27727B','#FE8463',
                            ]
            },
            {
                name: '学历认证',
                type: 'pie',
                center: ['40%', '70%'],
                radius: '25%',
               color: ['#F3A43B','#60C0DD',
                        
                            ]

            },
            {
                name: '征信认证',
                type: 'pie',
                center: ['60%', '70%'],
                radius: '25%',
                 color: [
                        '#D7504B','#C6E579',
                            ]

            },
             {
                name: '淘宝认证',
                type: 'pie',
                center: ['80%', '70%'],
                radius: '25%',
                 color: [
                       '#F4E001','#F0805A','#26C0C0'
                            ]

            },
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

    
    options:ops
};
// if (option && typeof option === "object") {
    myChart.setOption(option, true);