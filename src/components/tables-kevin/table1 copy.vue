<template>
  <div id="table1">table</div>
</template>

<script>
import { onMounted } from "vue";
import * as echarts from "echarts";

export default {
  name: "table2",
  setup() {
    const echartsInit = (dp) => {
      const chartDom = document.getElementById("table1");

      console.log(chartDom);
      const myChart = echarts.init(chartDom);
      let option;
      //copy
      var plusColor = "#ffd708";
      var minusColor = "#124e7a";
      var totalColor = "#00b0f0";

      option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          data: ["增加", "减少", "汇总"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          splitLine: {
            show: false,
          },
          data: [
            "燃料投入",
            "电力和热力",
            "废物品处理",
            "碳汇减排",
            "1111",
            "2222",
            "3333",
            "333333",
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "Placeholder",
            type: "bar",
            stack: "Total",
            silent: true,
            itemStyle: {
              borderColor: "transparent",
              color: "transparent",
            },
            emphasis: {
              itemStyle: {
                borderColor: "transparent",
                color: "transparent",
              },
            },
            data: dp,
          },
          {
            name: "增加",
            type: "bar",
            stack: "Total",
            itemStyle: {
              color: plusColor,
            },
            label: {
              show: true,
              position: "top",
            },
            data: [5, "-", 8, "-", 2, "-", "-"],
          },
          {
            name: "减少",
            type: "bar",
            stack: "Total",
            itemStyle: {
              color: minusColor,
            },
            label: {
              show: true,
              position: "bottom",
            },
            data: ["-", 2, "-", 3, "-", 1, 4],
          },
          {
            name: "汇总",
            type: "bar",
            stack: "Total",
            itemStyle: {
              color: totalColor,
            },
            label: {
              show: true,
              position: "top",
            },
            data: ["-", "-", "-", "-", "-", "-", "-", 8],
          },
        ],
      };
      //copy
      option && myChart.setOption(option);
    };

    onMounted(() => {
      const testArr = [
        { value: 5, type: "加" },
        { value: 2, type: "减" },
        { value: 8, type: "加" },
        { value: 3, type: "减" },
        { value: 2, type: "加" },
        { value: 1, type: "减" },
        { value: 4, type: "减" },
      ];
      const dp = [];
      dp[0] = 0;

      for (let i = 1; i < testArr.length; i++) {
        const item = testArr[i];
        if (item.type === "减") {
          if (testArr[i - 1].type === "减") {
            dp[i] = dp[i - 1] - item.value;
          } else {
            dp[i] = testArr[i - 1].value + dp[i - 1] - testArr[i].value;
          }
        } else {
          if (testArr[i - 1].type === "加") {
            dp[i] = testArr[0].value + dp[i - 1];
          } else {
            dp[i] = dp[i - 1];
          }
        }
      }

      echartsInit(dp);
    });

    return {};
  },
};
</script>
<style scoped>
#table1 {
  /* width: 100%; */
  height: 100%;
}
</style>
