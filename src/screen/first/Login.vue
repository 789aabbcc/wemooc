<template>
      <div id="login" :style="{top:0.3*screenHeight+'px'}">
        <div class="login-title">密码登录</div>

        <form action="">
          <input type="text" placeholder="手机号">
          <input type="text" placeholder="密码">
          <button>登录</button>
        </form>

        <div class="jump">
          没有账号去 <a href="">注册</a>
        </div>

      </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      screenHeight: document.documentElement.clientHeight // 屏幕高度
    }
  },
  watch: {
    'screenHeight': function(val) { // 监听屏幕高度变化
      let oIframe = document.getElementById('maindiv')
      oIframe.style.height = (Number(val) - 40) + 'px'
    }
  },
  mounted() {
    let _this = this
    window.onresize = function () { // 定义窗口大小变更通知事件
      _this.screenHeight = document.documentElement.clientHeight // 窗口高度
    }
    console.log(this.screenHeight)
  }
}

</script>

<style lang="scss" scoped>
  @import "../../common/sass/base.scss";
  @import "../../common/sass/common.scss";
  @import "../../common/sass/yuanyuanyao.scss";
  #login {
    width: 520px;
    height: 334px;
    border-radius: 10px;
    margin-top: -72px;
    margin-left: auto;
    margin-right: auto;
    background-color: #ffffff;
  }
  .login-title {
    text-align: center;
    line-height: 52px;
    color: $mainColor;
    font-size: $f16;
  }
  #login form input {
    display: block;
    margin: 16px auto 0;
    width: 300px;
    border-bottom: 1px solid rgba(70,83,155,.1) ;
    line-height: 52px;
    color: $noshowColor;
    box-sizing: border-box;
    padding: 0 10px;
  }
  #login form button {
    display: block;
    width: 124px;
    line-height: 42px;
    margin: 44px auto 26px ;
    background-color: #46539B;
    border: none;
    color: #ffffff;
    border-radius: 4px;
  }
  .jump {
    font-size: $f12;
    color: $noshowColor;
    text-align: center;
  }
  .jump a {
    color: $mainColor;
    text-align: center;
  }

</style>
