<template>
    <div class="alert-box">
        <div>
            {{this.$store.state.alertMessage}}
        </div>
    </div>
</template>
<script>
export default {
    name:'v-alert',
    created(){
        let that=this
        setTimeout(()=>{
            that.$store.commit('offAlert','')
        },2000)
    }
}
</script>
<style lang='scss' scoped>
.alert-box{
    font-size: 16px;
    position: fixed;
    bottom: 50%;
    left: 0%;
    width: 100vw;
    color: #ffffff;
    z-index: 9090;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999999;
   div{
    min-width: 100px;
    background: #456;
    border-radius: .4em;
    margin: 0 auto;
} 
}

</style>