<template>
    <div class="m">
        <div class="nav">
            <span>发布时间</span>
            <span>项目名称</span>
            <span>项目描述</span>
            <span>项目状态</span>
            <span>操作</span>
        </div>
        <row> </row>
        <div class="btn-turn">
            <div @click="$store.commit('turnPage',0)">上一页</div>
            <div @click="$store.commit('turnPage',1)">下一页</div>
        </div>
        <alert v-if="$store.state.alert"></alert>
    </div>
</template>
<script>
    // @ is an alias to /src
    import alert from '../components/alert.vue'
    import row from '../components/row'
    export default {
        name: 'v-details',
        components: {
            alert,
            row
        },
        created() {
        },
        beforeRouteUpdate(to, from, next) {
            /* console.log(to.query); */
            next()
        }
    }
</script>
<style lang="scss" scoped>
    .btn-turn {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 40px;
        div {
            border-radius: 6px;
            border: 1px gray solid;
            width: 160px;
            height: 40px;
            line-height: 40px;
            cursor: pointer;
            letter-spacing: 10px;
            &:hover {
                background: gray;
                color: #fff;
            }
        }
    }

    .m {
        width: 100%;
        height: 100%;
        overflow: auto;
        text-align: center;
    }

    .nav {
        height: 20px;
        color: #666;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 30px;
        span {
            width: 200px;
            height: 30px;
        }
    }
</style>