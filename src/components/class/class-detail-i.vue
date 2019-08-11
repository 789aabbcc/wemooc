<template>
    <div class="left2">
        <div class="left2-card">
            <p class="introduce">
                简介：本课程介绍jenkins、docker、k8s以及使用一个实例讲解如何实现持续集成、代码的自动化编译打包和部署
            </p>
        </div>
        <div class="left2-card">
            <p class="title">第1章·课程介绍</p>
            <div class="class-detail-box1">
                <p class="left-box">1-1：课程整体介绍（04:44）</p>
                <p class="right-box">开始学习</p>
            </div>
            <div class="class-detail-box2">
                <p class="left-box">1-1：课程整体介绍（04:44）</p>
                <p class="right-box">开始学习</p>
            </div>
            <div class="class-detail-box2">
                <p class="left-box">1-1：课程整体介绍（04:44）</p>
                <p class="right-box">开始学习</p>
            </div>
            <div class="class-detail-box2">
                <p class="left-box">1-1：课程整体介绍（04:44）</p>
                <p class="right-box">开始学习</p>
            </div>
            <div class="class-detail-box2">
                <p class="left-box">1-1：课程整体介绍（04:44）</p>
                <p class="right-box">开始学习</p>
            </div>
            <div class="class-detail-box2">
                <p class="left-box">1-1：课程整体介绍（04:44）</p>
                <p class="right-box">开始学习</p>
            </div>
            <div class="class-detail-box2">
                <p class="left-box">1-1：课程整体介绍（04:44）</p>
                <p class="right-box">开始学习</p>
            </div>
        </div>

        <div class="left2-card">
            <p class="title">第1章·课程介绍</p>
            <div class="class-detail-box1">
                <p class="left-box">1-1：课程整体介绍（04:44）</p>
                <p class="right-box">开始学习</p>
            </div>
            <div class="class-detail-box2">
                <p class="left-box">1-1：课程整体介绍（04:44）</p>
                <p class="right-box">开始学习</p>
            </div>
            <div class="class-detail-box2">
                <p class="left-box">1-1：课程整体介绍（04:44）</p>
                <p class="right-box">开始学习</p>
            </div>
            <div class="class-detail-box2">
                <p class="left-box">1-1：课程整体介绍（04:44）</p>
                <p class="right-box">开始学习</p>
            </div>
            <div class="class-detail-box2">
                <p class="left-box">1-1：课程整体介绍（04:44）</p>
                <p class="right-box">开始学习</p>
            </div>
            <div class="class-detail-box2">
                <p class="left-box">1-1：课程整体介绍（04:44）</p>
                <p class="right-box">开始学习</p>
            </div>
            <div class="class-detail-box2">
                <p class="left-box">1-1：课程整体介绍（04:44）</p>
                <p class="right-box">开始学习</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'class-detail-d',
  data() {
    return {
      rateValue: 4.6
    }
  }
}
</script>

<style lang="scss" scoped>
    @import '../../common/sass/base.scss';

    .left2{
        width:894*$length;
        height:auto;
        .left2-card{
            width:864*$length;
            height:auto;
            padding:30*$length;
            padding-left:15*$length;
            padding-right:15*$length;
            background-color: #fff;
            margin-bottom:12*$length;
            .introduce{
                @include fontStyle(14,22,500,#222,start);
                padding-left:15*$length;
                height:auto;
            }
            .title{
                @include fontStyle(16,25,500,#222,start);
                height:auto;
                padding-left:15*$length;
                margin-bottom:18*$length;
            }
            .class-detail-box1{
                @extend %flex-row-spb;
                height:42*$length;
                width:834*$length;
                padding-left:15*$length;
                padding-right:15*$length;
                background-color: rgba(70,83,155,.06);
                .left-box{
                    @include fontStyle(14,19,500,#222,start);
                }
                .right-box{
                    cursor:pointer;
                    @include fontStyle(14,19,500,$fontColor1,start);
                }
            }
            .class-detail-box2{
                @extend %flex-row-spb;
                height:42*$length;
                width:834*$length;
                padding-left:15*$length;
                padding-right:15*$length;
                .left-box{
                    @include fontStyle(14,19,500,#222,start);
                }
                .right-box{
                    display: none;
                }
            }
        }
    }
</style>
