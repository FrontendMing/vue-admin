<template>
  <div class="site-wrapper site-page--login">
    <div class="site-content__wrapper">
      <div class="site-content">
        <div class="login-main">
          <h3 class="login-title">管理员登录</h3>
          <el-form
            :model="ruleForm"
            :rules="dataRule"
            ref="ruleForm"
            status-icon
            @keyup.enter.native="submitForm()"
          >
            <el-form-item prop="username">
              <el-input v-model="ruleForm.username" placeholder="帐号"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="ruleForm.password" type="password" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="login-btn-submit" type="primary" @click="submitForm()">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/login'
export default {
  mame: 'login',
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      dataRule: {
        username: [
          { required: true, message: "帐号不能为空", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" }
        ],
      },
    }
  },
  methods: {
    // 提交表单
    submitForm() {
      this.$refs.ruleForm.validate(async valid => {
        if (valid) {
          const res = await login({ formType: true, ...this.ruleForm})
          if(res.code == 0){
            sessionStorage.setItem('token', res.token)
            this.$router.replace({ name: "home" })
          }
        }
      })
    },
  }
};
</script>

<style lang="scss" scoped>
.site-wrapper.site-page--login {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(38, 50, 56, 0.6);
  overflow: hidden;
  &:before {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    content: "";
    background-image: url(~@/assets/images/login_bg.jpg);
    background-size: cover;
  }
  .site-content__wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: transparent;
  }
  .site-content {
    min-height: 100%;
    padding: 30px 500px 30px 30px;
  }
  .login-main {
    position: absolute;
    top: 0;
    right: 0;
    padding: 150px 60px 180px;
    width: 470px;
    min-height: 100%;
    background-color: #fff;
  }
  .login-title {
    font-size: 16px;
  }
  .login-btn-submit {
    width: 100%;
    margin-top: 38px;
  }
}
</style>
