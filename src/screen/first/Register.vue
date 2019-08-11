<template>
  <div id="register" :style="{top:0.19*screenHeight+'px'}">
    <div class="logoshow">
      <img src="../../components/page-header/logo.png" height="56" width="56"/>
      <p>微慕课</p>
    </div>
    <div id="regwork">
      <div class="regworktitle">注册</div>
      <form action="">
        <input type="text" placeholder="请输入手机号码">
        <p>您输入的手机号码格式有误</p>
        <div class="msg">
          <input type="text" placeholder="请输入手机验证码">
          <span class="havemsg">获取验证码</span>
        </div>
        <p>您输入的验证码有误</p>
        <input type="text" placeholder="请输入新的密码">
        <p>请在下方输入与之一致的密码</p>
        <input type="text" placeholder="请再次输入新的密码">
        <p>两次输入的密码不一致</p>
        <button>注册</button>
      </form>
      <div class="alreadyhave">已有账号 <span>去登录</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
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
    window.onresize = function() { // 定义窗口大小变更通知事件
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

  #register {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    width: 996px;
    height: 420px;
    border-radius: 10px;
    overflow: hidden;
    background-color: #ffffff;
    @include box-shadow(1px 1px 10px 1px rgba(34,34,34,.1));

  }
  .logoshow {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 384px;
    height: 420px;
    background-color: $mainbgColor;
  }
  .logoshow p {
    font-size: $f16;
    color: #ffffff;
    margin-top: 20px;
  }
  #regwork {
    width: 612px;
  }
  .regworktitle {
    font-size: $f16;
    text-align: center;
    line-height: 52px;
    color: $mainColor;
  }
  #regwork form input, p ,button {
    display: block;
    margin: 0 auto;
  }
  #regwork form input {
    border-bottom: 1px solid rgba(70,83,155,.1) ;
    line-height: 40px;
    width: 300px;
  }
  #regwork form p {
    font-size: $f10;
    color: red;
    width: 300px;
  }
  #regwork form button {
    font-size: $f14;
    margin: 22px auto;
    width: 124px;
    height: 42px;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    background-color: $mainColor;
  }
  #regwork form div input {
    width: 220px;
    display: inline;
    border: none;
  }
  #regwork form div {
    width: 300px;
    margin: 0 auto;
    border-bottom: 1px solid rgba(70,83,155,.1) ;
  }
  .havemsg {
    font-size: $f12;
    color: $mainColor;
  }
  .alreadyhave {
    font-size: $f12;
    text-align: center;
  }
  .alreadyhave span {
    color: $mainColor;
  }

</style>
