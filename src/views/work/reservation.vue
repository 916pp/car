<template>
    <div>
       <div class="columns is-marginless" @click="getSelect()">
            <div class="column search_bg">
                <a class="button r_but">添加预约单</a>
                <el-select v-model="selectValue"  size='small' >
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-date-picker v-model="nowDate"  size='small' type="daterange" placeholder="最早至今" ></el-date-picker>
            
            <el-input v-model='search' size='small'>
                <el-button slot='append' icon="search"></el-button>
            </el-input>
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
                        <li>
                            <span class="r_listTitle">目前状态：</span>
                             <span class="r_listCont r_color2">未确认
                                 <el-button @click='messageBox'><i class="icon iconfont icon-bianji r_edit"></i></el-button>
                            </span>

                        </li>
                        <li><a class="button r_button">查看服务</a></li>
                    </ul>
                </li>
            </ul>
        </div>      
    </div>
</template>
<script>
   //require('../../css/bulma.css');
   
   import Vue from 'vue';
   import {Select,Option,DatePicker,Input,Button,MessageBox } from 'element-ui';
   Vue.use(Select);
   Vue.use(Option);
   Vue.use(DatePicker);
   Vue.use(Input);
   Vue.use(Button);
   Vue.use(MessageBox);
    export default  {
        data: function () {
            return {
                options:[
                    {value:'1',label:'未确认'},
                    {value:'2',label:'已确认'},
                    {value:'3',label:'取消'},
                    {value:'4',label:'全部'}
                ],
                selectValue:'未确认',
                nowDate:'',
                search:''
            }
        },
        methods:{
            getSelect(){
                console.log(this.nowDate);
            },
            messageBox(){
                
            }
        }
    }
</script>
