<template>

  <div id="app" exclude="test-keep-alive">

    <PageHeader></PageHeader>
    <div class="page-header-height"></div>

    <transition name="router-fade" mode="out-in">
      <router-view  :key="activeDate"></router-view>
    </transition>

  </div>
</template>

<script>
    import PageHeader from 'components/page-header/PageHeader'
    export default {
        name: 'app',
        data() {
            return {
                activeDate: new Date()
            }
        },
        watch: {
            '$route'(to, from) {
                if (to.path === '/home') { /// 判断条件2  监听路由名 监听你从什么路由跳转过来的
                    this.message = this.$route.query.msg
                }
            }
        },
        components: {
            PageHeader
        }
    }
</script>
<style lang="scss" scoped>
  @import './common/sass/base.scss';
  #app{
    @include transition(none);
  }
  .page-header-height{
    height:72*$length;
    width:100%;
  }
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .2s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
</style>
