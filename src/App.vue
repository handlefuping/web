

<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore()
    
    onBeforeMount(() => {
      const loginInfoStr = localStorage.getItem('loginInfo')
      try{
        const loginInfo = JSON.parse(loginInfoStr)
        store.commit('setLoginInfo', loginInfo)
      }catch(e) {
        console.log(e);
        
      }
    })
    return {
      
    };
  },
  
});
</script>

