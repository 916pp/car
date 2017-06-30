<template>
    <div class="reservation">
       <div class="columns search_bg mar_20" >
           <div class="column is-2">
                <a class="button r_but" @click="reserveStatus=true">添加预约单</a>
                <el-dialog title="新预约单" :visible.sync="reserveStatus">
                    <el-form :model="reserve" label-width="100px" ref="reserve" :rules="reserveFun" class="demo-ruleForm">
                        <el-form-item label="车主姓名:" :label-width="formLabelWidth" prop="name">
                            <el-input v-model.trim="reserve.name" auto-complete="off" placeholder="请输入车主姓名" ></el-input>
                        </el-form-item>
                        <el-form-item label="手机号码:" :label-width="formLabelWidth" prop="phone">
                            <el-input  v-model.number.trim="reserve.phone" auto-complete="off" placeholder="请输入手机号码"></el-input>
                        </el-form-item>
                        <el-form-item label="车牌号：" :label-width="formLabelWidth" prop="carNumber">
                           <el-input v-model.trim="reserve.carNumber" auto-complete="off" placeholder="请输入车牌号" ></el-input>
                        </el-form-item>
                        <el-form-item label="车辆品牌：" :label-width="formLabelWidth" prop="brand">
                           <el-input v-model.trim="reserve.brand" auto-complete="off" placeholder="请输入车辆品牌" ></el-input>
                        </el-form-item>
                        <el-form-item label="车系：" :label-width="formLabelWidth" prop="car">
                           <el-input v-model.trim="reserve.car" auto-complete="off" placeholder="请输入车系" ></el-input>
                        </el-form-item>
                        <el-form-item label="预约服务时间：" :label-width="formLabelWidth" required>
                            <el-col :span="11">
                                <el-form-item prop="time1">
                                    <el-date-picker type="date" placeholder="请选择日期" v-model="reserve.time1"></el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="11">
                                <el-form-item prop="time2">
                                    <el-time-picker type="fixed-time" placeholder="请选择时间" v-model="reserve.time2"></el-time-picker>
                                </el-form-item>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="服务方式：" :label-width="formLabelWidth" prop="func">
                           <el-radio-group v-model="reserve.func">
                               <el-radio label="到店"></el-radio>
                               <el-radio label="外出"></el-radio>
                           </el-radio-group>
                        </el-form-item>
                        <el-form-item label="服务类型：" :label-width="formLabelWidth" prop="type">
                           <el-checkbox-group v-model="reserve.type">
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
                        <el-form-item label="目前状态：" :label-width="formLabelWidth">
                           <el-input v-model.trim="reserve.status" auto-complete="off" :disabled="true"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('reserve')">提交</el-button>
                            <el-button @click="resetForm('reserve')">重置</el-button>
                        </el-form-item>
                    </el-form>
                </el-dialog>
           </div>
            <div class="column  r_search_m">
                
                <el-select v-model="selectValue"  size='small' >
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-date-picker class="r_search_date" v-model="nowDate"  size='small' type="daterange" range-separator='至'  ></el-date-picker>
            </div>
            <div class="column  pad_l0">
            <el-input v-model='search' size='small'>
                <el-button slot='append' icon="search" @click="getSearch"></el-button>
            </el-input>
            </div>
            <div class="column is-2">
           </div>
       </div> 
       <div>
            <ul class="r_item">
                <li class="">
                    <p class="r_li_img"><img src="../../images/huaqian.png" class="r_item_icon"></p>
                    <ul class="r_row">
                        <li>
                            <span class="r_listTitle">车主姓名：</span>
                             <span class="r_listCont r_color1">威威</span>

                        </li>
                        <li>
                            <span class="r_listTitle">手机号码：</span>
                             <span class="r_listCont ">18277176178</span>

                        </li>
                        <li>
                            <span class="r_listTitle">车辆信息：</span>
                             <span class="r_listCont ">桂A9999 奥迪 A6L(国产)</span>

                        </li>
                        <li>
                            <span class="r_listTitle">预约服务时间：</span>
                             <span class="r_listCont ">04月12 16:00</span>

                        </li>
                        
                        <li>
                            <span class="r_listTitle">服务方式：</span>
                             <span class="r_listCont ">到店</span>

                        </li>
                        <li >
                            <span class="r_listTitle">目前状态：</span>
                             <span class="r_listCont r_color2">未确认
                                 <el-button @click='openStatus("w")'><i class="icon iconfont icon-bianji r_edit"></i></el-button>
                                 <el-dialog title="预约记录状态修改" :visible.sync="statusForm" :close-on-click-modal="false" size="tiny" class="r_statuc">
                                    <p><a :class="[statusMay=='w'?'r_edit_active':'','r_edit_but']"  @click="updateStatus('w')">
                                            <i class="icon iconfont icon-weiqueren r_edit_ic"></i>
                                            <h1>未确认</h1>
                                        </a>
                                        <a :class="[statusMay=='y'?'r_edit_active':'','r_edit_but']"  @click="updateStatus('y')">
                                            <i class="icon iconfont icon-queren r_edit_ic"></i>
                                            <h1>已确认</h1>
                                        </a>
                                        <a :class="[statusMay=='q'?'r_edit_active':'','r_edit_but']"  @click="updateStatus('q')">
                                            <i class="icon iconfont icon-quxiao r_edit_ic"></i>
                                            <h1>取消</h1>
                                        </a>
                                    </p>
                                    <div slot="footer" class="">
                                        <el-button @click="statusForm = false">取 消</el-button>
                                        <el-button @click="closeStatus">确 定</el-button>
                                    </div>
                                 </el-dialog>
                            </span>

                        </li>
                        <li v-show=but_type><a class="button r_button">查看服务</a></li>
                        <li v-show=but_type><a class="button r_button1">开始服务</a></li>
                    </ul>
                </li>



                
            </ul>
        </div>
        <div class="page">
            <el-pagination @size-change='pageNumber' @current-change='nowPage' 
            :current-page="currentPage" :page-sizes="[5,10,15,20]" :page-size="5" layout="prev,pager,next,sizes,total" :total="100"></el-pagination>
        </div>      
    </div>
</template>
<script>
   //require('../../css/bulma.css');
   
   import Vue from 'vue';
   import vueResource from 'vue-resource';
   import {Select,Option,DatePicker,Input,Button,Dialog,Pagination,Form,FormItem,Col,TimePicker,RadioGroup,Radio,CheckboxGroup,Checkbox} from 'element-ui';
   Vue.component(CheckboxGroup.name, CheckboxGroup);
   Vue.component(Checkbox.name, Checkbox);
   Vue.component(Radio.name, Radio);
   Vue.component(RadioGroup.name, RadioGroup);
   Vue.component(Col.name, Col);
   Vue.component(TimePicker.name, TimePicker);
   Vue.component(Dialog.name, Dialog);
   Vue.component(Form.name, Form);
   Vue.component(FormItem.name, FormItem);
   Vue.component(Select.name, Select);
   Vue.component(Option.name, Option);
   Vue.component(DatePicker.name, DatePicker);
   Vue.component(Input.name, Input);
   Vue.component(Button.name, Button);
   Vue.component(Pagination.name, Pagination);

  Vue.use(vueResource);

    var pastDate=new Date();
    pastDate.setMonth(pastDate.getMonth()-6);
    
                   

    export default  {
        created:function(){
            window.eventBus.$on('change', e => {
                console.log(1111, e);
            });
            
                // alert(111);
            
        },
        data: function () {
            return {
                options:[
                    {value:'1',label:'未确认'},
                    {value:'2',label:'已确认'},
                    {value:'3',label:'取消'},
                    {value:'4',label:'全部'}
                ],
                selectValue:'未确认',
                nowDate:[pastDate,new Date()],
                search:'',
                but_type:true,
                currentPage:1,
                statusForm:false,
                statusEdit:'',
                statusMay:'',
                reserveStatus:false,
                reserve:{
                    name:'',phone:'',carNumber:'',brand:'',car:'',time1:'',time2:'',func:'',type:[],status:'未确认'
                },
                reserveFun:{
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
        },
        methods:{
            getSearch(){
                    
                    var arrDate=this.nowDate;
                    var startDate='',arrStart=arrDate[0];
                    var endDate='',arrEnd=arrDate[1];
                    startDate=arrStart.getFullYear();

                console.log( startDate);
                console.log(this.search+'----------'+this.nowDate+'-----------'+this.selectValue);
            },
            pageNumber(val){
                console.log('pageNumber'+val);
            },
            nowPage(val){
                console.log('nowPage'+val);
            },
            updateStatus(e){
                this.statusMay=e;
            },
            openStatus(e){
                var vm=this;
                vm.statusMay=e;
                vm.statusForm=true;
            },
            closeStatus(){
                var vm=this;
               // vm.statusMay;
                vm.statusForm=false;
            },
            submitForm(formName){
                //debugger;
               // console.log(formName);
                this.$refs[formName].validate((valid)=>{
                    if(valid){
                        console.log('ok');
                    }else{
                        console.log('error');
                        return false;
                    }
                })
            },
            resetForm(formName){
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
