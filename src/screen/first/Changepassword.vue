<template>
    <div id="changepassword" :style="{top:0.18*screenHeight+'px'}">
        <div class="changepassword-title">修改密码</div>
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
            <button>确认修改</button>
        </form>
        <div class="remainword">已记起密码 <span>去登录</span></div>
    </div>
</template>

<script>
export default {
  name: 'Changepassword',
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

    #changepassword {
        width: 612px;
        height: 420px;
        margin: 0 auto;
        background-color: #ffffff;
        @include box-shadow(1px 1px 10px 1px rgba(34,34,34,.1));
    }
    .changepassword-title {
        font-size: $f16;
        text-align: center;
        line-height: 52px;
        color: $mainColor;
    }
    #changepassword form input, p ,button {
        display: block;
        margin: 0 auto;
    }
    #changepassword form input {
        border-bottom: 1px solid rgba(70,83,155,.1) ;
        line-height: 40px;
        width: 300px;
    }
    #changepassword form p {
        font-size: $f10;
        color: red;
        width: 300px;
    }
    #changepassword form button {
        font-size: $f14;
        margin: 22px auto;
        width: 124px;
        height: 42px;
        color: #ffffff;
        border: none;
        border-radius: 4px;
        background-color: $mainColor;
    }
    #changepassword form div input {
        width: 220px;
        display: inline;
        border: none;
    }
    #changepassword form div {
        width: 300px;
        margin: 0 auto;
        border-bottom: 1px solid rgba(70,83,155,.1) ;
    }
    .havemsg {
        font-size: $f12;
        color: $mainColor;
    }
    .remainword {
        font-size: $f12;
        text-align: center;
    }
    .remainword span {
        color: $mainColor;
    }

</style>
