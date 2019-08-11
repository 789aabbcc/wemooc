<template>

    <div id="oneorder">
        <div class="oneorder-left">
            <div class="oneorder-img">
                <img src="../../common/images/default.png" height="100%" width="100%"/>
            </div>
            <div class="oneorder-intro">
                <div class="oneorder-intro-title">
                    全面系统Python3入门+进阶课程
                </div>
                <div class="oneorder-intro-ifo">
                    <span class="oneorder-intro-ifo-num">订单编号：16383649374</span>
                    <span class="oneorder-intro-ifo-time">2019-04-13 12:34:45</span>
                </div>
            </div>
        </div>
        <div class="oneorder-right">

            <div class="order-money">¥399.00</div>
<!--            <div class="order-status-have">已完成</div>-->
<!--            <div class="order-status-no">已失效</div>-->
                <div class="order-status-ing">
                    <div class="order-status-ing-goto">去支付</div>
                    <div class="order-status-ing-cancel">取消订单</div>
                </div>


        </div>
    </div>

</template>

<script>
  export default {
    name: 'Oneorder'
  }
</script>

<style scoped>
    #oneorder {
        box-sizing: border-box;
        border: 1px solid #EAEAEA;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-left: 30px;
        padding-top: 30px;
        padding-bottom: 30px;
        margin-top: 20px;
    }
    .oneorder-left, .oneorder-right {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .oneorder-intro {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 18px;
    }

    .oneorder-img {
        width: 112px;
        height: 63px;
        border-radius: 10px;
        overflow: hidden;
    }
    .oneorder-intro-title {
        font-size: 16px;
        color: #222222;
    }
    .oneorder-intro-ifo-num {
        font-size: 12px;
        color: #666666;
    }
    .oneorder-intro-ifo-time {
        font-size: 12px;
        color: #AAAAAA;
        margin-left: 30px;
    }
    .order-money, .order-status-have, .order-status-no {
        width: 186px;
        line-height: 63px;
        text-align: center;
        border-left: 1px solid #F0F0F0;
        border-right: 1px solid #F0F0F0;
    }
    .order-money {
        color: #FF7600;
    }
    .order-status-have {
        color: #76CE66;
    }

    .order-status-no {
        color: #aaaaaa;
    }

    .order-status-ing {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 186px;
        text-align: center;
        border-left: 1px solid #F0F0F0;
        border-right: 1px solid #F0F0F0;
    }

    .order-status-ing-goto {
        width: 108px;
        text-align: center;
        line-height: 34px;
        border-radius: 4px;
        background-color: #EB5F5F;
        color: #FFFFFF;
        font-size: 14px;
        cursor: pointer;
    }

    .order-status-ing-cancel {
        font-size: 14px;
        color: #AAAAAA;
        line-height: 34px;
        cursor: pointer;
    }
</style>
