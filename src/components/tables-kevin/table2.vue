<template>
    <div id="table2">table</div>
</template>

<script>
import { onMounted } from 'vue';
import * as echarts from 'echarts';

export default {
    name: 'table2',
    setup() {
        const echartsInit = () => {
            var chartDom = document.getElementById('table2');
            var myChart = echarts.init(chartDom);
            var option;

            option = {
                title: {
                    text: '范围一：直接排放',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        // Use axis to trigger tooltip
                        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
                    }
                },
                legend: {
                    top: '40',
                    icon: 'square',
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value'
                },
                yAxis: {
                    type: 'category',
                    data: ['原煤', '洗精煤', '焦炭', '天然气', '汽油', '柴油']
                },
                series: [
                    {
                        name: '回收',
                        type: 'bar',
                        stack: 'total',
                        itemStyle: {
                            // color: 'transparent',
                            // borderColor: '#00b0f0'
                        },
                        label: {
                            show: true
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [1, 1, 1, 1, 1, 1]
                    },
                    {
                        name: '排放',
                        type: 'bar',
                        stack: 'total',
                        itemStyle: {
                            color: '#00b0f0',
                        },
                        label: {
                            show: true
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [2, 2, 2, 2, 2, 2]
                    },
                    {
                        name: '投入',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [3, 3, 3, 3, 3, 3]
                    },
                ]
            };
            //copy
            option && myChart.setOption(option);
        };

        onMounted(() => {
            echartsInit();
        });

        return {};
    },
};
</script>
<style scoped>
#table2 {
    width: 100%;
    height: 800px;
}
</style>
