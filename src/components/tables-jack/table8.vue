<template>
  <el-row :gutter="24">
    <el-col :span="4" class="text-box">新能源减排</el-col>
    <el-col :span="20">
      <div class="data1">
        <div v-for="(item, index) in data" :key="index" class="box">
          <div class="textBox">
            {{ item.value }}
          </div>
          <div class="newBox">
            <div
              class="buleBox"
              :style="`height:${item.value * 10}px;width:${item.value * 10}px;`"
            >
              <div
                class="yellowBox"
                :style="`height:${item.value1 * 10}px;width:${
                  item.value1 * 10
                }px;`"
              ></div>
            </div>
          </div>

          <div class="textBox">
            {{ item.label }}
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
  <el-row :gutter="24" style="margin-top: 50px">
    <el-col :span="4" class="text-box">碳汇减排</el-col>
    <el-col :span="20">
      <el-col :span="20">
        <div class="data1">
          <div v-for="(item, index) in data2" :key="index" class="box">
            <div class="textBox">
              {{ item.value }}
            </div>
            <div class="newBox">
              <div
                class="buleBox"
                :style="`height:${item.value * 10}px;width:${
                  item.value * 10
                }px;`"
              >
                <div
                  class="yellowBox"
                  :style="`height:${item.value1 * 10}px;width:${
                    item.value1 * 10
                  }px;`"
                ></div>
              </div>
            </div>

            <div class="textBox">
              {{ item.label }}
            </div>
          </div>
        </div>
      </el-col></el-col
    >
  </el-row>
</template>

<script>
import { ElRow, ElCol } from 'element-plus';
import { onMounted } from 'vue';
import * as echarts from 'echarts';

export default {
  name: 'table7',
  components: [ElRow, ElCol],
  setup() {
    const data = [
      {
        label: '光伏',
        value: '10',
        value1: '8',
      },
      {
        label: '风电',
        value: '4',
        value1: '4',
      },
      {
        label: '潮汐能',
        value: '8',
        value1: '6',
      },
      {
        label: '地热能',
        value: '6',
        value1: '5',
      },
      {
        label: '水电',
        value: '5',
        value1: '5',
      },
      {
        label: '煤层气',
        value: '3',
        value1: '5',
      },
      {
        label: '沼气',
        value: '2',
        value1: '5',
      },
      {
        label: '生物质能',
        value: '7',
        value1: '6',
      },
      {
        label: '氢能',
        value: '7',
        value1: '6',
      },
    ];
    let data2 = [
      {
        label: '森林',
        value: 6,
        value1: '5',
      },
      {
        label: '草地',
        value: 5,
        value1: '4',
      },
      {
        label: '湿地',
        value: 4,
        value1: '4',
      },
      {
        label: '空地',
        value: 3,
        value1: '3',
      },
      {
        label: '耕地',
        value: 2,
        value1: '3',
      },
      {
        label: '碳捕集与封存',
        value: 5,
        value1: '4',
      },
    ];

    return { data, data2 };
  },
};
</script>
<style scoped>
.data1 {
  display: flex;
}
.newBox,
.text-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
}
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
}
#table7 {
  height: 100%;
}
.buleBox {
  background-color: #0070c0;
  border-radius: 8px;
  position: relative;
}
.yellowBox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  border: 2px solid #fce704;
}
.textBox {
}
</style>
