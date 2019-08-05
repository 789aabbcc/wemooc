<template>
  <div id="app">
    <PageHeader></PageHeader>
    <div class="page-header-height"></div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- 播放器 -->
  </div>
</template>

<script>
import PageHeader from 'components/page-header/PageHeader'
export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>
<style lang="scss" scoped>
  @import './common/sass/base.scss';
  .page-header-height{
    height:72*$length;
    width:100%;
  }
</style>
