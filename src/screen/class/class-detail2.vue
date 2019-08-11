<template>
    <div class="class-detail-container ">
        <div class="class-detail-session1">
            <div class="class-detail-session1-center">
                <div class="top">
                    <div class="top-box">
                        <ul class="top-left">
                            <li><a>课程</a></li>
                            <li><span>|</span><a>移动开发</a></li>
                            <li><span>|</span><a>Android</a></li>
                            <li><span>|</span><a>ViewPager+Tab特效实现微信主界面</a></li>
                        </ul>
                        <div class="top-right">
                            <span>收藏</span>
                            <i class="el-icon-star-on"></i>
                        </div>
                    </div>
                    <div class="bottom-box">
                        <h2>React16.8+Next.js+Koa2开发Github全栈项目</h2>
                        <p>学习React服务端渲染同构设计方案，掌握OAuth登录体系的实现原理与开发</p>
                    </div>

                </div>
                <div class="bottom">
                    <div class="card-left">
                        <img src="https://img1.mukewang.com/53a28e960001311b06000338-240-135.jpg" alt="">
                    </div>
                    <div class="card-center">
                        <h2>￥366.00</h2>
                        <div class="card-center-info">
                            <div class="info-box1">
                                <div class="photo-box">
                                    <img src="http://39.104.201.80/yunding/M00/00/0D/rBjuW11BUcyAUgLQAAFgsAcwQyo974.png" alt="">
                                </div>
                                <div class="name-position">
                                    <p class="name">黎莉莉</p>
                                    <p class="position">前端工程师</p>
                                </div>
                            </div>
                            <div class="info-box2">
                                <span class="name">难度：</span>
                                <span class="value">入门</span>
                                <span class="name">时长：</span>
                                <span class="value">2小时30分</span>
                                <span class="name">学习人数：</span>
                                <span class="value">1975</span>
                            </div>
                        </div>
                    </div>
                    <div class="card-right">
                        <div class="button1">立即购买</div>
                        <div class="button2">加入购物车</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="class-detail-session2">
            <div class="left">
                <div class="tab">
                    <router-link to="/class-detail/pay/detail" exact-active-class="activeClass" tag="p" exact>课程详情</router-link>
                    <router-link to="/class-detail/pay/index" exact-active-class="activeClass" tag="p" exact>课程目录</router-link>
                    <router-link to="/class-detail/pay/comment" exact-active-class="activeClass" tag="p" exact>用户评价<span>9</span></router-link>
                </div>
                <transition name="router-fade" mode="out-in">
                    <router-view :key="activeDate"></router-view>
                </transition>
            </div>

            <div class="right">
                <h2 class="title">推荐课程</h2>
                <div class="class-item">
                    <div class="left-box">
                        <img src="https://img4.mukewang.com/5704a9550001f74606000338-240-135.jpg" alt="">
                    </div>
                    <div class="right-box">
                        <p class="name">全面系统Python3入门+进阶课程</p>
                        <p class="price">¥366.00</p>
                    </div>
                </div>
                <div class="class-item">
                    <div class="left-box">
                        <img src="https://img4.mukewang.com/5704a9550001f74606000338-240-135.jpg" alt="">
                    </div>
                    <div class="right-box">
                        <p class="name">全面系统Python3入门+进阶课程</p>
                        <p class="price">¥366.00</p>
                    </div>
                </div>
                <div class="class-item">
                    <div class="left-box">
                        <img src="https://img4.mukewang.com/5704a9550001f74606000338-240-135.jpg" alt="">
                    </div>
                    <div class="right-box">
                        <p class="name">全面系统Python3入门+进阶课程</p>
                        <p class="price">¥366.00</p>
                    </div>
                </div>
                <div class="class-item">
                    <div class="left-box">
                        <img src="https://img4.mukewang.com/5704a9550001f74606000338-240-135.jpg" alt="">
                    </div>
                    <div class="right-box">
                        <p class="name">全面系统Python3入门+进阶课程</p>
                        <p class="price">¥366.00</p>
                    </div>
                </div>
                <div class="class-item">
                    <div class="left-box">
                        <img src="https://img4.mukewang.com/5704a9550001f74606000338-240-135.jpg" alt="">
                    </div>
                    <div class="right-box">
                        <p class="name">全面系统Python3入门+进阶课程</p>
                        <p class="price">¥366.00</p>
                    </div>
                </div>
                <div class="class-item">
                    <div class="left-box">
                        <img src="https://img4.mukewang.com/5704a9550001f74606000338-240-135.jpg" alt="">
                    </div>
                    <div class="right-box">
                        <p class="name">全面系统Python3入门+进阶课程</p>
                        <p class="price">¥366.00</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'class-detail-pay',
        data() {
            return {
                rateValue: 4.6,
                activeDate: new Date()
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../common/sass/base.scss';
    .class-detail-container{
        width:100%;
        .class-detail-session1{
            width:100%;
            height:290*$length;
            @include bgImage('./class-bg.png');
            background-image:url("./mask.png"), url("./class-bg.png");
            margin: 0 auto;
            .class-detail-session1-center{
                position:absolute;
                top:0;
                left:0;
                right:0;
                margin:0 auto;
                height:377*$length;
                width:1200*$length;
                .top{
                    height:203*$length;
                    .top-box{
                        height:68*$length;
                        @extend %flex-row-spb;
                        .top-left{
                            height:68*$length;
                            @extend %inlineBlockV;
                            & li{
                                display: inline-block;
                                vertical-align: middle;
                                & span{
                                    margin-left:5*$length;
                                    margin-right:5*$length;
                                    @include fontStyle(12,68,500,rgba(255,255,255,.8),start)
                                }
                                & a{
                                    cursor:pointer;
                                    @include fontStyle(14,68,500,rgba(255,255,255,.8),start)
                                }
                            }

                        }
                        .top-right{
                            width:102*$length;
                            height:32*$length;
                            border-radius:16*$length;
                            background-color: rgba(0,0,0,.1);
                            text-align: center;
                            cursor:pointer;
                            &:hover{
                                & span{
                                    margin-right:5*$length;
                                    color:rgb(247, 186, 42)
                                }
                                & i{
                                    color:rgb(247, 186, 42)

                                }
                            }
                            & span{
                                margin-right:5*$length;
                                @include fontStyle(13,32,500,rgba(255,255,255,.8),start)
                            }
                            & i{
                                @include fontStyle(16,32,500,rgba(255,255,255,.8),start)
                            }
                        }

                    }
                    .bottom-box{
                        height:135*$length;

                        @extend %flex-column-center;
                        h2{
                            @include fontStyle(24,32,500,#fff,center);
                        }
                        p{
                            margin-top:10*$length;
                            @include fontStyle(12,16,500,rgba(255,255,255,.6),center);

                        }
                    }

                }
                .bottom{
                    background-color: #fff;
                    width:1160*$length;
                    height:126*$length;
                    padding:24*$length 30*$length;
                    border-radius: 10*$length;
                    overflow: hidden;
                    @include box-shadow(1px 1px 15px 1px rgba(0,0,0,.1));
                    @extend %flex-row-spb;
                    .card-top{
                        width:1040*$length;
                        margin:0 auto;
                        margin-top:30*$length;
                        height:192*$length;
                        @extend %flex-row-spb;
                        .top-left{
                            width:342*$length;
                            height:192*$length;
                            overflow: hidden;
                            border-radius: 10*$length;
                            & img{
                                width:100%;
                                height:auto;
                            }
                            .abs{
                                position: absolute;
                                right:30*$length;
                                top:0;
                                width:22*$length;

                                background-color: #E67979;
                                border-bottom-left-radius: 11*$length;
                                border-bottom-right-radius: 11*$length;
                                @include fontStyle(14,20,500,#fff,center);
                                overflow-wrap: break-word;
                                height:46*$length;
                            }
                        }
                        .top-right{
                            width:674*$length;
                            height:192*$length;
                            .title{
                                @include fontStyle(24,32,500,#222,start)
                            }
                            .info-box1{
                                margin-top:10*$length;
                                height:40*$length;
                                @extend %flex-row-spb;
                                justify-content: flex-start;
                                .photo-box{
                                    height:40*$length;
                                    width:40*$length;
                                    overflow: hidden;
                                    border-radius: 20*$length;
                                    & img{
                                        width:100%;
                                        height:auto;
                                    }
                                }
                                .name-position{
                                    height:40*$length;
                                    margin-left:12*$length;
                                    @extend %flex-column-spb;
                                    align-items: start;
                                    .name{
                                        @include fontStyle(14,19,500,#666,start)
                                    }
                                    .position{
                                        @include fontStyle(12,16,500,#aaa,start)
                                    }
                                }

                            }
                            .info-box2{
                                margin-top:25*$length;
                                .name{
                                    margin-right:5*$length;
                                    @include fontStyle(13,17,500,#666,start)

                                }
                                .value{
                                    margin-right:30*$length;
                                    @include fontStyle(13,17,500,#666,start)
                                }
                            }
                            .rate-box{
                                margin-top:30*$length;
                            }
                        }
                    }
                    .card-bottom{
                        width:1040*$length;
                        margin:0 auto;
                        height:64*$length;
                        @extend %flex-row-spb;
                        .bottom-left{
                            width:342*$length;
                            @extend %flex-row-spb;
                            & p{
                                cursor:pointer;
                                @include fontStyle(16,31,500,#666,start);
                                border-bottom:1px solid transparent;
                                &:hover{
                                    color:$fontColor1;
                                    border-bottom:1px solid $fontColor1;
                                    & span{
                                        color:$fontColor1;
                                    }
                                }
                                & span{
                                    position: absolute;
                                    right:-5*$length;
                                    top:-2*$length;
                                    @include fontStyle(12,16,500,#aaa,start);
                                }
                            }
                        }
                        .bottom-right{
                            cursor:pointer;
                            width:252*$length;
                            @include fontStyle(16,42,500,#fff,center);
                            background-color: $fontColor1;
                            border-radius: 4*$length;
                        }
                    }
                    .card-left{
                        height:126*$length;
                        width:224*$length;
                        border-radius: 10*$length;
                        overflow: hidden;
                        img{
                            height:100%;
                            width:auto;
                        }
                    }
                    .card-center{
                        height:126*$length;
                        width:624*$length;
                        @extend %flex-column-spb;
                        align-items: start;
                        h2{
                            @include fontStyle(32,43,500,#FF7600,start)
                        }
                        .card-center-info{
                            @extend %flex-row-spb;
                            justify-content: start;
                            .info-box1{
                                height:40*$length;
                                @extend %flex-row-spb;
                                justify-content: flex-start;
                                .photo-box{
                                    height:40*$length;
                                    width:40*$length;
                                    overflow: hidden;
                                    border-radius: 20*$length;
                                    & img{
                                        width:100%;
                                        height:auto;
                                    }
                                }
                                .name-position{
                                    height:40*$length;
                                    margin-left:12*$length;
                                    @extend %flex-column-spb;
                                    align-items: start;
                                    .name{
                                        @include fontStyle(14,19,500,#666,start)
                                    }
                                    .position{
                                        @include fontStyle(12,16,500,#aaa,start)
                                    }
                                }

                            }
                            .info-box2{
                                margin-left:45*$length;
                                .name{
                                    margin-right:5*$length;
                                    @include fontStyle(13,17,500,#666,start)

                                }
                                .value{
                                    margin-right:30*$length;
                                    @include fontStyle(13,17,500,#666,start)
                                }
                            }
                        }
                    }
                    .card-right{
                        width:252*$length;
                        height:126*$length;
                        @extend %flex-column-spb;
                        .button1{
                            cursor:pointer;
                            width:252*$length;
                            @include fontStyle(16,50,500,#fff,center);
                            background-color: $fontColor1;
                            border-radius: 4*$length;
                        }
                        .button2{
                            cursor:pointer;
                            width:252*$length;
                            @include fontStyle(16,50,500,$fontColor1,center);
                            background-color: $hoverColor2;
                            border-radius: 4*$length;
                        }
                    }
                }
            }
        }
        .class-detail-session2{
            width:1200*$length;
            margin:0 auto;
            margin-top:114*$length;
            margin-bottom:94*$length;
            @extend %flex-row-spb;
            align-items:start;
            .left{
                width:834*$length;
                height:auto;
                .tab{
                    width:342*$length;
                    height:auto;
                    padding-left:30*$length;
                    background-color: transparent;
                    @extend %flex-row-spb;
                    margin-bottom:12*$length;
                    .activeClass{
                        color:$fontColor1;
                        border-bottom:1px solid $fontColor1;
                        & span{
                            color:$fontColor1;
                        }
                    }
                    & p{
                        cursor:pointer;
                        @include fontStyle(16,31,500,#666,start);
                        border-bottom:1px solid transparent;
                        &:hover{
                            color:$fontColor1;
                            border-bottom:1px solid $fontColor1;
                            & span{
                                color:$fontColor1;
                            }
                        }
                        & span{
                            position: absolute;
                            right:-5*$length;
                            top:-2*$length;
                            @include fontStyle(12,16,500,#aaa,start);
                        }
                    }
                }
            }

            .right{
                width:282*$length;
                height:auto;
                .title{
                    @include fontStyle(14,19,500,#222,start);
                }
                .class-item{
                    width:282*$length;
                    height:63*$length;
                    cursor:pointer;
                    margin-top:18*$length;
                    background-color: transparent;
                    &:hover{
                        @include box-shadow(1px 1px 5px 1px rgba(0,0,0,.1));
                        background-color: #fff;
                    }
                    @extend %flex-row-spb;
                    .left-box{
                        width:112*$length;
                        border-radius:10*$length;
                        height:63*$length;
                        overflow: hidden;
                        & img{
                            width:100%;
                            height:auto;
                        }
                    }
                    .right-box{
                        width:158*$length;
                        height:63*$length;
                        @extend %flex-column-spb;
                        align-items: start;
                        .name{
                            @include fontStyle(12,22,500,#222,start);
                            height:auto;

                        }
                        .price{
                            @include fontStyle(12,18,500,#FF7600,start);

                        }
                    }
                }
            }
        }
    }
</style>
