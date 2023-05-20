import { defineStore } from 'pinia';
import { ref } from 'vue';

export const mainStore = defineStore(
  'main',
  () => {
    const count = ref(1);
    const increment = () => {
      count.value++;
    };
    return {
      count,
      increment,
    };
  },
  {
    persist: { enabled: true },
  }
);
