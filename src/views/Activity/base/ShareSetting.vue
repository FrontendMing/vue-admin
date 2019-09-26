<template>
  <el-dialog
    title="分享到朋友/朋友圈链接设置"
    :visible.sync="dialogVisible"
    width="750px">
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="120px">
      <el-form-item label="标题" prop="title">
        <el-input v-model="ruleForm.title" placeholder="标题"></el-input>
      </el-form-item>
      <el-form-item label="描述" prop="title">
        <el-input type="textarea" v-model="ruleForm.title" placeholder="描述"></el-input>
      </el-form-item>
      <el-form-item label="分享显示图片">
        <el-input v-model="ruleForm.title" placeholder="标题"></el-input>
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
        rules: {}
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