<template>
  <a-menu
    mode="inline"
    @click="handleClick"
  >
    <a-menu-item key="1">
      <template #icon>
        <MailOutlined />
      </template>
      <router-link to="/media">媒体</router-link>
    </a-menu-item>
  </a-menu>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { MailOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    MailOutlined,
  },
  setup() {
    
    return {
      
    };
  },
});
</script>

