<template>
  <div>
    <el-dialog
<<<<<<< HEAD
      title="创建二维码"
=======
      :title="title"
>>>>>>> 33a693a0674ff4e5515db10f0e09309c959ae318
      :visible.sync="dialogVisible"
      width="820px">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="120px">
        <el-form-item label="二维码名称" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入活动名称"></el-input>
        </el-form-item>
        <el-form-item label="产品图片" prop="images">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="音乐" prop="audio">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple 
            :limit="1"
            :on-exceed="handleExceed"
            :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="背景颜色" prop="backgroundColor">
<<<<<<< HEAD
          <el-input v-model="ruleForm.backgroundColor" @focus="bgColorShow=!bgColorShow;btnColorShow=false" placeholder="背景颜色"></el-input>
=======
          <el-input v-model="ruleForm.backgroundColor" @focus="bgColorShow = !bgColorShow" placeholder="背景颜色"></el-input>
>>>>>>> 33a693a0674ff4e5515db10f0e09309c959ae318
          <photoshop 
            style="position: absolute;z-index: 100;" 
            v-show="bgColorShow" 
            v-model="colors" 
            @input="updateValue"
            @ok="updateConfirm('backgroundColor')"
            @cancel="bgColorShow = false"></photoshop>
        </el-form-item>
        <el-form-item label="按钮颜色" prop="buttonColor">
<<<<<<< HEAD
          <el-input v-model="ruleForm.buttonColor" @focus="btnColorShow=!btnColorShow;bgColorShow=false" placeholder="按钮颜色"></el-input>
=======
          <el-input v-model="ruleForm.buttonColor" @focus="btnColorShow = !btnColorShow" placeholder="按钮颜色"></el-input>
>>>>>>> 33a693a0674ff4e5515db10f0e09309c959ae318
          <photoshop 
            style="position: absolute;z-index: 100;" 
            v-show="btnColorShow" 
            v-model="colors" 
            @input="updateValue"
            @ok="updateConfirm('buttonColor')"
            @cancel="btnColorShow = false"></photoshop>
        </el-form-item>
        <el-form-item label="跑马灯" prop="carousel">
          <el-input v-model="ruleForm.carousel" placeholder="跑马灯"></el-input>
        </el-form-item>
        <el-form-item label="包含砍价链接" prop="links">
          <el-input v-model="ruleForm.links" placeholder="包含砍价链接"></el-input>
        </el-form-item>
        <el-form-item label="活动详情" prop="details">
          <editor @changeEditorContent="changeEditorContent"></editor>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
<<<<<<< HEAD
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
=======
        <el-button type="primary" @click="dialogVisible = false">提 交</el-button>
>>>>>>> 33a693a0674ff4e5515db10f0e09309c959ae318
      </span>
    </el-dialog>

    <el-dialog :visible.sync="previewVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
  import Editor from '@/components/Editor'
  import { Photoshop } from 'vue-color'
  export default {
    components: {
      Editor,
      Photoshop
    },
    data(){
      return {
<<<<<<< HEAD
=======
        title: undefined,
>>>>>>> 33a693a0674ff4e5515db10f0e09309c959ae318
        dialogVisible: false,
        previewVisible: false,
        dialogImageUrl: undefined,

        bgColorShow: false,
        btnColorShow: false,
        colors: {
          hex: '#ffffff'
        },

        ruleForm: {
          backgroundColor: undefined
        },
        rules: {},

        fileList: [],

      }
    },
    methods: {
<<<<<<< HEAD
      open(){
=======
      open(payload){
        if(!payload){ // 添加
          this.title = '创建二维码'
        }else{ // 修改
          this.title = '修改二维码信息'
        }
>>>>>>> 33a693a0674ff4e5515db10f0e09309c959ae318
        this.dialogVisible = true
      },
      handleRemove(file, fileList) {
        console.log(file, fileList)
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url
        this.previewVisible = true
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      changeEditorContent(html){
        this.ruleForm.activityDetails = html
      },
      updateValue(val){
        this.color = val
      },
      updateConfirm(prop){
        this.ruleForm[prop] = this.color.hex
        this.bgColorShow = false
        this.btnColorShow = false
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>