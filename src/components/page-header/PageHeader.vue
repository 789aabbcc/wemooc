<template>
    <div class="header-container">
        <div class="header-center">
            <div class="left">
                <div class="logo"></div>
                <router-link tag="h1" class="wordL" to="/">微慕课</router-link>
                <ul>
                    <router-link tag="li" exact-active-class="activeClass" to="/">首页</router-link>
                    <router-link tag="li" exact-active-class="activeClass" to="/class/free">免费课程</router-link>
                    <router-link tag="li" exact-active-class="activeClass" to="/class/pay">付费课程</router-link>

                </ul>
            </div>
            <div class="right">
                <div class="login">
                    <router-link tag="span"  to="/login">登录</router-link>
                    <p></p>
                    <router-link tag="span"  to="/register">注册</router-link>

                </div>
                <div class="search">
                    <input
                            class="search-input"
                            placeholder="请输入想搜索的内容"
                            v-model="search" />

                    <i class=" el-icon-search search-input-icon" ></i>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                search: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../common/sass/base.scss';
    .header-container {
        position: fixed;
        z-index: $index5;
        height: 72*$length;
        width:100%;
        top:0;
        background-color: #fff;
        font-size: 0;
        @include box-shadow(1px 1px 10px 1px $hoverColor1);
        .header-center{
            width:1200*$length;
            margin:0 auto;
            height:100%;
            .left{
                float:left;
                @extend %clearFix;
                .logo{
                    float:left;
                    margin-top:21*$length;
                    @include bgImage('./logo.png');
                    width:30*$length;
                    height:30*$length;
                }
                .wordL{
                    float:left;
                    margin-left:10*$length;
                    width:60*$length;
                    @include fontStyle(16,72,500,$fontColor1,start)

                }
                & ul{
                    float:left;
                    margin-left:80*$length;
                    width:500*$length;
                    height:72*$length;
                    @extend %inlineBlockV;
                    & li{
                        cursor:pointer;
                        display: inline-block;
                        margin-right:40*$length;
                        width:60*$length;
                        border-bottom:1px solid transparent;
                        vertical-align: middle;
                        @include fontStyle(14,30,500,#666,center);


                        &:hover{
                            border-bottom:1px solid $fontColor1;
                        }
                    }
                    .activeClass{
                        border-bottom:1px solid $fontColor1;
                    }
                }

            }
            .right{
                float:right;
                @extend %clearFix;
                .login{
                    float:right;
                    height:72*$length;
                    width:80*$length;
                    & span{
                        cursor:pointer;
                        display: inline-block;
                        width:36*$length;
                        @include fontStyle(14,72,500,#666,center);
                        vertical-align: middle;
                        &:hover{
                            color:$fontColor1
                        }
                    }
                    & p{
                        width:4*$length;
                        height:20*$length;
                        display: inline-block;
                        vertical-align: middle;
                        @include bgImage('./line.png')
                    }
                }
                .photo{}
                .message{
                    float:right;
                    width:40*$length;
                    @include fontStyle(14,72,500,#666,center);
                }
                .shop{
                    float:right;
                    width:40*$length;
                    @include fontStyle(14,72,500,#666,center);
                }
                .search{
                    float:right;
                    height:72*$length;
                    @extend %inlineBlockV;
                    margin-right:50*$length;
                    .search-input{
                        display: inline-block;
                        vertical-align: middle;
                        padding-left:30*$length;
                        width:210*$length;
                        height:36*$length;
                        color:#aaa;
                        font-size:12*$font-size;
                        border:1px solid #EBEBEB;
                        border-radius:18*$length;
                        &:focus{
                            border:1px solid $hoverColor1;
                        }

                    }
                    .search-input-icon{
                        display: inline-block;
                        vertical-align: middle;
                        cursor:pointer;
                        position: absolute;
                        right:0;
                        top:28*$length;
                        width:36*$length;
                        height:36*$length;
                        font-size:18*$font-size;
                    }
                }

            }
        }
    }
</style>
