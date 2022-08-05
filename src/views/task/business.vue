<template>
   
  <div class="dashboard-container">
    <!--    头部 -->
    <div class="app-container">
           <el-card class="box-card" style="margin-bottom: 20px">
        <!-- 封装的Input -->
        <zzl-Input title="工单编号:" placeholder="请输入"></zzl-Input>
        <zzl-Input title="工单状态:" placeholder="请选择"></zzl-Input>
        <!-- 封装的按钮 -->
        <zzl-Button
          @click="click"
          color="white"
          backgroundColor="#5f84ff"
          title="查询"
          icon="el-icon-search"
          iconColor="white"
        ></zzl-Button>
      </el-card>
      <!-- 内容区域 -->
             <el-card class="box-card">
        <!-- 封装的按钮 -->
        <zzl-Button
          @click="click"
          color="white"
          backgroundColor="#ff5e20"
          title="新建"
          icon="el-icon-circle-plus-outline"
          iconColor="white"
        ></zzl-Button>
        <zzl-Button
          style="padding-left: 10px"
          @click="click"
          color="black"
          backgroundColor="#fbf4f0"
          title="工单配置"
          iconColor="white"
        ></zzl-Button>
        <!-- table表格 -->

        <el-table :data="tableData" style="width: 100%">
          <el-table-column label="序号" width="70">
            <template slot-scope="scope">
              <span>{{
                scope.$index + 1 + 10 * (tableInfo.pageIndex - 1)
              }}</span>
            </template>
          </el-table-column>
          <el-table-column label="工单编号" width="130">
            <template slot-scope="scope">
              <span>{{ scope.row.taskCode }}</span>
            </template>
          </el-table-column>
          <el-table-column label="设备名称" width="130">
            <template slot-scope="scope">
              <span>{{ scope.row.taskCode }}</span>
            </template>
          </el-table-column>
          <el-table-column label="工单类型" width="120">
            <template slot-scope="scope">
              <span>{{ scope.row.taskType.typeName }}</span>
            </template>
          </el-table-column>
          <el-table-column label="工单方式" width="120">
            <template slot-scope="scope">
              <span>{{ scope.row.createType === 0 ? "自动" : "手动" }}</span>
            </template>
          </el-table-column>
          <el-table-column label="工单状态" width="120">
            <template slot-scope="scope">
              <span>{{ scope.row.taskStatusTypeEntity.statusName }}</span>
            </template>
          </el-table-column>
          <el-table-column label="运营人员" width="120">
            <template slot-scope="scope">
              <span>{{ scope.row.userName }}</span>
            </template>
          </el-table-column>
          <el-table-column label="创建日期" width="180">
            <template slot-scope="scope">
              <span>{{ scope.row.createTime | transformDate }}</span>
            </template>
          </el-table-column>

          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >查看详情</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="tableInfo.pageIndex"
          :page-sizes="[10]"
          :page-size="tableInfo.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableInfo.totalCount"
        >
        </el-pagination>
      </el-card>
    </div>
     
  </div>
</template>

<script>
import { taskListApi } from "@/api/task";
export default {
  props: {
    arr: {
      type: Array,
      default: () => [],
    },
    obj: {
      type: Object,
      default: () => {},
    },
  },
  components: {},
  data() {
    return {
      tableData: [],
      tableInfo: {
        pageIndex: 1,
        totalCount: 0,
        pageSize: 10,
        totalPage: 0,
      },
    };
  },
  methods: {
    click() {},
    handleEdit(index, row) {
      console.log(index, row);
    },
    async gettableData(pageIndex) {
      const { data } = await taskListApi({ pageIndex: pageIndex });
      console.log(data);
      this.tableData = data.currentPageRecords;
      this.tableInfo.totalCount = parseInt(data.totalCount);
      this.tableInfo.pageSize = parseInt(data.pageSize);
      this.tableInfo.totalPage = parseInt(data.totalPage);
    },
    handleSizeChange(val) {
      this.tableInfo.pageSize = val;
    },
    async handleCurrentChange(val) {
      this.tableInfo.pageIndex = val;
      this.gettableData(val);
    },
  },
  mounted() {
    this.gettableData(this.tableInfo.pageIndex);
  },
  computed: {},
  watch: {},
  updated() {},
  beforeDestroy() {},
  filters: {},
};
</script>
<style lang="less" scoped></style>
