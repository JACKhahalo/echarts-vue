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
      const chartDom = document.getElementById('table2');
      const myChart = echarts.init(chartDom);
      let option;
      //copy
      var plusColor = '#ffd708';
      var minusColor = '#124e7a';
      var totalColor = '#00b0f0';
      var minusCandleColor = 'red';

      option = {
        title: {
          text: '单位：万吨',
          left: 'right',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          },
          /*  formatter: function (params) {
            console.log(params);
            var text =
              params[1].name +
              '<br />' +
              params[1].seriesName +
              '：' +
              params[1].value;
            if (params[2].data.value)
              text += '<br />平均最大值：' + params[2].value[4];
            if (params[2].data.value)
              text += '<br />平均最小值：' + params[2].value[3];
            return text;
          }, */
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
          //文字上边距
          axisLabel: {
            show: true,
            margin: 20,
            rotate: 0,
            interval: 0,
          },
          data: [
            {
              value: '固定燃烧',
              textStyle: {
                fontSize: 10,
              },
            },
            {
              value: '移动燃烧',
              textStyle: {
                fontSize: 10,
              },
            },
            {
              value: '电力热力',
              textStyle: {
                fontSize: 10,
              },
            },
            {
              value: '能源加工转换',
              textStyle: {
                fontSize: 10,
              },
            },
            {
              value: '新能源减排',
              textStyle: {
                fontSize: 10,
              },
            },
            {
              value: '土地利用碳汇',
              textStyle: {
                fontSize: 10,
              },
            },
            {
              value: '废水污水',
              textStyle: {
                fontSize: 10,
              },
            },
            {
              value: '碳排放',
              textStyle: {
                fontSize: 10,
              },
            },
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
            data: [0, 31.74, 35.68, 87.89, 69.36, 68.36, 69.36, 0],
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
            data: [31.74, 3.94, 52.21, 0, '-', '-', 2, '-'],
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
            data: ['-', '-', '-', '-', 18.53, 1, '-', '-'],
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
            data: ['-', '-', '-', '-', '-', '-', '-', 69.36],
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
#table2 {
  height: 100%;
}
</style>
