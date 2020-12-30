<template>
  <div class="m">
      <div class="status">
          <img src="../assets/person.svg" alt="未登录">
          <br>
          <small>未登录</small>
      </div>
      <div>
          <div>已完成项目<span class="tag">9</span></div>
          <div>未完成项目</div>
          <div>在进行项目</div>
          <div>所有项目*</div>
          <div>发布项目*</div>
      </div>
      <div class="exit">
          <img src="../assets/exit.svg" alt="退出">退出
      </div>
  </div>
</template>

<script>
export default {
  name: 'leftbox',
  components: {
  }
}
</script>
<style lang="scss" scoped>
    .m{
        width: 260px;
        height: 100vh;
        background: #444;
        position: fixed;
        left: 0;
        top: 0;
        color:#fff;
        cursor: pointer;
        text-align: center;
        .status{
            height: 90px;
            img{
                width:64px;
                margin: 0 auto;
                height: 64px;
            }
            color: deepskyblue;
        }
        div{
            width:100%;
            height: auto;
            min-height:100px;
        }
        div>div{
            text-align: left;
            letter-spacing: 4px;
            height: 60px !important;
            line-height: 60px;
            border-bottom: #333 solid 1px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        div>div:hover{
            color: deepskyblue;
            border-bottom: deepskyblue 1px solid;
        }
        .exit{
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 32px;
                height: 32px;
            }
            &:hover{
                color: chocolate;
            }
        }
        .tag{
            display: inline-block;
            width: auto;
            letter-spacing: 0;
            min-width: 16px;
            line-height: 16px;
            height: 16px;
            background: #dc3545;
            color: #fff;
            text-align: center;
            border-radius: 1em;
        }
    }
</style>