<template>
    <div class="class-item">
        <div class="img-box">
            <img src="https://img4.mukewang.com/szimg/5d1ad17f08cd16e800000000.jpg" alt="">
        </div>
        <div class="title">
            三小时带你入门Django框架
        </div>
        <div class="class-info1">
            <p class="type">实战</p>
            <p class="level">初级</p>
            <p class="star">
                <i class="star-on el-icon-star-on"></i>
                <i class="star-on el-icon-star-on"></i>
                <i class="star-on el-icon-star-on"></i>
                <i class="star-on el-icon-star-off"></i>
                <i class="star-on el-icon-star-off"></i>
            </p>
            <p class="view">124</p>
            <i class="view-icon el-icon-user"></i>
        </div>
        <div class="class-info2">
            <p class="price">$123</p>
            <p class="buy">加入购物车</p>
            <i class="buy-icon el-icon-shopping-cart-2"></i>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ClassItem1'


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../../common/sass/base.scss';
    .class-item{
        width:224*$length;
        height:240*$length;
        cursor:pointer;
        &:hover{
            .img-box{
                & img{
                    @include transform(scale(1.2))
                }
            }
            @include box-shadow(1px 1px 10px 1px $hoverColor1)
        }
        .img-box{
           width:224*$length;
            height:126*$length;
            overflow: hidden;
            & img{
                width:auto;
                height:100%;
            }
        }
        .title{
            width:95%;
            margin:0 auto;
            @extend %nowrap;
            @include fontStyle(15,38,500,#222,start)
        }
        .class-info1{
            width:95%;
            margin:0 auto;
            height:18*$length;
            margin-top:10*$length;
            @extend %clearFix;

            .type{
                float:left;
                width:30*$length;
                @include fontStyle(12,18,500,#999,start)
            }
            .level{
                float:left;
                width:30*$length;
                margin-left:14*$length;
                @include fontStyle(12,18,500,#999,start)
            }
            .star{
                float:left;
                width:50*$length;
                margin-left:14*$length;
                font-size:2*$font-size;
                height:18*$length;
                .star-on{
                    content:"\e797";
                    color: rgb(247, 186, 42);
                    height:18*$length;
                    line-height:18*$length;
                    width:6*$length;
                    font-size:10*$font-size;
                    margin-left:3*$length;
                }

            }
            .view{
                float:right;
                @include fontStyle(12,18,500,#999,end)
            }
            .view-icon{
                float:right;
                margin-right:5*$length;
                @include fontStyle(12,18,500,#999,start)
            }
        }
        .class-info2{
            width:95%;
            margin:0 auto;
            height:18*$length;
            margin-top:10*$length;
            @extend %clearFix;
            .price{
                float:left;
                width:30*$length;
                @include fontStyle(12,18,500,#FF7600,start)
            }
            .buy{
                cursor:pointer;
                float:right;
                @include fontStyle(12,18,500,#999,end)
            }
            .buy-icon{
                cursor:pointer;
                float:right;
                margin-right:5*$length;
                @include fontStyle(12,18,500,#999,start)
            }
        }
    }

</style>
