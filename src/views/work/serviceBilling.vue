<template>
    <div class="serviceBilling">
        <div class="columns search_bg mar_20">
            <div class="column"><span>开始时间</span><el-date-picker v-model="nowDate" type="daterange" placeholder="" range-separator='至'	></el-date-picker></div>
            <div class="column"><span>单据类型</span>
                <el-select v-model="docType" placeholder="">
                    <el-option v-for="item in docOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select> 
            </div>
            <div class="column"></div>
            <div class="column"></div>
            <div class="column"></div>
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
                docType:'',
                docOptions:[
                    {value:'00',label:'无显'},
                    {value:'a',label:'综合服务开单'},
                    {value:'b',label:'快速开单'}
                ]
            }
        }
    }
</script>
