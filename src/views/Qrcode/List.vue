<template>
  <div>
    <filter-component @search="searchTable()" @reset="resetForm('filterForm')">
      <el-form ref="filterForm" :model="filterForm">
        <el-form-item prop="qrcodeName">
          <el-input type="text" v-model="filterForm.qrcodeName" placeholder="二维码名称"></el-input>
        </el-form-item>
      </el-form>
      <template slot="moreBtns">
        <el-button type="success" icon="el-icon-plus" @click="createQrcode()">创建</el-button>
      </template>
    </filter-component>

    <el-table :data="tableData" border v-loading="tableDataLoading" style="width: 100%;">
      <el-table-column type="index" header-align="center" align="center" width="60" label="序号" show-overflow-tooltip/>
      <el-table-column prop="name" header-align="center" align="center" label="二维码名称" show-overflow-tooltip/>
      <el-table-column prop="images" header-align="center" align="center" label="产品图片" show-overflow-tooltip/>
      <el-table-column prop="audio" header-align="center" align="center" label="音乐" show-overflow-tooltip/>
      <el-table-column prop="backgroundColor" header-align="center" align="center" label="背景颜色" show-overflow-tooltip/>
      <el-table-column prop="buttonColor" header-align="center" align="center" label="按钮颜色" show-overflow-tooltip/>
      <el-table-column prop="carousel" header-align="center" align="center" label="跑马灯" show-overflow-tooltip/>
      <el-table-column prop="links" header-align="center" align="center" label="包含砍价链接" show-overflow-tooltip/>
      <el-table-column prop="activityDetail" header-align="center" align="center" label="活动详情" show-overflow-tooltip/>
      <el-table-column fixed="right" header-align="center" align="center" width="160" label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleAction('modify', scope.row)">修改</el-button>
          <el-button type="text" size="small" @click="handleAction('shareSet', scope.row)">分享设置</el-button>
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

    <!-- 创建二维码 -->
    <add-qrcode v-if="addQrcodeVisible" ref="addQrcodeBox" @update="update"></add-qrcode>

  </div>
</template>

<script>
  import AddQrcode from './base/AddQrcode'
  // import ResetPassword from './base/ResetPassword'
  export default {
    components: {
      AddQrcode,
      // ResetPassword,
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
        addQrcodeVisible: false,
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
      createQrcode(){
        this.addQrcodeVisible = true
        this.$nextTick(() => {
          this.$refs.addQrcodeBox.open()
        })
      },
      handleAction(type, row){
        switch(type){
          case 'modify':
            
            break
          case 'shareSet':
            
            break
          case 'deleteRow':
            this.$confirm('确定要删除?', '提示', {
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