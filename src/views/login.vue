<template>
  <div class="contaniner">
    <br>
    <br>
    <h1>willom项目管理系统</h1>
    <br>
    <label for="in1">用户名</label>
    <input type="text" id="in1">
    <br>
    <br>
    <br>
    <label for="in1">密&nbsp;码</label>
    <input type="password" id="in2">
    <br>
    <br>
    <br>
    <br>
    <div class="tips">
      没有账号?<router-link to="/logon">注册</router-link> | <a href="">忘记密码</a>
    </div>
    <br>
    <br>
    <br>
    <br>
    <input type="button" value="login"><router-link to="/">返回</router-link>
  </div>
</template>
<script>
  export default {
    name: 'logon',
    components: {}
  }
</script>
<style lang="scss" scoped>
a{
  color: #33cccc;
  text-decoration: none;
}
a:hover{
  text-decoration: underline;
}
  .contaniner {
    width: 640px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -320px;
    margin-top: -300px;
    height: 600px;
    input {
      background-color: #fff;
      width: 600px;
      height: 30px;
      outline: none;
      font-size: 30px;
      border: 0;
      border-bottom: #afafaf solid 1px;
    }
    input:nth-of-type(3) {
      font-size: 20px;
      color: #fff;
      background-color: #33cccc;
      border-radius: 5px;
      height: 40px;
      box-shadow: 0px 0px 5px #33cccc;
      border: 0 !important;
      width: 500px !important;
      margin-right: 20px;
    }

    input:focus {
      border-bottom: #222 solid 1px;
    }

    .back {
      color: #999;
      font-size: 14px;
    }

    .tips {
      font-size: 12px;
    }
  }

  label {
    display: inline-block;
    text-align: center;
    width: 60px;
    height: 40px;
    line-height: 40px;
  }
</style>