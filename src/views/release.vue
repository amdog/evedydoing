<template>
    <div class="m">
        <div class="box-form">
            <div>
                <label for="i1">项目名称:</label>
                <input type="text" id="i1">
            </div>
            <div>
                <label for="i3">预计完工时间:</label>
                <select id="i3">
                    <option>0.5</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>...</option>
                </select>周
            </div>
            <div>
                <label for="i4">总费用:</label>
                <input type="number" id="i4">￥
            </div>
            <div>
                <label for="i5">github地址:</label>
                <input type="text" id="i5" placeholder="https://github.com/xxx/xx">
            </div>
        </div>
        <br>
        <label for="i2">项目描述:</label>
        <br>
        <textarea id="i2" cols="30" rows="10"></textarea>
        <br>
        成员分工:
        <br>
        <input type="text" placeholder="任务一">分成<input type="number" placeholder="x">%<br><br>
        <input type="text" placeholder="任务二">分成<input type="number" placeholder="x">%<br><br>
        <input type="text" placeholder="任务三">分成<input type="number" placeholder="x">%<br><br>
        <input type="text" placeholder="任务四">分成<input type="number" placeholder="x">%<br><br>
        <br>
        <br>
        <br>
        <div> <span>重置</span> <span>发布</span> </div>
    </div>
</template>
<script>
    export default {
        name: 'v-release',
    }
</script>
<style lang='scss' scoped>
    .m {
        width: 100%;
        height: 100%;
        text-align: left;
        color: #444;
        .box-form {
            width: 100%;
            height: 40px;
            display: flex;
            justify-content:  space-evenly;
            align-items: center;

        }
        input{
            border: #dfdfdf 1px solid;
            border-radius: .3em;
            margin-left: 10px;
            width: 200px;
            min-height: 26px;
            &:focus{
                outline: 0;
                border: deepskyblue solid 1px;
            }
        }
        textarea{
            display: block;
            width: 90%;
            margin-left: 5%;
            margin: 0 auto;
            height: 300px;
        }
        &>div:last-child{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 100%;
            span{
                cursor: pointer;
              display: block;
                width: 100px;
                letter-spacing: 10px;
                text-align: center;
                height: 40px;
                line-height: 40px;border-radius: 10px;
            }
            span:nth-child(1){
                color: deepskyblue;
                 border:solid 1px deepskyblue;
            }
            span:nth-child(2){
                border:solid 1px #fdfdfd;
                background: deepskyblue;
            }
            span:hover{
                opacity: .5;
            }
        }
    }
</style>