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
<<<<<<< HEAD
        <el-input v-model="ruleForm.mobile" placeholder="手机号"></el-input>
=======
        <el-input v-model="ruleForm.mobile" maxlength="11" placeholder="手机号"></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select v-model="ruleForm.status" placeholder="状态" style="width: 100%;">
          <el-option label="可用" value="1"></el-option>
          <el-option label="不可用" value="0"></el-option>
        </el-select>
>>>>>>> 33a693a0674ff4e5515db10f0e09309c959ae318
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
          name: undefined,
<<<<<<< HEAD
          mobile: undefined
        },
        rules: {

=======
          mobile: undefined,
          status: undefined
        },
        rules: {
          name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
          mobile: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { pattern: /^1[3456789]\d{9}$/, message: '手机号有误', trigger: 'blur' }
          ],
          status: [{ required: true, message: '请选择状态', trigger: 'blur, change' }]
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
        this.$refs['ruleForm'].validate((valid) => {
          if (valid) {

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