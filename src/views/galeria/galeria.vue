<template>
	<div>
		<page-header :title="vm._data.title" />
		<section class="videos">
			<div class="container">
				<section-header 
					:header="'Vídeos'" 
				/>	
				<silentbox-group>
				    <silentbox-item src="https://www.youtube.com/watch?v=RuZYg3YupGk"></silentbox-item> 
				    <silentbox-item src="https://www.youtube.com/watch?v=9-vdD-3-nA4"></silentbox-item> 
				</silentbox-group>
			</div>
		</section>
		<section class="photos">
			<div class="container">
				<section-header 
					:header="'Fotos'" 
				/>	
				<silentbox-group>
				    <silentbox-item src="./static/foto1.jpg"></silentbox-item> 
				    <silentbox-item src="./static/foto2.jpg"></silentbox-item> 
				</silentbox-group>
			</div>
		</section>
	</div>
</template>

<script>
import Vue from 'vue';
import pageHeader from "@/components/pageHeader/pageHeader.vue";
import sectionHeader from "@/components/sectionHeader/sectionHeader.vue";
import VueSilentbox from 'vue-silentbox'

Vue.use(VueSilentbox);
var vm = new Vue({
  data: {
  	title: ''
  }
});
export default {

  name: 'galeria',
  beforeRouteEnter (to, from, next) {
  	vm._data.title = to.name;

  	next();
  },
	computed: {
		vm() {
			return vm;
		}
	},  
  components: {
    VueSilentbox,
  	sectionHeader,
  	pageHeader
  },  
  data () {
    return {

    }
  }
};
</script>

<style lang="sass">
@import './sass/_galeria'
</style>