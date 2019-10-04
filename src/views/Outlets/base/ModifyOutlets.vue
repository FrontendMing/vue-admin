<template>
  <el-dialog
    title="修改账号信息"
    :visible.sync="dialogVisible"
    :close-on-click-modal="false"
    width="700px">
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px">
      <el-form-item label="门店名称" prop="storeName">
        <el-input v-model="ruleForm.storeName" placeholder="门店名称"></el-input>
      </el-form-item>
      <el-form-item label="登录账号" prop="userId">
        <el-select v-model="ruleForm.userId" placeholder="登录账号" style="width: 100%;">
          <el-option 
            v-for="item in userList"
            :key="item"
            :label="item.username"
            :value="item.userId"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select v-model="ruleForm.status" placeholder="状态" style="width: 100%;">
          <el-option label="启用" value="1"></el-option>
          <el-option label="关闭" value="-1"></el-option>
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
  import { addOutlets } from '@/api/outlets'
  export default {
    data(){
      return {
        dialogVisible: false,

        ruleForm: {
          storeName: undefined,
          userId: undefined,
          status: undefined
        },
        rules: {
          storeName: [{ required: true, message: '请输入门店名称', trigger: 'blur' }],
          userId: [{ required: true, message: '请选择登录账号', trigger: 'blur, change' }],
        },
        type: 'add',
        userList: [],
      }
    },
    methods: {
      open(payload){
        this.dialogVisible = true
        if(payload){
          this.type = 'edit'
          this.title = '修改门店'
          const { storeId, storeName } = payload
          Object.assign(this.ruleForm, { storeId, storeName })
        }else{
          this.type = 'add'
          this.title = '新增门店'
          this.$nextTick(() => {
            this.$refs.ruleForm.resetFields()
          })
        }
      },
      submitForm(){
        this.$refs['ruleForm'].validate(async (valid) => {
          if (valid) {
            if(this.type === 'add'){
              const res = await addOutlets(this.ruleForm)
              if(res.code === 0){
                
              }
            }else{

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