<template>
  <div class="contianer">
    <a-card style="width: 100%;">
      <img src="../assets/logo.png">
      <h1>เข้าสู่ระบบ Hello World</h1>
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
        style="padding: 0 10%;"
      >
        <a-form-item>
          <a-input
            v-decorator="[
          'user',
          { rules: [{ required: true, message: 'Please input your username!' }] }
        ]"
            placeholder="Username"
            size="large"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
          'pass',
          { rules: [{ required: true, message: 'Please input your Password!' }] }
        ]"
            type="password"
            placeholder="Password"
            size="large"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
        <a-button size="large">
          <a-icon type="user-add"/>Register
        </a-button>
        <a-button type="primary" html-type="submit" size="large">
          <a-icon type="login"/>Log in
        </a-button>
      </a-form>
    </a-card>
  </div>
</template>

<script src="../js/login.js"></script>
<style>
.contianer {
  width: 100%;
  text-align: center;
  padding: 5% 15%;
}

#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
</style>