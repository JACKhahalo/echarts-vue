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
    const echartsInit = ({ type, chushou, gouru, paifang }) => {
      var chartDom = document.getElementById("table2");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "范围二：供热与电力间接排放",
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
          data: type,
        },
        series: [
          {
            name: "出售",
            type: "bar",
            stack: "total",
            // itemStyle: {
            // color: '#fff',
            // borderColor: '#00b0f0'
            // },
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: chushou,
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
          //   data: paifang,
          // },
          {
            name: "购入",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: gouru,
          },
        ],
      };
      //copy
      option && myChart.setOption(option);
    };

    onMounted(() => {
      hyRequest
        .get({
          url: "/emission/fanwei2/paifang",
        })
        .then((res) => {
          console.log('res', res);
          let list = res.data.map((item, index) => {
            return {
              type: item.type,
              chushou: (item.chushou) * (-1),
              gouru: item.gouru
            }
          })
          // const obj = format(res.data);
          const obj = format(list);

          const data = obj.type.map((type, index) => ({
            type,
            chushou: obj.chushou[index],
            gouru: Number(obj.gouru[index]),
          }));

          data.sort((a, b) => {
            return (
              (Number(b.chushou) +
                Number(b.gouru)) -
              (Number(a.chushou) + Number(a.gouru))
            );
          });

          console.log(data, 'data');

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
