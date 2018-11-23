<template>
  <div>
    <group :gutter="5">
      <popup-radio
        :title="title"
        v-model="depart"
        :options="departList"
        :placeholder="'请选择大科室'"
        @on-change="departChange"
      ></popup-radio>
    </group>

  </div>
</template>

<script>
  import {PopupRadio, Group} from 'vux'

  export default {
    name: "senior-department",
    components: {
      PopupRadio,
      Group
    },
    props: {
      retDepart: {
        type: Function,
        default: () => {
        }
      }
    },
    methods: {
      departChange: function (value) {
        this.retDepart(value)
      }
    },
    data() {
      return {
        title: "大科室",
        depart: "",
        departList: [
          {
            key: 0,
            value: "test1"
          }, {
            key: 1,
            value: "test2"
          }, {
            key: 2,
            value: "test3"
          }, {
            key: 3,
            value: "test4"
          }, {
            key: 4,
            value: "test5"
          }, {
            key: 5,
            value: "test6"
          }
        ]
      }
    }
  }
</script>

<style>
  p {
    text-align: left;
  }
</style>
