<template>
    <div id="main">
    </div>
</template>

<script setup>
import request from "../../request";
import { onMounted } from "vue";
import * as echarts from 'echarts';
import { ref } from "vue";

const echartsInit = (indicator, data) => {
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        legend: {
            data: ['碳排放同行对比', '均值']
        },
        radar: {
            // shape: 'circle',
            indicator
        },
        series: [
            {
                type: 'radar',
                data
            }
        ]
    };

    option && myChart.setOption(option);
}



const getData = async () => {
    let res = await request.get({ url: "/emission/tongyangduibi" });
    console.log(res)
    const indicator = res.data.map(item => {
        return {
            name: item.name,
            max: (item.score >= item.avgs ? item.score : item.avgs) + ((item.score + item.score) / 2)
        }
    })
    let data = [];
    let valueList1 = [];
    let valueList2 = [];
    res.data.forEach(item => {
        valueList1.push(item.score);
        valueList2.push(item.avgs);
    })
    data = [
        {
            value: valueList1,
            name: '碳排放同行对比'
        },
        {
            value: valueList2,
            name: "均值"
        }
    ]

    echartsInit(indicator, data)

}



onMounted(() => {
    // echartsInit();
    getData();
})




</script>

<style lang="css" scoped>
#main {
    height: 100%;
}
</style>