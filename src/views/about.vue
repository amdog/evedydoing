<template>
    <div class="m">
        <alert v-if="$store.state.alert"></alert>
        <br>
        <table>
            <tr>
                <td>用户类型: <small>普通用户</small></td>
                <td>注册时间：<small>2020</small></td>
                <td>累计汇报：<small>1000</small>￥</td>
            </tr>
        <tr>
                <td>正在参与: <small>zhangsan</small>个</td>
                <td>完成项目：<small>2020</small>个</td>
                <td>放弃项目：<small>dd</small>个</td>
            </tr>
        </table>
        <br>
        <br>
        <br><br>
        <span>我参与的项目</span>
        <br><br><br>
        <row></row>
        <br><br><br>
        <span>我发布的项目</span>
        <br><br><br>
        <row><span class="danger">删除项目</span></row>
    </div>
</template>
<script>
import row from '../components/row.vue'
import alert from '../components/alert.vue'
export default {
    name:'v-about',
    components:{
        row,
        alert
    }
}
</script>
<style lang='scss' scoped>
.danger{
    display:inline-block;
    margin-left:10px;
                display: inline-block;
                color: #fff !important;
                border-radius: 5px;
                width:60px !important;
                line-height: 20px;
                height: 20px !important;
    background: #dc3545!important;
}
    .m {
        width: 100%;
        height: 100%;
        overflow: auto;
        text-align: center;
        table{
            width: 100%;
            min-height: 300px;
            text-align: center;
            tr{
                td{
                    border-right: #f1f1f1 solid 1px;
                    border-bottom:#f1f1f1 solid 1px ;
                }
            }
        }
        span{
            color: gray;
        }
    }
    small{
            color:deepskyblue;
        }
</style>