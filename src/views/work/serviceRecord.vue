<template>
    <div class="serviceBilling">
        <div class="columns search_bg mar_20">
            <div class="column is-4">
                <p><span>开始时间</span>
                <el-date-picker v-model="nowDate" type="daterange" placeholder="" range-separator='至'	></el-date-picker>
                </p>
            </div>
            <div class="column ">
                <p><span>单据类型</span>
                <el-select v-model="docType" placeholder="">
                    <el-option v-for="item in docOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select> 
                </p>
            </div>
            <div class="column">
                <p><span>姓名/单位</span><el-input v-model="nameValue" placeholder="姓名/单位" type='text' value="string"></el-input></p>
            </div>
            <div class="column ">
                <p><span>手机号</span><el-input v-model="telphoneValue" placeholder="手机号" type='text' value="number"></el-input></p>
            </div>
            <div class="column is-1"><a class="button"><i class="icon iconfont icon-sousuo-sousuo"></i></a></div>
        </div>
    </div>
</template>
<script>
     import Vue from 'vue';
   import {Select,Option,DatePicker,Input,MessageBox, Message,Pagination} from 'element-ui';
   Vue.component(MessageBox.name, MessageBox);
   Vue.component(Message.name, Message);
   Vue.component(Select.name, Select);
   Vue.component(Option.name, Option);
   Vue.component(DatePicker.name, DatePicker);
   Vue.component(Input.name, Input);
   Vue.component(Pagination.name, Pagination);
    export default{
        
        data: function () {
            return {
                nowDate:'',
                docType:'无线',
                docOptions:[
                    {value:'00',label:'无显'},
                    {value:'a',label:'综合服务开单'},
                    {value:'b',label:'快速开单'}
                ],
                nameValue:'',
                telphoneValue:''
            }
        }
    }
</script>
