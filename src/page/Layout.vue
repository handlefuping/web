

<template>
  <a-layout>
    <a-layout-header>
      <a-row type="flex">
        <a-col flex="auto">auto</a-col>
        <a-col flex="100px">
          <a-dropdown>
            <a class="ant-dropdown-link" @click.prevent>
              <a-space>
                <a-badge count="5">
                  <a-avatar>
                    <template #icon>
                      <UserOutlined />
                    </template>
                  </a-avatar>
                </a-badge>

                {{ user.username }}
                <DownOutlined />
              </a-space>
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item @click="onLogout">
                  <a href="javascript:;">登出</a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout>
      <a-layout-sider><Sider /></a-layout-sider>
      <a-layout-content><router-view></router-view></a-layout-content>
    </a-layout>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>
<script lang="ts">
import Sider from "../components/Sider.vue";
import { DownOutlined, UserOutlined } from "@ant-design/icons-vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { logoutReq } from "../request";
export default defineComponent({
  name: "Layout",
  components: {
    DownOutlined,
    UserOutlined,
    Sider,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const onLogout = () => {
      logoutReq().then(() => {
        store.commit("resetLoginInfo");
        localStorage.setItem("loginInfo", "");
        router.push("/login");
      });
    };
    return {
      onLogout,
      user: store.state.loginInfo.user,
    };
  },
});
</script>
<style lang="less" scoped>
/deep/ .ant-layout-header,
.ant-layout-footer {
  color: #fff;
  background: #7dbcea;
}
</style>