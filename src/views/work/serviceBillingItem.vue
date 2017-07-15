<template>
    <div class="serviceBilling mar_t20l10">
        <h2>服务项目</h2>
        <el-form :model="service" :rules="rules" ref="service">
        <div class="columns is-marginless">
            <el-table :data="serviceTable" border class="table">
                <el-table-column label="编码" width="40" >
                    <template scope="scope">
                        <span>{{scope.row.id}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="名称" width="290" class="textL">
                    <template scope='scope'>
                        <span>{{scope.row.name}}</span><a class="button" @click="addAccessories(scope.$index,serviceTable)" v-show="scope.row.showAccessories"><i class="icon iconfont icon-icon19"></i>配件</a>
                    </template>
                </el-table-column>
                <el-table-column label="项目类型" prop="type" width="80"></el-table-column>
                <el-table-column label="收费类型" prop="toll" width="80"></el-table-column>
                <el-table-column label="单价"  width="60" >
                    <template scope="scope">
                        <el-input v-model="scope.row.price" v-show="scope.row.showPrice"></el-input>
                        <span v-show="!scope.row.showPrice">{{scope.row.price}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="数量" width="40">
                    <template scope="scope">
                        <el-input v-model="scope.row.number" v-show="scope.row.showNumber"></el-input>
                        <span v-show="!scope.row.showNumber">{{scope.row.number}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="折扣" width="80">
                    <template scope="scope">
                        <el-input v-model="scope.row.discounted" v-show="scope.row.showDiscounted">
                            <template slot="append">%</template>
                        </el-input>
                        <span v-show="!scope.row.showDiscounted">{{scope.row.discounted}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="金额" width="60">
                    <template scope="scope">
                        <el-input v-model="scope.row.money" v-show="scope.row.showMoney"></el-input>
                        <span v-show="!scope.row.showMoney">{{scope.row.money}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="施工员" width="100">
                    <template scope="scope">
                        <el-select v-model="scope.row.worker" placeholder="请选择" v-show="scope.row.showWorker">
                            <el-option-group v-for="group in workerOptions" :key="group.label" :label="group.label">
                                <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                            </el-option-group>
                        </el-select>
                        <span v-show="!scope.row.showWorker">{{scope.row.workerLabel}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="销售" width="100">
                    <template scope="scope">
                        <el-select v-model="scope.row.sales" placeholder="请选择" v-show="scope.row.showSales">
                            <el-option-group v-for="group in workerOptions" :key="group.label" :label="group.label">
                                <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                            </el-option-group>
                        </el-select>
                        <span v-show="!scope.row.showSales">{{scope.row.salesLabel}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="130">
                    <template scope="scope">
                        <a class="button" @click="saveBut(scope.$index,scope.row)" v-show="scope.row.showButton">确定</a>
                        <a class="button" @click="updateBut(scope.$index,scope.row)" v-show="!scope.row.showButton">修改</a>
                        <a class="button" @click.native.prevent="deleteRow(scope.$index,serviceTable)">删除</a>
                    </template>
                </el-table-column>
            </el-table>
            
        </div>
        </el-form>
    </div>
</template>
<script>
     import Vue from 'vue';
     require('../../css/iconfont.css');
   import {Select,Option,OptionGroup,DatePicker,Input,MessageBox, Message,Tabs,TabPane,Form,FormItem,Col,TableColumn,Table} from 'element-ui';
   Vue.component(TableColumn.name, TableColumn);
   Vue.component(Table.name, Table);
   Vue.component(MessageBox.name, MessageBox);
   Vue.component(Message.name, Message);
   Vue.component(Select.name, Select);
   Vue.component(Option.name, Option);
   Vue.component(OptionGroup.name, OptionGroup);
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
                    {id:'1',name:'大众机油格068115561B',showAccessories:false,type:'百姓',toll:'试试',
                    price:'900',showPrice:false,number:'2',showNumber:false,discounted:'0',showDiscounted:false,money:'900',showMoney:false,
                    worker:'里么非',workerLabel:'张熙玲',showWorker:false,sales:'ddd3',salesLabel:'d',showSales:false,showButton:false},
                    {id:'2',name:'ffqqq',showAccessories:true,type:'得到百姓',toll:'试试',
                    price:'60',showPrice:true,number:'12',showNumber:true,discounted:'0',showDiscounted:true,money:'340',showMoney:true,
                    worker:'',showWorker:true,sales:'',showSales:true,showButton:true},

                ],
                workerOptions:[
                    {label:'销售',options:[{label:'d',value:'ddd3'},{label:'ee',value:'90e'}]},
                    {label:'机组',options:[{label:'张熙玲',value:'里么非'}]}
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
        },
        methods:{
        deleteRow(index,rows){
               console.log(index);
                rows.splice(index,1);
            },
            saveBut(index,row){
                //console.log(row.price);
                row.showButton=false;
                row.showDiscounted=false;
                row.showMoney=false;
                row.showNumber=false;
                row.showPrice=false;
                row.showSales=false;
                row.showWorker=false;

            },
            updateBut(index,row){
                row.showButton=true;
                row.showDiscounted=true;
                row.showMoney=true;
                row.showNumber=true;
                row.showPrice=true;
                row.showSales=true;
                row.showWorker=true;
            },
            addAccessories(index,rows){
                console.log(index);
                let item= {id:'3',name:'b',type:'ee',toll:'试试',
                    price:'60',showPrice:true,number:'12',showNumber:true,discounted:'0',showDiscounted:true,money:'340',showMoney:true,
                    worker:'',showWorker:true,sales:'',showSales:true,showButton:true}
                rows.splice(index+1,0,item);
                console.log(rows[0].id);                console.log(rows[1].id);                console.log(rows[2].id);


            }
        }
    }
</script>
