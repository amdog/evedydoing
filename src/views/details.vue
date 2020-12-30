<template>
  <div class="m">
      <div class="nav">
          <span>id</span>
          <span>项目名称</span>
          <span>项目描述</span>
          <span>项目状态</span>
          <span>操作</span>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'details',
  components: {
  }
}
</script>
<style lang="scss" scoped>
    .m{
        width: 100%;
        height: 100%;
        overflow: auto;
    }
    .nav{
        height: 20px;
        color: #aaa;
    }
</style>