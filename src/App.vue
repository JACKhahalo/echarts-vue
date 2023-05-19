<template>
  <Home></Home>
</template>

<script>
import Home from './components/home/home.vue';
export default {
  components: [Home],
  setup() {
    const init = () => {
      axios
        .get('http://192.168.200.203:8083/prod-api/dbapi/api/select-all-data')
        .then((res) => {});
    };
    init();
    return {};
  },
};
</script>
<style scoped></style>
