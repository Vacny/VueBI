<template>
  <div>
    <group :gutter="5">
      <popup-radio
        :title="title"
        v-model="type"
        :options="typeList"
        :placeholder="'请选择医保类型'"
        @on-change="medicalChange"
      ></popup-radio>
    </group>

  </div>
</template>

<script>
  import {PopupRadio, Group} from 'vux'

  export default {
    name: "medical-insurance-type",
    components: {
      PopupRadio,
      Group
    },
    props: {
      retMedical: {
        type: Function,
        default: () => {
        }
      }
    },
    methods: {
      medicalChange: function (value) {
        this.retMedical(this.typeList[value].value)
      }
    },
    data() {
      return {
        title: "医保类型",
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
