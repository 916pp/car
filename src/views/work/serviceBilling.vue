<template>
    <div class="serviceBilling">
        <div class="columns se_bg_1 mar_20">
            <div class="column">
                <span>编码：</span>
            </div>
        </div>
        <el-form :model="client" label-width="100px" ref="client" :rules="rules" class="demo-ruleForm">
        <div class="columns is-marginless">
            <div class="column se_tab">
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
                            <div class="column is-paddingless is-4">
                                <el-form-item label="服务顾问:" :label-width="formLabelWidth" prop="consultant">
                                     <el-select v-model="client.consultant"  >
                                        <el-option v-for="item in consultanOptions" :key="item.value" :label="item.label" :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                            <div class="column is-paddingless">
                                <el-form-item label="服务性质:" :label-width="formLabelWidth" prop="nature">
                                    <el-select v-model="client.nature"  >
                                        <el-option v-for="item in natureOptions" :key="item.value" :label="item.label" :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                            
                        </div>
                        <div class="columns is-marginless is-paddingless">
                            <div class="column is-paddingless">
                                <el-form-item label="送修人:" :label-width="formLabelWidth" >
                                     <el-input v-model.trim="client.repair" auto-complete="off"  ></el-input>
                                </el-form-item>
                            </div>
                            <div class="column is-paddingless">
                                <el-form-item label="送修人电话:" :label-width="formLabelWidth">
                                    <el-input  v-model.number.trim="client.repairNum" auto-complete="off" ></el-input>
                                </el-form-item>
                            </div>
                            <div class="column is-paddingless">
                                <el-form-item label="提醒车主：" :label-width="formLabelWidth">
                                    <el-checkbox-group v-model="client.remind">
                                        <el-checkbox label="重要物品带走" name="remind"></el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>
                            </div>
                        </div>
                         <div class="columns is-marginless">
                            <div class="column is-paddingless is-4">
                                <el-form-item label="客户来源:" :label-width="formLabelWidth">
                                     <el-select v-model="client.source"  >
                                        <el-option v-for="item in sourceOptions" :key="item.value" :label="item.label" :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                            <div class="column is-paddingless address">
                                <el-form-item label="顾客地址:" :label-width="formLabelWidth" >
                                    <el-input v-model.trim="client.address" auto-comlete='off'></el-input>
                                </el-form-item>
                            </div>
                            
                        </div>
                        <div class="columns is-marginless">
                            <div class="column is-paddingless">
                                <el-form-item label="开始时间：" :label-width="formLabelWidth">
                                    <el-date-picker v-model="client.startTime" type="datetime" placeholder='请选择日期和时间'></el-date-picker>
                                </el-form-item>
                            </div>
                             <div class="column is-paddingless">
                                <el-form-item label="预计完工时间：" :label-width="formLabelWidth" >
                                    <el-date-picker v-model="client.predictTime" type="datetime" placeholder='请选择日期和时间'></el-date-picker>
                                </el-form-item>
                            </div>
                             <div class="column is-paddingless">
                                <el-form-item label="完工时间：" :label-width="formLabelWidth" >
                                    <el-date-picker v-model="client.finishTime" type="datetime" placeholder='请选择日期和时间'></el-date-picker>
                                </el-form-item>
                            </div>
                        </div>
                        <div class="columns is-marginless">
                            <div class="column is-paddingless">
                                <el-form-item label="服务类型：" :label-width="formLabelWidth">
                                    <el-checkbox-group v-model="client.type">
                                        <el-checkbox label="保养" name="type"></el-checkbox>
                                        <el-checkbox label="钣喷" name="type"></el-checkbox>
                                        <el-checkbox label="美容" name="type"></el-checkbox>
                                        <el-checkbox label="洗车" name="type"></el-checkbox>
                                        <el-checkbox label="机修" name="type"></el-checkbox>
                                        <el-checkbox label="精品" name="type"></el-checkbox>
                                        <el-checkbox label="改修" name="type"></el-checkbox>
                                        <el-checkbox label="其他" name="type"></el-checkbox>
                                        <el-checkbox label="改装" name="type"></el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="车辆信息">车辆信息</el-tab-pane>
                    <el-tab-pane label="车检报告">车检报告</el-tab-pane>
                </el-tabs>
            
            </div>
        </div>
        <div class="columns mar_rl10 search_bg se_label">
            <div class="column">
                <el-form-item label="故障描述" :label-width="textareaLabelWidth">
                    <el-input v-model="client.error" type='textarea'></el-input>
                </el-form-item>
            </div>
            <div class="column">
                <el-form-item label="维修建议" :label-width="textareaLabelWidth">
                    <el-input v-model="client.service" type='textarea'></el-input>
                </el-form-item>
            </div>
        </div>
         <div class="columns mar_rl10 search_bg se_label">
            <div class="column">
                <el-form-item label="出车报告" :label-width="textareaLabelWidth">
                    <el-input v-model="client.lecture" type='textarea'></el-input>
                </el-form-item>
            </div>
            <div class="column">
                <el-form-item label="客户要求" :label-width="textareaLabelWidth">
                    <el-input v-model="client.mandate" type='textarea'></el-input>
                </el-form-item>
            </div>
        </div>
        <div class="columns mar_rl10 search_bg se_label">
            <div class="column">
                <el-form-item label="备注" :label-width="textareaLabelWidth">
                    <el-input v-model="client.Remarks" type='textarea'></el-input>
                </el-form-item>
            </div>
        </div>
        <div class="columns mar_rl10 search_bg se_submit">
            <div class="column">
               <a class="button se_submitBut" @click="submitInfo"><span>保</span><span>存</span></a>
            </div>
        </div>
        </el-form>
        <serviceBillingItem @save='submitInfo'></serviceBillingItem>
        <div class="columns se_bottom search_bg is-marginless">
            <div class="column ">
                <span>服务进度：</span>
            </div>
            <div class="column has-text-right	">
                <a class="button">施工</a>
            </div>
        </div>
    </div>
</template>
<script>
     import Vue from 'vue';
     import serviceBillingItem from './serviceBillingItem.vue'
   import {Select,Option,DatePicker,Input,MessageBox, Message,Tabs,TabPane,Form,FormItem,Col,CheckboxGroup,Checkbox} from 'element-ui';
   Vue.component(CheckboxGroup.name, CheckboxGroup);
   Vue.component(Checkbox.name, Checkbox);
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
        components:{
            serviceBillingItem
        },
        data: function () {
            return {
               client:{
                    name:'',phone:'',carNumber:'',consultant:'',nature:'正常服务',repair:'',repairNum:'',remind:[],source:'直接到店',address:'',
                    startTime:'',predictTime:'',finishTime:'',type:[],
                    error:'',service:'',lecture:'',mandate:'',Remarks:''
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
                    consultant:[
                        { required: true, message: '请选择服务顾问', trigger: 'change' }
                    ],
                    nature:[
                        { required: true, message: '请选择服务性质', trigger: 'change' }
                    ]
                },
                formLabelWidth:'120px',
                textareaLabelWidth:'50px',
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
                ],
                ServiceBillingItme:''
            }
        },
        methods:{
            getServiceBillingItme(e){
                this.ServiceBillingItme=e;
                console.log(this.ServiceBillingItme[0].ee);
            },
            submitInfo(){
                window.eventBus.$emit('test',this.getServiceBillingItme);
            }
        }
    }
</script>
