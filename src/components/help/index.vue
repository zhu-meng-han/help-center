<template>
  <section>
    <el-header :data="headerData"></el-header>
    <router-link to="/complaint" tag="ul" class="help-content">
      <li>
        <svg><use :xlink:href="Icon.Complaints"></use></svg>
      </li>
      <li class="help-content-text">
        <p>订单投诉</p>
        <p>客服会在24小时内处理您的申请</p>
      </li>
      <li>
        <i class="icon-arrow-right"></i>
      </li>
    </router-link>
    <ul class="help-content">
      <li>
        <svg><use :xlink:href="Icon.OnlineService"></use></svg>
      </li>
      <li class="help-content-text">
        <p>在线客服</p>
      </li>
      <li>
        <i class="icon-arrow-right"></i>
      </li>
    </ul>
    <ul class="help-content" @click="callService">
      <li>
        <svg><use :xlink:href="Icon.CallService"></use></svg>
      </li>
      <li class="help-content-text">
        <p>客服热线</p>
      </li>
      <li>
        <i class="icon-arrow-right"></i>
      </li>
    </ul>
  </section>
</template>
<script>
  import ElHeader from '../header';
  import Icon from 'src/common/icon';
  export default {
    components: {
      ElHeader
    },
    data() {
      return {
        headerData: {
          title: '帮助中心',
          backUrl: '/complaint'
        },
        Icon
      };
    },
    methods: {
      callService() {
        this.$root.Toast('<p>拨打客服电话</p><p>10105757</p>', '', '取消', true);
      }
    }
  };
</script>

<style type="text/scss" lang="scss">
  .help-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    height: 128px;
    padding: 30px;
    margin-top: 20px;
    svg {
      width: 64px;
      height: 64px;
    }
    li {
      &:first-child {
        width: 64px;
        margin-right: 20px;
      }
      &:last-child {
        width: 30px;
      }
    }
    &-text {
      flex: 1;
      text-align: left;
      p{
        color: #333;
        font-weight: bold;
        line-height: 1;
        font-size: 32px;
        &:nth-child(2) {
          margin-top: 12px;
          font-size: 22px;
          color: #999;
        }
      }
    }
  }
</style>
