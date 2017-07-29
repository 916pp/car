<template>
    <div class="serviceBilling mar_t20l10">
        <h2>服务项目</h2>
        <el-form :model="service" :rules="rules" ref="service">
        <div class="columns is-marginless">
            <el-table :data="serviceTable" border :row-key="getRowKey" :expand-row-keys="expands">
                <el-table-column type="expand" width="20" >
                    <template scope='Parents'>
                        <el-table :data="Parents.row.children" :show-header="false">
                                <el-table-column width="34" >
                                    <template scope="scope">
                                        <span>{{(Parents.$index+1)+'.'+(scope.$index+1)}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column  class="textL">
                                    <template scope='scope'>
                                        <span>{{scope.row.name}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column  prop="type" width="80"></el-table-column>
                                <el-table-column prop="toll" width="70"></el-table-column>
                                <el-table-column   width="60" >
                                    <template scope="scope">
                                        <el-input v-model="scope.row.price" v-show="scope.row.showPrice" @blur="updateInput('other',scope.row)"></el-input>
                                        <span v-show="!scope.row.showPrice">{{scope.row.price}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column  width="35">
                                    <template scope="scope">
                                        <el-input v-model="scope.row.number" v-show="scope.row.showNumber" @blur="updateInput('other',scope.row)"></el-input>
                                        <span v-show="!scope.row.showNumber">{{scope.row.number}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column  width="80">
                                    <template scope="scope">
                                        <el-input v-model="scope.row.discounted" v-show="scope.row.showDiscounted" @blur="updateInput('other',scope.row)">
                                            <template slot="append">%</template>
                                        </el-input>
                                        <span v-show="!scope.row.showDiscounted">{{scope.row.discounted}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column  width="60">
                                    <template scope="scope">
                                       
                                        <span>{{scope.row.money}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column  width="95">
                                    <template scope="scope">
                                        <el-select v-model="scope.row.worker" multiple placeholder="请选择" v-show="scope.row.showWorker">
                                            <el-option-group v-for="group in workerOptions" :key="group.label" :label="group.label">
                                                <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                                            </el-option-group>
                                        </el-select>
                                        <span v-show="!scope.row.showWorker">{{scope.row.workerLabel}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column  width="95">
                                    <template scope="scope">
                                        <el-select v-model="scope.row.sales" placeholder="请选择" v-show="scope.row.showSales">
                                            <el-option-group v-for="group in workerOptions" :key="group.label" :label="group.label">
                                                <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                                            </el-option-group>
                                        </el-select>
                                        <span v-show="!scope.row.showSales">{{scope.row.salesLabel}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column  width="130">
                                    <template scope="scope">
                                        <a class="button" @click="saveBut(scope.$index,scope.row)" v-show="scope.row.showButton">确定</a>
                                        <a class="button" @click="updateBut(scope.$index,scope.row)" v-show="!scope.row.showButton">修改</a>
                                        <a class="button" @click="deleteRow(scope.$index,Parents.row.children)">删除</a>
                                    </template>
                                </el-table-column>
                        </el-table>
                    </template>                   
                </el-table-column>
                <el-table-column label="编码" width="35" type="index" :label-class-name="aaa">
                    <template scope="scope">
                        <span>{{scope.$index+1}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="名称"  class="textL">
                    <template scope='scope'>
                        <span>{{scope.row.name}}</span><a class="button" @click="addAccessories(scope.$index,serviceTable)" ><i class="icon iconfont icon-icon19"></i>配件</a>
                    </template>
                </el-table-column>
                <el-table-column label="项目类型" prop="type" width="80"></el-table-column>
                <el-table-column label="收费类型" prop="toll" width="70"></el-table-column>
                <el-table-column label="单价"  width="60" >
                    <template scope="scope">
                        <el-input v-model="scope.row.price" v-show="scope.row.showPrice" @blur="updateInput('time',scope.row)"></el-input>
                        <span v-show="!scope.row.showPrice">{{scope.row.price}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="数量" width="35">
                    <template scope="scope">
                        <el-input v-model="scope.row.number" v-show="scope.row.showNumber" @blur="updateInput('time',scope.row)"></el-input>
                        <span v-show="!scope.row.showNumber">{{scope.row.number}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="折扣" width="80">
                    <template scope="scope">
                        <el-input v-model="scope.row.discounted" v-show="scope.row.showDiscounted" @blur="updateInput('time',scope.row)">
                            <template slot="append">%</template>
                        </el-input>
                        <span v-show="!scope.row.showDiscounted">{{scope.row.discounted}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="金额" width="60">
                    <template scope="scope">
                       
                        <span>{{scope.row.money}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="施工员" width="95">
                    <template scope="scope">
                        <el-select v-model="scope.row.worker" multiple  placeholder="请选择" v-show="scope.row.showWorker">
                            <el-option-group v-for="group in workerOptions" :key="group.label" :label="group.label">
                                <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                            </el-option-group>
                        </el-select>
                        <span v-show="!scope.row.showWorker">{{scope.row.workerLabel}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="销售" width="95">
                    <template scope="scope">
                        <el-select v-model="scope.row.sales"  placeholder="请选择" v-show="scope.row.showSales">
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
                        <a class="button" @click="deleteRow(scope.$index,serviceTable)">删除</a>
                    </template>
                </el-table-column>
            </el-table>
            
        </div>
        <div class="columns is-marginless workerBut">
            <div class="column">
             <a class="button" @click="selectVisible=true">选择工时</a><a class="button">添加工时</a>
             </div>
        </div>
        <div class="columns is-marginless">
            <div class="column is-4">
                <el-form-item label="质检员：" prop="check">
                <el-select v-model="total.check" placeholder="请选择" >
                            <el-option-group v-for="group in workerOptions" :key="group.label" :label="group.label">
                                <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                            </el-option-group>
                </el-select>
                </el-form-item>
            </div>
            <div class="column ">
            <span class="total">总工时费：{{total.time}}</span>
            <span class="total">总配件费：{{total.accessories}}</span>
            <span class="total">总费用：<b class="color1">{{total.money}}</b></span>
            </div>
        </div>
        </el-form>

        <el-dialog title="选择工时" :visible.sync="selectVisible" size="large">
            <div class="columns is-marginless">
                <div class="column is-9">
                    <div class="columns is-marginless border1">
                        <div class="column is-3 has-text-centered">
                            <p>
                                <el-input placeholder="请输入搜索名称" icon="search" v-model="searchName" :on-icon-click="handleIconClick"></el-input>
                            </p>
                            <el-menu default-active="1" class="el-menu-vertical-demo" >
                                
                                <el-menu-item index=item.id  v-for="item in workingHours"
                                :key="item.id" @click="selectAccessories(item.id)" :class="[item.id==clickWorking?'click-active':'']">{{item.name}}</el-menu-item>
                               
                            </el-menu>
                        </div>
                        <div class="column">
                            <el-table ref='objectWorking' :data="workingHoursData" border style="width:100%"  @row-click="selectWorking" >
                                <el-table-column label="名称" class-name='columnLeft'>
                                    <template scope="scope" >
                                        <el-checkbox-group v-model='checkedHours' @change="changeBoxSwitch">
                                            <el-checkbox :label='scope.row.id' :key='scope.row.childName'>{{scope.row.childName}}</el-checkbox>
                                        </el-checkbox-group>
                                    </template>
                                </el-table-column>
                                <el-table-column label="类别" width="80" prop="type">  </el-table-column>
                                <el-table-column label="售价" width="60" >
                                    <template scope='scope'>￥{{scope.row.price}}</template>
                                </el-table-column>
                            </el-table>
                            <el-pagination @size-change="sizeChange" @current-change="currentChange" :current-page.sync="currentPage" :page-size="10"
                            layout="total,prev,pager,next" :total="50" class="workingPage"></el-pagination>
                        </div>
                    </div>
                </div>
                <div class="column border1">
                    <p>您已经选这<span class="">{{resultHourslen}}</span>个工时</p>
                    <ul class='' v-for="child in resultHours">
                        <li class='' v-for="item in child.data">{{item.childName}}</li>
                    </ul>
                   
                </div>
            </div>
            <div slot="footer" class="dialog-footer">
                <a class="button" @click="selectVisible=false">取消</a><a class="button" @click="saveSelectVisible">确定</a>
            </div>
        </el-dialog>
    </div>
</template>
<script>
     import Vue from 'vue';
     require('../../css/iconfont.css');
   import {CheckboxGroup,Checkbox,Select,Option,OptionGroup,DatePicker,Input,MessageBox, Message,Tabs,TabPane,Form,FormItem,Col,TableColumn,Table,Dialog,Menu,MenuItem,Pagination} from 'element-ui';
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
   Vue.component(Dialog.name, Dialog);
   Vue.component(Menu.name, Menu);
   Vue.component(MenuItem.name, MenuItem);
   Vue.component(Pagination.name, Pagination);
    Vue.component(CheckboxGroup.name, CheckboxGroup);
   Vue.component(Checkbox.name, Checkbox);
  
    export default{
        mounted: function() {
            window.eventBus.$on('test', func => {
                func(this.test);
            });
        },
        data: function () {
            return {
                aaa:'aaa',
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
                    ],
                    check:[
                         {required:true,message:'请输入车主姓名',trigger:'blur'},
                        {min:2,max:35,message:'请输入正确的信息',trigger:'blur'}
                    ]
                },
                total:{check:'',time:'',accessories:'',money:''},
                serviceTable:[
                    {id:'0',name:'大众机油格068115561B',type:'百姓',toll:'试试',
                    price:'900',showPrice:false,number:'2',showNumber:false,discounted:'0',showDiscounted:false,money:'900', 
                    worker:['里么非'],workerLabel:'张熙玲',showWorker:false,sales:'ddd3',salesLabel:'d',showSales:false,showButton:false,
                    children:[
                        {id:'0',name:'www',type:'百姓',toll:'试试',
                         price:'900',showPrice:false,number:'2',showNumber:false,discounted:'0',showDiscounted:false,money:'900', 
                         worker:['里么非'],workerLabel:'张熙玲',showWorker:false,sales:'ddd3',salesLabel:'d',showSales:false,showButton:false},
                        {id:'0',name:'e33',type:'百姓',toll:'试试',
                        price:'900',showPrice:false,number:'2',showNumber:false,discounted:'0',showDiscounted:false,money:'900', 
                        worker:['里么非'],workerLabel:'张熙玲',showWorker:false,sales:'ddd3',salesLabel:'d',showSales:false,showButton:false}
                        ]
                    },
                    {id:1,name:'ffqqq',type:'得到百姓',toll:'试试',
                    price:'60',showPrice:true,number:'12',showNumber:true,discounted:'0',showDiscounted:true,money:'340',showMoney:true,
                    worker:'',showWorker:true,sales:'',showSales:true,showButton:true,
                    children:[
                        {id:'21',name:'www',type:'百姓',toll:'试试',
                         price:'900',showPrice:false,number:'2',showNumber:false,discounted:'0',showDiscounted:false,money:'900', 
                         worker:['里么非'],workerLabel:'张熙玲',showWorker:false,sales:'ddd3',salesLabel:'d',showSales:false,showButton:false},
                        {id:'2.2',name:'e33',type:'百姓',toll:'试试',
                        price:'900',showPrice:false,number:'2',showNumber:false,discounted:'0',showDiscounted:false,money:'900', 
                        worker:['里么非'],workerLabel:'张熙玲',showWorker:false,sales:'ddd3',salesLabel:'d',showSales:false,showButton:false}
                        ]
                    }

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
                ],
                getRowKey(row){
                      return row.id;
                },
                expands:[],
                arrNumber:0,
                selectVisible:false,
                clickWorking:'1',
                workingHours:[{name:'保养',id:'1',
                data:[{id:'111',childName:'SDSEEgsss',type:'普通',price:'900'},
                {id:'1211',childName:'vvv',type:'普通',price:'32'}]},
                {name:'洗车',id:'2',
                data:[{id:'21',childName:'洗车',type:'普通',price:'67'},
                {id:'22',childName:'精洗',type:'外发',price:'44'}]},
                {name:'美容',id:'3',
                data:[{id:'31',childName:'装饰',type:'代办',price:'637'},
                {id:'32',childName:'贴膜',type:'外发',price:'464'}]},
                {name:'机修',id:'4',
                data:[{id:'31',childName:'发动机',type:'代办',price:'432'},
                {id:'32',childName:'贴膜',type:'外发',price:'123'}]},
                {name:'精品',id:'5',
                data:[{id:'31',childName:'装饰',type:'代办',price:'33'},
                {id:'32',childName:'贴膜',type:'外发',price:'447'}]},
                {name:'其他',id:'6',
                data:[]}],
                workingHoursData:'',
                resultHours:[],
                NowResultHoursNum:0,
                resultHourslen:0,
                selectHoursLen:0,
                checkedHours:[],
               
                selectWorkingName:'',
                searchName:'',
                currentPage:2               
            }
            
        },
         mounted() {
        // 在这里你想初始化的时候展开哪一行都可以了
        this.expands.push(this.serviceTable[0].id);
        this.workingHoursData=this.workingHours[0].data;
        this.clickWorking=this.workingHours[0].id;
        this.selectWorkingName=this.workingHours[0].name;
        
        //console.log(this.workingHoursData+'====');
    },
        methods:{
        deleteRow(index,rows){
               //console.log(rows[index].id);
               //let id=rows['id'];
              // console.log(!rows.children+'+++');
               //console.log(this.serviceTable[rows[index].id]['children'].length+'===');
              // console.log(index+'--');
                if(index==0 && !rows.children && this.serviceTable[rows[index].id]['children'].length==1)
                {
                    console.log(index+'--');
                    this.expands.splice(rows.id,1);
                } 
                rows.splice(index,1);
                 console.log(this.expands.length);       
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
                let workerOptionsArr=this.selectArr();
                let arrLength=workerOptionsArr.length;
                let worker=row.worker;
               
                let arr=[];
                let workerLeg=worker.length;
                let salesResult='';
                
                for(let i=0;i<arrLength;i++)
                {
                   
                        for(let n=0;n<workerLeg;n++)
                        {
                        if(worker[n]==workerOptionsArr[i].value)
                        {
                            arr.push(workerOptionsArr[i].label);
                        }
                        }
                    

                }

                 
                for(let i=0;i<arrLength;i++)
                {
                    
                        if(row.sales==workerOptionsArr[i].value)
                        {
                            salesResult=workerOptionsArr[i].label;
                        }
                }  
                //console.log(arr);
                row.workerLabel=arr.join(',');

                

                row.salesLabel=salesResult;
            },
            updateBut(index,row){
                row.showButton=true;
                row.showDiscounted=true;
                row.showMoney=true;
                row.showNumber=true;
                row.showPrice=true;
                row.showSales=true;
                row.showWorker=true;
                let workerOptionsArr=this.selectArr();
                let arrLength=workerOptionsArr.length;
                let workerLabel=row.workerLabel.split(',');
                
                let arr=[];
                let salesResult='';
               
                        for(let n=0;n<arrLength;n++)
                        {
                            for(let y=0,length=workerLabel.length;y<length;y++)
                             {       if(workerLabel[y]==workerOptionsArr[n].label)
                                    {
                                        arr.push(workerOptionsArr[n].value);
                                    }
                             }
                        }
                

                for(let i=0;i<arrLength;i++)
                {
                   
                        if(row.salesLabel==workerOptionsArr[i].label)
                        {
                            salesResult=workerOptionsArr[i].value;
                        }
                   
                }

              // console.log(this.selectArr());
                row.worker=arr;
                row.sales=salesResult;
               
                //row.worker=arr;
                
            },
            addAccessories(index,rows){
                
                let item= {id:'0',name:'b',type:'ee',toll:'试试',
                    price:'60',showPrice:true,number:'12',showNumber:true,discounted:'0',showDiscounted:true,money:'340',showMoney:true,
                    worker:'',showWorker:true,sales:'',showSales:true,showButton:true}
               

                rows.splice(index+1,0,item);
                       


            },
            selectArr()
            {
                let workerOptions=this.workerOptions;
                                            
                let workerOptionsLeg=workerOptions.length;
                let arr=[];
                for(let i=0;i<workerOptionsLeg;i++)
                {
                    let optionleg=workerOptions[i].options.length;
                    for(let y=0;y<optionleg;y++)
                    {
                       arr.push(workerOptions[i].options[y]);
                    }

                }

                return arr;

            },
            updateInput(type,row){

              row.money=row.price*row.discounted*0.01*row.number;
              if(type=='time')
              {
                  this.total.time+= row.money;
              }else{
                  this.total.accessories+=row.money;
              }

              this.total.money+=row.money;
              console.log('-----'+row.money)
            },
            handleIconClick(){

            },
            saveSelectVisible(){},
            selectAccessories(id){
               /*选择项目类型*/
                this.clickWorking=id;
                this.selectWorkingName=this.workingHours[id-1].name;
                this.workingHoursData=this.workingHours[id-1].data;
                 this.selectHoursLen=0;
               // console.log(this.workingHoursData);
            },
           changeBoxSwitch()
           {
               
            
           },
            selectWorking(row,event,cloumn){
            //    debugger;
           
              const target = event.target || event.srcElement;
               event.stopPropagation();
                  event.preventDefault();
            /*   if (target.tagName.toLowerCase() === 'input') {
                  
                  event.stopPropagation();
                  event.preventDefault();
                  this.aa=false;
                 
                  return;
              } */
              
              let switchChild=true;
             // let switchChild='1';
             //let selectHours=this.selectHours;
             if(this.selectHoursLen==0)
             {
                 this.resultHours.push({name:''+this.selectWorkingName+'',id:''+this.clickWorking+'',data:[]});
                 this.NowResultHoursNum=this.resultHours.length-1;
            // console.log(this.resultHours[this.clickWorking].data);

             }
             // this.$refs.objectWorking.toggleRowSelection(row);
              if(this.selectHoursLen>0)
              {
                  //debugger;
                  
                for(let i=0,len=this.resultHours[this.NowResultHoursNum].data.length;i<len;i++)
                {
                   if(this.resultHours[this.NowResultHoursNum].data[i].id==row.id)
                   {
                      // console.log('bbbb'+this.resultHours[this.clickWorking].data.childName)
                       this.resultHours[this.NowResultHoursNum].data.splice(i,1);
                       switchChild=false;
                       this.selectHoursLen--
                        this.resultHourslen--;
                        for(let n=0,length=this.checkedHours.length;n<length;n++)
                        {
                            if(this.checkedHours[n]==row.id)
                            {
                                this.checkedHours.splice(n,1);
                                return;
                            }
                        }

                       return;
                   }
                  
                }
                //console.log('cc'+this.resultHours);
                 

              }
              
               if(switchChild)
                   {
                       this.resultHours[this.NowResultHoursNum].data.push(row);
                       this.selectHoursLen++;
                        this.resultHourslen++;
                      
                         this.checkedHours.push(row.id);
                     
                      
                       
                   }
              
            },
            selectAllWorking(val){
                //this.resultHours=[];
                //this.resultHours[this.selectHours].data=val;
              /*  console.log(val);
               val.forEach(row => {
            this.$refs.objectWorking.toggleRowSelection(row);this     @chang='changCheckHours'
          });*/
            },
            sizeChange(val){
                /*分页 */

            },
            currentChange(val){}

           
        }
    }
</script>
