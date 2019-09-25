<template>
  <div>
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
  </div>
</template>

<script>
  import { getActivityList } from '@/api/activity'
  export default {
    name: 'activityList',
    data(){
      return {
        pageIndex: 1,
        pageSize: 10,
        totalPage: 0,
        tableData: [{
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
      handleAction(type, row){
        switch(type){
          case 'add':
            
            break
          case 'edit':

            break
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>