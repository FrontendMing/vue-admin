<template>
  <div>
    <el-table :data="tableData" border v-loading="tableDataLoading" style="width: 100%;">
      <el-table-column type="index" label="序号" width="60" show-overflow-tooltip/>
      <el-table-column type="flag" label="标识" min-width="100" show-overflow-tooltip/>
      <el-table-column type="time" label="时间" min-width="120" show-overflow-tooltip/>
      <el-table-column type="type" label="类型" min-width="100" show-overflow-tooltip/>
      <el-table-column type="amount" label="金额" min-width="100" show-overflow-tooltip/>
      <el-table-column type="recommended" label="被推荐人" min-width="100" show-overflow-tooltip/>
      <el-table-column type="recommendedMobile" label="被推荐人手机号" min-width="120" show-overflow-tooltip/>
      <el-table-column type="referrer" label="推荐人" min-width="100" show-overflow-tooltip/>
      <el-table-column type="referrerMobile" label="推荐人手机号" min-width="120" show-overflow-tooltip/>
    </el-table>

    <el-pagination
      @size-change="sizeChangeHandle"
      @current-change="currentChangeHandle"
      :current-page="pageIndex"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageSize"
      :total="totalPage"
      layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'redPocketRecord',
    data(){
      return {
        pageIndex: 1,
        pageSize: 10,
        totalPage: 0,
        tableData: [{
          flag: '444sd5s5df4sd54656'
        }],
        tableDataLoading: false,
      }
    },
    methods: {
      getTableData(){

      },
      // 每页数
      sizeChangeHandle (val) {
        this.pageSize = val
        this.pageIndex = 1
        this.getTableData()
      },
      // 当前页
      currentChangeHandle (val) {
        this.pageIndex = val
        this.getTableData()
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>