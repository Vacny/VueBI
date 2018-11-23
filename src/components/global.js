import Vue from 'vue'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const requireComponent = require.context(
  './common', true, /.vue$/
  //common.vue命名的文件
)
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);

  const componentName = capitalizeFirstLetter(
    fileName.replace(/^.\/(\w+\/)?/,'').replace(/.vue$/, '')
    //因为得到的filename格式是: './baseButton.vue', 所以这里我们去掉头和尾，只保留真正的文件名
  );
  // console.log(componentName)
  Vue.component(componentName, componentConfig.default || componentConfig)
})
