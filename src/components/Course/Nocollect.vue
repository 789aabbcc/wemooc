<template>

    <div id="nocollect">
        <div class="nocollect-img">
            <img src="../../common/images/noone.png" height="100%" width="100%"/>
        </div>
        <div class="nocollect-txt">木有收藏的内容</div>
    </div>

</template>

<script>
  export default {
    name: 'Nocollect'
  }
</script>

<style scoped>

    #nocollect {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 610px;
    }
    .nocollect-img {
        width: 80px;
        height: 80px;
    }
    .nocollect-txt {
        margin-top: 50px;
        color: #46539B;
        font-size: 12px;
    }

</style>
