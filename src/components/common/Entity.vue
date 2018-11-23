<template>
  <div>
    <group :gutter="5">
      <popup-radio
        :title="title"
        v-model="type"
        :options="typeList"
        :placeholder="'请选择病种类型'"
        @on-change="entityChange"
      ></popup-radio>
    </group>

  </div>
</template>

<script>
  import {PopupRadio, Group} from 'vux'

  export default {
    name: "entity",
    components: {
      PopupRadio,
      Group
    },
    props: {
      retEntity: {
        type: Function,
        default: () => {
        }
      }
    },
    methods: {
      entityChange: function (value) {
        this.retEntity(this.typeList[value].value)
      }
    },
    data() {
      return {
        title: "病种类型",
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
