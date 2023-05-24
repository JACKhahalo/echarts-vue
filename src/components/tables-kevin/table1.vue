<template>
  <div id="table1">table</div>
</template>

<script>
import { onMounted } from "vue";
import * as echarts from "echarts";
import hyRequest from "../../request";

export default {
  name: "table2",
  setup() {
    const echartsInit = (labelArr, addArr, reduceArr, dp, data) => {
      const chartDom = document.getElementById("table1");

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
          //文字上边距
          axisLabel: {
            show: true,
            margin: 20,
            rotate: 0,
            interval: 0,
          },
          data: [...labelArr],
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
            data: addArr,
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
            data: reduceArr,
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
            data: data,
          },
        ],
      };
      //copy
      option && myChart.setOption(option);
    };

    onMounted(() => {
      hyRequest.get({ url: "/emission/tanpaifanghuizong" }).then((res) => {
        console.log("res", res);
        function formatNumber(num) {
          if (Number.isInteger(num)) {
            return num; // 整数直接返回
          } else {
            return num.toFixed(3); // 保留两位小数
          }
        }
        const labelArr = res.data.map((item) => item.label);

        const addArr = res.data.map((item) => {
          if (item.type === "加") {
            if (item.value === 0) {
              return item.value;
            } else {
              return formatNumber(item.value);
            }
          } else {
            return "-";
          }
        });

        const reduceArr = res.data.map((item) => {
          if (item.type === "减") {
            if (item.value === 0) {
              return item.value;
            } else {
              return formatNumber(item.value);
            }
          } else {
            return "-";
          }
        });
        const dp = [];
        dp[0] = 0;

        const data = [];
        for (let i = 0; i < res.data.length; i++) {
          const item = res.data[i];
          if (item.type !== "合计") {
            data.push("-");
          } else {
            data.push(formatNumber(item.value));
          }
        }

        console.log(addArr);
        console.log(reduceArr);
        console.log(res.data);

        for (let i = 1; i < res.data.length; i++) {
          const item = res.data[i];
          if (item.type === "减") {
            if (res.data[i - 1].type === "减") {
              dp[i] = dp[i - 1] - item.value;
              console.log(dp[i]);
            } else {
              dp[i] = res.data[i - 1].value + dp[i - 1] - res.data[i].value;
            }
          } else {
            if (res.data[i - 1].type === "加") {
              dp[i] = res.data[0].value + dp[i - 1];
            } else {
              dp[i] = dp[i - 1];
            }
          }
        }
        dp[7] = 0;

        echartsInit(labelArr, addArr, reduceArr, dp, data);
      });
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
