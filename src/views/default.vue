<template>
        <div class="pub_">
      <h1>#公告</h1>
      <ul>
        <li v-for="(v,k) in $store.state.publicAllList" :key='k'>{{v}}</li>
      </ul>
    </div>
</template>
<script>
export default {
    name:'v-default'
}
</script>
<style lang="scss" scoped>
    .pub_{
      width: 50vw;
      height: 50vh;
    }
</style>