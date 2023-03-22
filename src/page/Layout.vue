

<template>
  <div class="header">
    {{userInfo.username}}2222
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: 'Layout',
  setup() {
    const store = useStore()
    return {
      userInfo: store.state.userInfo
    }
  },
});
</script>
<style lang="less" scoped>
.header {
  height: 64px;
}
</style>