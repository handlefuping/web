<template>
  {{count}}
  <router-view></router-view>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'App',
  setup() {
    const count = ref(0)
    return {
      count
    }
  },
}
</script>

