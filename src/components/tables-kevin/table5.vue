<template>
  <div id="k-table5">table</div>
</template>

<script>
import { onMounted } from "vue";
import * as echarts from "echarts";
import hyRequest from "../../request";

export default {
  name: "k-table5",
  setup() {
    const echartsInit = (data, mydata) => {
      const chartDom = document.getElementById("k-table5");
      const myChart = echarts.init(chartDom);
      let option;
      //copy

      //let colors = ['#FBB4AE', '#B3CDE3', '#CCEBC5', '#DECBE4', '#5470C6'];
      // mydata.reverse()
      let mylinks = [...data];
      option = {
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove",
        },
        series: {
          type: "sankey",
          lineStyle: {
            opacity: 0.6,
            color: "gradient",
            curveness: 0.7,
          },
          // nodeAlign: 'left',
          //间隔
          nodeGap: 5,
          layoutIterations: 1,
          emphasis: {
            focus: "adjacency",
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
      hyRequest
        .get({
          url: "/emission/lujingfenxi",
        })
        .then((res) => {
          console.log(res.data);
          let mydataOrigin = [
            {
              name: "范围一",
              itemStyle: { color: "#9654e5" },
              depth: 0,
            },
            { name: "范围二", itemStyle: { color: "#4328e7" }, depth: 0 },
            { name: "范围三", itemStyle: { color: "#ff8800" }, depth: 0 },

            { name: "能源出售", itemStyle: { color: "#ff6283" }, depth: 1 },

            { name: "原煤", itemStyle: { color: "#48ffa7" }, depth: 2 },
            { name: "洗精煤", itemStyle: { color: "#ffb1c1" }, depth: 2 },
            { name: "焦炭", itemStyle: { color: "#8cd3f7" }, depth: 2 },
            { name: "天然气", itemStyle: { color: "#f6c992" }, depth: 2 },
            { name: "柴油", itemStyle: { color: "#94ecf1" }, depth: 2 },
            { name: "汽油", itemStyle: { color: "#1aa7ee" }, depth: 2 },
            { name: "电力", itemStyle: { color: "#007d8e" }, depth: 2 },
            { name: "热力", itemStyle: { color: "#c11f1f" }, depth: 2 },
            { name: "垃圾", itemStyle: { color: "#5b9b0f" }, depth: 2 },
            { name: "污水", itemStyle: { color: "#2bb5cc" }, depth: 2 },
            { name: "煤制品", itemStyle: { color: "#2bb5cc" }, depth: 2 },
          ];

          const mydata = mydataOrigin.map((item) => {
            if (
              res.data.find((item1) => {
                return item1.source === item.name || item1.target === item.name;
              })
            ) {
              return item;
            }
            return { id: "" };
          });

          echartsInit(res.data, mydata);
        });
    });

    return {};
  },
};
</script>
<style scoped>
#k-table5 {
  height: 100%;
}
</style>
