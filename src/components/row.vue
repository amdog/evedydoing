<template>
    <div>
        <div class="body" v-for="(v,k) in $store.state.itemsList" :class="{'maxHei':k == clickIndex}" :key="k"
            @click="showMore(k)">
            <span>{{v.time}}</span>
            <span>{{v.name}}</span>
            <span>{{v.desc}}</span>
            <span><span v-if='v.status == 1' @click="$store.commit('onAlert','选择你要参与的任务')">可参与</span> <span
                    v-if='v.status == 2' class="yellow">人员满</span> <span v-if='v.status == 3' class="gray">已交付</span>
            </span>
            <span><small>详情</small>
                <slot></slot>
            </span>
            <span>
                <span>发布者</span><small>zhangsan</small><span>总费用</span><small>1000￥</small><span>参与者</span><small>[a,a,]</small><span>地址</span><small>[a,a,]</small><span>完成时间</span><small>[a,a,]</small>
                <table>
                    <tr>
                        <th>参与者</th>
                        <th>负责模块</th>
                        <th>分成</th>
                        <th>操作</th>
                    </tr>
                    <tr>
                        <td>d</td>
                        <td>d</td>
                        <td>d</td>
                        <td><small>完成</small> | <small>参与</small></td>
                    </tr>
                    <tr>
                        <td>d</td>
                        <td>d</td>
                        <td>d</td>
                        <td><small>完成</small> | <small>参与</small></td>
                    </tr>
                    <tr>
                        <td>d</td>
                        <td>d</td>
                        <td>d</td>
                        <td><small>完成</small> | <small>参与</small></td>
                    </tr>
                    <tr>
                        <td>d</td>
                        <td>d</td>
                        <td>d</td>
                        <td><small>完成</small> | <small>参与</small></td>
                    </tr>
                </table>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'v-row',
        data() {
            return {
                clickIndex: -1
            }
        },
        methods: {
            showMore(i) {
                this.clickIndex = i == this.clickIndex ? -1 : i
            }
        },
    }
</script>
<style lang='scss' scoped>
    @keyframes aniHei {
        from {
            height: 40px;
        }

        to {
            height: 400px;
        }
    }

    .maxHei {
        animation: aniHei 1s ease-in-out;
        overflow: static !important;
    }

    .yellow {
        background: #ffc107 !important;
    }

    .gray {
        background: #6c757d !important;
    }

    .body {
        height: 40px;
        animation-fill-mode: forwards;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        line-height: 40px;
        flex-wrap: wrap;
        overflow: hidden;

        &:hover {
            background: #eeeded;
            border-top: solid 1px deepskyblue;
            border-bottom: solid 1px deepskyblue;
        }

        &:nth-child(2n) {
            background: #eeeded;
        }

        border-bottom: solid 1px #eeeded;
        border-top: solid 1px #eeeded;

        span {
            width: 200px;
            font-size: 15px;
            height: 40px;
        }

        &>span:last-child {
            width: 100%;
            text-align: left;
            min-height: 300px;

            span {
                letter-spacing: 6px;
                width: 100px;
                display: inline-block;
                margin-left: 40px;
            }

            table {
                text-align: center;
                width: 100%;

                tr {
                    td:last-child {
                        color: deepskyblue;
                    }
                }
            }

            small {
                color: deepskyblue;
            }
        }

        &>span:nth-child(4) {
            span {
                background: #28a745;
                display: inline-block;
                color: #fff;
                border-radius: 5px;
                width: 60px !important;
                margin-right: 5px;
                line-height: 20px;
                height: 20px;
            }
        }

        &>span:nth-child(5) {
            small {
                color: deepskyblue;

                &:hover {
                    text-decoration: underline;
                }
            }
        }

        &:last-child {
            border-bottom: 1px solid deepskyblue;
        }
    }
</style>