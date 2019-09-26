<template>
  <div>
<<<<<<< HEAD
    <filter-component @search="searchTable()" @reset="resetForm('filterForm')">
      <el-form ref="filterForm" :model="filterForm">
        <el-form-item prop="qrcodeName">
          <el-input type="text" v-model="filterForm.qrcodeName" placeholder="二维码名称"></el-input>
        </el-form-item>
      </el-form>
      <template slot="moreBtns">
        <el-button type="success" icon="el-icon-plus" @click="handleAction('add')">创建</el-button>
      </template>
    </filter-component>

    <el-table :data="tableData" border v-loading="tableDataLoading" style="width: 100%;">
      <el-table-column type="index" align="center" width="60" label="序号" show-overflow-tooltip/>
      <el-table-column prop="status" align="center" label="状态" min-width="80" show-overflow-tooltip/>
      <el-table-column prop="outletsName" align="center" label="门店" min-width="100" show-overflow-tooltip/>
      <el-table-column prop="activityName" align="center" label="活动名称" min-width="120" show-overflow-tooltip/>
      <el-table-column prop="deadline" align="center" label="到期时间" min-width="120" show-overflow-tooltip/>
      <el-table-column prop="goodsNum" align="center" label="商品数" min-width="80" show-overflow-tooltip/>
      <el-table-column prop="carousel" align="center" label="今/总(报名数)" min-width="120" show-overflow-tooltip/>
      <el-table-column prop="links" align="center" label="今/总(浏览量)" min-width="120" show-overflow-tooltip/>
      <el-table-column prop="activityLink" align="center" label="活动链接" min-width="120" show-overflow-tooltip/>
      <el-table-column prop="activityDetail" align="center" label="报名信息" min-width="120" show-overflow-tooltip/>
      <el-table-column prop="staffData" align="center" label="员工数据" min-width="120" show-overflow-tooltip/>
      <el-table-column prop="dataAnalyz" align="center" label="数据分析" min-width="120" show-overflow-tooltip/>
      <el-table-column prop="redPacketRecord" align="center" label="红包记录" min-width="120" show-overflow-tooltip/>
      <el-table-column fixed="right" align="center" width="350" label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleAction('modify', scope.row)">修改</el-button>
          <el-divider direction="vertical"></el-divider>
          <el-button type="text" size="small" @click="handleAction('shareSet', scope.row)">分享设置</el-button>
          <el-divider direction="vertical"></el-divider>
          <el-button type="text" size="small" @click="handleAction('redPacket', scope.row)">红包规则</el-button>
          <el-divider direction="vertical"></el-divider>
          <el-button type="text" size="small" @click="handleAction('virtual', scope.row)">虚拟数据</el-button>
          <el-divider direction="vertical"></el-divider>
          <el-button type="text" size="small" @click="handleAction('del', scope.row)">删除</el-button>
=======
    <el-table :data="tableData" border v-loading="tableDataLoading" @cell-click="tableCellClick" style="width: 100%;">
      <el-table-column type="index" header-align="center" align="center" width="60" label="序号" show-overflow-tooltip/>
      <el-table-column prop="statusName" header-align="center" align="center" label="状态" min-width="80" show-overflow-tooltip/>
      <el-table-column prop="outlets" header-align="center" align="center" label="门店" min-width="120" show-overflow-tooltip/>
      <el-table-column prop="activityName" header-align="center" align="center" label="活动名称" min-width="120" show-overflow-tooltip/>
      <el-table-column prop="deadline" header-align="center" align="center" label="到期时间" min-width="120" show-overflow-tooltip/>
      <el-table-column prop="goodsCount" header-align="center" align="center" label="商品数" min-width="80" show-overflow-tooltip/>
      <el-table-column prop="todayAndTotalNum" header-align="center" align="center" label="今/总(报名数)" min-width="120" show-overflow-tooltip/>
      <el-table-column prop="todayAndTotalView" header-align="center" align="center" label="今/总(浏览量)" min-width="120" show-overflow-tooltip/>
      <el-table-column prop="activityLink" header-align="center" align="center" label="活动链接" min-width="100" show-overflow-tooltip/>
      <el-table-column prop="signUpInfo" header-align="center" align="center" label="报名信息" min-width="100" show-overflow-tooltip/>
      <el-table-column prop="staffData" header-align="center" align="center" label="员工数据" min-width="100" show-overflow-tooltip/>
      <el-table-column prop="dataAnalysis" header-align="center" align="center" label="数据分析" min-width="100" show-overflow-tooltip/>
      <el-table-column prop="redPacketRecord" header-align="center" align="center" label="红包记录" min-width="100" show-overflow-tooltip/>
      <el-table-column prop="activityLink" header-align="center" align="center" label="活动链接" min-width="100" show-overflow-tooltip/>
      <el-table-column fixed="right" header-align="center" align="center" width="120" label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleAction('edit', scope.row)">编辑</el-button>
>>>>>>> 33a693a0674ff4e5515db10f0e09309c959ae318
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
<<<<<<< HEAD

    <!-- 新增 | 修改 活动 -->
    <create-activity v-if="activityVisible" ref="createActivityBox"></create-activity>

    <!-- 分享设置 -->
    <share-setting v-if="shareVisible" ref="shareSettingBox"></share-setting>

    <!-- 红包规则 -->
    <red-packet-rules v-if="rulesVisible" ref="redPacketRulesBox"></red-packet-rules>

=======
>>>>>>> 33a693a0674ff4e5515db10f0e09309c959ae318
  </div>
</template>

<script>
<<<<<<< HEAD
  // import ResetPassword from './base/ResetPassword'
  import CreateActivity from './base/CreateActivity'
  import ShareSetting from './base/ShareSetting'
  import RedPacketRules from './base/RedPacketRules'
  export default {
    components: {
      // ResetPassword,
      CreateActivity,
      ShareSetting,
      RedPacketRules
    },
    data(){
      return {
        activityVisible: false,
        shareVisible: false,
        rulesVisible: false,

        filterForm: {},

=======
  import { getActivityList } from '@/api/activity'
  export default {
    name: 'activityList',
    data(){
      return {
>>>>>>> 33a693a0674ff4e5515db10f0e09309c959ae318
        pageIndex: 1,
        pageSize: 10,
        totalPage: 0,
        tableData: [{
<<<<<<< HEAD
          id: 1,
          name: '瓜皮',
          mobile: '13533338888',
          status: 1
        }],

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
          case 'add': // 新增
            this.activityVisible = true
            this.$nextTick(() => {
              this.$refs.createActivityBox.open()
            })
            break
          case 'modify': // 修改
            this.activityVisible = true
            this.$nextTick(() => {
              this.$refs.createActivityBox.open(row.id)
            })
            break
          case 'shareSet': // 分享设置
            this.shareVisible = true
            this.$nextTick(() => {
              this.$refs.shareSettingBox.open()
            })
            break
          case 'redPacket': // 红包规则
            this.rulesVisible = true
            this.$nextTick(() => {
              this.$refs.redPacketRulesBox.open()
            })
            break
          case 'virtual': // 虚拟数据

            break
          case 'del': // 删除
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
=======
          statusName: '进行中'
        }],
        tableDataLoading: false,
      }
    },
    mounted() {
      this.getTableData()
    },
    methods: {
      tableCellClick(row, column){
        const target = column.property
        if(target === 'redPacketRecord'){
          this.$router.push({ name: 'redPocketRecord' })
        }
      },
      async getTableData(params = {}){
        const pager = { pageIndex: this.pageIndex, pageSize: this.pageSize }
        const res = await getActivityList({...params,...pager})
        console.log(res)
      },
>>>>>>> 33a693a0674ff4e5515db10f0e09309c959ae318
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
<<<<<<< HEAD
    }
=======
      handleAction(type, row){
        switch(type){
          case 'add':
            
            break
          case 'edit':

            break
        }
      }
    },
>>>>>>> 33a693a0674ff4e5515db10f0e09309c959ae318
  }
</script>

<style lang="scss" scoped>

</style>