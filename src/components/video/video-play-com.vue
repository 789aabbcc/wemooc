<template>
    <div class="custom-video-outer-box" @mouseover="videoMouseOver" @mouseleave="hideBottomShowCtrl">
        <d-player :options="options"
                  @play="play"
                  ref="player"
                  class="video-player-box"
        >
        </d-player>
    </div>
</template>

<script>
import 'vue-dplayer/dist/vue-dplayer.css'
export default {
  data() {
    return {
      options: {
        video: {
          url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4',
          pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg'
        },
        autoplay: false,
        contextmenu: [
          // {
          //   text: 'GitHub',
          //   // link: 'https://github.com/MoePlayer/vue-dplayer'
          // }
        ]
      },
      player: null
    }
  },
  mounted() {
    this.player = this.$refs.player.dp
  },
  methods: {
    play() {
      console.log('play callback')
    },
    switchHandle() {
      this.player.switchVideo({
        url: 'http://static.smartisanos.cn/common/video/video-jgpro.mp4'
      })
    }
  },
}
</script>

<style lang="scss">
    /*@import "../../../node_modules/video.js/dist/video-js.css";*/
    /*@import '../../../node_modules/vue-video-player/src/custom-theme.css';*/
    @import "../../common/sass/base";

    .custom-video-outer-box{
        position: relative;
        height: 100%;
        width: 100%;
        background-color: #000;
        .video-player-box{
            height: 100% !important;
            width: 100% !important;
        }
    }
    video{
        max-height: 100% !important;

    }

</style>
