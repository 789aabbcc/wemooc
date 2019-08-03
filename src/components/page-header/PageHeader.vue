<template>
    <div class="header-container">
        <div class="header-center">
            <div class="left">
                <div class="logo"></div>
                <h1 class="wordL">微慕课</h1>
                <ul>
                    <li>首页</li>
                    <li>免费</li>
                    <li>付费课程</li>
                </ul>
            </div>
            <div class="right">
                <div class="login">
                    <span>登录</span>
                    <p></p>
                    <span>注册</span>
                </div>
                <div class="icon-message  message"></div>
                <div class="icon-buy-car  shop"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
    @import '../../common/sass/base.scss';
    .header-container {
        position: fixed;
        height: 72*$length;
        width:100%;
        top:0;
        background-color: #fff;
        font-size: 0;
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
                    width:400*$length;
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
                .search{}

            }
        }
    }
</style>
