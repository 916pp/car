<template>
    <div class="serviceBillingItem">
        vvv
    </div>
</template>
<script>
     import Vue from 'vue';
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
        mounted: function() {
            window.eventBus.$on('test', func => {
                func(this.test);
            });
        },
        data: function () {
            return {
                test:[{'ee':'11'},{'rrt':'ddf','gg':'rr'}],
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
                    startTime:[
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
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
                ]
            }
        }
    }
</script>
