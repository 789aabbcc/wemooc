<!-- 订单支付结果页面 -->
<template>
  <div id="o">
    <div id="overlay"></div>
    <div id="win">
      <div v-bind:class="msg == 'fail'?'win-result1':'none'">支付失败</div>
      <div v-bind:class="msg == 'success'?'win-result2':'none'">支付成功</div>
      <div class="win-jump">
        {{time}}s 后自动前往支付中心
        <!-- TODO 跳转路径 -->
        <router-link to="/rank" style="color: #46539b;">点击跳转</router-link>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scope>
@import "../../common/sass/base.scss";
// 支付之后的成功失败弹窗
#o {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100000;
}
#overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  opacity: 0.3;
  filter: alpha(opacity=30);
  z-index: 100000;
}
#win {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 458 * $length;
  height: 238 * $length;
  background: #fff;
  margin-left: -230 * $length;
  margin-top: -119 * $length;
  color: #666666;
  @include border-radius(10 * $length);
  z-index: 100001;
}

.none {
  display: none;
}

.win-result1 {
  position: absolute;
  width: 80 * $length;
  height: 27 * $length;
  margin-left: 190 * $length;
  margin-top: 76 * $length;
  z-index: 3;
  font-size: 20 * $length;
  color: #eb5f5f;
  line-height: 27 * $length;
}
.win-result2 {
  position: absolute;
  width: 80 * $length;
  height: 27 * $length;
  margin-left: 190 * $length;
  margin-top: 76 * $length;
  z-index: 3;
  font-size: 20 * $length;
  color: #76ce66;
  line-height: 27 * $length;
}
.win-jump {
  position: absolute;
  width: 208 * $length;
  height: 19 * $length;
  z-index: 100002;
  margin-left: 128 * $length;
  margin-top: 120 * $length;
  font-size: 14 * $length;
}
</style>
<script>
export default {
  data() {
    return {
      time: 0
    };
  },

  props: ["msg"],

  methods: {
    countDown() {
      let THIS = this;
      THIS.time--;
    }
  },
  mounted() {
    let THIS = this;
    THIS.time = 6;
    setInterval(THIS.countDown, 1000);
  },
  watch: {
    time: function(newVal, oldVal) {
      if (newVal == 0) {
        // TODO修改跳转路径
        this.$router.push({ path: "/rank" });
      }
    }
  }
};
</script>