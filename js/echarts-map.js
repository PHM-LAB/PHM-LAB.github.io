$(function () {


                window.onresize = function ()　{
            mapChart1.resize();
            
                }

var mapChart1 = echarts.init(document.getElementById("echarts-map-chart"));
var province_list={"province":[],"total_count":[]};
$.ajaxSetup({async:false});
var file=[]
$.getJSON("data/people_map.txt",function(data){
                file=data;
                for (var item in data ){
                for(var pro in data[item]){
            
                province_list["province"].push(pro);
                var sum=0.00000;
                
                for (var city in data[item][pro][0]){
                        sum+=data[item][pro][0][city];

                      
                }
                
                province_list["total_count"].push(sum.toFixed(4));}
               }
                });

var province=[];  
 for(var j in province_list['province']){
    var obj=new Object(); 
    obj.name=province_list['province'][j]; 
    obj.value=province_list['total_count'][j];
province.push(obj);

    }

option = {
    
   
        title: {
           
        },
        tooltip: {

        //      trigger: 'item', 
        // formatter: "{a} <br/>{b} : {c} " 
        },
         toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
         visualMap: {
            show:false,
        // seriesIndex:5,//选择去哪些数据进行视觉映射
        min: 0,
        max: 0.1,
        left: 'left',
        top: 'bottom',
        text: ['高','低'], 
        // 文本，默认为数值文本
        // calculable: true
    },
        calculable : true,

        series: [
          
         
           
           
              {
            name: '借款地区分布',
            type: 'map',
            mapType: 'china',
            roam: false,
            // top:"0%",
            // left:"25%",
            // right:"25%",
            // buttom:"5%",
            layoutCenter: ['50%', '50%'], 
            layoutSize: "100%", 
            label: {
                normal: {
                    show: false,
                    
                },
                emphasis: {
                    show: true,
                    textStyle:{color:'white'}
                }
            },
            itemStyle: {
            normal: {
                // areaColor: '010303',
                borderColor: '#34758F',
            },
            emphasis: {
                areaColor: '#ef5350'
            }
        },
            data:province
        }
        ]
   

    
  
};
// if (option && typeof option === "object") {
    mapChart1.setOption(option, true);
                    

// function loadmap(province){
//     var c=[];
//     var city_arr={'city':[],'count':[]};
//     for (var item in file ){
//                 for(var pro in file[item]){
            
             
//                 if (pro==province){
                
//                 for (var city in file[item][pro][0]){
//                        city_arr['city'].push(city);
//                        var count=file[item][pro][0][city];
//                        count=count*100;
//                        city_arr['count'].push(count.toFixed(5));

                      
//                 }
//              }
//                }
//                }
              
// for(var j in city_arr['city']){
//     var obj=new Object(); 
//     obj.name=city_arr['city'][j]; 
//     obj.value=city_arr['count'][j];
// c.push(obj);

//     }

//     option.series[0].mapType=province;
//     option.series[0].data=c;
//     mapChart1.setOption(option, true);
// }
mapChart1.on('click', function (params) {
    var province = params.name;
    for (var i in province_list['province']){

        if(province_list["province"][i]==province){
            // loadmap(province);
            $("#city").html(province);
             $("#title").html(province);
            $("#num").html((province_list["total_count"][i]*100).toFixed(2)+" "+"%");
            // $("#doll").html("¥"+" "+city_list[i]['total_amt']);
            //  $("#rank_A").html(city_list[i]['level-A']);
            //  $("#rank_B").html(city_list[i]['level-B']);
            //  $("#rank_C").html(city_list[i]['level-C']);
            //  $("#rank_D").html(city_list[i]['level-D']);
            //  $("#rank_E").html(city_list[i]['level-E']);

        }
   

}
});

  });
 