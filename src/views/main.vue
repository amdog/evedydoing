<template>
  <div>
    <leftbox></leftbox>
    <rightbox></rightbox>
  </div>
</template>
<script>
// @ is an alias to /src
import rightbox from '../components/rightbox.vue'
import leftbox from '../components/leftbox.vue'
export default {
  name: 'v-main',
  components: {
    rightbox,
    leftbox
  }
}
</script>
