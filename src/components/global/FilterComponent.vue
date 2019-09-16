<template>
  <div class="filter-form-wrap">
    <div class="filter-form">
      <slot></slot>
    </div>
    <div class="filter-btns">
      <el-button type="primary" icon="el-icon-search" @click="toSearch">查询</el-button>
      <el-button icon="el-icon-refresh" @click="resetSearchForm">重置</el-button>
      <slot name="moreBtns"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        
      }
    },
    methods: {
      resetSearchForm(){
        this.$emit('reset')
      },
      toSearch(){
        this.$emit('search')
      }
    }
  }
</script>

<style lang="scss">
.filter-form-wrap{
  display: flex;
  .filter-form{
    display: flex;
    .el-form{
      display: inline-flex;
      .el-form-item{
        margin-right: 10px;
      }
    }
  }
}
</style>