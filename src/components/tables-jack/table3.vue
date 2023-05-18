<template>
  <div id="table3">table</div>
</template>

<script>
import { onMounted } from 'vue';
import * as echarts from 'echarts';

export default {
  name: 'table3',
  setup() {
    const echartsInit = () => {
      const chartDom = document.getElementById('table3');
      const myChart = echarts.init(chartDom);
      let option;
      //copy
      option = {
        color: [
          '#FFA23F ',
          '#FF6B43',
          '#625AFF',
          '#D041FF',
          '#1A76FF ',
          '#2FDC89 ',
        ],

        title: {
          text: '36.58万吨',
          itemGap: 20,
          x: 'center',
          y: '50%',
          textStyle: {
            fontSize: 18,
            fontWeight: 'normal',
            color: '#333333',
          },
          /* subtextStyle: {
            fontSize: 24,
            fontWeight: 'normal',
            align: 'center',
            color: '#333333',
          }, */
        },

        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
        },

        series: [
          {
            name: '占用',
            type: 'pie',
            selectedMode: 'single',
            //饼图半径
            radius: [100, 120],

            label: {
              padding: [20, -60],
              formatter: '{b}:{c}\n{d}%',
            },
            labelLine: {
              //字体位置
              length: 0,
              length2: 80,
              show: true,
              color: '#00ffff',
            },

            data: [
              {
                value: 53.14,
                name: '固定排放',
                itemStyle: {
                  color: '#00b0f0',
                },
              },
              {
                value: 3.94,
                name: '移动排放',
                itemStyle: {
                  color: '#0070c0',
                },
              },
              {
                value: 0,
                name: '能源加工转换',
                itemStyle: {
                  color: '#00b0f0',
                },
              },
              {
                value: 2,
                name: '污水垃圾',
                itemStyle: {
                  color: '#006a90',
                },
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
#table3 {
  height: 100%;
}
</style>
