<template>
  <div id="table2">table</div>
</template>

<script>
import { onMounted } from "vue";
import * as echarts from "echarts";
import hyRequest from "../../request";

export default {
  name: "table2",

  setup() {
    const echartsInit = (data) => {
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
          data: data.map((item) => item.type),
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
            data: data.map((item) => item.huishou),
          },
          // {
          //   name: "排放",
          //   type: "bar",
          //   stack: "total",
          //   itemStyle: {
          //     color: "#00b0f0",
          //   },
          //   label: {
          //     show: true,
          //   },
          //   emphasis: {
          //     focus: "series",
          //   },
          //   data: data.map((item) => item.paifang),
          // },
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
            data: data.map((item) => item.touru),
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
          function format(data) {
            console.log(data);
            const obj = {};
            for (let i = 0; i < data.length; i++) {
              const item = data[i];
              for (const key in item) {
                if (!item.touru && !item.huishou && !item.paifang) {
                  continue;
                }

                if (!obj[key]) {
                  obj[key] = [];
                }

                obj[key].push(
                  typeof item[key] === "number"
                    ? parseInt(item[key])
                    : item[key]
                );
              }
            }

            return obj;
          }
          const obj = format(res.data);

          const data = obj.type.map((type, index) => ({
            type,
            touru: obj.touru[index],
            huishou: Number(-obj.huishou[index]),
          }));

          data.sort((b, a) => {
            return (
              Number(b.touru) +
              Number(b.huishou) -
              (Number(a.touru) + Number(a.huishou))
            );
          });

          echartsInit(data);
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
