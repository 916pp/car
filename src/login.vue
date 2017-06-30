
<template>
    <div class="modal is-active" >
  <div class="modal-background"></div>
  <div class="modal-content box is-paddingless">
    <div class='imgae'>
		<img src='./images/login_t.jpg' title='修车' alt='请检查网络'>
	</div>
	<div class='columns is-marginless	'>
		<div class='column'>
			<img src='./images/login_1.jpg' title='img' alt=''>
		</div>
		<div class='column field Rfrom' id='loginFrom'>
			 <transition name="fade">
			<p v-if='show' id='userMessage'>{{message}} </p>	
			</transition>
			<p class='control has-icons-left'>
				<input v-on:click='InputMessage' v-model.trim='options.userName' class='input' type='text' maxlength='25' placeholder='请输入用户名'>
				<span class=' icon is-left borderR'><i class="fa fa-user"></i></span>
			</p>
			
			<p class='control has-icons-left marginTB'>
				<input v-on:click='InputMessage' v-model.trim='options.userPass' class='input' type='password' maxlength='25' placeholder='请输入密码'>
				<span class='icon is-left borderR'><i class='fa fa-lock'></i></span>
			</p>
			
			<p class='control'>
				<button v-on:click='Submit' class='button is-danger is-fullwidth'>登 录</button>
			</p>
		</div>
		

	</div>
  </div>
</div>
</template>
<script>
require('./css/bulma.css');
require('./css/css/font-awesome.css');
require('./css/login.css');
import Vue from 'vue';
import vueResource from 'vue-resource';
Vue.use(vueResource);
export default {
  data: function () {
            return {
               options:{userName:'',
					userPass:''					
					},
                message:'',
                show:false,
                url:'http://211.149.193.19:8080/api/customers'
            }
        },
		methods:{
			
			Submit:function()
			{

				if(this.options.userPass.length<6)
				{
					this.show=true;
					this.message='密码长度大于6位，请输入正确的密码！';
					
				}
				else{
					var vm=this;
					vm.$http.post(vm.url,vm.options).then(
					function(response){
						window.sessionStorage.userName=vm.options.userName;
						//window.sessionStorage.userPass=vm.options.userPass;
						//console.log(window.sessionStorage.getItem('userName'));
						vm.options.userName='';
						vm.options.userPass='';
						
						window.location.href='index.html';
					},function(response){alert(response.status);});
				}
				//alert(this.options.userName);
			},
			
			InputMessage:function()
			{
				if(this.show==true)
				{
					this.show=false;
					this.message='';
				}
			}
		}
}
</script>
