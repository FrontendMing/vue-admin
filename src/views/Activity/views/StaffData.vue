<template>
  <div>
    <filter-component @search="searchTable()" @reset="resetForm('filterForm')">
      <el-form ref="filterForm" :model="filterForm">
        <el-form-item prop="dataType">
          <el-select v-model="filterForm.dataType">
            <el-option label="今日数据" value="today"></el-option>
            <el-option label="全部数据" value="total"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="date">
          <el-input type="text" v-model="filterForm.mobile" placeholder="手机号"></el-input>
        </el-form-item>
      </el-form>
    </filter-component>

    <el-table :data="tableData" border v-loading="tableDataLoading" style="width: 100%;">
      <el-table-column type="index" label="序号" width="60" show-overflow-tooltip/>
      <el-table-column prop="staffName" label="员工姓名" min-width="150" show-overflow-tooltip/>
      <el-table-column prop="staffMobile" label="员工手机号" min-width="150" show-overflow-tooltip/>
      <el-table-column type="recommandToday" label="今日推荐数" min-width="150" show-overflow-tooltip/>
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
    name: 'staffData',
    data(){
      return {
        pageIndex: 1,
        pageSize: 10,
        totalPage: 0,
        tableData: [{
          flag: '444sd5s5df4sd54656'
        }],
        tableDataLoading: false,

        filterForm:{
          dataType: 'today',
          date: undefined
        }
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