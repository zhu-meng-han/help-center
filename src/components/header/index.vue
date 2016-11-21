<template>
  <header class="header">
    <template>
      <slot name="left">
        <a class="" href="javascript:;" @click="goBack">
          <svg><use :xlink:href="Icon.ArrowLeft"></use></svg>
        </a>
      </slot>
      <span v-text="data.title"></span>
      <slot name="right">
        <a href="javascript"></a>
      </slot>
    </template>
  </header>
</template>
<script type="text/javascript">
  import Icon from 'src/common/icon';
  export default {
    props: ['data'],
    data() {
      return {
        Icon
      };
    },
    methods: {
      goBack() {
        if (this.data.backUrl) {
          location.href = this.data.backUrl;
        } else {
          history.back();
        }
      }
    }
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
    a {
      padding: 0 30px;
      width: 30px;
    }
    svg {
      fill: #fff;
      width: 30px;
      height: 33px;
      vertical-align: middle;
    }
  }
</style>
