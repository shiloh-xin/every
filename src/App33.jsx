import React, { Component } from 'react';
import echarts from 'echarts';

class App33 extends Component {
    componentDidMount() {
        var myChart = echarts.init(document.getElementById('main'));
        myChart.setOption({
            title: {
                text: '未来一周气温变化',
                subtext: '纯属捏造',
            },
            tooltip: {
                trigger: 'axis',
            },
            xAxis: {
                type: 'category',
                boundaryGap: true,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} °C',
                },
            },
            series: [
                {
                    name: '气温',
                    type: 'line',
                    data: [18, 32, 25, 20, 13, 10, 15],
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' },
                        ],
                    },
                },
            ],
        });
    }

    render() {
        return (
            <div
                id="main"
                style={{
                    width: 1000,
                    height: 500,
                    marginTop: 100,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    background: '#EEEEEE',
                    borderRadius: 8,
                }}></div>
        );
    }
}

export default App33;
