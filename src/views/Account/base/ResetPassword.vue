<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogVisible"
    width="700px">
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px">
      <el-form-item label="新密码" prop="newPassword">
        <el-input v-model="ruleForm.newPassword" placeholder="新密码"></el-input>
      </el-form-item>
      <el-form-item label="重复新密码" prop="againPassword">
        <el-input v-model="ruleForm.againPassword" placeholder="再次输入新密码"></el-input>
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
        userId: this.$store.state.user.userId,
        dialogVisible: false,

        ruleForm: {
          newPassword: undefined,
          againPassword: undefined
        },
        rules: {
          newPassword: [{ required: true, message: '请输入新密码', trigger: 'blur' }],
        },
        title: '',
      }
    },
    methods: {
      open(){
        this.dialogVisible = true
        this.$nextTick(() => {
          this.title = userId ? '重置密码' : '修改密码'
          this.$refs.ruleForm.resetFields()
        })
      },
      submitForm(){
        this.$refs.ruleForm.validate((valid) => {
          if(valid){

            this.dialogVisible = false
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>