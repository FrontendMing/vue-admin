<template>
  <div>
    <filter-component @search="searchTable()" @reset="resetForm('filterForm')">
      <el-form ref="filterForm" :model="filterForm">
        <el-form-item prop="companyName">
          <el-input type="text" v-model="filterForm.companyName" placeholder="门店名称"></el-input>
        </el-form-item>
      </el-form>
      <template slot="moreBtns">
        <el-button type="success" icon="el-icon-plus" @click="handleAction('add')">创建</el-button>
      </template>
    </filter-component>

    <el-table :data="tableData" border v-loading="tableDataLoading" style="width: 100%;">
      <el-table-column type="index" align="center" width="60" label="序号" show-overflow-tooltip/>
      <el-table-column prop="status" align="center" label="状态" min-width="100" show-overflow-tooltip/>
      <el-table-column prop="companyName" align="center" label="门店" min-width="120" show-overflow-tooltip/>
      <el-table-column prop="activityName" align="center" label="活动名称" min-width="160" show-overflow-tooltip/>
      <el-table-column prop="startTime" align="center" label="开始时间" min-width="120" show-overflow-tooltip/>
      <el-table-column prop="endTime" align="center" label="到期时间" min-width="120" show-overflow-tooltip/>
      <el-table-column prop="goodsTotal" align="center" label="商品数" min-width="80" show-overflow-tooltip/>
      <el-table-column align="center" label="今/总(报名数)" min-width="120" show-overflow-tooltip>
        <template slot-scope="scope">
          {{ `${scope.row.dayApplicantsTotal || 0} / ${scope.row.applicantsTotal || 0}` }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="今/总(浏览量)" min-width="120" show-overflow-tooltip>
        <template slot-scope="scope">
          {{ `${scope.row.dayBrowseTotal || 0} / ${scope.row.browseTotal || 0}` }}
        </template>
      </el-table-column>
      <el-table-column prop="pageUrl" align="center" label="活动链接" min-width="100" show-overflow-tooltip/>
      <el-table-column prop="activityDetail" align="center" label="报名信息" show-overflow-tooltip>
        <template slot-scope="scope">
          <el-button type="text" @click="viewCurrentRowInfo('signUp', scope.row.activityId)">报名信息</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="staffData" align="center" label="员工数据" show-overflow-tooltip>
        <template slot-scope="scope">
          <el-button type="text" @click="viewCurrentRowInfo('staff', scope.row.activityId)">员工数据</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="dataAnalyz" align="center" label="数据分析" show-overflow-tooltip>
        <template slot-scope="scope">
          <el-button type="text" @click="viewCurrentRowInfo('data', scope.row.activityId)">数据分析</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="redPacketRecord" align="center" label="红包记录" show-overflow-tooltip>
        <template slot-scope="scope">
          <el-button type="text" @click="viewCurrentRowInfo('redPacket', scope.row.activityId)">红包记录</el-button>
        </template>
      </el-table-column>
      <el-table-column fixed="right" align="center" width="300" label="操作">
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

    <!-- 新增 | 修改 活动 -->
    <create-activity v-if="activityVisible" ref="createActivityBox"></create-activity>

    <!-- 分享设置 -->
    <share-setting v-if="shareVisible" ref="shareSettingBox"></share-setting>

    <!-- 红包规则 -->
    <red-packet-rules v-if="rulesVisible" ref="redPacketRulesBox"></red-packet-rules>

  </div>
</template>

<script>
  // import ResetPassword from './base/ResetPassword'
  import CreateActivity from './base/CreateActivity'
  import ShareSetting from './base/ShareSetting'
  import RedPacketRules from './base/RedPacketRules'
  import { getActivityList } from '@/api/activity'
  import { PageInit } from '@/views/common/mixins/PageInit.js'
  export default {
    name: 'activity',
    mixins: [ PageInit ],
    components: {
      // ResetPassword,
      CreateActivity,
      ShareSetting,
      RedPacketRules
    },
    data(){
      return {
        filterForm: {},

        activityVisible: false,
        shareVisible: false,
        rulesVisible: false,
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
        const res = await getActivityList(pager, params)
        if(res.code == 0){
          const { list, currPage, pageSize, totalCount } = res.data
          this.tableData = list
          this.pageIndex = currPage
          this.pageSize = pageSize
          this.totalPage = totalCount
        }
      },
      // 查看当前行统计数据
      viewCurrentRowInfo(type, activityId){
        switch(type){
          case 'signUp': // 报名信息
            break
          case 'staff': // 员工数据
            break
          case 'data': // 数据分析
            break
          case 'redPacket': // 红包记录
            break
        }
      },
      // 操作
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
              this.$refs.createActivityBox.open(row.activityId)
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
    }
  }
</script>

<style lang="scss" scoped>

</style>