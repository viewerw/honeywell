<template>
  <div class="errPage-container">
    <el-row>
      <el-col :span="24">
        <h1>Oops!</h1>
        <h2>你没有权限访问该页面</h2>
      </el-col>
    </el-row>
  </div>
</template>
<script>

    export default {
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .errPage-container {
      color: #7c8793;
      height: 110px;
      margin: auto 0;
      top: 0;
      bottom: 0;
      position: absolute;
      left: 0;
      right: 0;
    }
</style>
