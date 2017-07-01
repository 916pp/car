<template>
    <div class="serviceRecord">
        <div class="columns search_bg mar_20">
            <div class="column is-4">
                <p><span>开始时间</span>
                <el-date-picker v-model="nowDate" type="daterange" placeholder="" range-separator='至'	></el-date-picker>
                </p>
                <p class="s_many"><span>服务状态</span>
                    <el-select v-model="StatusValue" multiple placeholder="全部状态" >
                        <el-option v-for="item in statusOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </p>
            </div>
            <div class="column ">
                <p><span>单据类型</span>
                <el-select v-model="docType" placeholder="">
                    <el-option v-for="item in docOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select> 
                </p>
                <p><span>服务性质</span>
                <el-select v-model="nature" placeholder="请选择">
                    <el-option v-for="item in natureOptions" :key="item.value" :label="item.label" :value="item.value" ></el-option>
                </el-select> 
                </p>
            </div>
            <div class="column">
                <p><span>姓名/单位</span><el-input v-model.trim="nameValue" placeholder="姓名/单位"  ></el-input></p>
                <p><span>车牌/品牌</span><el-input v-model.trim="carValue" placeholder="车牌/品牌"  ></el-input></p>
            </div>
            <div class="column text_r">
                <p><span>手机号</span><el-input v-model.trim="telphoneValue" placeholder="手机号"  value="number"></el-input></p>
                 <p><span>编号/顾问</span><el-input v-model="numberValue" placeholder="编号/顾问" ></el-input></p>
            </div>
            <div class="column is-1"><a class="button s_search_but"><i class="icon iconfont icon-sousuo-sousuo"></i></a></div>
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
    var pastDate=new Date();
    pastDate.setMonth(pastDate.getMonth()-3);
    export default{
        
        data: function () {
            return {
                nowDate:[pastDate,new Date()],
                docType:'无线',
                docOptions:[
                    {value:'00',label:'无显'},
                    {value:'a',label:'综合服务单'},
                    {value:'b',label:'工时快速单'},
                    {value:'c',label:'配件销售单'},
                    {value:'d',label:'配件批发单'}
                ],
                nature:'',
                natureOptions:[
                    {value:'00',label:'正常服务'},
                    {value:'a',label:'保险'},
                    {value:'b',label:'返工'},
                    {value:'c',label:'索赔'},
                    {value:'d',label:'免单'}
                ],
                nameValue:'',
                telphoneValue:'',
                carValue:'',
                numberValue:'',
                StatusValue:[],
                statusOptions:[
                    {value:'1',label:'报价'},
                    {value:'2',label:'施工'},
                    {value:'3',label:'等待报价'},
                    {value:'4',label:'完工'},
                    {value:'5',label:'已结算'},
                    {value:'6',label:'服务取消'}
                    ]
            }
        }
    }
</script>
