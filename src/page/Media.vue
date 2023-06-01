

<template>
  <a-page-header title="媒体" sub-title="我的媒体列表" @back="() => null">
    <template #extra>
      <a-button type="primary" @click="visible = true">新建媒体</a-button>
    </template>
  </a-page-header>
  <a-table :columns="columns" :data-source="data">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'size'">
        <span> {{ record.size }}kb </span>
      </template>
      <template v-else-if="column.key === 'status'">
        <a-tag :color="statusMap[record.status]?.c">{{
          statusMap[record.status]?.t
        }}</a-tag>
      </template>
      <template v-else-if="column.key === 'action'">
        <span>
          <a>Invite 一 {{ record.name }}</a>
          <a-divider type="vertical" />
          <a>Delete</a>
          <a-divider type="vertical" />
          <a class="ant-dropdown-link">
            More actions
            <down-outlined />
          </a>
        </span>
      </template>
    </template>
  </a-table>
  <a-modal v-model:visible="visible" title="Title" @ok="handleOk">
    <template #footer>
      <a-button key="back" @click="handleCancel">取消</a-button>
      <a-button key="submit" type="primary" :loading="loading" @click="handleOk"
        >确定</a-button
      >
    </template>
    <a-upload
      v-model:file-list="fileList"
      name="file"
      action="http://10.11.72.58:3000/user/upload"
      :headers="headers"
      :progress="progress"
      @change="handleChange"
    >
      <a-button>
        <upload-outlined></upload-outlined>
        Click to Upload
      </a-button>
    </a-upload>
  </a-modal>
</template>
<script lang="ts">
import { DownOutlined, UploadOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
import { message, UploadChangeParam, UploadProps } from "ant-design-vue";
import { useStore } from "vuex";
const columns = [
  {
    name: "文件名",
    dataIndex: "origin_name",
    key: "origin_name",
  },
  {
    title: "大小",
    dataIndex: "size",
    key: "size",
  },
  {
    title: "状态",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "上传时间",
    key: "created_at",
    dataIndex: "created_at",
  },
  {
    title: "Action",
    key: "action",
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
// -1 | 0 | 1 删除 ｜ 上传 ｜ 发布
const statusMap = {
  "-1": {
    c: "#f50",
    t: "已删除",
  },
  "0": {
    c: "#2db7f5",
    t: "待处理",
  },
  "1": {
    c: "#87d068",
    t: "已发布",
  },
};

export default defineComponent({
  components: {
    DownOutlined,
    UploadOutlined,
  },
  setup() {
    const store = useStore()
    const loading = ref<boolean>(false);
    const visible = ref<boolean>(false);
    const handleOk = () => {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
        visible.value = false;
      }, 2000);
    };

    const handleCancel = () => {
      visible.value = false;
    };
    const handleChange = (info: UploadChangeParam) => {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    };

    const fileList = ref([]);
    const progress: UploadProps["progress"] = {
      strokeColor: {
        "0%": "#108ee9",
        "100%": "#87d068",
      },
      strokeWidth: 3,
      format: (percent) => {
        console.log(percent, 'percent');
        
        return `${parseFloat(percent.toFixed(2))}%`
      },
      class: "test",
    };
    return {
      fileList,
      progress,
      handleChange,
      handleCancel,
      handleOk,
      visible,
      loading,
      statusMap,
      data,
      columns,
      headers: {
        Authorization: store.state.loginInfo?.token,
      },
    };
  },
});
</script>