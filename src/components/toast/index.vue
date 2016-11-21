<template>
  <transition name="fade-in">
    <section class="el-toast" v-if="isShow">
      <div class="mask" @click="cancel"></div>
      <div class="eleme-toast_warp">
        <div class="eleme-toast_header" v-html="headerText">
        </div>
        <div class="eleme-toast_content" v-html="contentText"></div>
        <footer class="eleme-toast_footer">
          <a @click="cancel" v-text="cancelText"></a>
          <a href="tel:10105757" v-if="isCall">呼叫</a>
        </footer>
      </div>
    </section>
  </transition>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      isShow: false,
      headerText: '',
      contentText: '',
      cancelText: '取消',
      isCall: false
    };
  },
  methods: {
    cancel() {
      this.isShow = false;
      this.headerText = '';
      this.contentText = '';
      this.cancelText = '取消';
      this.isCall = false;
    },
    show(headerText, contentText, cancelText, isCall) {
      this.headerText = headerText;
      this.contentText = contentText;
      this.cancelText = cancelText;
      this.isCall = isCall;
      this.isShow = true;
    }
  }
};
</script>
<style type="text/scss" lang="scss">
  .el-toast {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .mask {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, .6);
      z-index: 9999;
    }
    &_warp {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      z-index: 10001;
      background-color: rgba(246, 246, 246, .9);
      border-radius: 30px;
      color: #000;
      text-align: center;

    }
    &_header {
      font-size: 34px;
      font-weight: bold;
      padding: 30px 30px 0;
    }
    &_content {
      font-size: 26px;
      padding: 0 30px;
      margin: 20px 0 30px;
    }
    &_footer {
      position: relative;
      display: flex;
      height: 88px;
      align-items: center;
      justify-content: space-between;
      font-size: 34px;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #939393;
      }
      a {
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
        flex: 1;
        color: #007aff;
        letter-spacing: 2px;
        &:nth-child(2) {
          font-weight: bold;
          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            width: 2px;
            height: 100%;
            background-color: #939393;
            transform: translate(-50%, 0);
          }
        }
      }
    }
  }

  .fade-in-enter-active,
  .fade-in-leave-active {
    transition: all .5s cubic-bezier(.55, 0, .1, 1);
  }

  .fade-in-enter,
  .fade-in-leave-active {
    opacity: 0;
  }
</style>
