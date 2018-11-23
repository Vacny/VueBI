<template>
  <div>
    <group :gutter="5">
      <popup-radio
        :title="'就诊类型'"
        :options="typeList"
        v-model="type"
        :placeholder="'请选择就诊类型'"
        @on-change="typeChange"
      ></popup-radio>
    </group>

  </div>
</template>

<script>
  import {PopupRadio, Group} from 'vux'

  export default {
    name: "visit-type",
    components: {
      PopupRadio,
      Group
    },
    props: {
      retType: {
        type: Function,
        default: () => {
        }
      }
    },
    methods: {
      typeChange: function (value) {
        this.retType(this.typeList[value].value)
      }
    },
    data() {
      return {
        title: "就诊类型",
        type: "",
        typeList: [
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
