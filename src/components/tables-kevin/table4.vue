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
                    text: '范围三：供热与电力间接排放',
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
                    top: '40'
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
                    data: ['污水排放', '垃圾排放']
                },
                series: [
                    {
                        data: [2, 2],
                        type: 'bar',
                        itemStyle: {
                            color: '#124e7a'
                        },
                        label: {
                            show: true
                        }
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
    height: 100%;
}
</style>
