<template>
    <div class="home-container">
        <!--session1-->
        <div class="home-session1">
            <div class="home-session1-left" v-on:mouseover="showRightDetail(rightDetailTitle)">
                <div class="left-item" v-on:mouseover="showRightDetail(word)" v-for="word in leftItems">
                    <p >{{word}}</p>
                    <i v-on:mouseover="showRightDetail(rightDetailTitle)" class="el-icon-caret-right"></i>
                </div>
            </div>
            <div class="home-session1-right">
                <div class="right-detail"  v-on:mouseover="showRightDetail(rightDetailTitle)" v-on:mouseleave="hideRightDetail" v-if="this.showRightDetails">
                    <h2>{{rightDetailTitle}}</h2>
                    <div>
                        <span v-for="item in rightDetailItem">{{item}}</span>
                    </div>
                </div>
                <el-carousel :interval="4000"  trigger="click" height="420px">
                    <el-carousel-item  v-for="item in rightBanner" :key="item.name">
                        <!--<h3 class="small">{{ item.name }}</h3>-->
                        <img v-bind:src=item.img  style="height: auto;width:100%;" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <!--session2-->
        <div class="home-session2">
            <div class="title-box">
                <h2>实战推荐</h2>
                <p>Practical recommendation</p>
            </div>
            <div class="long-box">
            <ClassItem1 v-for='item in 5'></ClassItem1>
        </div>
            <div class="long-box">
                <ClassItem1 v-for='item in 5'></ClassItem1>
            </div>
        </div>
        <div class="home-session2">
            <div class="title-box">
                <h2>新上好课</h2>
                <p>The latest courses</p>
            </div>
            <div class="long-box">
                <ClassItem1 v-for='item in 5'></ClassItem1>
            </div>
            <div class="long-box">
                <ClassItem1 v-for='item in 5'></ClassItem1>
            </div>
        </div>
        <div class="home-session2">
            <div class="title-box">
                <h2>技能提升</h2>
                <p>skill upgrading</p>
            </div>
            <div class="long-box">
                <ClassItem1 v-for='item in 5'></ClassItem1>
            </div>
            <div class="long-box">
                <ClassItem1 v-for='item in 5'></ClassItem1>
            </div>
        </div>
        <div class="home-footer">
            <p>京ICP备1234号 京公网安备12345 Copyright © 2019 微幕课 All Rights Reserved</p>
        </div>
    </div>
</template>

<script>
import ClassItem1 from 'components/class/ClassItem1'
export default {
  name: 'home',
  data() {
    return {
      showRightDetails: false,
      leftItems: [
        '前端开发', '后端开发', '移动开发', '算法&大数据', '运维&测试', '前沿技术', 'UI&设计'
      ],
      rightBanner: [
        { name: 'banner1', img: 'http://39.104.201.80/yunding/M00/00/0D/rBjuW11CtBeAaD2pAAXyLICkhAU076.png' },
        { name: 'banner2', img: 'http://39.104.201.80/yunding/M00/00/0D/rBjuW11CtNSAAV4XAASC0aABhUQ980.png' },
        { name: 'banner3', img: 'http://39.104.201.80/yunding/M00/00/0D/rBjuW11CtW-ATxj6AANqfdOtMb0282.png' },
        { name: 'banner4', img: 'http://39.104.201.80/yunding/M00/00/0D/rBjuW11CtTyABKZ_AAsd1d-0KbY321.png' }
      ],
      rightDetailItems: [
        ['1', 'javascript', 'vue.js', 'react.js', 'Angular', 'Node.js', 'Jquery', 'Bootstrap', 'Sass/Less', '小程序', 'React-Native'],
        ['2', 'javascript', 'vue.js', 'react.js', 'Angular', 'Node.js', 'Jquery', 'Bootstrap', 'Sass/Less', '小程序', 'React-Native'],
        ['3', 'javascript', 'vue.js', 'react.js', 'Angular', 'Node.js', 'Jquery', 'Bootstrap', 'Sass/Less', '小程序', 'React-Native'],
        ['4', 'javascript', 'vue.js', 'react.js', 'Angular', 'Node.js', 'Jquery', 'Bootstrap', 'Sass/Less', '小程序', 'React-Native'],
        ['5', 'javascript', 'vue.js', 'react.js', 'Angular', 'Node.js', 'Jquery', 'Bootstrap', 'Sass/Less', '小程序', 'React-Native'],
        ['7', 'javascript', 'vue.js', 'react.js', 'Angular', 'Node.js', 'Jquery', 'Bootstrap', 'Sass/Less', '小程序', 'React-Native'],
        ['8', 'javascript', 'vue.js', 'react.js', 'Angular', 'Node.js', 'Jquery', 'Bootstrap', 'Sass/Less', '小程序', 'React-Native']
      ],
      rightDetailItem: [],
      rightDetailTitle: '',
      inTabDom: false
    }
  },
  methods: {
    showRightDetail(e) {
      let leftItems = this.leftItems
      let len = leftItems.length
      for (let i = 0; i < len; i++) {
        if (e === leftItems[i]) {
          this.showRightDetails = true
          this.rightDetailTitle = leftItems[i]
          this.rightDetailItem = this.rightDetailItems[i]
        }
      }
    },
    hideRightDetail() {
      let that = this
      setTimeout(function() {
        that.showRightDetails = false
      }, 500)
    }
  },
  components: {
    ClassItem1
  }
}
</script>

<style lang="scss" scoped>
    @import 'common/sass/base.scss';
    .home-container{
        margin-top:30*$length;
        width:100%;
        .home-session1{
            width:1200*$length;
            margin:0 auto;
            height:420*$length;
            border-radius:5*$length;
            background-color: #0582cd;
            .home-session1-left{
                float:left;
                width:180*$length;
                height:100%;
                overflow: hidden;
                background-color: #5A6381;
                @extend %clearFix;
                @extend %flex-column-spb;
                justify-content: space-around;
                .left-item{
                    width:180*$length;
                    height:50*$length;
                    background-color: transparent;
                    margin-top:10*$length;
                    border:none;
                    @extend %inlineBlockV;
                    cursor:pointer;
                    &:hover{
                        background-color: rgba(0,0,0,.2);
                        border:none;

                        p{
                            color:#fff;
                        }
                        i{
                            color:#fff;
                        }
                    }
                    & p{
                        display: inline-block;
                        vertical-align: middle;
                        width:120*$length;
                        margin-left: 30*$length;
                        @include fontStyle(14,50,500,rgba(255,255,255,.72),start)
                    }
                    & i{
                        display: inline-block;
                        vertical-align: middle;
                        width:30*$length;
                        @include fontStyle(14,50,500,rgba(255,255,255,.72),center)
                    }
                }
            }
            .home-session1-right{
                float:right;
                width:1020*$length;
                height:100%;
                //overflow: hidden;
                @extend %clearFix;
                .right-detail{
                    position: absolute;
                    z-index: $index3;
                    left:0;
                    top:0;
                    height:420*$length;
                    width:532*$length;
                    background-color: rgba(255,255,255,.9);
                    & h2{
                        @include fontStyle(16,90,500,#222,start);
                        margin-left:30*$length;
                        width:300*$length;
                    }
                    & div{
                        margin-left:30*$length;
                        width:470*$length;
                        & span{
                            margin-right:30*$length;
                            overflow-wrap: break-word;
                            cursor:pointer;
                            @include fontStyle(14,30,500,#666,start);
                            &:hover{
                                color:$fontColor1;
                            }
                        }
                    }
                }
            }
        }
        .home-session2{
            margin:0 auto;
            width:1200*$length;
            .title-box{
                width:100%;
                h2{
                    position: absolute;
                    top:0;
                    left:0;
                    right:0;
                    margin:0 auto;
                    @include fontStyle(24,100,500,#222,center)
                }
                p{

                    @include fontStyle(12,100,500,rgba(153,153,153,.2),center)
                }
            }
            .long-box{
                width:100%;
                height:auto;
                @extend %flex-row-spb;
                margin-top: 8*$length;
            }
        }
        .home-footer{
            height:124*$length;
            width:100%;
            margin-top:300*$length;
            background-color: #4D4D4D;
            overflow: hidden;
            & p{
                width:1200*$length;
                margin:0 auto;
                @include fontStyle(12,20,500,#999999,center);
                margin-top:90*$length;

            }
        }
    }
</style>
