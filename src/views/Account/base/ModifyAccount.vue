<template>
  <el-dialog
    title="修改账号信息"
    :visible.sync="dialogVisible"
    width="30%">
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="mobile">
        <el-input v-model="ruleForm.mobile" placeholder="手机号"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    data(){
      return {
        dialogVisible: false,

        ruleForm: {
          name: undefined,
          mobile: undefined
        },
        rules: {

        }
      }
    },
    methods: {
      open(){
        this.dialogVisible = true
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>