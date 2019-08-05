<template>
  <div class="class-detail-container">
     <div class="class-detail-session1"></div>
     <div class="class-detail-session2"></div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    @import '../../common/sass/base.scss';
    .class-detail-container{
        width:100%;
        .class-detail-session1{
            width:100%;
            height:290*$length;
            @include bgImage('');
            margin: 0 auto;
            .class-detail-session1-center{
                width:1200*$length;
                margin:0 auto;
            }
        }
        .class-detail-session2{
            width:1200*$length;
            margin:0 auto;
        }
    }
</style>
