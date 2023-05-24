<template>
  <div id="table2">table</div>
</template>

<script>
import { onMounted } from "vue";
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
          text: "范围三：价值链间接排放",
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
            data: obj.co_discharge,
            type: "bar",
            itemStyle: {
              color: "#124e7a",
            },
            label: {
              show: true,
            },
          },
        ],
      };
      //copy
      option && myChart.setOption(option);
    };

    onMounted(() => {
      hyRequest
        .get({
          url: "/emission/fanwei3/paifang",
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
