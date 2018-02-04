<template>
  <div id = "app">
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style lang = "scss">
/*@import './scss/common.scss';*/
@import './scss/base.scss';
@import '../src/scss/mixin';
/*@import './scss/iconfont.css';*/
body,html{
  font-size: 20px;
  width: 100%;
  height: 100%;
  font-family: Microsoft YaHei!important;
}
@media screen and (max-width: 1500px){
  body,html{
    font-size:16px;
  }
}
#app {
  font-family: Microsoft YaHei!important;
  width: 100%;
  height: 100%;
}

</style>
