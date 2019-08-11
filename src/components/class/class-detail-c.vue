<template>
    <div class="left3">
        <div class="left3-card">
            <div class="rate-box">
                <div class="left-box">
                    <span>评分</span>
                    <div class="rate-tool">
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
        </div>
        <div  class="left3-card">
            <div class="comment-box">
                <div class="top-box">
                    <span>评分</span>
                    <div class="rate-tool">
                        <el-rate
                                v-model="rateValue"
                                disabled
                                show-score
                                text-color="#ff9900"
                        >
                        </el-rate>
                    </div>
                </div>
                <div class="middle-box">
                    <div class="photo-box">
                        <img src="http://39.104.201.80/yunding/M00/00/0D/rBjuW11BUcyAUgLQAAFgsAcwQyo974.png" alt="">
                    </div>
                    <textarea class="comment-textarea">

                         </textarea>
                </div>
                <div class="bottom-box">
                    <p class="submit">发表评价</p>
                </div>
            </div>
        </div>
        <div class="left3-card">
            <div class="comment-detail-box">
                <div class="comment-detail-item">
                    <div class="photo-box">
                        <img src="http://39.104.201.80/yunding/M00/00/0D/rBjuW11BUcyAUgLQAAFgsAcwQyo974.png" alt="">
                    </div>
                    <div class="info-box">
                        <div class="info-box-top">
                            <div class="info-box-top-left">
                                <span>鹿哥</span>
                                <div class="rate-tool">
                                    <el-rate
                                            v-model="rateValue"
                                            disabled
                                            show-score
                                            text-color="#ff9900"
                                    >
                                    </el-rate>
                                </div>
                            </div>
                            <p class="info-box-top-right">
                                2018-09-25
                            </p>
                        </div>
                        <div class="info-box-bottom">
                            内容很完整，对weiUI的有了一个更清晰的操作流程，对于基础不是很好的人来说，很实用！很仔细很耐心的看完所有视频，自己的收益比较大！
                        </div>
                    </div>
                </div>
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

    .left3{
        width:894*$length;
        height:auto;
        .left3-card {
            width: 834*$length;
            height: auto;
            padding: 30*$length;
            background-color: #fff;
            margin-bottom: 12*$length;
            .rate-box{
                @extend %flex-row-spb;
                .left-box{
                    @extend %flex-row-spb;
                    justify-content: start;
                    & span{
                        @include fontStyle(14,19,500,#222,start);
                    }
                    .rate-tool{
                        margin-left:10*$length;
                    }
                }
                .right-box{
                    cursor:pointer;
                    @include fontStyle(14,19,500,$fontColor1,start);
                }
            }
            .comment-box{
                .top-box{
                    @extend %flex-row-spb;
                    justify-content: start;
                    & span{
                        @include fontStyle(14,19,500,#222,start);
                    }
                    .rate-tool{
                        margin-left:10*$length;
                    }
                }
                .middle-box{
                    margin-top:22*$length;
                    @extend %flex-row-spb;
                    align-items:start;
                    .photo-box{
                        width:40*$length;
                        height:40*$length;
                        border-radius: 20*$length;
                        overflow: hidden;
                        & img{
                            width:100%;
                            height:auto;
                        }

                    }
                    .comment-textarea{
                        width:744*$length;
                        padding:20*$length;
                        height:80*$length;
                        background-color: transparent;
                        border:1px solid #EAEAEA;
                        &:focus{
                            border:1px solid $hoverColor1;
                        }

                    }

                }
                .bottom-box{
                    @extend %flex-row-spb;
                    justify-content: flex-end;
                    margin-top:16*$length;
                    .submit{
                        cursor:pointer;
                        width:166*$length;
                        background-color: $fontColor1;
                        border-radius:4*$length;
                        @include fontStyle(14,42,500,#fff,center)
                    }
                }

            }
            .comment-detail-box{
                .comment-detail-item{
                    @extend %flex-row-spb;
                    align-items: start;
                    margin-bottom:18*$length;
                    border-bottom:1px solid $hoverColor2;
                    .photo-box{
                        width:40*$length;
                        height:40*$length;
                        border-radius: 20*$length;
                        overflow: hidden;
                        & img{
                            width:100%;
                            height:auto;
                        }

                    }
                    .info-box{
                        width:782*$length;
                        @extend %flex-column-spb;
                        align-items: start;
                        .info-box-top{
                            width:100%;
                            @extend %flex-row-spb;
                            .info-box-top-left{
                                @extend %flex-row-spb;
                                justify-content: start;
                                @include fontStyle(12,16,500,#666,start);
                                & span{
                                }
                                .rate-tool{
                                    margin-left:10*$length;
                                }
                            }
                            .info-box-top-right{
                                @include fontStyle(12,16,500,#999,start);
                            }
                        }
                        .info-box-bottom{
                            margin-top:10*$length;
                            margin-bottom:10*$length;
                            @include fontStyle(14,22,500,#222,start);
                            height:auto;
                        }
                    }
                }
            }
        }
    }
</style>
