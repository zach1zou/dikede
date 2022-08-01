<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <div class="title-container">
        <img class="title" src="@/assets/login_images/logo.png" />
      </div>

      <el-form-item prop="mobile">
        <span class="svg-container">
          <i class="el-icon-mobile-phone" />
        </span>
        <el-input
          ref="mobile"
          v-model="loginForm.mobile"
          placeholder="请输入账号"
          name="mobile"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <i class="el-icon-lock" />
        </span>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="请输入密码"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon
            :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
          />
        </span>
      </el-form-item>
      <el-form-item prop="code">
        <span class="svg-container">
          <i class="el-icon-circle-check" />
        </span>
        <el-input
          id="verify"
          ref="code"
          v-model="loginForm.code"
          type="text"
          placeholder="请输入验证码"
          tabindex="2"
          auto-complete="on"
          class="topAlign"
          name="verify"
          style="width: 55%"
          @keyup.enter.native="handleLogin"
        />
        <!-- <div class="get-code" @click="refreshCode()">
          <s-identify :identify-code="identifyCode" />
        </div> -->
        <div class="get-code" @click="getCode">
          <img :src="code" alt="" />
        </div>
      </el-form-item>

      <el-button
        :loading="loading"
        type="primary"
        class="loginButton"
        @click.native.prevent="handleLogin"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script>
import { imageCodeApi } from "@/api/user";
// import SIdentify from "./SIdentify/SIdentify.vue";
export default {
  name: "Login",
  // components: { SIdentify },
  data() {
    return {
      // identifyCode: "",
      // identifyCodes: "0123456789abcdwerwshdjeJKDHRJHKOOPLMKQ", // 绘制的随机数
      loginForm: {
        code: "",
        mobile: "admin",
        password: "admin",
      },
      loginRules: {
        mobile: [
          { required: true, trigger: "blur", message: "请输入手机号" },
          // {
          //   pattern: /^(?:(?:\+|00)86)?1\d{10}$/,
          //   trigger: "blur",
          //   message: "请输入正确的手机号",
          // },
        ],
        password: [{ required: true, trigger: "blur", message: "请输入密码" }],
        code: [{ required: true, trigger: "blur", message: "请输入验证码" }],
      },
      loading: false,
      passwordType: "password",
      redirect: undefined,
      code: "",
      codeSub: "",
    };
  },

  created() {
    // this.refreshCode();
    this.getCode();
  },
  methods: {
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    async handleLogin() {
      await this.$refs.loginForm.validate();
      this.$store.dispatch("user/getToken", {
        loginName: this.loginForm.mobile,
        password: this.loginForm.password,
        code: this.loginForm.code,
        clientToken: this.codeSub,
        loginType: 0,
      });
    },
    async getCode() {
      const radomNum = Math.round(Math.random() * 10000);
      const { data } = await imageCodeApi(radomNum);
      this.code = URL.createObjectURL(data);
      this.codeSub = radomNum;
    },
    // refreshCode() {
    //   this.identifyCode = "";
    //   this.makeCode(this.identifyCodes, 4);
    // },
    // randomNum(min, max) {
    //   max = max + 1;
    //   return Math.floor(Math.random() * (max - min) + min);
    // },
    // 随机生成验证码字符串
    // makeCode(data, len) {
    //   for (let i = 0; i < len; i++) {
    //     this.identifyCode += data[this.randomNum(0, data.length - 1)];
    //   }
    // },
  },
};
</script>
<style lang="scss">
$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  background: url(~@/assets/login_images/background.png) no-repeat;

  background-size: cover;
  .el-input {
    display: inline-block;
    color: #d8dde3;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;

      height: 40px;
      caret-color: $cursor;
      color: #d8dde3;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid #d8d5d5;
    background: white;
    border-radius: 5px;
    color: #454545;
    height: 40px;
    position: relative;
    top: -25px;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: absolute;
    width: 420px;
    height: 300px;
    top: 50%;
    left: 50%;
    margin-top: -145px;
    margin-left: -189px;
    padding: 76px 35px 0;
    background: #fff;
    -webkit-box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    border-radius: 10px;
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    line-height: 20px;
  }

  .title-container {
    position: relative;

    .title {
      position: absolute;
      width: 76px;
      height: 76px;
      top: -116px;
      left: 53%;
      margin-left: -48px;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .loginButton {
    width: 100%;
    height: 40px;
    background: linear-gradient(262deg, #2e50e1, #6878f0);
    opacity: 0.91;
    border-radius: 8px;
    color: #fff;
    text-shadow: 0 7px 22px #cfcfcf;
    position: relative;
    top: -30px;
    font-size: 10px;
  }
  // .s-canvas {
  //   position: relative;
  //   left: 220px;
  //   top: -35px;
  // }
  .get-code {
    position: relative;
    left: 250px;
    top: -40px;
    img {
      height: 38px;
    }
  }
}
</style>
