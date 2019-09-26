<template>
  <div>
    <filter-component @search="searchTable()" @reset="resetForm('filterForm')">
      <el-form ref="filterForm" :model="filterForm">
        <el-form-item prop="name">
          <el-input type="text" v-model="filterForm.name" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="mobile">
          <el-input type="text" v-model="filterForm.mobile" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item prop="status">
          <el-input type="text" v-model="filterForm.status" placeholder="状态"></el-input>
        </el-form-item>
      </el-form>
    </filter-component>

    <el-table :data="tableData" border v-loading="tableDataLoading" style="width: 100%;">
<<<<<<< HEAD
      <el-table-column type="index" header-align="center" align="center" width="60" label="序号" show-overflow-tooltip/>
      <el-table-column prop="name" header-align="center" align="center" label="用户名" show-overflow-tooltip/>
      <el-table-column prop="mobile" header-align="center" align="center" label="手机号" show-overflow-tooltip/>
      <el-table-column prop="status" header-align="center" align="center" label="状态" show-overflow-tooltip>
        <template slot-scope="scope">{{ scope.row.status | formatStatus }}</template>
      </el-table-column>
      <el-table-column fixed="right" header-align="center" align="center" width="150" label="操作">
=======
      <el-table-column type="index" align="center" width="60" label="序号" show-overflow-tooltip/>
      <el-table-column prop="name" align="center" label="用户名" show-overflow-tooltip/>
      <el-table-column prop="mobile" align="center" label="手机号" show-overflow-tooltip/>
      <el-table-column prop="status" align="center" label="状态" show-overflow-tooltip>
        <template slot-scope="scope">
          {{ scope.row.status | formatStatus }}
        </template>
      </el-table-column>
      <el-table-column fixed="right" align="center" width="150" label="操作">
>>>>>>> 33a693a0674ff4e5515db10f0e09309c959ae318
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleAction('modify', scope.row)">修改</el-button>
          <el-button type="text" size="small" @click="handleAction('resetPwd', scope.row)">重置密码</el-button>
          <el-button type="text" size="small" @click="handleAction('deleteRow', scope.row)">删除</el-button>
        </template>
      </el-table-column>
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

    <!-- 修改 -->
    <modify-account v-if="modifyAccountVisible" ref="modifyAccountBox" @update="update"></modify-account>

    <!-- 重置密码 -->
    <reset-password v-if="resetPasswordVisible" ref="resetPasswordBox" @update="update"></reset-password>
  </div>
</template>

<script>
  import ModifyAccount from './base/ModifyAccount'
  import ResetPassword from './base/ResetPassword'
  export default {
    components: {
      ModifyAccount,
      ResetPassword,
    },
    data(){
      return {
        filterForm: {},

        pageIndex: 1,
        pageSize: 10,
        totalPage: 0,
        tableData: [{
          name: '瓜皮',
          mobile: '13533338888',
          status: 1
        }],
        tableDataLoading: false,
        modifyAccountVisible: false,
        resetPasswordVisible: false,
      }
    },
    filters: {
      formatStatus(val){
        return val === 1 ? '可用' : '不可用'
      }
    },
    methods: {
      searchTable(){

      },
      resetForm(){

      },
      getTableData(){

      },
      update(){

      },
      handleAction(type, row){
        switch(type){
          case 'modify':
            this.modifyAccountVisible = true
            this.$nextTick(() => {
              this.$refs.modifyAccountBox.open(row)
            })
            break
          case 'resetPwd':
            this.resetPasswordVisible = true
            this.$nextTick(() => {
              this.$refs.resetPasswordBox.open(row)
            })
            break
          case 'deleteRow':
            this.$confirm('确定要删除此账号?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$message.success('删除成功!')
            }).catch(() => {
                  
            })
            break

        }
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
    }
  }
</script>

<style lang="scss" scoped>

</style>