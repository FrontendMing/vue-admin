export const PageInit = {
  data() {
    return {
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
      tableData: [],
      tableDataLoading: false,
    }
  },
  mounted() {
    this.getTableData()
  },
  methods: {
    searchTable(formName){
      this.getTableData(this[formName])
    },
    resetForm(formName){
      if(this.$refs[formName]){this.$refs[formName].resetFields()}
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
    // 更新回调
    update(type){
      if(type === 'add'){
        this.pageIndex = 1
      }
      this.getTableData()
    }
  },
}