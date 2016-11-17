<template>
  <transition>
    <eleme-header :data="headerData"></eleme-header>
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
          title: '申诉',
          href: '/help'
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

</style>
