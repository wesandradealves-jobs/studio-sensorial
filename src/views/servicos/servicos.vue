<template>
	<div>
		<page-header :title="vm._data.title" />
		<section class="servicos">
			<div class="container">
				<ul>
					<li v-for="servico in vm._data.servicos">
						<section-header 
							:header="servico.title" 
						/>	
						<bubbles :settings="{ width: '33.333%' }" :items="servico.items" />
					</li>
				</ul>
			</div>
		</section>
		<section class="gallery">
			<carousel 
				:autoplay="true" 
				:perPageCustom="[[414, 1],[737, 2],[768, 3]]"
				:navigationEnabled="false"
				:paginationEnabled="false"
				:autoplayHoverPause="true"
			>
			  <slide 
			  	:key="item.id"
			  	v-for="item in vm._data.gallery" 
			  	:style="{ backgroundImage: 'url('+item.image+')' }
			  	"></slide>	  
			</carousel>
		</section>		
		<section v-if="vm._data.metodologia" class="metodologia-de-intervencao">
			<div class="container">
				<img :src="vm._data.metodologia" alt="Metodologia de Intervenção" />
			</div>
		</section>
	</div>
</template>

<script>
import Vue from 'vue';
import { Carousel, Slide } from 'vue-carousel';
import sectionHeader from "@/components/sectionHeader/sectionHeader.vue";
import bubbles from "@/components/bubbles/bubbles.vue";
import pageHeader from "@/components/pageHeader/pageHeader.vue";

var vm = new Vue({
  data: {
  	title: '',
  	metodologia: './static/metodologia.png',
  	servicos: [
  		{
	  		'title':'Terapia Ocupacional',
	  		'items':[
		  		{
			  			'image':'./static/ico1.png',
			  			'title':'Integração Sensorial',
			  			'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam animi nemo consectetur nihil excepturi fugiat omnis! Asperiores atque est expedita ipsum magnam nobis voluptatum. Minima inventore sequi sapiente nihil magnam!'
		  		},
		  		{
			  			'image':'./static/ico2.png',
			  			'title':'Seletividade Alimentar',
			  			'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam animi nemo consectetur nihil excepturi fugiat omnis! Asperiores atque est expedita ipsum magnam nobis voluptatum. Minima inventore sequi sapiente nihil magnam!'
		  		},
		  		{
			  			'image':'./static/ico3.png',
			  			'title':'Praxis',
			  			'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam animi nemo consectetur nihil excepturi fugiat omnis! Asperiores atque est expedita ipsum magnam nobis voluptatum. Minima inventore sequi sapiente nihil magnam!'
		  		},
		  		{
			  			'image':'./static/ico8.png',
			  			'title':'Desfralde',
			  			'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam animi nemo consectetur nihil excepturi fugiat omnis! Asperiores atque est expedita ipsum magnam nobis voluptatum. Minima inventore sequi sapiente nihil magnam!'
		  		},
		  		{
			  			'image':'./static/ico9.png',
			  			'title':'ABDV',
			  			'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam animi nemo consectetur nihil excepturi fugiat omnis! Asperiores atque est expedita ipsum magnam nobis voluptatum. Minima inventore sequi sapiente nihil magnam!'
		  		},
		  		{
			  			'image':'./static/ico9.png',
			  			'title':'AIVD',
			  			'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam animi nemo consectetur nihil excepturi fugiat omnis! Asperiores atque est expedita ipsum magnam nobis voluptatum. Minima inventore sequi sapiente nihil magnam!'
		  		}	  		
	  		]
  		}  		
  	],
  	gallery: [ 	 	
  		{
  			'image':'./static/foto1.jpg'
  		},
  		{
  			'image':'./static/foto2.jpg'
  		},
  		{
  			'image':'./static/foto3.jpg'
  		}	  		  		 		
  	]
  }
});
export default {

  name: 'servicos',
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
    Carousel,
    Slide,
  	bubbles,
  	sectionHeader,
  	pageHeader
  }, 
  data() {
    return {

    };
  },
};
</script>

<style lang="sass">
@import './sass/_servicos'
</style>
