<template>
    <div class="left1">
        <h2 class="title">
            课程简介
        </h2>
        <div class="content">
            <p>本课程主要讲解HTML相关内容；HTML是超文本标记语言，它定义了网页内容的含义和结构，就如同人的身体骨架，HTML能够让页面结构更具有语义化和可读性；课程内容涵盖常见浏览器内核、Web标准、HTML骨架、代码开发工具、HTML常用标签、相对路径和绝对路径等知识点，并结合相应案例，对知识点进行运用和拓展；最后通过一个综合案例（注册页面）对所学HTML进行综合运用。</p>
        </div>
        <h2 class="title">
            适学人群
        </h2>
        <div class="content">
            <p>1.在校大学生</p>
            <p>2.刚刚毕业的技术小白</p>
            <p>3.零基础想转行的非IT人员</p>
        </div>
        <h2 class="title">
            课程亮点
        </h2>
        <div class="content">
            <p>1.课程讲解清晰、透彻，非常适合零基础学员学习；</p>
            <p>1.课程讲解清晰、透彻，非常适合零基础学员学习；</p>
            <p>1.课程讲解清晰、透彻，非常适合零基础学员学习；</p>
        </div>
        <h2 class="title">
            主讲内容
        </h2>
        <div class="content">
            <p>1.课程讲解清晰、透彻，非常适合零基础学员学习；</p>
            <p>1.课程讲解清晰、透彻，非常适合零基础学员学习；</p>
            <p>1.课程讲解清晰、透彻，非常适合零基础学员学习；</p>
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

    .left1{
        width:834*$length;
        height:auto;
        padding:30*$length;
        background-color: #fff;
        .title{
            width:100%;
            @include fontStyle(20,30,500,#666,start);
            height:auto;
        }
        .content{
            width:100%;
            margin-top:30*$length;
            margin-bottom:50*$length;
            & p{
                width:100%;
                @include fontStyle(16,24,500,#666,start);
                height:auto;
                margin-bottom: 28*$length;
            }
        }
    }
</style>
