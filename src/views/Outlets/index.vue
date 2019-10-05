<template>
  <div>
    <filter-component @search="searchTable('filterForm')" @reset="resetForm('filterForm')">
      <el-form ref="filterForm" :model="filterForm">
        <el-form-item prop="storeName">
          <el-input type="text" v-model="filterForm.storeName" placeholder="门店名称"></el-input>
        </el-form-item>
        <el-form-item prop="status">
          <el-select v-model="filterForm.status" placeholder="状态">
            <el-option label="启用" value="1"></el-option>
            <el-option label="关闭" value="-1"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <template slot="moreBtns">
        <el-button type="success" icon="el-icon-plus" @click="handleAction('add')">新增</el-button>
      </template>
    </filter-component>

    <el-table :data="tableData" border v-loading="tableDataLoading" style="width: 100%;">
      <el-table-column type="index" align="center" width="60" label="序号" show-overflow-tooltip/>
      <el-table-column prop="storeName" align="center" label="门店名称" show-overflow-tooltip/>
      <el-table-column prop="storeName" align="center" label="登录账号" show-overflow-tooltip/>
      <el-table-column prop="status" align="center" label="状态" show-overflow-tooltip>
        <template slot-scope="scope">
          {{ scope.row.status || '-' }}
        </template>
      </el-table-column>
      <el-table-column fixed="right" align="center" width="150" label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleAction('modify', scope.row)">修改</el-button>
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
    <modify-outlets v-if="modifyOutletsVisible" ref="modifyOutletsBox"></modify-outlets>

  </div>
</template>

<script>
  import ModifyOutlets from './base/ModifyOutlets'
  import { getOutletsList } from '@/api/outlets'
  import { PageInit } from '@/views/common/mixins/PageInit.js'
  export default {
    name: 'outlets',
    mixins: [ PageInit ],
    components: {
      ModifyOutlets,
    },
    data(){
      return {
        filterForm: {
          storeName: undefined,
          status: undefined
        },

        modifyOutletsVisible: false,
      }
    },
    methods: {
      async getTableData(params = {}){
        const pager = `pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`
        const res = await getOutletsList(pager, params)
        if(res.code == 0){
          const { list, currPage, pageSize, totalCount } = res.data
          this.tableData = list
          this.pageIndex = currPage
          this.pageSize = pageSize
          this.totalPage = totalCount
        }
      },
      // 操作
      handleAction(type, row){
        switch(type){
          case 'add':
            this.modifyOutletsVisible = true
            this.$nextTick(() => {
              this.$refs.modifyOutletsBox.open()
            })
            break
          case 'modify':
            this.modifyOutletsVisible = true
            this.$nextTick(() => {
              this.$refs.modifyOutletsBox.open(row)
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
    }
  }
</script>

<style lang="scss" scoped>

</style>