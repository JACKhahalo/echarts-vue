<template>
  <div id="table2">table</div>
</template>

<script>
import { onMounted, ref, nextTick } from "vue";
import * as echarts from "echarts";
import hyRequest from "../../request";
import { format } from "../../utils/format";

export default {
  name: "table2",

  setup() {
    const echartsInit = (obj) => {
      var chartDom = document.getElementById("table2");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "范围一：直接排放",
          left: "center",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
          },
        },
        legend: {
          top: "40",
          icon: "square",
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
        },
        yAxis: {
          type: "category",
          data: obj.type,
        },
        series: [
          {
            name: "回收",
            type: "bar",
            stack: "total",
            itemStyle: {
              // color: 'transparent',
              // borderColor: '#00b0f0'
            },
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: obj.huishou,
          },
          {
            name: "排放",
            type: "bar",
            stack: "total",
            itemStyle: {
              color: "#00b0f0",
            },
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: obj.paifang,
          },
          {
            name: "投入",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: obj.touru,
          },
        ],
      };
      //copy
      option && myChart.setOption(option);
    };

    onMounted(() => {
      hyRequest
        .get({
          url: "emission/fanwei1/paifang",
        })
        .then((res) => {
          const obj = format(res.data);

          echartsInit(obj);
        });
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
