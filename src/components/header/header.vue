<template>
	<header id="header" :class="{'sticky':this.sticky}">
		<top-bar :infos="this.topbar" />
		<div class="header">
			<div class="container">
				<h1 class="logo">
			        <router-link title="Studio Sensorial" :to="{ path: `/` }">
			          	<img src="/static/logo.jpg" alt="Studio Sensorial" />
			        </router-link>   					
				</h1>
				<navigation v-on:openMenu="openMenu" :layout="'main'" :items="$store.state.routes" />
				<navigation :layout="'social'" :items="this.social" />
				<navigation :open="this.opened" :layout="'mobile'" :items="$store.state.routes" />
			</div>
		</div>
	</header>
</template>

<script>
import topBar from "./modules/topBar/topBar.vue";
import navigation from "@/components/navigation/navigation.vue";

export default {

  name: 'appHeader',
  props: ['sticky'],
  methods: {
  	openMenu(v) {
  		this.opened = (v !== 'close') ? !this.opened : false;
  		return this.opened;
  	}
  },
  data () {
    return {
    	opened: false,
    	topbar:[
			{ 
				'ico':'email',
				'type':'email',
				'callback':'contato@studiosensorial.com.br',
				'text':'contato@studiosensorial.com.br',
				'mdIcon':true
			}, 
			{ 
				'ico':'socicon-whatsapp', 
				'type':'tel', 
				'callback':'+552199129734',
				'text':'(21) 9912.9734',
				'mdIcon':false
			}
		],
	  	social: [
	  		{
	  			'post_title':'Youtube',
	  			'path':'#',
	  			'slug':'youtube'
	  		},  	
	  		{
	  			'post_title':'Instagram',
	  			'path':'#',
	  			'slug':'instagram'
	  		},
	  		{
	  			'post_title':'Facebook',
	  			'path':'#',
	  			'slug':'facebook'
	  		} 		  		  		  		  		
	  	]
    }
  },
  components: {
  	navigation,
  	topBar
  }  
};
</script>

<style lang="sass">
@import './sass/_header'
</style>