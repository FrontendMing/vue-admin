<template>
  <el-dialog
    title="修改账号信息"
    :visible.sync="dialogVisible"
    width="700px">
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="mobile">
        <el-input v-model="ruleForm.mobile" maxlength="11" placeholder="手机号"></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select v-model="ruleForm.status" placeholder="状态" style="width: 100%;">
          <el-option label="可用" value="1"></el-option>
          <el-option label="不可用" value="0"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="submitForm()">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  import { addAccount, updateAccount } from '@/api/account'
  export default {
    data(){
      return {
        dialogVisible: false,

        ruleForm: {
          username: undefined,
          mobile: undefined,
          status: undefined
        },
        rules: {
          username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
          mobile: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { pattern: /^1[3456789]\d{9}$/, message: '手机号有误', trigger: 'blur' }
          ],
        },
        type: 'add'
      }
    },
    methods: {
      open(payload){
        this.dialogVisible = true
        if(payload){
          this.type = 'edit'
          this.title = '修改账号'
          const { username, mobile, userId } = payload
          Object.assign(this.ruleForm, { username, mobile, userId })
        }else{
          this.type = 'add'
          this.title = '新增账号'
          this.$nextTick(() => {
            this.$refs.ruleForm.resetFields()
            this.ruleForm.userId = ''
          })
        }
      },
      close(){
        this.dialogVisible = false
        this.$refs.ruleForm.resetFields()
        this.$emit('update', this.type)
      },
      submitForm(){
        this.$refs['ruleForm'].validate(async (valid) => {
          if (valid) {
            if(this.type === 'add'){
              const res = await addAccount(this.ruleForm)
              if(res.code === 0){
                this.$message.success('添加账号成功！')
                this.close()
              }
            }else{
              const res = await updateAccount(this.ruleForm)
              if(res.code === 0){
                this.$message.success('修改账号成功！')
                this.close()
              }
            }
            this.dialogVisible = false
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>