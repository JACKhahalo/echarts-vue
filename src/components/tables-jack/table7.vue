<template>
  <div id="table7">table</div>
</template>

<script>
import { onMounted } from 'vue';
import * as echarts from 'echarts';

export default {
  name: 'table7',
  setup() {
    const echartsInit = () => {
      const chartDom = document.getElementById('table7');
      const myChart = echarts.init(chartDom);
      let option;
      //copy

      //let colors = ['#FBB4AE', '#B3CDE3', '#CCEBC5', '#DECBE4', '#5470C6'];
      let mydata = [
        { name: '范围一', itemStyle: { color: '#e667b1' }, depth: 0 },
        { name: '范围二', itemStyle: { color: '#a193f3' }, depth: 0 },

        { name: '固定燃烧', itemStyle: { color: '#eb8484' }, depth: 1 },
        { name: '移动燃烧', itemStyle: { color: '#4bedf3' }, depth: 1 },
        { name: '购入电力', itemStyle: { color: '#d6a4e9' }, depth: 1 },

        { name: '原煤', itemStyle: { color: '#48ffa7' }, depth: 2 },
        { name: '洗精煤', itemStyle: { color: '#ffb1c1' }, depth: 2 },
        { name: '焦炭', itemStyle: { color: '#8cd3f7' }, depth: 2 },
        { name: '天然气', itemStyle: { color: '#f6c992' }, depth: 2 },
        { name: '柴油', itemStyle: { color: '#94ecf1' }, depth: 2 },
        { name: '汽油', itemStyle: { color: '#ffe281' }, depth: 2 },
        { name: '电力', itemStyle: { color: '#c4f4cd' }, depth: 2 },
      ];
      // mydata.reverse()
      let mylinks = [
        { source: '范围一', target: '固定燃烧', value: 31.74 },

        { source: '范围一', target: '移动燃烧', value: 3.94 },
        { source: '范围二', target: '购入电力', value: 52.21 },

        { source: '固定燃烧', target: '原煤', value: 2.38 },
        { source: '固定燃烧', target: '洗精煤', value: 19.24 },
        { source: '固定燃烧', target: '焦炭', value: 10.01 },
        { source: '固定燃烧', target: '天然气', value: 0.11 },
        { source: '移动燃烧', target: '柴油', value: 2.48 },
        { source: '移动燃烧', target: '汽油', value: 1.46 },
        { source: '购入电力', target: '电力', value: 52.21 },
      ];
      option = {
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove',
        },
        series: {
          type: 'sankey',
          lineStyle: {
            opacity: 0.6,
            color: 'gradient',
            curveness: 0.7,
          },
          // nodeAlign: 'left',
          //间隔
          nodeGap: 5,
          layoutIterations: 1,
          emphasis: {
            focus: 'adjacency',
          },
          data: mydata,
          links: mylinks,
        },
      };

      myChart.setOption(option);

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
#table7 {
  height: 100%;
}
</style>
