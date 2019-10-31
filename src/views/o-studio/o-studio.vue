<template>
	<div>
		<section class="webdoor">
			<carousel 
				:autoplay="true" 
				:perPage="1"
				:navigationEnabled="false"
				:paginationEnabled="true"
				:paginationColor="'#599bb3'"
				:paginationActiveColor="'#ffffff'"
				:paginationSize="15"
				:paginationPadding="5"
				:autoplayHoverPause="true"
			>
			  <slide 
			  	:key="banner.id"
			  	v-if="vm._data.banners.length"
			  	v-for="banner in vm._data.banners" 
			  	:style="{ backgroundImage: 'url('+banner.image+')' }
			  	">
			  	<div class="item-inner">
				  	<div class="container"></div>	
			  	</div>
			  </slide>	  
			</carousel>
		</section>
		<section class="o-studio">
			<div class="container">
				<section-header 
					:header="'O Studio'" 
				/>		
				<p v-html="vm._data.o_studio"></p>
			</div>
		</section>
		<section class="publico">
			<div class="container">
				<div>
					<section-header 
						:header="'Público'" 
					/>		
					<p v-html="vm._data.publico.text"></p>	
				</div>
				<div v-if="vm._data.publico.thumbnail">
					<img :src="vm._data.publico.thumbnail" alt="Público">
				</div>
			</div>
		</section>
		<section class="missao-visao-valores">
			<div class="container">
				<bubbles :settings="{ width: '33.333%' }" :items="vm._data.missao_visao_valores" />
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
import parallax from "@/components/parallax/parallax.vue";
var vm = new Vue({
  data: {
  	missao_visao_valores: [
  		{
  			'title':'Missão',
  			'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam blanditiis consequatur, cupiditate mollitia cumque, quasi?',
  			'image':'./static/ico5.png',
  			'svg':false
  		},
  		{
  			'title':'Visão',
  			'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime minima ex natus voluptatum, doloribus magni.',
  			'image':'./static/ico6.png',
  			'svg':false
  		},
  		{
  			'title':'Valores',
  			'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque laborum, iure sapiente ipsa quos?',
  			'image':'./static/ico7.png',
  			'svg':false
  		}  		  		
  	],
  	metodologia: './static/metodologia.png',
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
  	],   	
  	publico: {
  		'thumbnail':'./static/publico.png',
  		'text':'•	 TEA (autismo) <br> •	 TDAH  <br> •	 Paralisia Cerebral  <br> •	 Atraso no desenvolvimento infantil  <br> •	 Síndrome de Down  <br> •	 Transtorno do Processamento Sensorial  <br> •	 Síndromes'
  	},
  	o_studio: 'A equipe de terapeutas ocupacionais do Studio Sensorial tem como responsabilidade avaliar e intervir com bebês, crianças e adolescentes com alterações sensoriais, que apresentam hiper-sensibilidade, hipo-sensibilidade ou falha na discriminaTção sensorial tátil, auditiva, visual, gustativa, olfativa, vestibular, proprioceptiva e no planejamento motor (idealizar, planejar e executar ações). <br><br> A integração Sensorial fornece a capacidade de receber, interpretar sensações e responder de maneira adequada ao ambiente. Favorece o desenvolvimento sensório, motor, cognitivo e social; e possibilita o melhor desempenho nas atividades cotidianas em casa, na escola e nos ambientes sociais.',
	banners: [
		{
			'id':0,
			'title':'',
			'url':'#',
			'image':'./static/o-studio-banner.jpg'
		}
	]
  }
});
export default {

  name: 'o-studio',
	computed: {
		vm() {
			return vm;
		}
	}, 
  components: {
  	bubbles,
  	sectionHeader,
    Carousel,
    Slide
  },
  data () {
    return {

    }
  }
};
</script>

<style lang="sass">
@import './sass/_o-studio'
</style>