<template>
  <div class="contentBox">
    <v-head
      :isList="false"
      :head-tit="pageTitle"
      :search="allData.length>0"
      :right-option-fun="openSearch"
    ></v-head>

    <div class="searchModel" v-show="search">
      <v-head
        :is-list="false"
        :head-tit="'筛选条件'"
        :left-option-fun="closeSearch"
        :isPrevent="true"
      ></v-head>
      <div class="model">
        <div v-for="(data, index) in allData">
          <!--下拉选择-->
          <div v-if="data.paramdatatype == 7">
            <group :gutter="5">
              <popup-radio
                :title="data.name"
                v-model="data.paramdefault"
                :options="data.arrData"
                :placeholder="'请选择'"
              ></popup-radio>
            </group>
          </div>
          <!--时间控件-->
          <div v-if="data.paramdatatype == 5 || data.paramdatatype == 6">
            <group :gutter="5">
              <datetime
                v-model="data.paramdefault"
                :title="data.name"
                :placeholder="'请选择'"
              ></datetime>
            </group>
          </div>
          <!--输入框-->
          <div v-if="data.paramdatatype <= 4">
            <group :gutter="5">
              <x-input
                v-model="data.paramdefault"
                :title="data.name"
                :placeholder="'请输入'"
                text-align="right"
              ></x-input>
            </group>
          </div>
        </div>
        <x-button
          :type="'primary'"
          :text="'查询'"
          @click.native="searchData">查询
        </x-button>
      </div>
    </div>

    <div id="chart">
      <div v-if="chartOptions" v-for="(option,index) in chartOptions">
        <div v-if="option.empty" style="height: 80vw;width: 100vw;line-height: 80vw;;">
          <p style="text-align: center">对不起，您所查询的条件没有数据！</p>
        </div>
        <div v-else style="height: 80vw;width: 95vw;">
          <chart :option="option"></chart>
        </div>
      </div>
    </div>

    <div id="table">
      <div v-if="tableOptions" v-for="(table,index) in tableOptions">
        <x-table :cell-bordered="false" style="background-color:#fff;">
          <thead style="background-color: #F7F7F7">
          <tr>
            <td :colspan="table.col.length">
              {{table.head}}
            </td>
          </tr>
          <tr>
            <td v-for="value in table.col">{{value}}</td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(data, index) in table.body">
            <td v-for="value in data">
              {{value}}
            </td>
          </tr>
          </tbody>
        </x-table>


      </div>
    </div>

    <div id="card">
      <div v-if="cardOptions" v-for="(option,index) in cardOptions">
        <card :header="{title: option.note}">
          <div slot="content" v-for="(data, index) in option.data">
            <div v-for="(item,key) in data" class="card-demo-flex card-demo-content">
              <div><span class="">{{key}}</span></div>
              <div><span>{{item}}</span></div>
            </div>
          </div>
        </card>
      </div>
    </div>

    <div id="single">
      <div v-if="singleOptions" v-for="(option, index) in singleOptions">
          <span class="item_font" style="display: block;height: 30px;text-align: center;">
            <i :class="option.icon[1]" v-html="'&#'+option.icon[0]"></i>
          </span>
        <div v-for="(data, index) in option.data">
          <div v-for="(item, key) in data">
            <div><span>{{item}}</span></div>
            <div><span>{{key}}</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import getOptionByType from "../static/js/get_chart_option_by_type"
  import EchartsDynamicData from "../static/js/echarts_dynamic_data"
  import {XTable, Divider, Card, PopupRadio, Datetime, XInput, Group, XButton} from 'vux'
  import {mapMutations} from "vuex"

  export default {
    name: "preview-data",
    components: {
      XTable,
      Divider,
      Card,
      PopupRadio,
      Datetime,
      XInput,
      Group,
      XButton
    },
    data() {
      return {
        search: false,
        tableOptions: [],
        chartOptions: [],
        cardOptions: [],
        singleOptions: [],
        urlParams: {},
        pageTitle: "结果显示",
        reqUrl: "",
        datasetInfo: null,
        groupInfo: null,
        allData: []
      }
    },
    methods: {
      ...mapMutations(['setLoad']),
      test: function (e) {
        e.preventDefault();
        let formData = {
          sqlStr: "select bz1 年龄,bz2 次数 from wj where to_char(rq,'yyyy-mm') between '2017-06' and '2017-07'",
          SelfDatasetRefDbName: "oracleDateSource5"
        };
        this.$axios({
          url: "data/excuteView",
          method: "POST",
          data: {
            sqlStr: "SELECT * FROM [qyy].dbo.a_yjtc",
            SelfDatasetRefDbName: "SQLServerTest"
          },
          transformRequest: function (data) {
            let ret = '';
            for (let it in data) {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
          },
          headers: {
            'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"
          }
        }).then(function (res) {
          console.log(res)
        }, function (err) {
          console.log(err)
        })
      },
      setCookie: function (c_name, value, expiredays) {
        let exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = c_name + "=" + escape(value) +
          ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
      },
      getCookie: function (c_name) {
        if (document.cookie.length > 0) {
          let c_start = document.cookie.indexOf(c_name + "=");
          if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            let c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end))
          }
        }
        return ""
      },
      //获取路由参数，并对象化
      getParams: function () {
        let name, value, num;
        let str = this.$route.params.param;
        let arr = str.split("&");
        let request = {};
        for (let i = 0; i < arr.length; i++) {
          num = arr[i].indexOf("=");
          if (num > 0) {
            name = arr[i].substring(0, num);
            value = decodeURIComponent(arr[i].substr(num + 1));
            request[name] = value;
          }
        }
        this.urlParams = request;
      },
      //根据chartid获取dataset
      getDatasetByChartid: function (chartid) {
        let result = null;
        for (let i = 0; i < this.groupInfo.chartCombines.length; i++) {
          if (this.groupInfo.chartCombines[i].chartid == chartid) {
            result = this.groupInfo.chartCombines[i].dataset;
            result.chartid = chartid;
          }
        }
        return result;
      },
      //判断组合是否有自定义参数
      groupHasNotParam: function (groupInfo) {
        for (let i = 0; i < groupInfo.chartCombines.length; i++) {
          if (groupInfo.chartCombines[i].dataset.paramtype != 0) {
            return false;
          }
        }
        return true;
      },
      //获取图表定义数据
      getChartData: async function () {
        let _this = this;
        if (this.urlParams.isDataSet == 1) {
          this.reqUrl = "/data/getDatasetByIdIncludeRAndD";
        } else {//request.isDataSet == 0
          this.reqUrl = "/data/getChartGroupByIdIncludeRAndD";
        }
        await this.getParameters();
        await this.$axios({
          method: "POST",
          url: this.reqUrl,
          params: {
            id: this.urlParams.id
          }
        }).then(function (res) {
          if (_this.urlParams.isDataSet == 1) {
            //处理dataset基本信息
            _this.datasetInfo = res.data;
          } else {//isDataSet == 0
            //处理group基本信息
            _this.groupInfo = res.data;
          }
          // if ((_this.datasetInfo != null && _this.datasetInfo.paramtype == 0) || (_this.groupInfo != null && _this.groupHasNotParam(_this.groupInfo)) ||
          //   (_this.urlParams.isDrillLevel == 1)) {
          //   _this.check()
          // }
          _this.check()
        }).catch(function (error) {
          console.log(error)
        })

      },
      //获取图表定义查询参数
      getParameters: function () {
        let _this = this;
        if (this.urlParams.isDrillLevel == 0) {
          this.$axios({
            method: 'POST',
            url: '/data/showParameters',
            data: {
              datasetidOrGroupid: this.urlParams.id,
              isDataset: this.urlParams.isDataSet
            },
            transformRequest: function (data) {
              let ret = '';
              for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
              }
              return ret
            },
            headers: {
              'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"
            }
          }).then(function (res) {
            _this.allData = res.data;
            _this.dealSelData();
          }).catch(function (error) {
            console.log(error)
          })
        } else {

        }
      },
      //处理下拉查询数组
      dealSelData: function () {
        let _this = this;
        for (let i = 0; i < _this.allData.length; i++) {
          if (_this.allData[i].paramdatatype == 7) {
            let fieldNames = [];
            for (let key in _this.allData[i].lovValue[0]) {
              fieldNames.push(key);
            }
            if (fieldNames.length < 2) {
              fieldNames[1] = fieldNames[0];
            }
            _this.allData[i].fieldNames = fieldNames;

            let arrData = [];
            for (let item in _this.allData[i].lovValue) {
              arrData.push({
                key: _this.allData[i].lovValue[item][fieldNames[0]],
                value: _this.allData[i].lovValue[item][fieldNames[1]]
              })
            }
            _this.allData[i].arrData = arrData;
          }
        }
      },
      //获取数据并渲染图表
      generateView: async function (paramsData, dataset) {
        let _this = this;
        _this.pageTitle = dataset.name;
        paramsData.sqlStr = dataset.sqlstr;
        paramsData.SelfDatasetRefDbName = dataset.dbName;
        let note = ''; //表格名称
        if (dataset.selresdisplaytype == 10) {
          note = dataset.note;
          paramsData.bbsqlStr = dataset.sqlstr;
          paramsData.note = note;
        }
        let t = parseInt(parseInt(dataset.selresdisplaytype) / 10);
        if (t == 2 || t == 3 || t == 4 || t == 6 || t == 9) {
          note = dataset.note;
          paramsData.bbsqlStr = dataset.sqlstr;
          paramsData.note = note;
          paramsData.SelfDatasetRefDbName = dataset.dbName;
        }
        await this.$axios({
          method: 'POST',
          url: '/data/excuteView',
          data: paramsData,
          transformRequest: function (data) {
            let ret = '';
            for (let it in data) {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
          },
          headers: {
            'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"
          }
        }).then(function (data) {
          let excuteRusult = '';
          excuteRusult = data.data.excuteRecord;
          if (data.data.excuteRecord) {
            excuteRusult = data.data.excuteRecord;
          } else {
            excuteRusult = 0;
          }
          _this.parseJson(dataset, excuteRusult, paramsData, note);
        }).catch(function (error) {
          console.log(error)
        });

      },
      //绘制图表 根据不同的图表类型返回不同的dom
      parseJson: function (dataset, excuteRecord, paramsData, note) {
        if (dataset.selresdisplaytype == 10) {
          //报表初始化
          this.initDataTable(dataset, excuteRecord, paramsData, note);
        } else if (dataset.selresdisplaytype == 11) {
          //卡片报表初始化
          this.initCard(dataset, excuteRecord);
        } else if (dataset.selresdisplaytype == 12) {
          //单项报表初始化
          this.initSingle(dataset, excuteRecord);
        } else {
          //图表初始化
          this.initChart(dataset, excuteRecord, paramsData, note);
        }
      },
      //图表绘制
      initChart: function (dataset, excuteRecord, paramsData, note) {
        if (excuteRecord != 0) {
          let echartsDynamicData = new EchartsDynamicData();
          let echartsData = echartsDynamicData.getEchartsData(dataset.selresdisplaytype, excuteRecord, dataset.note, dataset.tag, dataset.isTrans);
          let option = getOptionByType(dataset.selresdisplaytype, echartsData);
          //处理坐标轴
          if (typeof(option.xAxis) != "undefined") {
            option.xAxis[0].name = dataset.xAxisname;
          }
          if (typeof(option.yAxis) != "undefined") {
            option.yAxis[0].name = dataset.yAxisname;
          }
          this.chartOptions.push(option);

        } else if (excuteRecord == 0) {  //当图表没有数据
          this.chartOptions.push({
            empty: true
          });
        }
      },
      //表格绘制
      initDataTable: function (dataset, excuteRecord, paramsData, note) {
        paramsData.note = note;
        let keys = [];//table的列
        let body = [];
        for (let key in excuteRecord[0]) {
          keys.push(key);
        }
        for (let i = 0; i < excuteRecord.length; i++) {
          let arr = [];
          for (let item in excuteRecord[i]) {
            let data = excuteRecord[i][item];
            arr.push(data ? data : "")
          }
          body.push(arr)
        }
        this.tableOptions.push({
          head: dataset.note,
          col: keys,
          body: body
        })

      },
      //卡片报表
      initCard: function (dataset, excuteRecord) {
        this.cardOptions.push({
          note: dataset.note,
          data: excuteRecord
        })
      },
      //单项报表
      initSingle: function (dataset, excuteRecord) {
        let icon = dataset.icon;
        if (icon != '') {
          icon = icon.split("@");
        } else {
          icon = ""
        }
        this.singleOptions.push({
          icon: icon,
          data: excuteRecord
        })
      },
      //获取查询参数
      getQueryModel: function () {
        let model = {};
        if (this.allData.length > 0) {
          for (let i = 0; i < this.allData.length; i++) {
            model[this.allData[i].paramtag] = this.allData[i].paramdefault
          }
        }
        return model
      },
      //查询
      check: async function () {
        this.setLoad(true);
        let paramsData = this.getQueryModel();
        if (this.urlParams.isDataSet == 1) {
          if (this.datasetInfo.selresdisplaytype == 10) {
            this.tableOptions = [];
          } else if (this.datasetInfo.selresdisplaytype == 11) {
            this.cardOptions = [];
          } else if (this.datasetInfo.selresdisplaytype == 12) {
            this.singleOptions = [];
          } else {
            this.chartOptions = [];
          }
          await this.generateView(paramsData, this.datasetInfo);

        } else {//request.isDataSet == 0
          this.tableOptions = [];
          this.cardOptions = [];
          this.chartOptions = [];
          for (let i = 0; i < this.groupInfo.chartCombines.length; i++) {
            let chartid = this.groupInfo.chartCombines[i].chartid;
            let dataset = this.getDatasetByChartid(chartid);
            await this.generateView(paramsData, dataset);
          }
        }
        await this.setLoad(false)
      },
      openSearch: function () {
        this.search = true
      },
      closeSearch: function () {
        this.search = false;
      },
      searchData: function () {
        this.search = false;
        this.setLoad(true);
        this.check();
      },
      //启动
      defaultFun: async function () {
        // await this.postM();
        await this.getParams();
        await this.getChartData();
      },
      postM: function () {
        this.$axios({
          method: "POST",
          url: "dologin",
          data: {
            userName: "1",
            password: "123456"
          },
          transformRequest: function (data) {
            let ret = '';
            for (let it in data) {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
          },
          headers: {
            'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"
          }
        }).then(function (res) {
          // console.log(res)
        })
      }
    },
    created() {
      this.$nextTick(function () {
        this.defaultFun();
      });
    }
  }
</script>

<style scoped>
  span {
    font-size: 16px;
  }

  .card-demo-flex {
    display: flex;
  }

  .card-demo-content {
    padding: 5px 0;
  }

  .card-demo-flex > div {
    flex: 1;
    text-align: center;
    font-size: 14px;
  }

  .card-demo-flex span {
    color: #000;
  }

  .searchModel {
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    left: 0;
    z-index: 99;
    background: rgba(0, 0, 0, 0.3);
  }

  .searchModel .model {
    width: 100%;
    background: #fff;
    height: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;;
    padding-top: 48px;
  }


</style>
