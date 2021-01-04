<template>
  <div class="m">
      <div class="status">
          <img src="../assets/person.svg" alt="未登录">
          <br>
          <small><router-link to='/login'>未登录</router-link></small> | <small><router-link to='./about'><span @click="clickItemM(-3)">个人信息</span></router-link></small>
      </div>
      <div>
          <div @click="clickItemM(1)" :class="{'ani-hei':clickItemM_==1,'ani-hei_r':clickItemM_!=1 && clickItemM_!=-1 }" >已完成项目<span class="tag">9</span>
          <span v-if="clickItemM_==1" :class="{'ani-opci':clickItemM_==1}">
          <div  class="child" @click.stop="routeJum(1)" :class="{'circy':routeNow==1}">已交付</div>
          <div class="child" @click.stop="routeJum(2)" :class="{'circy':routeNow==2}">未交付</div>
          </span>
          </div>
          <div @click="clickItemM(2)" :class="{'ani-hei':clickItemM_==2,'ani-hei_r':clickItemM_!=2 && clickItemM_!=-1 }" >在进行项目<span class="tag">9</span>
          <span v-if="clickItemM_==2" :class="{'ani-opci':clickItemM_==2}">
          <div  class="child" @click.stop="routeJum(3)" :class="{'circy':routeNow==3}">未分工</div>
          <div class="child" @click.stop="routeJum(4)" :class="{'circy':routeNow==4}">正进行</div>
          </span>
          </div>
          <div @click="clickItemM(3);routeJum(5)" :class="{'active':clickItemM_==3}">所有项目*<span class="tag">9</span>
          </div>
          <div @click="clickItemM(4);routeJum(6)" :class="{'active':clickItemM_==4}">发布项目*<span class="tag">9</span>
          </div>
          <div>
              <router-link to='/'> 公告</router-link>
          </div>
      </div>
      <div class="exit">
          <img src="../assets/exit.svg" alt="注销">注销
      </div>
  </div>
</template>

<script>
export default {
  name: 'leftbox',
  data(){
      return {
          clickItemM_:1,
          routeNow:0,
          active:'#fff'
      }
  },
  methods:{
      clickItemM(i){
          this.clickItemM_ == i? (this.clickItemM_=-1 )&&(this.routeNow=0):this.clickItemM_=i;
      },
      routeJum(i){
          this.routeNow=i;
          this.$store.state.showDefault=false
          i==6?  this.$router.push('/release'):this.$router.push(`./details?action=${i}`);
      }
  }
}
</script>
<style lang="scss" scoped>
@keyframes ani-hei_ {
    from{
        height: 80px;
    }
    to{
        height: 130px;
    }
}
@keyframes ani-hei_r {
    from{
        height: 130px;
    }
    to{
        height: 80px;
    }
}
a{
    color: deepskyblue;
    text-decoration: none !important;
}
.circy{
    border: #fff solid 1px !important;
    width: 80px !important;
    border-radius: 1em;
    margin: 0 auto;
}
.active{
    color: deepskyblue;
}
.ani-hei{
height: 80px;
color: deepskyblue;
animation: 1s ani-hei_ ease-in-out;
}
.ani-hei_r{
height: 130px;
animation: 1s ani-hei_r ease-in-out;
}
@keyframes ani-opci_ {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}
.ani-opci{
    opacity: 0;
    animation: ani-opci_ .5s ease-in-out;
    animation-fill-mode: forwards;
}
    .m{
        width: 260px;
        height: 100vh;
        background: #444;
        position: fixed;
        left: 0;
        top: 0;
        color:#fff;
        cursor: pointer;
        text-align: center;
        .status{
            height: 90px;
            img{
                width:64px;
                margin: 0 auto;
                height: 64px;
            }
            color: deepskyblue;
        }
        div{
            width:100%;
            height: auto;
            animation-fill-mode: forwards;
            min-height:80px;
        }
        div>div{
            text-align: left;
            letter-spacing: 4px;
            height: 60px;
            line-height: 60px;
            border-bottom: #333 solid 1px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            align-items: center;
            .child{
                width: 200px;
                min-height: 20px !important;
                color:#fff;
                line-height: 20px;
                border: 0;
                text-align: center;
            }
        }
        div>div:hover{
            color: deepskyblue;
            border-bottom: deepskyblue 1px solid;
        }
        .exit{
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 32px;
                height: 32px;
            }
            &:hover{
                color: chocolate;
            }
        }
        .tag{
            display: inline-block;
            width: auto;
            letter-spacing: 0;
            min-width: 16px;
            line-height: 16px;
            height: 16px;
            background: #dc3545;
            color: #fff;
            text-align: center;
            border-radius: 1em;
        }
    }
</style>