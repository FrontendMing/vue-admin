<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogVisible"
    :close-on-click-modal="false"
    width="830px">
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="130px">
      <el-form-item label="活动码" prop="activityCode">
        <el-input v-model="ruleForm.activityCode" placeholder="活动码"></el-input>
      </el-form-item>
      <el-form-item label="门店名称" prop="outletsName">
        <el-input v-model="ruleForm.activityCode" placeholder="门店名称"></el-input>
      </el-form-item>
      <el-form-item label="活动(商品)名称:" prop="activityCode">
        <el-input v-model="ruleForm.activityCode" placeholder="活动(商品)名称:"></el-input>
      </el-form-item>
      <el-form-item label="产品图片" prop="activityCode">
        <el-input v-model="ruleForm.activityCode" placeholder="产品图片"></el-input>
      </el-form-item>
      <el-form-item label="音乐" prop="activityCode">
        <el-input v-model="ruleForm.activityCode" placeholder="音乐"></el-input>
      </el-form-item>
      <el-form-item label="背影颜色" prop="backgroundColor">
        <el-input v-model="ruleForm.backgroundColor" clearable @clear="clearPhotoshop('backgroundColor')" @focus="bgColorShow=!bgColorShow;btnColorShow=false" placeholder="背景颜色"></el-input>
        <photoshop 
          style="position: absolute;z-index: 100;right: 0;" 
          v-show="bgColorShow" 
          v-model="colors" 
          @input="updateValue"
          @ok="updateConfirm('backgroundColor')"
          @cancel="bgColorShow = false"></photoshop>
      </el-form-item>
      <el-form-item label="按钮颜色" prop="activityCode">
        <el-input v-model="ruleForm.buttonColor" clearable @clear="clearPhotoshop('buttonColor')"  @focus="btnColorShow=!btnColorShow;bgColorShow=false" placeholder="按钮颜色"></el-input>
        <photoshop 
          style="position: absolute;z-index: 100;" 
          v-show="btnColorShow" 
          v-model="colors" 
          @input="updateValue"
          @ok="updateConfirm('buttonColor')"
          @cancel="btnColorShow = false"></photoshop>
      </el-form-item>
      <el-form-item label="商品原价" prop="activityCode">
        <el-input v-model="ruleForm.activityCode" placeholder="商品原价"></el-input>
      </el-form-item>
      <el-form-item label="产品底价" prop="activityCode">
        <el-input v-model="ruleForm.activityCode" placeholder="产品底价"></el-input>
      </el-form-item>
      <el-form-item label="砍价范围" prop="activityCode">
        <el-input v-model="ruleForm.activityCode" placeholder="砍价范围"></el-input>
      </el-form-item>
      <el-form-item label="商品数量" prop="activityCode">
        <el-input v-model="ruleForm.activityCode" placeholder="商品数量"></el-input>
      </el-form-item>
      <el-form-item label="自己砍价次数" prop="activityCode">
        <el-input v-model="ruleForm.activityCode" placeholder="自己砍价次数"></el-input>
      </el-form-item>
      <el-form-item label="可帮几个朋友砍价" prop="activityCode">
        <el-input v-model="ruleForm.activityCode" placeholder="可帮几个朋友砍价"></el-input>
      </el-form-item>
      <el-form-item label="开始时间" prop="activityCode">
        <el-input v-model="ruleForm.activityCode" placeholder="开始时间"></el-input>
      </el-form-item>
      <el-form-item label="结束时间" prop="activityCode">
        <el-input v-model="ruleForm.activityCode" placeholder="结束时间"></el-input>
      </el-form-item>
      <el-form-item label="发布时间" prop="activityCode">
        <el-input v-model="ruleForm.activityCode" placeholder="发布时间"></el-input>
      </el-form-item>
      <el-form-item label="兑换密码" prop="activityCode">
        <el-input v-model="ruleForm.activityCode" placeholder="兑换密码"></el-input>
      </el-form-item>
      <el-form-item label="公司名称" prop="activityCode">
        <el-input v-model="ruleForm.activityCode" placeholder="公司名称"></el-input>
      </el-form-item>
      <el-form-item label="商家电话" prop="activityCode">
        <el-input v-model="ruleForm.activityCode" placeholder="商家电话"></el-input>
      </el-form-item>
      <el-form-item label="活动规则" prop="activityRules" style="width: 100%;">
        <editor @changeEditorContent="changeRulesContent"></editor>
      </el-form-item>
      <el-form-item label="活动详情" prop="activityDetails" style="width: 100%;">
        <editor @changeEditorContent="changeDetailContent"></editor>
      </el-form-item>
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="submitForm()">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  import { Photoshop } from 'vue-color'
  import Editor from '@/components/Editor'
  export default {
    components: {
      Photoshop,
      Editor
    },
    data(){
      return {
        dialogVisible: false,
        title: '',
        ruleForm: {},
        rules: {

        },

        colors: {
          hex: '#ffffff'
        },

        bgColorShow: false,
        btnColorShow: false,

      }
    },
    methods: {
      open(id){
        this.title = !id ? '添加活动' : '修改活动'
        this.dialogVisible = true
      },
      updateValue(val){
        this.color = val
      },
      updateConfirm(prop){
        this.ruleForm[prop] = this.color.hex
        this.bgColorShow = false
        this.btnColorShow = false
      },
      changeRulesContent(html){
        this.ruleForm.activityRules = html
      },
      changeDetailContent(html){
        this.ruleForm.activityDetails = html
      },
      clearPhotoshop(prop){
        this.ruleForm[prop] = ''
      },
      submitForm(){

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>