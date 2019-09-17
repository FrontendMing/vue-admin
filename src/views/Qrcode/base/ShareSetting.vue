<template>
  <el-dialog
    title="分享设置（微信朋友/朋友圈链接）"
    :visible.sync="dialogVisible"
    width="750px">
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="120px">
      <el-form-item label="标题" prop="title">
        <el-input v-model="ruleForm.title" placeholder="分享标题"></el-input>
      </el-form-item>
      <el-form-item label="描述" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc" placeholder="描述"></el-input>
      </el-form-item>
      <el-form-item label="分享主图" prop="mainPic">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">提 交</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    data(){
      return {
        dialogVisible: false,

        ruleForm: {

        },
        rules: {

        }
      }
    },
    methods: {
      open(){
        this.dialogVisible = true
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>