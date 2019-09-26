<template>
  <el-dialog
    title="重置密码"
    :visible.sync="dialogVisible"
    width="30%">
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
<<<<<<< HEAD
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
=======
      <el-button type="primary" @click="submitForm()">确 定</el-button>
>>>>>>> 33a693a0674ff4e5515db10f0e09309c959ae318
    </span>
  </el-dialog>
</template>

<script>
  export default {
    data(){
      return {
        dialogVisible: false,

        ruleForm: {
          newPassword: undefined,
          againPassword: undefined
        },
        rules: {
<<<<<<< HEAD

=======
          newPassword: [{ required: true, message: '请输入新密码', trigger: 'blur' }],
>>>>>>> 33a693a0674ff4e5515db10f0e09309c959ae318
        }
      }
    },
    methods: {
      open(){
        this.dialogVisible = true
<<<<<<< HEAD
=======
        this.$nextTick(() => {
          this.$refs.ruleForm.resetFields()
        })
      },
      submitForm(){
        this.$refs.ruleForm.validate((valid) => {
          if(valid){

            this.dialogVisible = false
          }
        })
>>>>>>> 33a693a0674ff4e5515db10f0e09309c959ae318
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>