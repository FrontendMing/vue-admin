<template>
  <el-dialog
    title="红包规则设置"
    :visible.sync="dialogVisible"
    width="750px">
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="120px">
      <el-form-item label="发放时机" prop="moment">
        <el-checkbox v-model="ruleForm.moment">分享发放</el-checkbox>
      </el-form-item>
      <el-form-item label="分享发放金额">

      </el-form-item>
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="submitForm()">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    data(){
      return {
        dialogVisible: false,
        ruleForm: {},
        rules: {

        },
      }
    },
    methods: {
      open(){
        this.dialogVisible = true
      },
      submitForm(){
        
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>