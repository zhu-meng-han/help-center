<template>
  <ul>
    <li v-for="item in list" :class="{'active': item.selected}">
      <span v-show="item.aa" v-text="item.aa"></span>
      <span v-text="item.name " @click="selected(item)"></span>
    </li>
  </ul>
</template>
<script>
  export default {
    data() {
      return {
        list: [
          {
            id: 11,
            selected: false,
            name: 'zmah'
          },
          {
            id: 11,
            selected: false,
            name: 'zmah'
          },
          {
            id: 11,
            selected: false,
            name: 'zmah'
          },
          {
            id: 11,
            selected: false,
            name: 'zmah'
          }
        ]
      };
    },
    mounted() {
      // document.title = '帮助中心';
    },
    methods: {
      selected(item) {
        item.selected = !item.selected;
        item.aa = 'nsdnjskdn';
        localStorage.setItem('list', JSON.stringify(this.list));
      }
    }
  };
</script>

<style>
  .active {
    color: #f00;
  }
</style>
