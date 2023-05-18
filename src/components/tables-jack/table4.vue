<template>
  <div id="table4">table</div>
</template>

<script>
import { onMounted } from 'vue';
import * as echarts from 'echarts';

export default {
  name: 'table4',
  setup() {
    const echartsInit = () => {
      const chartDom = document.getElementById('table4');
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
          text: '52.32万吨',
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
                value: 0.58,
                name: '购入电力',
                itemStyle: {
                  color: '#adbedd',
                },
              },
              {
                value: 0.07,
                name: '购入热力',
                itemStyle: {
                  color: '#6990ca',
                },
              },
              {
                value: 0,
                name: '售出电力',
                itemStyle: {
                  color: '#00b0f0',
                },
              },
              {
                value: 0,
                name: '售出热力',
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
#table4 {
  height: 100%;
}
</style>
