<!-- 单个订单支付页面 -->
<template>
  <div>
    <single-result v-if="ShowResult" v-bind:msg="result"></single-result>
    <div class="single-order">
      <div class="orderID">订单：{{orderNumber}}</div>
      <div class="white"></div>
      <!-- 购买的课程列表 -->
      <div class="course" v-for="order in list">
        <img :src="order.courseImg" alt />
        <ul>
          <div class="course-dsc">{{order.courseDsc}}</div>
          <div class="course-price">￥{{order.coursePrice}}</div>
        </ul>
      </div>
      <!-- 支付方式 -->
      <div class="pay-method">
        <ul>
          <a href="javascript:;">
            <li id="pay-zfb" @click="zfbOnclick" v-bind:class="shows == true?'pay-click':''">
              <img src="../../components/single-order/zfb.png" alt />
            </li>
          </a>
          <a href="javascript:;">
            <li id="pay-wx" @click="wxOnclick" v-bind:class="shows == false?'pay-click':''">
              <img src="../../components/single-order/wx.png" alt />
            </li>
          </a>
        </ul>
      </div>
      <!-- 支付结果 -->
      <div class="pay-amount">
        <div class="pay-amounta">应付金额：</div>
        <div class="amount">￥{{add()}}</div>
        <div class="noPayment" @click="open">取消订单</div>
        <div href="javascript:;" class="payment" @click="PayBtn">立即支付</div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scope>
@import "../../common/sass/base.scss";

// 把滚动条隐藏了，只兼容
::-webkit-scrollbar {
  display: none;
}
.single-order {
  width: 1198 * $length;
  background-color: #ffffff;
  border: 1 * $length solid #eaeaea;
  margin: 0 auto;
  margin-top: 30 * $length;
  @include border-radius(10 * $length);
}

.orderID {
  height: 26 * $length;
  width: 1070 * $length;
  border-bottom: 1 * $length solid rgba(70, 83, 155, 0.1);
  margin: 0 auto;
  padding-left: 10 * $length;
  padding-top: 27 * $length;
}

.white {
  width: 1119 * $length;
  height: 10 * $length;
  background-color: #fff;
}

.course {
  width: 1078 * $length;
  height: 122 * $length;
  background-color: #fff;
  border: 1 * $length solid #eaeaea;
  margin: 0 auto;
  margin-top: 20 * $length;
  overflow: hidden;
  cursor: pointer;
}

.course img {
  margin-top: 30 * $length;
  margin-left: 30 * $length;
  float: left;
}
.course ul {
  height: 63 * $length;
  margin-left: 18 * $length;
  margin-top: 30 * $length;
  float: left;
  font-size: 16 * $length;
}
.course-dsc {
  height: 21 * $length;
  text-align: center;
}
.course-price {
  height: 21 * $length;
  margin-top: 15 * $length;
  color: #ff7600;
}
.pay-method {
  height: 131 * $length;
  width: 1080 * $length;
  margin: 0 auto;
  border-bottom: 1 * $length solid rgba(70, 83, 155, 0.1);
  overflow: hidden;
  & li {
    float: left;
    width: 178 * $length;
    height: 70 * $length;
    @include border-radius(10 * $length);
    border: 1 * $length solid #eaeaea;
    margin-left: 10 * $length;
    margin-top: 30 * $length;
    margin-right: 40 * $length;
  }
}

.pay-method a li img {
  display: block;
  width: 100 * $length;
  height: 30 * $length;
  // background-image: url(../imges/zfb.png) no-repeat;
  margin: 0 auto;
  margin-top: 21 * $length;
}

.pay-method li:hover {
  border: 1 * $length solid #46539b;
}

.pay-method .pay-click {
  border: 1 * $length solid #46539b;
}

.pay-amount {
  height: 106 * $length;
  width: 1080 * $length;
  margin: 0 auto;
  overflow: hidden;
}

.pay-amounta {
  text-align: center;
  height: 19 * $length;
  float: left;
  line-height: 19 * $length;
  margin-top: 22 * $length;
  margin-left: 10 * $length;
}
.amount {
  width: 113 * $length;
  height: 32 * $length;
  font-size: 24 * $length;
  color: #ff7600;
  float: left;
  line-height: 32 * $length;
  margin-top: 15 * $length;
}
.noPayment {
  float: left;
  text-align: center;
  height: 19 * $length;
  margin-left: 649 * $length;
  margin-top: 45 * $length;
  font-size: 14 * $length;
  color: #aaaaaa;
  cursor: pointer;
}
.payment {
  float: right;
  width: 142 * $length;
  height: 42 * $length;
  background-color: #46539b;
  @include border-radius(4 * $length);
  line-height: 42 * $length;
  text-align: center;
  color: #ffffff;
  margin-top: 20 * $length;
  cursor: pointer;
}
.noPayment:hover,
.noPayment:visited {
  color: $fontColor1;
}
</style>

<script>
import { constants } from "crypto";
import SingleResult from "../../components/single-order/order-result";

export default {
  data() {
    return {
      shows: "shows",
      ShowResult: false,
      result: "fail",
      dialogVisible: false,
      orderNumber: 1904141725526569,
      // TODO将测试数据清空
      list: [
        {
          courseImg:
            "https://yun-recruit.oss-cn-beijing.aliyuncs.com/course2.png",
          courseDsc: "前端工程师晋升课程Vue全家桶+SSR+Koa2全栈开发美团网",
          coursePrice: 199
        },
        {
          courseImg:
            "https://yun-recruit.oss-cn-beijing.aliyuncs.com/course2.png",
          courseDsc: "前端工程师晋升课程Vue全家桶+SSR+Koa2全栈开发美团网",
          coursePrice: 288
        },
        {
          courseImg:
            "https://yun-recruit.oss-cn-beijing.aliyuncs.com/course1.png",
          courseDsc: "精讲Java定时任务框架Elastic - Job和Quartz",
          coursePrice: 377
        },
        {
          courseImg:
            "https://yun-recruit.oss-cn-beijing.aliyuncs.com/course1.png",
          courseDsc: "精讲Java定时任务框架Elastic - Job和Quartz",
          coursePrice: 466
        }
      ]
    };
  },

  components: {
    SingleResult: SingleResult
  },

  computed: {},

  mounted: {
    // TODO获取页面需要的数据
  },

  methods: {
    // 支付宝按钮点击效果
    zfbOnclick() {
      this.shows = true;
    },
    // 微信按钮点击效果
    wxOnclick() {
      this.shows = false;
    },
    // 如果没有选择支付方式提示效果
    warning() {
      this.$message({
        message: "请选择支付方式",
        type: "warning"
      });
    },
    PayBtn() {
      // 点击立即支付按钮之后的判断
      if (this.shows == "shows") {
        this.warning();
      } else {
        // TODO这儿需要请求后台返回支付结果的参数 result=success弹出成功，fail失败
        this.ShowResult = true;
        this.result = "success";
      }
    },
    // 取消订单提示
    open() {
      this.$confirm("此操作将取消订单, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "取消订单成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消订单终止！"
          });
        });
    },
    // 计算总价格的函数
    add() {
      let sum = 0;
      this.list.forEach(item => {
        sum += item.coursePrice;
      });
      return this.toDecimal2((this.sum = sum));
    },
    // 保留小数点后两位函数
    toDecimal2(x) {
      let f = Math.round(x * 100) / 100;
      let s = f.toString();
      let rs = s.indexOf(".");
      if (rs < 0) {
        rs = s.length;
        s += ".";
      }
      while (s.length <= rs + 2) {
        s += "0";
      }
      return s;
    }
  }
};
</script>