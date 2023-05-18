<template>
  <div id="table6">table</div>
</template>

<script>
import { onMounted } from 'vue';
import * as echarts from 'echarts';

export default {
  name: 'table6',
  setup() {
    const echartsInit = () => {
      const chartDom = document.getElementById('table6');
      const myChart = echarts.init(chartDom);
      let option;
      //copy
      var Names = ['净碳排放', '范围一', '范围二', '范围三', '碳汇'];
      var Stu = [69.36, 35.68, 52.21, 2, 18.53];
      var Group = [45.32, 25.7, 21, 1, 1.38];
      var Max = [80, 80, 80, 80, 80];
      option = {
        tooltip: {},
        backgroundColor: '#fff',
        legend: {
          left: 'center',
          bottom: 170,
          textStyle: {
            fontSize: 14,
            align: 'right',
            padding: 15,
            color: '#949494',
          },
          data: ['企业碳排放', '同行平均'],
        },
        radar: [
          {
            name: {
              formatter: '{value}',
              textStyle: {
                color: '#666666',
                fontSize: 12,
              },
            },
            axisLine: {
              lineStyle: {
                color: '#d5d5d5',
              },
            },
            splitLine: {
              lineStyle: {
                color: '#ececec',
              },
            },
            splitArea: {
              areaStyle: {
                color: '#fff',
                opacity: 0,
              },
            },
            indicator: [
              {
                text: Names[0],
                max: Max[0],
                axisLabel: {
                  show: true,
                },
              },
              {
                text: Names[1],
                max: Max[1],
              },
              {
                text: Names[2],
                max: Max[2],
              },
              {
                text: Names[3],
                max: Max[3],
              },
              {
                text: Names[4],
                max: Max[4],
              },
            ],
            center: ['50%', '50%'],
            radius: 100,
          },
        ],
        series: [
          {
            type: 'radar',
            symbolSize: 0,
            areaStyle: {
              normal: {
                opacity: 1,
              },
            },
            itemStyle: {
              color: '#0070c0',
            },
            data: [
              {
                value: Stu,
                name: '企业碳排放',
              },
            ],
          },
          {
            type: 'radar',
            symbolSize: 0,
            areaStyle: {
              normal: {
                opacity: 1,
              },
            },
            itemStyle: {
              color: '#bfbfbf',
            },
            data: [
              {
                value: Group,
                name: '同行平均',
              },
            ],
          },
        ],
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
#table6 {
  height: 100%;
}
</style>
