<template>
<div class="work_right">
    <div class="w_main" v-if="navName=='none'">
      <div class=" columns has-text-centered is-marginless	">
        <div class="column mar_tb15">
            <a v-on:click="navActive('reservation')" class="w_button w_bg_1">
				<span><i class='icon iconfont icon-danju-xianxing'></i></span>
				<span class=''>预约记录</span>
			</a>
        </div>
        <div class="column mar_tb15">
            <a v-on:click="navActive('serviceBilling')"  class="w_button w_bg_1">
				<span><i class='icon iconfont icon-danju-xianxing'></i></span>
				<span class=''>服务开单</span>
			</a>
        </div>
      </div>
      <div  class=" columns has-text-centered is-marginless	">
        <div class="column mar_tb15">
            <a v-on:click="navActive('serviceRecord')"  class="w_button w_bg_2">
				<span><i class='icon iconfont icon-danju-xianxing'></i></span>
				<span class=''>服务记录</span>
			</a>
        </div>
        <div class="column mar_tb15">
            <a v-on:click="navActive('businessDaily')"  class="w_button w_bg_2">
				<span><i class='icon iconfont icon-danju-xianxing'></i></span>
				<span class=''>营业日报</span>
			</a>
        </div>
      </div>
      <!--<div class=" columns has-text-centered is-marginless	">
        <div class="column mar_tb15">
            <a to='/reservation' class="w_button">
				<span><i class='icon iconfont icon-danju-xianxing'></i></span>
				<span class=''>车况检查</span>
			</a>
        </div>
        <div class="column mar_tb15">
            <a to='/serviceBilling' class="w_button">
				<span><i class='icon iconfont icon-danju-xianxing'></i></span>
				<span class=''>车主评价</span>
			</a>
        </div>
      </div>-->
     <!-- <router-view></router-view>-->
     
    </div>
    <work_nav v-show="isWork" :isActive="navName" @changTag="navActive" ></work_nav>
    <reservation v-show="isReservation"></reservation>
    <serviceBilling v-show="isServiceBilling"></serviceBilling>
    <serviceRecord v-show="isServiceRecord"></serviceRecord>
    <businessDaily v-show="isBusinessDaily"></businessDaily>
</div>
</template>
<script>
import work_nav from "./work/work_nav.vue";
import reservation from "./work/reservation.vue";
import serviceBilling from "./work/serviceBilling.vue";
import serviceRecord from "./work/serviceRecord.vue";
import businessDaily from "./work/businessDaily.vue";


   require('../css/bulma.css');
    require('../css/iconfont.css');
    require('../css/index.css');
    export default {
        data: function () {
            return {
                page: 'cc big!!',
                navName:'none',
                isWork:false,
                isReservation:false,
                isServiceBilling:false,
                isServiceRecord:false,
                isBusinessDaily:false
            }
        },
        props:{
            isActive:{
                type:String,
                default:'none'
            }
        },
        components:{
            work_nav,
            reservation,
            serviceBilling,
            serviceRecord,
            businessDaily
            
        },
        created: function () {
            window.eventBus.$on('nav', function (e) {
               // debugger;
               this.navName=e;
               this.isWork=false;
              this.isReservation=false;
                this.isServiceBilling=false;
                this.isServiceRecord=false;
                this.isBusinessDaily=false;
            }.bind(this));
        },
        methods:{
            navActive:function(el){
                var vm=this;
                vm.navName=el;
                vm.isWork=true;
                if(el=='reservation'){
                     vm.isReservation=true;
                      vm.isServiceBilling=false;
                      vm.isServiceRecord=false;
                      vm.isBusinessDaily=false;
                      window.eventBus.$emit('change', 'reservation');
                }
                else if(el=='serviceBilling')
                {
                      vm.isReservation=false;
                      vm.isServiceBilling=true;
                      vm.isServiceRecord=false;
                      vm.isBusinessDaily=false;
                }
                else if(el=='serviceRecord')
                {
                      vm.isReservation=false;
                      vm.isServiceBilling=false;
                      vm.isServiceRecord=true;
                      vm.isBusinessDaily=false;                
                }
                else if(el=='businessDaily') {
                      vm.isReservation=false;
                      vm.isServiceBilling=false;
                      vm.isServiceRecord=false;
                      vm.isBusinessDaily=true; 
                                    
                }
               
            }
        }
    }
</script>
