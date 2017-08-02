/**
 * Created by TIME on 2017-04-19.
 */

function avgsalary_and_job(city,a_vg,counts){
        var chart = {
            type: 'areaspline',
            backgroundColor: null
        };
        var title = {
            text: '最火爆的web前端全国前20名职位量及平均工资详情'
        };
        var legend = {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 660,
            y: 50,
            floating: true,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        };
        var xAxis = {
            categories: city,
            plotBands: [{
                from: 0,
                to: 19,
                color: 'rgba(68, 170, 213, .2)'
            }]
        };
        var yAxis = {
            title: {
                text: '职位和工资'
            }
        };
        var tooltip = {
            shared: true,
            valueSuffix: ''
        };
        var credits = {
            enabled: false
        };
        var plotOptions = {
            areaspline: {
                fillOpacity: 0.5
            }
        };
        var series =  [{
            name: '平均工资',
            data: a_vg
        } ,{
            name: '职位数',
            data: counts
        }];
        var json = {};
        json.chart = chart;
        json.title = title;
        json.legend = legend;
        json.tooltip = tooltip;
        json.xAxis = xAxis;
        json.yAxis = yAxis;
        json.series = series;
        json.plotOptions = plotOptions;
        json.credits = credits;
        $('#container').highcharts(json);
}


// function xiazuan(perll,c_sharp_result1,javascript_result1,c_plus_plus1,di,java_result1) {
//     var chart = {
//             type: 'column'
//         };
//     var title = {
//             text: '编程语言需求量'
//         };
//     var subtitle = {
//             text: '此次统计前15名的需求排行'
//         };
//     var xAxis = {
//             type: 'category'
//         };
//     var yAxis = {
//             title: {
//                 text: '职位数'
//             }
//         };
//     var legend = {
//             enabled: false
//         };
//     var plotOptions = {
//             series: {
//                 borderWidth: 0,
//                 dataLabels: {
//                     enabled: true,
//                     format: '{point.y}'
//                 }
//             }
//         };
//     var tooltip = {
//             headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
//             pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:f}</b> <br/>'
//         };
//     var series = [{
//             name: '编程语言',
//             colorByPoint: true,
//             data: di
//         }];
//     var drilldown = {
//             series: [{
//                 name: 'perl',
//                 id: 'java',
//                 data: java_result1
//             }, {
//                 name: 'c++',
//                 id: 'c++',
//                 data: c_plus_plus1
//             }, {
//                 name: 'javascript',
//                 id: 'javascript',
//                 data: javascript_result1
//             }, {
//                 name: 'c#',
//                 id: 'c#',
//                 data: c_sharp_result1
//             }, {
//                 name: 'perl',
//                 id: 'perl',
//                 data: perll
//             },{
//                 name: 'php',
//                 id: 'php',
//                 data: {{ php_result1 }}
//             }]
//         };
//
//     var json = {};
//     json.chart = chart;
//     json.title = title;
//     json.subtitle=subtitle;
//     json.legend = legend;
//     json.tooltip = tooltip;
//     json.xAxis = xAxis;
//     json.yAxis = yAxis;
//     json.plotOptions=plotOptions;
//     json.series = series;
//     json.drilldown = drilldown;
//     $('#container2').highcharts(json);
//
// }


function language(language_name,value) {
    var chart = {
            type: 'spline',
            backgroundColor: null
    };
    var title = {
        text: '15大编程语言平均工资排行',
        x: -20
    };
    var subtitle = {
        text: '',
        x: -20
    };
    var xAxis = {
        categories: language_name,
        labels: {
            style: {
                color: '#19a0f5',//颜色
                fontSize:'12spx'  //字体
            }
        }
    };
    var yAxis = {
        title: {
            text: '月薪'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    };
    var credits = {
        enabled: false
    };
    var tooltip = {
        valueSuffix: '/元'
    };
    var legend = {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    };
    var series = [{
        name: '平均月薪',
        data: value
    }];
    var json = {};
    json.chart = chart;
    json.title = title;
    json.subtitle=subtitle;
    json.legend = legend;
    json.tooltip = tooltip;
    json.xAxis = xAxis;
    json.yAxis = yAxis;
    json.credits = credits;
    json.series = series;
    $('#container1').highcharts(json);
}
