<template>
  <transition>
    <section>
      <eleme-header :data="headerData"></eleme-header>
      <div class="loading"></div>
    </section>
  </transition>
</template>
<script>
  import ElemeHeader from '../header';
  export default {
    components: {
      'eleme-header': ElemeHeader
    },
    data() {
      return {
        headerData: {
          title: '帮助',
          href: '/appeal'
        }
      };
    },
    mounted() {
      // document.title = '帮助中心';
    },
    methods: {

    }
  };
</script>

<style>
  .loading {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid #f00;
    background-color: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
