<template>
    <div>
    <div class='columns is-gapless top'>
			<div class='column is-4 t_left'><img src='./images/logo_1.jpg'><span class='pad_r_20'>v 1.0</span></div>
			<div class='column  t_middle'>
				<span class='select t_sel'><select class='sel_bg'>
					<option>门店管理系统</option>
					<option>精准营销系统</option>
				</select></span>
			</div>
			<div class='column is-7  t_right'>
			<span class="icon is-medium ">
				<i class="fa fa-user-circle"></i>
			</span>
			<router-link to='setUp' class='mar_l_10 t_color_1'>{{userName}}</router-link><span>,欢迎您回来</span>
			<span class='mar_l_20 icon_r'><a class='buttom icon is-medium'>
				<i class="fa fa-home"></i>
			</a></span>
			<span class='mar_rl20 icon_out'><a class='buttom icon is-medium'>
				<i class="fa fa-power-off"></i>
			</a></span>
			</div>
		</div>
		<div class='columns is-gapless main'>
			<div class='column is-1 m_left'>
			<aside class="menu">
				 <ul class="menu-list has-text-centered	">
					<li>
						<a v-on:click="changWork('purchase')" :class="[nav=='purchase'?'navActive':'']">
							<span class='icon is-medium'><i class='fa fa-home dis_b'></i></span>
							<span class='dis_b'>配件采购平台</span>
						</a>
					</li>
					<li>
						<a v-on:click="changWork('work')" :class="[nav=='work'?'navActive':'']">
							<span class='icon is-medium'><i class='fa fa-id-card-o dis_b'></i></span>
							<span class='dis_b'>工单</span>
						</a>
					</li>
					<li>
						<a v-on:click="changWork('client')" :class="[nav=='client'?'navActive':'']" >
							<span class='icon is-medium'><i class='fa fa-user-secret dis_b'></i></span>
							<span class='dis_b'>我的客户</span>
						</a>
					</li>
					<li>
						<a v-on:click="changWork('warehouse')" :class="[nav=='warehouse'?'navActive':'']">
							<span class='icon is-medium'><i class='fa fa-bank dis_b'></i></span>
							<span class='dis_b'>我的仓库</span>
						</a>
					</li>
					<li>
						<a v-on:click="changWork('employee')" :class="[nav=='employee'?'navActive':'']">
							<span class='icon is-medium'><i class='fa fa-users dis_b'></i></span>
							<span class='dis_b'>我的员工</span>
						</a>
					</li>
					<li>
						<a v-on:click="changWork('financial')" :class="[nav=='financial'?'navActive':'']">
							<span class='icon is-medium'><i class='fa fa-bar-chart dis_b'></i></span>
							<span class='dis_b'>财务管理</span>
						</a>
					</li>
					<li>
						<a v-on:click="changWork('forum')" :class="[nav=='forum'?'navActive':'']">
							<span class='icon is-medium'><i class='fa fa-laptop'></i></span>
							<span class='dis_b'>技术论坛</span>
						</a>
					</li>
					<li>
						<a v-on:click="changWork('setup')" :class="[nav=='setup'?'navActive':'']">
							<span class='icon is-medium'><i class='fa fa-cog dis_b'></i></span>
							<span class='dis_b'>设置</span>
						</a>
					</li>
				</ul>
			</aside>
			</div>
			<div class='column m_right'>
			
				<router-view></router-view>
				
			</div>
		</div>
		<div class='column is-gapless has-text-centered bottom'>所有权归属</div>
    <!--<div>
        <div>
            <a to="/about">about</a>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>-->
    </div>
</template>
<script>
require('./css/bulma.css');
require('./css/css/font-awesome.css');
require('./css/index.css');
export default {
   data: function () {
        return{
			userName:window.sessionStorage.getItem('userName'),
			userPass:window.sessionStorage.getItem('userPass'),
			nav:'purchase'
        }
    },
	methods:{
		changWork:function(e){
			this.nav=e
			this.$router.push({
				path: '/'+e
			});
			window.eventBus.$emit('nav', 'none');

		}
	}
}
</script>