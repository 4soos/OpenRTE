<template>
  <div class="login_page">
    <div class="login_box">
      <div class="avatar">
        <img
          src="../../assets/login.png"
          alt="Avatar Pic"
        >
      </div>

      <el-form
        ref="loginFormRef"
        label-width="80px"
        class="login_form"
        :model="loginForm"
        :rules="loginRules"
      >
        <el-form-item
          label="Account"
          prop="username"
        >
          <el-input
            v-model="loginForm.username"
            prefix-icon="el-icon-user-solid"
          />
        </el-form-item>

        <el-form-item
          label="Password"
          prop="passwd"
        >
          <el-input
            v-model="loginForm.passwd"
            prefix-icon="iconfont icon-mimalan"
            type="password"
          />
        </el-form-item>

        <el-form-item class="login_btn">
          <el-button
            type="success"
            @click="login()"
          >
            Sign In
          </el-button>
          <el-button
            type="primary"
            @click="signIn"
          >
            Sign Up
          </el-button>
        </el-form-item>

        <el-link
          type="info"
          class="help_link"
        >
          Need Help ?
        </el-link>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: 'czczczz',
        passwd: '123123123'
      },
      loginRules: {
        username: [
          { required: true, message: 'Input your account name', trigger: 'blur' },
          { min: 2, max: 12, message: 'length range 👉 2~12', trigger: 'blur' }
        ],
        passwd: [
          { required: true, message: "Input your passwd", trigger: 'blur' },
          { min: 6, max: 32, message: 'length range 👉 6~32 ', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    resetFrom() {
      this.$refs.loginFormRef.resetFields();
      console.log("RESET")
    },
    login() {
      console.log("Click Login Btn");
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return ;
        const result = await this.$api.post('login',this.loginForm);
      })
      console.log("resetFrom");
    },
    signUp() {
      console.log("Click sign up Btn");
      this.resetFrom();
      console.log("resetFrom");
    },

  }
}
</script>

<style lang="less" scoped>
.login_page {
  background: cornflowerblue;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background: lightblue;
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);
}
.avatar {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #eeeeee;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eeeeee;
  }
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0  20px;
  box-sizing: border-box;
}

.login_btn {
  display: flex;
  justify-content: flex-end;
}

.help_link {
  display: flex;
}

</style>
