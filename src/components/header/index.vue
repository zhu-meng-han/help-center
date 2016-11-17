<template>
  <header class='header' >
    <a v-if="data.href" class="goback" :href="data.href"></a>
    <span v-text="data.title"></span>
  </header>
</template>
<script type="text/javascript">
  export default {
    props: ['data']
  };
</script>
<style type="text/scss" lang="scss">
  .header {
    position: relative;
    display: flex;
    justify-content: space-between;
    background-color: #3190e8;
    color: #fff;
    font-size: 36px;
    line-height: 88px;
    text-align: center;
    font-weight: bold;
    span {
      flex: 1;
    }
  }
  .goback {
    padding: 0 30px;
    position: relative;
    &::before {
      content: '';
      width: 20px;
      height: 20px;
      border: 4px solid #fff;
      border-top-color: transparent;
      border-right-color: transparent;
      display: inline-block;
      transform: rotate(45deg);
    }
  }
</style>
