<template>
  <div class="n" :style="{'width':clientW}">
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'rightbox',
  components: {
  },
  data(){
    return {
      clientW:'0px'
      }
  },
  created(){
    this.clientW=`${document.documentElement.clientWidth - 260}px`
  }
}
</script>
<style lang="scss" scoped>
  .n{
    position: fixed;
    top: 0;
    background: white;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 260px;
  }
</style>