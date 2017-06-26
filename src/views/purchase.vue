<template>
    <div class='has-text-centered	'>
        外链商城
        <el-button @click="startHacking">Let's do it</el-button>
        <el-switch
            v-model="value1"
            on-text=""
            off-text="">
            </el-switch>
            <el-switch
            v-model="value2"
            on-color="#13ce66"
            off-color="#ff4949">
            </el-switch>

           
  <el-select v-model="value" >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

    </div>
</template>
<script>
// import Vue from 'vue';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-default/index.css';
// Vue.use(ElementUI);

import Vue from 'vue';
import {Button, Switch,Select,Option} from 'element-ui';
Vue.use(Button);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);


    //require('../css/index.css');
    export default {
        data: function () {
            return {
                page: 'cc big!!',
                value1: true,
                value2: true,
                options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '选项5'
      }
            },
        methods: {
            startHacking: function (e) {
                console.log(e);
            }
        }
    }
</script>
