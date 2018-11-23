<template>
  <div>
    <group :gutter="5">
      <popup-radio
        :title="title"
        v-model="type"
        :options="typeList"
        :placeholder="'请选择医生'"
        @on-change="doctorChange"
      ></popup-radio>
    </group>

  </div>
</template>

<script>
  import {PopupRadio, Group} from 'vux'

  export default {
    name: "doctor",
    components: {
      PopupRadio,
      Group
    },
    props: {
      retDoctor: {
        type: Function,
        default: () => {
        }
      }
    },
    methods: {
      doctorChange: function (value) {
        this.retDoctor(this.typeList[value].value)
      }
    },
    data() {
      return {
        title: "医生",
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
