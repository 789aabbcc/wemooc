<template>

    <div id="mycenter">
        <div class="mybgcontainer"  v-for="num in topshow">
            <div>
                <span>{{num.study}}</span>
                <p>学习时长</p>
            </div>
            <div>
                <span>{{num.total}}</span>
                <p>共学习课程</p>
            </div>
            <div>
                <span>{{num.haved}}</span>
                <p>已学完课程</p>
            </div>
        </div>

        <div class="center-container">
            <div class="mymaincontainer">
                <div class="personalsimple"
                     :style="{top: 0.04*screenHeight+'px'}"
                    v-for="info in personalsimple"
                >
                    <div class="personalsimple-avatar">
                        <img v-bind:src=info.avatar  alt="头像" width="100%" height="100%">
                    </div>
                    <span>{{info.nickname}}</span>
                    <p>{{info.position}}</p>


                    <ul>
                        <div @click="clicktab11" v-bind:class="{clicktab:clicktab1}">
                            <li @click="tabId=0" class="{tabId=0}">我的课程</li>
                        </div>
                        <div  @click="clicktab22"  v-bind:class="{clicktab:clicktab2}">
                            <li @click="tabId=1" class="{tabId=1}">订单中心</li>
                        </div>
                        <div  @click="clicktab33"  v-bind:class="{clicktab:clicktab3}">
                            <li @click="tabId=2" class="{tabId=2}">个人设置</li>
                        </div>
                    </ul>


                </div>
                <div class="personalmain" :style="{top: 0.04*screenHeight+'px'}">
                    <div class="personalmain-centercon">
                        <div class="personalmain-course" v-show="tabId===0">

                            <ul>
                                <div @click="clicktabbranch1" v-bind:class="{borderbtm:true,clicktabbranch:clicktabbranch11}">
                                    <li @click="courseId=0" class="{courseId=0}">全部课程</li>
                                </div>
                                <div @click="clicktabbranch2" v-bind:class="{borderbtm:true,clicktabbranch:clicktabbranch22}">
                                    <li @click="courseId=1" class="{courseId=1}">免费课程</li>
                                </div>
                                <div @click="clicktabbranch3" v-bind:class="{borderbtm:true,clicktabbranch:clicktabbranch33}">
                                    <li @click="courseId=2" class="{courseId=2}">收费课程</li>
                                </div>
                                <div @click="clicktabbranch4" v-bind:class="{borderbtm:true,clicktabbranch:clicktabbranch44}">
                                    <li @click="courseId=3" class="{courseId=3}">我的收藏</li>
                                </div>
                            </ul>


                            <div v-show="courseId===0">
                                <Course></Course>
                                <Course></Course>
                                <Course></Course>
                                <Course></Course>
                                <Course></Course>

                            </div>
                            <div v-show="courseId===1">
                                <Course></Course>
                                <Course></Course>
                                <Course></Course>
                                <Course></Course>

                            </div>
                            <div v-show="courseId===2">
                                <Nocharge></Nocharge>
                            </div>
                            <div v-show="courseId===3">
                                <Nocollect></Nocollect>
                            </div>


                        </div>
                        <div class="personalmain-order" v-show="tabId===1">


                            <ul>
                                <div @click="clicktaborder1" v-bind:class="{borderbtm:true,clicktabbranch:clicktaborder11}">
                                    <li @click="orderId=0" class="{orderId=0}">全部订单</li>
                                </div>
                                <div @click="clicktaborder2" v-bind:class="{borderbtm:true,clicktabbranch:clicktaborder22}">
                                    <li @click="orderId=1" class="{orderId=1}">已完成</li>
                                </div>
                                <div @click="clicktaborder3" v-bind:class="{borderbtm:true,clicktabbranch:clicktaborder33}">
                                    <li @click="orderId=2" class="{orderId=2}">未支付</li>
                                </div>
                                <div @click="clicktaborder4" v-bind:class="{borderbtm:true,clicktabbranch:clicktaborder44}">
                                    <li @click="orderId=3" class="{orderId=3}">已失效</li>
                                </div>
                            </ul>

                            <div v-show="orderId===0">
                                <Oneorder></Oneorder>
                                <Oneorder></Oneorder>
                            </div>
                            <div v-show="orderId===1">
                                <Oneorder></Oneorder>
                            </div>
                            <div v-show="orderId===2">
                                <Oneorder></Oneorder>
                            </div>
                            <div v-show="orderId===3">
                                <Oneorder></Oneorder>
                            </div>

                        </div>
                        <div class="personalmain-personal" v-show="tabId===2">

                            <ul>
                                <div @click="clicktabpersonal1" v-bind:class="{borderbtm:true,clicktabbranch:clicktabpersonal11}">
                                    <li @click="personalId=0" class="{orderId=0}">账号绑定</li>
                                </div>
                                <div @click="clicktabpersonal2" v-bind:class="{borderbtm:true,clicktabbranch:clicktabpersonal22}">
                                    <li @click="personalId=1" class="{orderId=1}">个人信息</li>
                                </div>
                            </ul>

                            <div v-show="personalId===0">

                                <div class="personalbind">
                                    <span>手机号：</span>
                                    <input type="text" readonly="readonly">
                                    <i>重新绑定</i>
                                </div>
                                <div class="personalbind">
                                    <span>邮箱：</span>
                                    <input type="text" readonly="readonly">
                                    <i>重新绑定</i>
                                </div>
                                <div class="personalbind">
                                    <span>QQ：</span>
                                    <input type="text" readonly="readonly">
                                    <i>重新绑定</i>
                                </div>
                                <div class="personalbind">
                                    <span>微信：</span>
                                    <input type="text" readonly="readonly">
                                    <i>重新绑定</i>
                                </div>
                                <div class="personalbind">
                                    <span>微博：</span>
                                    <input type="text" readonly="readonly">
                                    <i>重新绑定</i>
                                </div>

                            </div>
                            <div v-show="personalId===1">

                                <div class="personalbind">
                                    <span>QQ：</span>
                                    <input type="text">
                                </div>
                                <div class="personalbind">
                                    <span>昵称：</span>
                                    <input type="text">
                                </div><div class="personalbind">
                                    <span>职业：</span>
                                    <input type="text">
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
    import Course from '../../components/Course/Course'
    import Nocollect from '../../components/Course/Nocollect'
    import Nocharge from '../../components/Course/Nocharge'
    import Oneorder from '../../components/Order/Oneorder'
    import Avatar from '../../components/Avatar/Avatar'


    export default {
  name: 'Mycenter',
  components: {
    Course,
    Nocollect,
    Nocharge,
    Oneorder,
    Avatar
  },
  props: {
    abc:'jhsdhjfdskhv',
  },
  data() {
    return {
      abc:'jhsdhjfdskhv',

      topshow: [
        { study: '10h', total: '3', haved: '8' }
      ],//个人中心页面上方个人学习时间显示
      screenHeight: document.documentElement.clientHeight, // 屏幕高度
      personalsimple:[
        {nickname: '哈哈哈', position: '设计师',avatar: 'http://b-ssl.duitang.com/uploads/item/201707/19/20170719211350_4PnBt.jpeg'}
      ],

      tabId:0,
      clicktab1:true,
      clicktab2:false,
      clicktab3:false,


      courseId:0,
      clicktabbranch11: true,
      clicktabbranch22: false,
      clicktabbranch33: false,
      clicktabbranch44: false,


      orderId:0,
      clicktaborder11: true,
      clicktaborder22: false,
      clicktaborder33: false,
      clicktaborder44: false,


      personalId: 0,
      clicktabpersonal11:true,
      clicktabpersonal22:false

    }
  },
  methods: {
    clicktab11(){
        this.clicktab1=true
        this.clicktab2=false
        this.clicktab3=false
    },
    clicktab22(){
      this.clicktab1=false
      this.clicktab2=true
      this.clicktab3=false
    },
    clicktab33(){
      this.clicktab1=false
      this.clicktab2=false
      this.clicktab3=true
    },

    clicktabbranch1(){
      this.clicktabbranch11=true
      this.clicktabbranch22=false
      this.clicktabbranch33=false
      this.clicktabbranch44=false
    },
    clicktabbranch2(){
      this.clicktabbranch11=false
      this.clicktabbranch22=true
      this.clicktabbranch33=false
      this.clicktabbranch44=false
    },
    clicktabbranch3(){
      this.clicktabbranch11=false
      this.clicktabbranch22=false
      this.clicktabbranch33=true
      this.clicktabbranch44=false
    },
    clicktabbranch4(){
      this.clicktabbranch11=false
      this.clicktabbranch22=false
      this.clicktabbranch33=false
      this.clicktabbranch44=true
    },

    clicktaborder1(){
      this.clicktaborder11=true
      this.clicktaborder22=false
      this.clicktaborder33=false
      this.clicktaborder44=false
    },
    clicktaborder2(){
      this.clicktaborder11=false
      this.clicktaborder22=true
      this.clicktaborder33=false
      this.clicktaborder44=false
    },
    clicktaborder3(){
      this.clicktaborder11=false
      this.clicktaborder22=false
      this.clicktaborder33=true
      this.clicktaborder44=false
    },
    clicktaborder4(){
      this.clicktaborder11=false
      this.clicktaborder22=false
      this.clicktaborder33=false
      this.clicktaborder44=true
    },


    clicktabpersonal1(){
      this.clicktabpersonal11 = true
      this.clicktabpersonal22 = false
    },
    clicktabpersonal2(){
      this.clicktabpersonal11 = false
      this.clicktabpersonal22 = true
    }

  },
  watch: {
    'screenHeight': function(val) { // 监听屏幕高度变化
      let oIframe = document.getElementById('maindiv')
      oIframe.style.height = (Number(val) - 40) + 'px'
    }
  },
  mounted() {
    let _this = this
    window.onresize = function() { // 定义窗口大小变更通知事件
      _this.screenHeight = document.documentElement.clientHeight // 窗口高度
    }
    console.log(this.screenHeight)
  }
}

</script>

<style lang="scss" scoped>
    @import "../../common/sass/base.scss";
    @import "../../common/sass/common.scss";
    @import "../../common/sass/yuanyuanyao.scss";

    .center-container {
        width: 1200px;
        margin: 0 auto;
    }
    .mybgcontainer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 124px;
        background: url("../../common/images/mybg.png");
    }
    .mybgcontainer div {
        text-align: center;
        width: 150px;
    }
    .mybgcontainer div span {
        color: #FFFFFF;
        font-size: 24px;
    }
    .mybgcontainer div p {
        color: rgba(255,255,255,.4);
        font-size: $f14;
    }
    .mymaincontainer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        /*align-items: center;*/
        padding-bottom: 260px;
        box-sizing: border-box;
    }
    .personalsimple {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        padding-top: 30px;
        box-sizing: border-box;
        width: 180px;
        height: 480px;
        border-radius: 10px;
        background-color: #ffffff;
        border: 1px solid #EAEAEA;
    }
    .personalsimple-avatar {
        width: 88px;
        height: 88px;
        border-radius: 10px;
        overflow: hidden;
        background-color: $mainColor;
    }
    .personalsimple span {
        margin-top: 26px;
        font-size: $f16;
        color: #222222;
    }
    .personalsimple p {
        margin-top: 10px;
        font-size: $f14;
        color: #999999;
    }
    .personalsimple ul {
        margin-top: 22px;
        width: 100%;
        text-align: center;
    }
    .personalsimple ul li{
        color: #666666;
        line-height: 44px;
        cursor: pointer;
    }
    .personalsimple ul li:hover {
        color: $mainColor;
        background-color: rgba(70,83,235,.1);
    }
    .clicktab {
        color: $mainColor;
        background-color: rgba(70,83,235,.1);
    }
    .personalmain-centercon {
        width: 936px;
        margin: 0 auto;
    }
    .personalmain {
        width: 996px;
        height: 695px;
        background-color: #ffffff;
        overflow-x: hidden;
        overflow-y: scroll;
        box-sizing: border-box;
        border-radius: 10px;
        border: 1px solid #EAEAEA;
        padding: 10px;
        padding-bottom: 30px;
    }
    .personalmain-course ul div, .personalmain-order ul div, .personalmain-personal ul div {
        width: 86px;
        text-align: center;
        display: inline-block;
        vertical-align: middle;
        line-height: 40px;
        margin-right: 20px;
        cursor: pointer;
        color: #999999;
        font-size: $f16;
    }
    .borderbtm li {
        border-bottom: 2px solid transparent;
    }
    .clicktabbranch li {
        color: $mainColor;
        border-bottom: 2px solid $mainColor;
    }

    .personalbind {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }

    .personalbind span {
        width: 80px;
        text-align: right;
        margin-right:20px;
        line-height: 34px;
        font-size: 14px;
        color: #666666;
    }
    .personalbind input {
        width: 200px;
        border: 1px solid #EAEAEA;
        line-height: 34px;
        padding-left: 10px;
        padding-right: 10px;
        color: #222222;
    }
    .personalbind i {
        width: 50px;
        text-align: left;
        margin-left: 20px;
        line-height: 34px;
        font-size: 12px;
        color: #AAAAAA;
        cursor: pointer;
    }
    .personalbind i:hover {
        color: #46539B;
    }


</style>
