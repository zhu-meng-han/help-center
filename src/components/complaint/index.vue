<template>
  <section class="order-complaint">
    <el-header :data="headerData"></el-header>
    <div class="order-complaint-content">
      <label v-for="item in dataList">
        <span v-text="item.name"></span>
        <input type="radio" :value="item.value" v-model="complaintOption" number name="complaint" />
        <svg><use :xlink:href="complaintOption === item.value ? Icon.Sel : Icon.Grey"></use></svg>
      </label>
      <div class="other-complaint">
        <textarea v-if="complaintOption === 8" v-model="otherComplaint" placeholder="输入您要投诉的内容"></textarea>
      </div>
    </div>
    <mark>如遇到紧急事项，请联系客服：<a href="tel:10105757"><svg><use :xlink:href="Icon.Tel"></use></svg>101057575</a></mark>
    <div class="footer">
      <button @click="submit" :disabled="btnDisabled" class="btn-default " :class="{'btn-primary': !btnDisabled}">提交</button>
    </div>
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
          title: '订单投诉',
          backUrl: '/help'
        },
        Icon,
        complaintOption: 1,
        otherComplaint: '',
        btnDisabled: false,
        dataList: [
          {
            name: '等待超过60分钟',
            selected: false,
            value: 1
          },
          {
            name: '预订单，提前或滞后20分钟送达',
            selected: false,
            value: 2
          },
          {
            name: '未收到商品却已被确认',
            selected: false,
            value: 3
          },
          {
            name: '少送、送错商品',
            selected: false,
            value: 4
          },
          {
            name: '商品破损',
            selected: false,
            value: 5
          },
          {
            name: '配送员态度不好',
            selected: false,
            value: 6
          },
          {
            name: '额外收取费用',
            selected: false,
            value: 7
          },
          {
            name: '其他问题（可填）',
            selected: false,
            value: 8
          }
        ]
      };
    },
    watch: {
      complaintOption() {
        if (this.complaintOption === 8) {
          this.btnDisabled = !this.otherComplaint.trim().length;
        }
      },
      otherComplaint() {
        this.btnDisabled = !this.otherComplaint.trim().length;
      }
    },
    methods: {
      submit() {
        console.log(`complaintOption: ${this.complaintOption}， otherComplaint: ${this.otherComplaint}`);
        this.$root.Toast('订单投诉成功', '给您带来的不便真的抱歉，我们非常重视您的投诉，会以最快的速度核实并处理。', '知道了', false);
      }
    }
  };
</script>

<style type="text/scss" lang="scss">
  .order-complaint {
    &-content {
      background-color: #fff;
      margin-top: 20px;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      padding-left: 30px;
      font-size: 30px;
      color: #333;
      label {
        flex: 1;
        display: flex;
        align-items: center;
        border-top: 1px solid #eee;
        height: 88px;
        padding-right: 30px;
      }
      span {
        flex: 1;
      }
      input {
        display: none;
      }
      textarea {
        width: 100%;
        height: 160px;
        border: 1px solid #eee;
        background-color: #fafafa;
        border-radius: 10px;
        margin-bottom: 30px;
        padding: 20px;
      }
      .other-complaint {
        padding-right: 30px;
      }
    }
    svg {
      width: 40px;
      height: 40px;
    }
    mark {
      display: block;
      background-color: transparent;
      margin: 20px 0 0 30px;
      font-size: 22px;
      svg {
        width: 25px;
        height: 25px;
      }
      a {
        display: inline-flex;
        align-items: center;
        color: #3190e8;
      }
    }
    .footer {
      margin-top: 40px;
      width: 100%;
      padding: 0 30px;
    }

  }
</style>
