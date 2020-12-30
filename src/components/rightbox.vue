<template>
  <div class="m">
      <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'rightbox',
  components: {
  }
}
</script>
<style lang="scss" scoped>
  .m{
    position: fixed;
    top: 0;
    background: white;
    width: 100%;
    margin-left: 240px;
  }
</style>