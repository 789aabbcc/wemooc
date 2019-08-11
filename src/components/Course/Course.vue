<template>

    <div id="coursesimply">


        <div class="course-indroduce">
            <div class="course-left">
                <div class="course-img">
                    <img src="../../common/images/default.png" height="100%" width="100%"/>
                </div>

                <div class="course-tp">
                    <div class="course-title">
                        ViewPager+Tab特效实现微信主界面
                        <span class="course-progress">（已完结）</span>
                    </div>

                    <div class="course-progress-precent">
                        <span class="precent">已学44%</span>
                        <span class="chapter">学习至3-2banner设计</span>
                    </div>
                </div>

            </div>
            <div class="course-db">
                <div class="delete">
                    <img src="../../common/images/delete.png" height="100%" width="100%"/>
                </div>
                <div class="startstudy">继续学习</div>
            </div>
        </div>


    </div>

</template>

<script>
  export default {
    name: 'Course',
  }
</script>

<style lang="scss" scoped>

    #coursesimply {
        width: 874px;
        margin: 0 auto;
        padding-top: 18px;
        padding-bottom: 18px;
        border-bottom: 1px solid rgba(70,83,155,.1);
    }
    .course-img {
        width: 224px;
        height: 126px;
        overflow: hidden;
        background-color: red;
        border-radius: 10px 10px 0 0 ;
    }
    .course-title {
        font-size: 16px;
        color: #222222;
    }
    .course-progress {
        font-size: 14px;
        color: #999999;
    }
    .chapter {
        margin-left: 30px;
    }
    .course-progress-precent .precent, .chapter {
        font-size: 14px;
        color: #999999;
    }
    .delete {
        width: 14px;
        height: 14px;
        overflow: hidden;
    }
    .startstudy {
        width: 100px;
        line-height: 42px;
        text-align: center;
        border-radius: 4px;
        color: #ffffff;
        font-size: 14px;
        background-color: #46539B;
        cursor: pointer;
    }
    .course-indroduce {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .course-left {
        display: flex;
        flex-direction: row;
    }
    .course-tp, .course-db {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .course-tp {
        margin-left: 10px;
    }
    .course-db {
        align-items: flex-end;
    }

</style>
