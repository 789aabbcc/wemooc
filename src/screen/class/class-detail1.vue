<template>
    <div class="class-detail-container ">
        <div class="class-detail-session1">
            <div class="class-detail-session1-center">
                <div class="top">
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
                <div class="bottom">
                    <div class="card-top">
                        <div class="top-left">
                            <img src="https://img.mukewang.com/5c760767084b92ce06000338-240-135.jpg" alt="">
                            <p class="abs">热门</p>
                        </div>
                        <div class="top-right">
                            <p class="title">ViewPager+Tab特效实现微信主界面</p>
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
                            <div class="rate-box">
                                <el-rate
                                        v-model="rateValue"
                                        disabled
                                        show-score
                                        text-color="#ff9900"
                                >
                                </el-rate>
                            </div>
                        </div>
                    </div>
                    <div class="card-bottom">
                        <div class="bottom-left">
                            <router-link to="/class-detail/free/detail" exact-active-class="activeClass" tag="p" exact>课程详情</router-link>
                            <router-link to="/class-detail/free/index" exact-active-class="activeClass" tag="p" exact>课程目录</router-link>
                            <router-link to="/class-detail/free/comment" exact-active-class="activeClass" tag="p" exact>用户评价<span>9</span></router-link>
                        </div>
                        <router-link tag="li" exact-active-class="activeClass" to="/class-detail/video"><p class="bottom-right">开始学习</p></router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="class-detail-session2">
            <transition name="router-fade" mode="out-in">
                <router-view :key="activeDate"></router-view>
            </transition>
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
        name:'class-detail-free',
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
            @include bgImage('./class-bg-free.png');
            background-image:url("./mask.png"), url("./class-bg-free.png");
            margin: 0 auto;
            .class-detail-session1-center{
                position:absolute;
                top:0;
                left:0;
                right:0;
                margin:0 auto;
                height:354*$length;
                width:1200*$length;
                .top{
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
                .bottom{
                    background-color: #fff;
                    width:1200*$length;
                    height:286*$length;
                    border-radius: 10*$length;
                    overflow: hidden;
                    @include box-shadow(1px 1px 15px 1px rgba(0,0,0,.1));
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
                        .bottom-right{
                            cursor:pointer;
                            width:252*$length;
                            @include fontStyle(16,42,500,#fff,center);
                            background-color: $fontColor1;
                            border-radius: 4*$length;
                        }
                    }
                }
            }
        }
        .class-detail-session2{
            width:1200*$length;
            margin:0 auto;
            margin-top:94*$length;
            margin-bottom:94*$length;
            @extend %flex-row-spb;
            align-items:start;
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
