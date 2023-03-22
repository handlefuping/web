<template>
  <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="formState.username" />
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button html-type="submit" @click="isLogin = false">注册</a-button>
      <a-button type="primary" html-type="submit" @click="isLogin = true"
        >登陆</a-button
      >
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
import { message } from "ant-design-vue";
import { defineComponent, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { LoginInfo, loginReq, registerReq } from "../request";
export default defineComponent({
  setup() {
    const formState = reactive<LoginInfo>({
      username: "",
      password: "",
    });
    const isLogin = ref(false);
    const router = useRouter()
    const store = useStore()
    
    const onFinish = (values: any) => {
      if (isLogin.value) {
        loginReq(values).then(({ token, user }) => {
          message.success('登陆成功')
          router.push('/home')
          store.commit('setUserInfo', user)
          localStorage.setItem("token", token);
        });
      } else {
        registerReq(values).then(() => {
          message.success('注册成功')
        })
        
      }
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
    };
    return {
      isLogin,
      formState,
      onFinish,
      onFinishFailed,
    };
  },
  
});
</script>

