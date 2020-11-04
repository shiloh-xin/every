import React, { Component } from 'react';
// 引入axios
import axios from 'axios';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入饼状图需要的库
import 'echarts/lib/chart/pie';
// 引入配置选项中需要用到的组件
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/legendScroll';

class App31 extends Component {
    // 状态初始化
    state = {
        list: [],
    };

    async componentDidMount() {
        try {
            // 发起请求
            let ret = await axios.get('https://api.i-lynn.cn/college?type=1');
            this.setState(() => {
                return {
                    list: ret.data.list,
                };
            });
        } catch (error) {
            console.log('network error.');
        }
        // 处理pie图需要的数据
        let legendData = [];
        let seriesData = [];
        this.state.list.forEach(element => {
            legendData.push(element.area);
            seriesData.push({ name: element.area, value: element.counts });
        });
        // 初始化echarts
        var myChart = echarts.init(document.getElementById('main'));
        myChart.setOption({
            title: {
                text: '全国普通高等院校数量分布图',
                subtext: '数据来源：教育部（2020.11）',
                left: 'center',
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)',
            },
            legend: {
                type: 'scroll',
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: legendData,
            },
            series: [
                {
                    name: '行政区',
                    type: 'pie',
                    radius: '60%',
                    center: ['40%', '50%'],
                    data: seriesData,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                        },
                    },
                },
            ],
        });
    }

    render() {
        return <div id="main" style={{ width: 1000, height: 650 }}></div>;
    }
}

export default App31;
