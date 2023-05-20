<template>
  <div class="row">
    <span
      v-for="(item, index) in topList"
      :key="index"
      :title="`${item.name}:${item.num}，占比 ${item.percent}`"
      class="grid topgrid"
      :style="{ background: item.color }"
    >
    </span>
    <div class="linetop">
      <div class="tri" style="border-left: 2px solid #00b0f0">
        <div
          class="trapezoid"
          style="border-bottom: 2px solid #00b0f0; color: #00b0f0"
        >
          范围一：直接排放 {{ resData[0].ct }}tCO2
        </div>
      </div>
    </div>
    <span
      v-for="(item, index) in middleList"
      :key="index"
      :title="`${item.name}:${item.num}，占比 ${item.percent}`"
      class="grid middlegrid"
      :style="{ background: item.color }"
    />
    <div class="linemiddle">
      <div class="tri" style="border-left: 2px solid #0070c0">
        <div
          class="trapezoid"
          style="border-bottom: 2px solid #0070c0; color: #0070c0"
        >
          范围二：供热/电力间接排放{{ resData[1].ct }}tCO2
        </div>
      </div>
    </div>
    <span
      v-for="(item, index) in bottomList"
      :key="index"
      :title="`${item.name}:${item.num}，占比 ${item.percent}`"
      class="grid Bottomgrid"
      :style="{ background: item.color }"
    />
    <div class="linebottom">
      <div class="tri" style="border-left: 2px solid #124e7a">
        <div
          class="trapezoid"
          style="border-bottom: 2px solid #124e7a; color: #124e7a"
        >
          范围三：价值链间接排放{{ resData[1].ct }}tCO2
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import hyRequest from "../../request";
export default {
  name: "HeatmapChart",
  data() {
    return {
      gridData: [],
      total: 0,
      bottomList: [],
      middleList: [],
      topList: [],
      resData: [],
    };
  },
  created() {
    hyRequest
      .get({
        url: "/emission/co2",
      })
      .then((res) => {
        this.resData = res.data;
        console.log(this.resData);
      });
  },
  mounted() {
    this.initGrid();
    this.renderGrid();
  },

  methods: {
    initGrid() {
      for (let i = 0; i < 100; i++) {
        this.gridData.push({
          color: "#fff",
        });
      }
    },
    renderGrid() {
      // 数据
      const data = [
        {
          name: "CH₄排放量（t）",
          num: 310,
          percent: 20,
          color: "#00B0F0",
        },
        {
          name: "CO₂排放总量（t）",
          num: 2360.013,
          percent: 50,
          color: "#0070C0",
        },
        {
          name: "N₂O排放量（t）",
          num: 60,
          percent: 30,
          color: "#124E7A",
        },
      ];
      /* data.sort((a, b) => b.percent - a.percent) // 按照占比从高到低排序 */
      this.total = data.reduce((acc, cur) => acc + cur.percent, 0);
      let startIndex = 0;
      let rowIndex = 0;
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const endIndex = Math.round(
          startIndex + (item.percent / this.total) * 100
        ); // 根据总宽度 100% 计算每个区间的结束位置
        for (let j = startIndex; j < endIndex; j++) {
          this.gridData[j].color = data[i].color;
          this.gridData[j].name = item.name;
          this.gridData[j].percent = item.percent + "%";
          this.gridData[j].num = item.num;
        }
        if (endIndex >= (rowIndex + 1) * 10) {
          rowIndex++;
        }
        startIndex = endIndex;
      }

      this.topList = this.gridData.filter((v) => {
        return v.percent == "20%";
      });
      this.middleList = this.gridData.filter((v) => {
        return v.percent == "50%";
      });
      this.bottomList = this.gridData.filter((v) => {
        return v.percent == "30%";
      });
    },
  },
};
</script>

<style>
.row {
  width: 350px;
  height: auto;
  margin-bottom: 5px;
}

.label {
  text-align: center;
  color: rgb(255, 254, 254);
  font-size: 10px;
  width: 50px;
  height: 10px;
  line-height: 10px;
}

.grid {
  display: inline-block;
  margin-right: 5px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  margin-right: 5px;
  position: relative;
}

.linetop {
  position: absolute;
  left: 310px;
  top: 0;
}

.linemiddle {
  position: absolute;
  left: 310px;
  top: 100px;
}

.linebottom {
  position: absolute;
  left: 310px;
  top: 250px;
}

/* 直角梯形 */
.tri {
  margin-top: 10px;
  height: 50px;
  width: 50px;
  border-left: 2px solid #ccc;
  position: relative;
  transform: rotate(-60deg);
  margin-left: 50px;
}

.trapezoid {
  width: 200px;
  height: 50px;
  border-bottom: 2px solid #ccc;
  position: absolute;
  transform: rotate(60deg);
  right: 0;
  left: -30px;
  bottom: 0;
  top: 100px;
}
</style>
