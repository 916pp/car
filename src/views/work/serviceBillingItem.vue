<template>
    <div class="serviceBilling mar_t20l10">
        <h2>服务项目</h2>
        <el-form :model="service" :rules="rules" ref="service">
        <div class="columns is-marginless">
            <el-table :data="serviceTable" border class="table">
                <el-table-column label="编码" width="50">
                    <template scope="scope">
                        <span>{{scope.row.id}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="名称" width="150">
                    <template scope='scope'>
                        <span>{{scope.row.name}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="项目类型" prop="type" width="80"></el-table-column>
                <el-table-column label="收费类型" prop="toll" width="80"></el-table-column>
                <el-table-column label="单价"  width="80" >
                    <template scope="scope">
                        <el-input v-model="scope.row.price"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="数量" width="60">
                    <template scope="scope">
                        <el-input v-model="scope.row.number"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="折扣" width="100">
                    <template scope="scope">
                        <el-input v-model="scope.row.discounted"></el-input>%
                    </template>
                </el-table-column>
                <el-table-column label="金额" width="100">
                    <template scope="scope">
                        <el-input v-model="scope.row.money"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="施工员" width="130">
                    <template scope="scope">
                        <el-select v-model="scope.row.worker" placeholder="请选择">
                            <el-option v-for="item in workerOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </template>
                </el-table-column>
            </el-table>
            
        </div>
        </el-form>
    </div>
</template>
<script>
     import Vue from 'vue';
   import {Select,Option,DatePicker,Input,MessageBox, Message,Tabs,TabPane,Form,FormItem,Col,TableColumn,Table} from 'element-ui';
   Vue.component(TableColumn.name, TableColumn);
   Vue.component(Table.name, Table);
   Vue.component(MessageBox.name, MessageBox);
   Vue.component(Message.name, Message);
   Vue.component(Select.name, Select);
   Vue.component(Option.name, Option);
   Vue.component(DatePicker.name, DatePicker);
   Vue.component(Input.name, Input);
   Vue.component(Tabs.name, Tabs);
   Vue.component(TabPane.name, TabPane);
   Vue.component(Col.name, Col);
   Vue.component(Form.name, Form);
   Vue.component(FormItem.name, FormItem);
    export default{
        mounted: function() {
            window.eventBus.$on('test', func => {
                func(this.test);
            });
        },
        data: function () {
            return {
                test:[{'ee':'11'},{'rrt':'ddf','gg':'rr'}],
               service:{
                    name:'',phone:'',carNumber:'',consultant:'',nature:'正常服务',repair:'',repairNum:''
                },
                rules:{
                    name:[
                        {required:true,message:'请输入车主姓名',trigger:'blur'},
                        {min:2,max:35,message:'请输入正确的信息',trigger:'blur'}
                    ],
                    phone:[
                        {required:true,message:'请输入手机号码',trigger:'blur'},
                        {min:11,max:11,message:'请输入11位正确的手机号码',trigger:'blur'},
                        {type:'number',message:'只能输入数字',trigger:'blur'}
                    ]
                },
                serviceTable:[
                    {id:'1',name:'qqq',type:'百姓',price:'90',number:'2',discounted:'0',money:'900'},
                    {id:'2',name:'ffqqq',type:'ww百姓',price:'77',number:'12',discounted:'0',money:'879'},

                ],
                workerOptions:[
                    {label:'d',value:'ddd3'}
                ],
                consultanOptions:[
                    {value:'1',label:'李'},
                    {value:'2',label:'张三'}
                ],
                natureOptions:[
                    {value:'1',label:'正常服务'},
                    {value:'2',label:'保险'},
                    {value:'3',label:'返工'},
                    {value:'4',label:'索赔'},
                    {value:'5',label:'免单'}
                    
                ],
                sourceOptions:[
                    {value:'1',label:'直接到店'},
                    {value:'2',label:'网络平台'},
                    {value:'3',label:'客户介绍'},
                    {value:'4',label:'商家联盟'},
                    {value:'5',label:'其他'}
                ]
            }
        }
    }
</script>
