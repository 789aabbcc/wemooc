<template>

    <div id="nocharge">
        没有购买过课程
        <span>去购买</span>
    </div>

</template>

<script>
  export default {
    name: 'Nocharge'
  }
</script>

<style scoped>

    #nocharge {
        display: flex;
        /*flex-direction: column;*/
        justify-content: center;
        align-items: center;
        height: 610px;
        font-size: 12px;
        color: #AAAAAA;
    }
    #nocharge span{
        color: #46539B;
    }

</style>
