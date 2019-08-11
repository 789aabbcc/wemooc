<template>
  <div id="video-page-container">
       <div class="video-box">
           <custom-vedio ref="customVedio" v-on:child-video-listen="videoListen"></custom-vedio>
       </div>
      <div class="menu-box">
          <ul class="tab-box">
              <li>课程目录</li>
              <li>课程目录</li>
              <li>课程目录</li>
          </ul>
          <div class="bottom-container1">
             <div class="class-detail-item" v-for="(item,index) in 5" :key="index">
                 <p class="class-detail-item-left">
                     <span>1-1：课程整体介绍</span>
                     <span>（04:44）</span>
                 </p>
                 <div class="class-detail-item-right">
                     <el-progress type="circle" status="success" width="20" :percentage="50" show-text="false" color="#76CE66" ></el-progress>
                 </div>
             </div>

          </div>
      </div>
      <!-- 收缩手柄 start -->
      <div class="handle"  @click="isShow=!isShow">
          <Icon type="ios-arrow-right" class="icon" :class="isShow?'toright':'toleft'"></Icon>
      </div>
      <!-- 收缩手柄 end -->
  </div>
</template>
<script>
import CustomVedio from '../../components/video/video-play-com'
export default {
  name: 'class-video',
  components: {
    CustomVedio
  },
  data() {
    return {
      playerListCurrentIndex: 0, // 当前播放位置
      isShow: true, // 侧边栏是否显示
      isBottomCtrlShow: false // 底部控制栏是否显示
    }
  },
  mounted() {
    // window.innerHeight
    //  var wh = document.documentElement.clientHeight;
    var wh = window.innerHeight
    var top = 72
    var ch = (wh - top) + 'px'
    document.getElementById('video-page-container').style.height = ch
  },
  methods: {
    // 监听子组件，播放器传过来的数据
    videoListen(data) {
      console.log('data', data)
    },
    // 播放列表点击
    playerListClick(index) {
      this.playerListCurrentIndex = index
      this.next()
    },
    // 鼠标移到视频上方，控制出现，隔5s之后消失
    videoMouseOver() {
      this.isBottomCtrlShow = true
      var _this = this
      setTimeout(function() {
        _this.isBottomCtrlShow = false
      }, 3000)
    },
    // 播放下一个视频
    next() {
      this.$refs.customVedio.next([
        {
          type: 'video/mp4',
          src: 'http://vjs.zencdn.net/v/oceans.mp4'
        }
      ])
    }
  }

}
</script>
<style scoped  lang="scss" >
    @import '../../common/sass/base';
    #video-page-container{
        width:100%;
        @extend %flex-row-spb;
        align-items: start;
        .video-box{
            height:100%;
            flex: 1;
            box-sizing:border-box;
            position: relative;
            .video-player-box{
                height: 100% !important;
                width: 100% !important;
            }
        }
        .menu-box{
            height:100%;
            width:448*$length;
            position: relative;
            overflow: hidden;
            background-color: #fff;
            .tab-box{
                height:64*$length;
                width:100%;
                @extend %flex-row-center;
                background-color: #AAAAAA;
                & li{
                    width:82*$length;
                    @include fontStyle(16,21,500,rgba(255,255,255,.4),center);
                    cursor:pointer;
                    &:hover{
                        color:#fff;
                    }
                }
            }
            .bottom-container1{
                width:100%;
                background-color: #fff;
                height:100%;
                padding-top:25*$length;
                padding-bottom:50*$length;
                .class-detail-item{
                    cursor:pointer;
                    width:416*$length;
                    margin:0 auto;
                    margin-top:5*$length;
                    height:42*$length;
                    background-color: transparent;
                    &:hover{
                        background-color: rgba(70,83,155,.06);
                    }
                    @extend %flex-row-spb;
                    .class-detail-item-left{
                        padding-left: 14*$length;
                    }
                    .class-detail-item-right{
                        padding-right: 14*$length;
                    }
                }
            }
            .bottom-container2{
                width:100%;
                background-color: #fff;
                height:100%;
                padding-top:25*$length;
                padding-bottom:50*$length;
            }
        }
    }

</style>
