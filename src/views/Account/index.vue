<template>
  <div>
    <filter-component @search="searchTable('filterForm')" @reset="resetForm('filterForm')">
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
      <template slot="moreBtns">
        <el-button type="success" icon="el-icon-plus" @click="handleAction('add')">新增</el-button>
      </template>
    </filter-component>

    <el-table :data="tableData" border v-loading="tableDataLoading" style="width: 100%;">
      <el-table-column type="index" align="center" width="60" label="序号" show-overflow-tooltip/>
      <el-table-column prop="username" align="center" label="用户名" show-overflow-tooltip/>
      <el-table-column prop="mobile" align="center" label="手机号" show-overflow-tooltip/>
      <el-table-column prop="status" align="center" label="状态" show-overflow-tooltip>
        <template slot-scope="scope">
          {{ scope.row.status | formatStatus }}
        </template>
      </el-table-column>
      <el-table-column fixed="right" align="center" width="180" label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleAction('modify', scope.row)">修改账号</el-button>
          <el-button type="text" size="small" @click="handleAction('resetPwd', scope.row)">{{ userId ? '重置' : '修改' }}密码</el-button>
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
    
    <!-- 修改 | 重置密码 -->
    <reset-password v-if="resetPasswordVisible" ref="resetPasswordBox" @update="update"></reset-password>

  </div>
</template>

<script>
  import ModifyAccount from './base/ModifyAccount'
  import ResetPassword from './base/ResetPassword'
  import { getAccountList } from '@/api/account'
  import { PageInit } from '@/views/common/mixins/PageInit'
  import { delAccount } from '@/api/account'
  export default {
    name: 'account',
    mixins: [ PageInit ],
    components: {
      ModifyAccount,
      ResetPassword,
    },
    data(){
      return {
        userId: this.$store.state.user.userId,
        filterForm: {},

        modifyAccountVisible: false,
        modifyPwdVisible: false,
        resetPasswordVisible: false,
      }
    },
    filters: {
      formatStatus(val){
        return val === 1 ? '可用' : '不可用'
      }
    },
    methods: {
      async getTableData(params = {}){
        const pager = `pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`
        const res = await getAccountList(pager, params)
        if(res.code == 0){
          const { list, pageNum, pageSize, total } = res.data
          this.tableData = list
          this.pageIndex = pageNum
          this.pageSize = pageSize
          this.totalPage = total
        }
      },
      handleAction(type, row){
        switch(type){
          case 'add':
            this.modifyAccountVisible = true
            this.$nextTick(() => {
              this.$refs.modifyAccountBox.open()
            })
            break
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
            }).then(async () => {
              const res = await delAccount({ userIds: row.userId })
              if(res.code === 0){
                this.$message.success('删除成功!')
                this.update()
              }
            }).catch(() => {
                  
            })
            break
        }
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>