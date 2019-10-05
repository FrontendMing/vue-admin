<template>
  <div>
    <filter-component @search="searchTable('filterForm')" @reset="resetForm('filterForm')">
      <el-form ref="filterForm" :model="filterForm">
        <el-form-item prop="roleName">
          <el-input type="text" v-model="filterForm.roleName" placeholder="角色名"></el-input>
        </el-form-item>
      </el-form>
    </filter-component>

    <el-table :data="tableData" border v-loading="tableDataLoading" style="width: 100%;">
      <el-table-column type="index" align="center" width="60" label="序号" show-overflow-tooltip/>
      <el-table-column prop="roleName" align="center" label="角色名" show-overflow-tooltip/>
      <el-table-column prop="roleId" align="center" label="角色Id" show-overflow-tooltip/>
    </el-table>

  </div>
</template>

<script>
  import { getRoleList } from '@/api/account'
  import { PageInit } from '@/views/common/mixins/PageInit'
  export default {
    name: 'role',
    mixins: [ PageInit ],
    data(){
      return {
        filterForm: {},
      }
    },
    methods: {
      async getTableData(){
        const res = await getRoleList()
        const { code, list } = res
        if(res.code == 0){
          this.tableData = list
        }
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>