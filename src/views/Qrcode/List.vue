<template>
  <div>
    <filter-component @search="searchTable()" @reset="resetForm('filterForm')">
      <el-form ref="filterForm" :model="filterForm">
<<<<<<< HEAD
        <el-form-item prop="qrcodeName">
          <el-input type="text" v-model="filterForm.qrcodeName" placeholder="二维码名称"></el-input>
        </el-form-item>
      </el-form>
      <template slot="moreBtns">
        <el-button type="success" icon="el-icon-plus" @click="createQrcode()">创建</el-button>
=======
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
        <el-button type="success" icon="el-icon-plus" @click="handleAction('add')">创建</el-button>
>>>>>>> 33a693a0674ff4e5515db10f0e09309c959ae318
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
<<<<<<< HEAD
          <el-button type="text" size="small" @click="handleAction('shareSet', scope.row)">分享设置</el-button>
=======
          <el-button type="text" size="small" @click="handleAction('shareSetting', scope.row)">分享设置</el-button>
>>>>>>> 33a693a0674ff4e5515db10f0e09309c959ae318
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

<<<<<<< HEAD
=======
    <!-- 分享设置 -->
    <share-setting v-if="shareSettingVisible" ref="shareSettingBox" @update="update"></share-setting>

>>>>>>> 33a693a0674ff4e5515db10f0e09309c959ae318
  </div>
</template>

<script>
  import AddQrcode from './base/AddQrcode'
<<<<<<< HEAD
  // import ResetPassword from './base/ResetPassword'
  export default {
    components: {
      AddQrcode,
      // ResetPassword,
=======
  import ShareSetting from './base/ShareSetting'
  export default {
    name: 'qrcodeList',
    components: {
      AddQrcode,
      ShareSetting
>>>>>>> 33a693a0674ff4e5515db10f0e09309c959ae318
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
<<<<<<< HEAD
        resetPasswordVisible: false,
=======
        shareSettingVisible: false,
>>>>>>> 33a693a0674ff4e5515db10f0e09309c959ae318
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
<<<<<<< HEAD
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
=======
      handleAction(type, row){
        switch(type){
          case 'add':
            this.addQrcodeVisible = true
            this.$nextTick(() => {
              this.$refs.addQrcodeBox.open(null)
            })
            break
          case 'modify':
            this.addQrcodeVisible = true
            this.$nextTick(() => {
              this.$refs.addQrcodeBox.open(row)
            })
            break
          case 'shareSetting':
            this.shareSettingVisible = true
            this.$nextTick(() => {
              this.$refs.shareSettingBox.open()
            })
            break
          case 'deleteRow':
            this.$confirm('确定要删除此账号?', '提示', {
>>>>>>> 33a693a0674ff4e5515db10f0e09309c959ae318
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$message.success('删除成功!')
            }).catch(() => {
                  
            })
            break
<<<<<<< HEAD

=======
>>>>>>> 33a693a0674ff4e5515db10f0e09309c959ae318
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