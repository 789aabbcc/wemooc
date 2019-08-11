<template>
    <div class="class-container ">
        <div class="class-session1">
            <div class="top">
                <span class="title">方向：</span>
                <span class="item" v-for="item in menuItems">{{item}}</span>
            </div>
            <div class="bottom">
                <span class="title">分类：</span>
                <span class="item" v-for="item in menuItems2">{{item}}</span>
            </div>
        </div>
        <div class="class-session2">
            <div class="label-box">
                <div class="left">
                    <span class="item">综合</span>
                    <span class="item">最新</span>
                    <span class="item">最热</span>
                    <span class="item">销量</span>
                </div>
                <div class="right">
                    <span class="item">全部</span>
                    <span class="item">入门</span>
                    <span class="item">初级</span>
                    <span class="item">中级</span>
                    <span class="item">高级</span>
                </div>
            </div>
            <div class="long-box">
                <ClassItem1 type="pay" v-for='(item,index) in 5' :key="index"></ClassItem1>
            </div>
            <div class="long-box">
                <ClassItem1 type="pay" v-for='(item,index) in 5' :key="index"></ClassItem1>
            </div>
            <div class="pagination">
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="100">
                </el-pagination>
            </div>

        </div>
    </div>
</template>

<script>
    import ClassItem1 from 'components/class/ClassItem1'
    export default {
        name:'class',
        data() {
            return {
                menuItems: [
                    '前端开发', '后端开发', '移动开发', '算法&大数据', '运维&测试', '前沿技术', 'UI&设计'
                ],
                menuItems2: [
                    '前端开发', '后端开发', '移动开发', '算法&大数据', '前端开发', '后端开发', '移动开发', '算法&大数据', '前端开发', '后端开发', '移动开发', '算法&大数据', '运维&测试', '前沿技术', 'UI&设计'
                ]
            }
        },
        components: {
            ClassItem1
        }
    }
</script>

<style lang="scss" scoped>
    @import 'common/sass/base.scss';
    .class-container{
        width:100%;
        .class-session1{
            width:1200*$length;
            margin:0 auto;
            .top{
                width:100%;
                overflow-wrap: break-word;
                line-height: 74*$length;
                min-height: 74*$length;
                border-bottom: 1px solid $hoverColor2;
                .title{
                    @include fontStyle(14,74,500,#222,start);
                }
                .item{
                    cursor:pointer;
                    margin-left:40*$length;
                    @include fontStyle(14,74,500,#666,start);
                    &:hover{
                        color:$fontColor1;
                    }
                }
            }
            .bottom{
                width:100%;
                line-height: 74*$length;
                min-height: 74*$length;
                overflow-wrap: break-word;
                .title{
                    @include fontStyle(14,74,500,#222,start);
                }
                .item{
                    cursor:pointer;
                    margin-left:40*$length;
                    @include fontStyle(14,74,500,#666,start);
                    &:hover{
                        color:$fontColor1;
                    }
                }
            }
        }
        .class-session2{
            overflow: hidden;
            background-color: #F5F9FF;
            padding-bottom: 300*$length;
            .label-box{
                margin:0 auto;
                margin-top:45*$length;
                margin-bottom:28*$length;
                width:1200*$length;
                @extend %flex-row-spb;
                .left{
                    width:200*$length;
                    @extend %flex-row-spb;
                    .item{
                        cursor:pointer;
                        @include fontStyle(14,28,500,#666,start);
                        &:hover{
                            color:$fontColor1
                        }
                    }
                }
                .right{
                    width:250*$length;
                    @extend %flex-row-spb;
                    .item{
                        cursor:pointer;

                        @include fontStyle(14,28,500,#666,start);
                        &:hover{
                            color:$fontColor1
                        }
                    }
                }
            }
            .long-box{
                margin:0 auto;
                width:1200*$length;
                height:auto;
                @extend %flex-row-spb;
                margin-top: 8*$length;
            }
            .pagination{
                width:100%;
                margin-top: 220*$length;
                @extend %flex-row-center;
            }
        }
    }
</style>
