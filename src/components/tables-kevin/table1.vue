<template>
  <div id="table1">table</div>
</template>

<script>
import { onMounted } from 'vue';
import * as echarts from 'echarts';

export default {
  name: 'table2',
  setup() {
    const echartsInit = () => {
      const chartDom = document.getElementById('table1');

      console.log(chartDom);
      const myChart = echarts.init(chartDom);
      let option;
      //copy
      var plusColor = '#ffd708';
      var minusColor = '#124e7a';
      var totalColor = '#00b0f0';

      option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          data: ['增加', '减少', '汇总'],
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          splitLine: {
            show: false,
          },
          data: [
            '燃料投入',
            '能源转化及回收',
            '电力&热力购入',
            '电力&热力出售',
            '废弃物处理',
            '新能源减排',
            '碳汇减排',
            '总计',
          ],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: 'Placeholder',
            type: 'bar',
            stack: 'Total',
            silent: true,
            itemStyle: {
              borderColor: 'transparent',
              color: 'transparent',
            },
            emphasis: {
              itemStyle: {
                borderColor: 'transparent',
                color: 'transparent',
              },
            },
            data: [0, 3, 3, 8, 8, 9, 8],
          },
          {
            name: '增加',
            type: 'bar',
            stack: 'Total',
            itemStyle: {
              color: plusColor,
            },
            label: {
              show: true,
              position: 'top',
            },
            data: [5, '-', 8, '-', 2, '-', '-', '-'],
          },
          {
            name: '减少',
            type: 'bar',
            stack: 'Total',
            itemStyle: {
              color: minusColor,
            },
            label: {
              show: true,
              position: 'bottom',
            },
            data: ['-', 2, '-', 3, '-', 1, 1, '-'],
          },
          {
            name: '汇总',
            type: 'bar',
            stack: 'Total',
            itemStyle: {
              color: totalColor,
            },
            label: {
              show: true,
              position: 'top',
            },
            data: ['-', '-', '-', '-', '-', '-', '-', 8],
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
#table1 {
  width: 100%;
  height: 100%;
}
</style>
