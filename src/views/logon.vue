<template>
    <div class="contaniner">
        <br>
        <br>
        <h1>注册willom</h1>
        <br>
        <label for="in1">用户名</label>
        <input type="text" placeholder="xxx">
        <br>
        <br>
        <br>
        <label for="in1">密&nbsp;码</label>
        <input type="password">
        <br>
        <br>
        <br>
        <label for="in3">确认密码</label>
        <input type="password">
        <br>
        <br>
        <br>
        <label for="in1">邮箱</label>
        <input type="text" placeholder="xx@xx.com">
        <br>
        <br>
        <br>
        <input type="submit" value="Singup"><a href="/" class="back">返回</a>
    </div>
</template>
<script>
    export default {
        name: 'logon',
    }
</script>
<style lang='scss' scoped>
    .contaniner {
    width: 640px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -320px;
    margin-top: -350px;
    height: 700px;
        .back:hover {
            text-decoration: underline;
        }
        .back:link {
            text-decoration: none;
            color: #999;
        }
        input {
            background-color: #fff;
            width:600px;
            height: 30px;
            outline: none;
            font-size: 30px;
            border: 0;
            border-bottom: #afafaf solid 1px;
        }
        input:last-of-type {
            font-size: 20px;
            color: #fff;
            background-color: #33cccc;
            border-radius: 5px;
            height: 40px;
            box-shadow: 0px 0px 5px #33cccc;
            border: 0 !important;
            margin-right: 50px;
            width: 500px !important;
        }
        input:focus {
            border-bottom: #222 solid 1px;
        }
        label {
            display: inline-block;
            text-align: left;
            width: 100px;
            height: 40px;
            line-height: 40px;
        }
        .tips {
            font-size: 12px;
        }
        .back {
            color: #999;
            font-size: 14px;
        }
    }
</style>