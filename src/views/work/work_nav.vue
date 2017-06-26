<template>
<div>
    <nav class="nav">
        
            <div class="nav-left mar_tl20">
               <!--<a to='/reservation' :class="{'selected': cur === 'cc'}" v-on:click="changNav('reservation')" class="nav-item is-tab is-hidden-mobile nav_bg">预约记录</a>-->
               <a :class="[isActive === 'reservation' ? 'nav_active' : '', 'nav-item is-tab is-hidden-mobile nav_bg']" v-on:click="changNav('reservation')">预约记录</a>
                <a  :class="[isActive === 'serviceBilling' ? 'nav_active' : '', 'nav-item is-tab is-hidden-mobile nav_bg']" v-on:click="changNav('serviceBilling')">服务开单</a>
                <a  :class="[isActive === 'serviceRecord' ? 'nav_active' : '', 'nav-item is-tab is-hidden-mobile nav_bg']" v-on:click="changNav('serviceRecord')">服务记录</a>
                <a  :class="[isActive === 'businessDaily' ? 'nav_active' : '', 'nav-item is-tab is-hidden-mobile nav_bg']" v-on:click="changNav('businessDaily')">营业日报</a>
               
            </div>
        
    </nav>
   <!--ok----- {{isActive}}
   <p>isNav----------{{isNav}}</p>-->
    </div>
</template>
<script>
    require('../../css/work.css');
    export default{
        props:['isActive'],
        data: function () {
            return {
                page: 'cc big!!',
                isNav: this.isActive,
            }
        },
        methods:{
            changNav(el){
                //console.log(this.isNav);
                this.$emit('changTag',el);
                
            }
        }
    }
</script>
