<template>
    <div class="serviceBilling">
        <div class="columns se_bg_1 mar_20">
            <div class="column">
                <span>编码：</span>
            </div>
        </div>
        <div class="columns is-marginless">
            <div class="column se_tab">
             <el-form :model="client" label-width="100px" ref="client" :rules="rules" class="demo-ruleForm">
                <el-tabs type="border-card">
                    <el-tab-pane label="顾客信息">
                        <div class="columns is-marginless is-paddingless">
                            <div class="column is-paddingless">
                                <el-form-item label="车主姓名:" :label-width="formLabelWidth" prop="name">
                                     <el-input v-model.trim="client.name" auto-complete="off" placeholder="请输入车主姓名" ></el-input>
                                </el-form-item>
                            </div>
                            <div class="column is-paddingless">
                                <el-form-item label="手机号码:" :label-width="formLabelWidth" prop="phone">
                                    <el-input  v-model.number.trim="client.phone" auto-complete="off" placeholder="请输入手机号码"></el-input>
                                </el-form-item>
                            </div>
                            <div class="column is-paddingless">
                                <el-form-item label="车牌号：" :label-width="formLabelWidth" prop="carNumber">
                                     <el-input v-model.trim="client.carNumber" auto-complete="off" placeholder="请输入车牌号" ></el-input>
                                </el-form-item>
                            </div>
                        </div>
                         <div class="columns is-marginless">
                            <div class="column is-paddingless">
                                <el-form-item label="车主姓名:" :label-width="formLabelWidth" prop="name">
                                     <el-input v-model.trim="client.name" auto-complete="off" placeholder="请输入车主姓名" ></el-input>
                                </el-form-item>
                            </div>
                            <div class="column is-paddingless">
                                <el-form-item label="手机号码:" :label-width="formLabelWidth" prop="phone">
                                    <el-input  v-model.number.trim="client.phone" auto-complete="off" placeholder="请输入手机号码"></el-input>
                                </el-form-item>
                            </div>
                            <div class="column is-paddingless">
                                <el-form-item label="车牌号：" :label-width="formLabelWidth" prop="carNumber">
                                     <el-input v-model.trim="client.carNumber" auto-complete="off" placeholder="请输入车牌号" ></el-input>
                                </el-form-item>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="车辆信息">车辆信息</el-tab-pane>
                    <el-tab-pane label="实录照片">实录照片</el-tab-pane>
                    <el-tab-pane label="车检报告">车检报告</el-tab-pane>
                </el-tabs>
            </el-form>
            </div>
        </div>
    </div>
</template>
<script>
     import Vue from 'vue';
   import {Select,Option,DatePicker,Input,MessageBox, Message,Tabs,TabPane,Form,FormItem,Col} from 'element-ui';
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
        
        data: function () {
            return {
               client:{
                    name:'',phone:'',carNumber:'',brand:'',car:'',time1:'',time2:'',func:'',type:[],status:'未确认'
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
                    ],
                    carNumber:[
                        {required:true,message:'请输入车牌号',trigger:'blur'},
                        {min:7,max:7,message:'请输入正确的信息',trigger:'blur'}
                    ],
                    brand:[
                        {required:true,message:'请输入车辆品牌',trigger:'blur'},
                        {min:2,max:40,message:'请输入正确的信息',trigger:'blur'}
                    ],
                    car:[
                        {required:true,message:'请输入车系',trigger:'blur'},
                        {min:2,max:40,message:'请输入正确的信息',trigger:'blur'}
                    ],
                    time1:[
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    time2:[
                         { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    func:[
                        { required: true, message: '请选择服务方式', trigger: 'change' }
                    ],
                    type:[
                        { type: 'array', required: true, message: '请至少选择一个服务类型', trigger: 'change' }
                    ]
                },
                formLabelWidth:'120px'
            }
        }
    }
</script>
