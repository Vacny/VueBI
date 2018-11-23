/**
 * Created by wangjuan on 2017/6/14.
 * 处理数据
 */
import state from "../../store/state"

//获取二维表的表头
function getTableHeaders(data) {
  let headers = [];
  for (let key in data[0]) {
    headers.push(key);
  }
  return headers;
}

//获取二维表除第一列的表头
function getTableHeadersNotFirst(data) {
  let headers = getTableHeaders(data);
  headers.splice(0,1);
  return headers;
}

//获取二维表第i列的表头
function getTableHeadersIndex(data, i) {
  let headers = getTableHeaders(data);
  let iHeader = headers[i];
  return iHeader;
}

//获取二维表第一列的表头
function getTableHeadersFirst(data) {
  let firstHeard = getTableHeadersIndex(data, 0);
  return firstHeard;
}

//以二维数组的格式返回二维表的数据，一维数组表示每列的值，二维数组表示多列的值
function getTableValue(data) {
  let headers = getTableHeaders(data);
  let tableValue = [];
  for (let i = 0; i < headers.length; i++) {//初始化tableValue
    let column = [];
    tableValue.push(column);
  }

  //给tableValue赋值
  for(let item in data){
    //对每一行进行处理
    for (let j = 0; j < headers.length; j++) {
      let cellValue = data[item][headers[j]];
      tableValue[j].push(cellValue);
    }
  }

  return tableValue;
}

//以二维数组的格式返回二维表除第一列的数据，一维数组表示每列的值，二维数组表示多列的值
function getTableValueNotFirst(data) {
  let tableValue = getTableValue(data);
  tableValue.splice(0,1);
  return tableValue;
}

//获取二维表的第i列的数据
function getTableIndexCloumnValue(data, i) {
  let tableValue = getTableValue(data);
  let iCloumnValue = tableValue[i];
  return iCloumnValue;
}

//获取二维表的第一列的数据
function getTableFirstCloumnValue(data) {
  let firstCloumnValue = getTableIndexCloumnValue(data, 0);
  return firstCloumnValue;
}

//获取二维表的第二列的数据
function getTableSecondCloumnValue(data) {
  let secondCloumnValue = getTableIndexCloumnValue(data, 1);
  return secondCloumnValue;
}

//以二维数组的格式返回二维表的数据，一维数组表示每行的值，二维数组表示多行的值
function getTableValueRows(data) {
  let headers = getTableHeaders(data);
  let tableValue = [];

  //给tableValue赋值
  for(let item in data){
    let row = [];
    //对每一行进行处理
    for (let j = 0; j < headers.length; j++) {
      let cellValue = data[item][headers[j]];
      row.push(cellValue);
    }

    tableValue.push(row);
  }

  return tableValue;
}

//以二维数组的格式返回二维表除第一列的数据，一维数组表示每行(不包括第一列)的值，二维数组表示多行(不包括第一列)的值
function getTableValueRowsNotFirst(data) {
  let tableValue = getTableValueRows(data);
  for (let i = 0; i < tableValue.length; i++) {
    tableValue[i].splice(0,1);
  }
  return tableValue;
}

//获取二维表第一行的数据
function getTableFirstRowValue(data) {
  let tableValue = getTableValueRows(data);
  return tableValue[0];
}

/**
 * 删除数组某一指定元素
 */
// Array.prototype.remove = function (m) {
//   if (isNaN(m) || m > this.length) {
//     return false;
//   }
//   this.splice(m, 1);
// }

export default function EchartsDynamicData() {

  this.getEchartsData = function (type, data, title, tag, isTrans) {//isTrans为1则转置

    this.option_title_text = title;

    switch (type) {
      case state.DISPLAY_PIE_CHART_ONE:
      case state.DISPLAY_PIE_CHART_TWO:
      case state.DISPLAY_PIE_CHART_THREE:
      case state.DISPLAY_FUNNEL_CHART_ONE: {

        if (isTrans == 1) {
          //转置：二维表的数据为两行
          this.option_legend_data = getTableHeaders(data);
          this.option_series_data_value = getTableFirstRowValue(data);
        } else {
          //不转置：二维表的数据为两列
          this.option_legend_data = getTableFirstCloumnValue(data);
          this.option_series_data_value = getTableSecondCloumnValue(data);
        }

        break;
      }
      case state.DISPLAY_LINE_CHART_ONE:
      case state.DISPLAY_LINE_CHART_TWO:
      case state.DISPLAY_BAR_CHART_ONE:
      case state.DISPLAY_BAR_CHART_THREE:
      case state.DISPLAY_BAR_CHART_FOUR:
      case state.DISPLAY_SCATTER_CHART_ONE : {

        if (isTrans == 1) {
          //转置：x轴的数据为除第一列的表头数据
          this.option_legend_data = getTableFirstCloumnValue(data);
          this.option_xAxis_data = getTableHeadersNotFirst(data);
          this.option_series_data = getTableValueRowsNotFirst(data);
        } else {
          //不转置：x轴的数据为第一列的值
          this.option_legend_data = getTableHeadersNotFirst(data);
          this.option_xAxis_data = getTableFirstCloumnValue(data);
          this.option_series_data = getTableValueNotFirst(data);
        }

        if (type == state.DISPLAY_BAR_CHART_THREE) {
          //折柱混合区分标识，可理解为折线的条数
          this.tag = tag;
        }

        break;
      }
      case state.DISPLAY_LINE_CHART_THREE : {

        if (isTrans == 1) {
          //转置：二维表的数据为两行
          this.option_xAxis_data = getTableHeaders(data);
          this.option_series_data = getTableFirstRowValue(data);
        } else {
          //不转置：二维表的数据为两列
          this.option_xAxis_data = getTableFirstCloumnValue(data);
          this.option_series_data = getTableSecondCloumnValue(data);
        }

        break;
      }
      case state.DISPLAY_BAR_CHART_TWO : {//柱状图--总-分：特殊处理

        if (isTrans == 1) {
          //转置：二维表的数据为两行
          firstCloumnValue = getTableHeaders(data);
          secondCloumnValue = getTableFirstRowValue(data);
        } else {
          //不转置：二维表的数据为两列
          firstCloumnValue = getTableFirstCloumnValue(data);
          secondCloumnValue = getTableSecondCloumnValue(data);
        }

        firstCloumnValue.unshift('总');//unshift:可向数组的开头添加一个或更多元素，并返回新的长度。
        this.option_xAxis_data = firstCloumnValue;

        let arrayOne = [];
        let arrayTwo = [];
        let sum = 0;
        for (let i = secondCloumnValue.length - 1; i >= 0; i--) {
          arrayOne.unshift(sum);
          arrayTwo.unshift(secondCloumnValue[i]);
          sum = sum + secondCloumnValue[i];
        }
        arrayOne.unshift(0);
        arrayTwo.unshift(sum);
        let optionSeriesData = [];
        optionSeriesData.push(arrayOne);
        optionSeriesData.push(arrayTwo);

        this.option_series_data = optionSeriesData;

        break;
      }
      case state.DISPLAY_SCATTER_CHART_TWO : {//气泡图：特殊处理

        let headers = getTableHeaders(data);

        let chartData = [];
        let optionLegendData = [];
        //给optionLegendData赋值以及初始化chartData
        for (let item in data){
          let optionSeriesName = data[item][headers[4]];
          let d = {};
          let temp = optionLegendData.indexOf(optionSeriesName);
          if (temp == -1) {
            optionLegendData.push(optionSeriesName);
            d = {};
            d.name = optionSeriesName;
            d.value = [];
            chartData.push(d);
          }
        }
        //chartData:[*{name:'',value:[]}]

        //给chartData[i].value赋值
        for (let item in data){

          let tpoint = [];//保存一个点的数据，x、y、s、tag，即一条记录的前四个字段
          for (let i = 0; i < headers.length - 1; i++) {
            tpoint.push(data[item][headers[i]]);
          }
          for (let i = 0; i < chartData.length; i++) {
            if (data[item][headers[4]] == chartData[i].name) {
              chartData[i].value.push(tpoint);
            }
          }
        }


        //chartData:[{name:'',value:[[x,y,s,tag],...]},...]

        let optionSeriesData = [];
        for (let i = 0; i < chartData.length; i++) {
          optionSeriesData.push(chartData[i].value);
        }
        //optionSeriesData:[[[x,y,s,tag],...],...]

        this.option_series_data = optionSeriesData;
        this.option_legend_data = optionLegendData;

        break;
      }
      case state.DISPLAY_DASH_BOARD_CHART_ONE : {

        let firstRowValue = getTableFirstRowValue(data);

        if (firstRowValue.length == 2) {
          firstRowValue.push(100);
        }

        this.option_series_maxAndData = firstRowValue;

        break;
      }
      default : {

      }
    }//---end(switch)---

    return this;
  };


};
