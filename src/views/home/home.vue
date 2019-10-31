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
				  	<div class="container">
				  		<h2 v-if="banner.title" v-html="banner.title"></h2>
				  	</div>	
			  	</div>
			  </slide>	  
			</carousel>
		</section>
		<section class="o-studio">
			<div class="container">
				<div>
					<section-header 
						:header="vm._data.oStudio.title.header" 
						:subheader="vm._data.oStudio.title.subheader" 
					/>
					<p v-html="vm._data.oStudio.text"></p>
			        <router-link title="Veja Mais" :to="{ path: 'o-studio' }">
			        	Veja Mais <md-icon>keyboard_arrow_right</md-icon>
			        </router-link>  
				</div>
				<div v-if="vm._data.oStudio.image">
					<img :src="vm._data.oStudio.image" :alt="vm._data.oStudio.title.header"/>
				</div>
			</div>
		</section>
		<section class="nossos-servicos">
			<div class="container">
				<section-header 
					:header="'Nossos Serviços'" 
					:subheader="'Integração Social e Terapia Ocupacional'" 
				/>
				<bubbles :settings="{ width: '33.333%' }" :items="vm._data.servicos" />
			</div>
		</section>
		<section class="programas-de-tratamento">
			<div class="container">
				<section-header 
					:header="'Programas de Tratamento'" 
					:subheader="'Conheça nossos Programas de Tratamento personalizados'" 
				/>
				<bubbles :settings="{ width: '33.333%' }" :items="vm._data.programas" />
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
		<section class="equipe">
			<div class="container">
				<section-header 
					:header="'Nossa Equipe'" 
					:subheader="'Família Studio Sensorial'" 
				/>				
				<div>
					<carousel 
						:autoplay="true" 
						:perPageCustom="[[414, 1],[737, 2],[768, 3]]"
						:navigationEnabled="false"
						:paginationEnabled="false"
						:autoplayHoverPause="true"
					>
					  <slide 
					  	v-for="item in vm._data.team" 
					  	:key="item.id"
					  	>
						  	<div :id="item.id" @click="setCurrentEmployee(item, $event)" :class="'team-inner ' + ((item.id === 0) ? 'active' : '')">
						  		<div v-if="item.image" :style="{ backgroundImage: 'url('+item.image+')' }" class="thumbnail"></div>
						  		<h3>{{item.title}} <small>{{item.role}}</small></h3>
						  	</div>
					  	</slide>	  
					</carousel>
				</div>
				<div>
			        <transition name="fade" mode="out-in">
			        	<p>{{this.currentEmployee.description}}</p>
			        </transition>
				</div>
			</div>
		</section>
		<parallax 
		:text="vm.home.parallax.text" 
		:background="vm.home.parallax.background" 
		/>
		<section class="blog">
			<div class="container">
				<section-header 
					:header="'Blog'" 
					:subheader="'Artigos, conteúdos e notícias'" 
				/>		
				<carousel 
					:autoplay="true" 
					:perPageCustom="[[414, 1],[737, 2],[768, 3]]"
					:navigationEnabled="false"
					:paginationEnabled="false"
					:autoplayHoverPause="true"
				>
				  <slide 
				  	v-for="item in vm._data.blog" 
				  	:key="item.id"
				  	>
						<postCard :post="item" />
				  	</slide>	  
				</carousel>				
			</div>
		</section>
	</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import sectionHeader from "@/components/sectionHeader/sectionHeader.vue";
import bubbles from "@/components/bubbles/bubbles.vue";
import parallax from "@/components/parallax/parallax.vue";
import postCard from "@/components/postCard/postCard.vue";

import Vue from 'vue';

var vm = new Vue({
  data: {
  	home: {
  		parallax: {
  			text: 'Studio Sensorial, espaço de acolhimento e evolução.',
  			background: './static/1491531361789.jpg'
  		}
  	},
  	blog: [
  		{
  			'id':0,
  			'title':'Lorem ipsum dolor sit amet.',
  			'excerpt':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, fugit!',
  			'date':'5 de fevereiro de 2019',
  			'thumbnail':'./static/4k-wallpaper-adorable-blur-1148998.jpg'
  		},
  		{
  			'id':1,
  			'title':'Lorem ipsum dolor sit amet.',
  			'excerpt':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, fugit!',
  			'date':'5 de fevereiro de 2019',
  			'thumbnail':'./static/4k-wallpaper-adorable-blur-1148998.jpg'
  		},
  		{
  			'id':2,
  			'title':'Lorem ipsum dolor sit amet.',
  			'excerpt':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, fugit!',
  			'date':'5 de fevereiro de 2019',
  			'thumbnail':'./static/4k-wallpaper-adorable-blur-1148998.jpg'
  		}  		  		
  	],
  	team: [
  		{
  			'id':0,
  			'title':'Lorem ipsum.',
  			'role':'Lorem ipsum dolor sit.',
  			'image':'./static/equipe1.jpg',
  			'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam debitis quam, obcaecati autem nostrum labore.'
  		},
  		{
  			'id':1,
  			'title':'Lorem ipsum.',
  			'role':'Lorem ipsum dolor sit.',
  			'image':'./static/equipe2.jpg',
  			'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, quas vero voluptates accusamus ullam dignissimos!'
  		},
  		{
  			'id':2,
  			'title':'Lorem ipsum.',
  			'role':'Lorem ipsum dolor sit.',
  			'image':'./static/equipe3.jpg',
  			'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis atque accusantium vero sequi laboriosam rem!'
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
  	],   	
  	programas: [ 	 	
  		{
  			'image':'./static/ico4.png',
  			'svg':false,
  			'title':'Autonomia',
  			'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam animi nemo consectetur nihil excepturi fugiat omnis! Asperiores atque est expedita ipsum magnam nobis voluptatum. Minima inventore sequi sapiente nihil magnam!'
  		},
  		{
  			'image':'./static/ico4.png',
  			'svg':false,
  			'title':'Pequenos Sentidos',
  			'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam animi nemo consectetur nihil excepturi fugiat omnis! Asperiores atque est expedita ipsum magnam nobis voluptatum. Minima inventore sequi sapiente nihil magnam!'
  		}		 		
  	],  	
  	servicos: [ 	 	
  		{
  			'image':'./static/ico1.png',
  			'svg':false,
  			'title':'Integração Sensorial',
  			'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam animi nemo consectetur nihil excepturi fugiat omnis! Asperiores atque est expedita ipsum magnam nobis voluptatum. Minima inventore sequi sapiente nihil magnam!'
  		},
  		{
  			'image':'./static/ico2.png',
  			'svg':false,
  			'title':'Seletividade Alimentar',
  			'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam animi nemo consectetur nihil excepturi fugiat omnis! Asperiores atque est expedita ipsum magnam nobis voluptatum. Minima inventore sequi sapiente nihil magnam!'
  		},  
  		{
  			'image':'<?xml version="1.0" encoding="UTF-8"?><svg enable-background="new 0 0 512.001 512.001" version="1.1" viewBox="0 0 512.001 512.001" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m312.35 364.03c-0.432-7.155-3.569-13.995-8.833-19.258l-37.983-37.99c6.136-1.942 11.673-5.283 16.183-9.792l0.966-0.967c16.739-16.739 15.396-45.316-2.993-63.706-8.75-8.749-20.068-13.959-31.87-14.672-12.264-0.741-23.564 3.408-31.835 11.68l-0.966 0.966c-4.512 4.511-7.854 10.05-9.795 16.188l-37.988-37.989c-11.194-11.194-28.732-11.87-39.098-1.507l-34.429 34.43c-4.213 4.213-5.965 10.337-4.687 16.38 1.39 6.571 5.973 11.944 12.26 14.373 3.969 1.534 7.568 3.897 10.695 7.024l1.091 1.091c5.29 5.29 8.434 12.014 8.851 18.934 0.391 6.464-1.69 12.32-5.858 16.488s-10.026 6.254-16.488 5.857c-6.92-0.417-13.645-3.561-18.934-8.851l-1.091-1.091c-3.127-3.127-5.49-6.726-7.024-10.694-2.429-6.288-7.802-10.871-14.374-12.261-6.043-1.278-12.167 0.474-16.381 4.687l-34.39 34.392c-10.363 10.364-9.688 27.902 1.507 39.097l37.988 37.989c-6.138 1.942-11.677 5.284-16.188 9.794l-0.967 0.967c-16.738 16.739-15.395 45.316 2.994 63.706 9.763 9.762 22.393 14.721 34.602 14.719 10.79 0 21.251-3.874 29.103-11.727l0.967-0.966c4.511-4.511 7.852-10.049 9.794-16.189l37.988 37.989c5.264 5.264 12.104 8.4 19.259 8.833 0.548 0.033 1.095 0.05 1.64 0.05 6.906 0 13.465-2.641 18.2-7.376l32.747-32.747c2.544 6.186 6.288 11.774 11.137 16.625l1.091 1.091c18.389 18.388 46.967 19.731 63.706 2.993 16.739-16.739 15.396-45.317-2.993-63.706l-1.091-1.091c-4.85-4.85-10.438-8.593-16.625-11.137l32.786-32.786c5.109-5.11 7.779-12.34 7.326-19.84zm-21.467 5.698l-34.429 34.429c-4.212 4.213-5.965 10.336-4.687 16.379 1.389 6.572 5.972 11.945 12.26 14.375 3.969 1.534 7.568 3.897 10.695 7.025l1.091 1.091c10.591 10.591 11.934 26.48 2.993 35.421-8.94 8.941-24.832 7.598-35.421-2.993l-1.091-1.091c-3.127-3.127-5.491-6.726-7.025-10.694-2.429-6.288-7.803-10.871-14.375-12.26-6.044-1.278-12.167 0.475-16.379 4.687l-34.39 34.391c-1.384 1.384-3.206 1.586-4.492 1.504-2.239-0.135-4.543-1.233-6.322-3.011l-15.239-15.239 33.186-33.186c3.905-3.905 3.905-10.237 0-14.143s-10.237-3.905-14.143 0l-33.186 33.186-10.355-10.355c-3.787-3.787-8.775-5.836-13.802-5.836-1.738 0-3.482 0.246-5.182 0.749-6.148 1.821-10.617 6.66-11.954 12.945-0.84 3.947-2.655 7.337-5.395 10.077l-0.967 0.966c-8.94 8.941-24.832 7.598-35.421-2.993-10.591-10.591-11.934-26.48-2.994-35.421l0.967-0.967c2.74-2.74 6.13-4.555 10.077-5.395 6.286-1.337 11.125-5.807 12.946-11.956 1.958-6.613 8e-3 -13.886-5.087-18.981l-39.734-39.737c-1.779-1.778-2.876-4.083-3.012-6.322-0.078-1.285 0.121-3.107 1.504-4.492l32.747-32.747c2.544 6.186 6.288 11.774 11.137 16.625l1.091 1.091c18.39 18.389 46.967 19.731 63.707 2.993 16.738-16.739 15.396-45.316-2.994-63.706l-1.091-1.091c-4.85-4.85-10.438-8.593-16.625-11.137l32.786-32.786c2.524-2.522 7.476-1.832 10.814 1.507l39.736 39.735c5.095 5.096 12.368 7.045 18.982 5.087 6.148-1.82 10.617-6.66 11.955-12.946 0.839-3.946 2.654-7.336 5.395-10.076l0.967-0.967c4.168-4.167 10.022-6.247 16.488-5.857 6.92 0.417 13.645 3.561 18.934 8.851 10.591 10.592 11.934 26.482 2.993 35.421l-0.966 0.967c-2.74 2.74-6.13 4.555-10.076 5.395-6.286 1.337-11.126 5.806-12.947 11.955-1.958 6.613-9e-3 13.887 5.087 18.983l39.736 39.736c1.778 1.778 2.876 4.082 3.011 6.321 0.078 1.286-0.12 3.108-1.504 4.493z"/><path d="m202.91 400.76c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21 1.07-7.07 2.93-2.93 4.44-2.93 7.07 1.07 5.21 2.93 7.07 4.43 2.93 7.07 2.93c2.63 0 5.21-1.07 7.07-2.93s2.93-4.44 2.93-7.07-1.07-5.21-2.93-7.07z"/><path d="m415.26 127c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21 1.07-7.07 2.93-2.93 4.44-2.93 7.07 1.07 5.21 2.93 7.07 4.44 2.93 7.07 2.93 5.21-1.07 7.07-2.93 2.93-4.44 2.93-7.07-1.07-5.21-2.93-7.07z"/><path d="m490.15 229.83c-5.433-5.433-12.006-9.589-19.072-12.069l33.524-33.524c5.109-5.108 7.779-12.34 7.326-19.84-0.432-7.155-3.569-13.995-8.833-19.259l-37.238-37.244c5.25-2.005 10.024-5.081 13.962-9.02l0.967-0.967c16.738-16.739 15.396-45.316-2.994-63.706-18.388-18.388-46.966-19.731-63.706-2.993l-0.967 0.967c-3.939 3.94-7.016 8.715-9.021 13.967l-37.285-37.284c-11.195-11.195-28.733-11.871-39.098-1.507l-33.524 33.524c-2.48-7.066-6.636-13.639-12.069-19.072l-1.091-1.091c-18.389-18.389-46.967-19.731-63.706-2.993-16.738 16.739-15.396 45.317 2.992 63.704l1.093 1.093c5.432 5.432 12.005 9.588 19.072 12.069l-33.525 33.524c-10.364 10.364-9.688 27.902 1.51 39.1l39.771 39.741c5.097 5.096 12.373 7.044 18.983 5.087 6.148-1.821 10.617-6.661 11.955-12.946 0.839-3.946 2.654-7.336 5.395-10.076l0.967-0.967c4.168-4.168 10.034-6.251 16.488-5.858 6.92 0.418 13.644 3.562 18.934 8.852s8.433 12.014 8.851 18.934c0.391 6.465-1.69 12.321-5.858 16.489l-0.966 0.966c-2.74 2.74-6.13 4.555-10.076 5.395-6.286 1.337-11.125 5.806-12.946 11.954-1.958 6.612-0.01 13.884 5.084 18.98l39.699 39.73c5.881 5.881 13.512 8.859 20.935 8.859 6.707 0 13.244-2.432 18.164-7.352l33.524-33.524c2.48 7.065 6.636 13.639 12.068 19.071l1.092 1.092c18.39 18.389 46.967 19.731 63.706 2.993 16.738-16.739 15.396-45.317-2.993-63.706l-1.094-1.093zm-10.059 50.654c-8.94 8.941-24.831 7.598-35.421-2.993l-1.091-1.091c-3.484-3.483-6.095-7.694-7.55-12.177-2.115-6.512-7.567-11.551-14.229-13.151-6.219-1.493-12.533 0.215-16.889 4.571l-35.209 35.209c-1.385 1.384-3.209 1.584-4.492 1.504-2.239-0.135-4.543-1.233-6.319-3.009l-37.954-37.983c6.139-1.942 11.678-5.284 16.189-9.794l0.966-0.967c8.272-8.272 12.42-19.579 11.68-31.835-0.713-11.803-5.923-23.122-14.672-31.87s-20.067-13.96-31.87-14.673c-12.262-0.736-23.564 3.408-31.835 11.679l-0.967 0.967c-4.511 4.512-7.853 10.051-9.794 16.189l-38.026-37.997c-1.779-1.778-2.876-4.083-3.012-6.322-0.078-1.285 0.121-3.108 1.504-4.492l35.21-35.209c4.356-4.356 6.064-10.67 4.571-16.89-1.601-6.662-6.64-12.114-13.151-14.228-4.482-1.456-8.693-4.067-12.175-7.549l-1.093-1.093c-10.591-10.591-11.934-26.48-2.993-35.421 8.939-8.941 24.831-7.599 35.421 2.993l1.091 1.091c3.484 3.483 6.095 7.694 7.551 12.177 2.115 6.512 7.567 11.551 14.229 13.15 6.219 1.493 12.533-0.216 16.889-4.571l35.208-35.209c2.524-2.521 7.475-1.832 10.814 1.507l38.854 38.855c4.925 4.925 11.995 6.934 18.448 5.238 5.989-1.572 10.557-6.065 12.217-12.018 0.947-3.392 2.653-6.338 5.071-8.756l0.967-0.967c8.939-8.941 24.831-7.599 35.421 2.993 10.591 10.591 11.934 26.48 2.993 35.421l-0.967 0.967c-2.418 2.419-5.364 4.125-8.755 5.071-5.953 1.661-10.446 6.228-12.018 12.217-1.694 6.454 0.313 13.523 5.238 18.449l38.811 38.811c1.779 1.778 2.876 4.083 3.012 6.322 0.078 1.285-0.121 3.108-1.505 4.492l-16.048 16.048-33.14-33.141c-3.906-3.905-10.237-3.905-14.142 0s-3.906 10.237 0 14.142l33.14 33.141-5.02 5.02c-4.355 4.356-6.064 10.67-4.571 16.889 1.6 6.662 6.639 12.114 13.15 14.229 4.483 1.456 8.693 4.067 12.177 7.551l1.091 1.091c10.594 10.592 11.936 26.483 2.995 35.422z"/></svg>',
  			'svg':true,
  			'title':'Dieta Sensorial',
  			'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam animi nemo consectetur nihil excepturi fugiat omnis! Asperiores atque est expedita ipsum magnam nobis voluptatum. Minima inventore sequi sapiente nihil magnam!'
  		}  		 		
  	],
  	oStudio: {
  		'title':{
  			'header':'O Studio Sensorial',
  			'subheader':'Lugar de acolhimento e evolução'
  		},
  		'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, adipisci nemo distinctio numquam consectetur voluptate atque, earum quisquam id! Inventore asperiores ducimus hic suscipit illum, facere obcaecati mollitia a. Reiciendis quae totam incidunt, ea, voluptates ullam, libero nisi cupiditate officiis natus minus iusto consequuntur dolorem mollitia, esse! Sequi in doloremque, iure fugiat saepe, eaque aliquid, nihil porro et voluptate quod labore, accusamus quasi magni ut explicabo! Ad odio beatae nemo omnis fugiat odit iste magni, ipsum est, quia molestias, saepe.',
  		'image':'./static/o-studio.jpg'
  	},
	banners: [
		{
			'id':0,
			'title':'O que é que<br>o autismo tem<br>a ver com a<br>alimentação?',
			'url':'#',
			'image':'./static/banner-1.jpg'
		}
	]
  }
});

export default {

  name: 'home',
  components: {
  	postCard,
  	parallax,
  	bubbles,
  	sectionHeader,
    Carousel,
    Slide
  },
  methods: {
  	setCurrentEmployee(str, event) {
  		this.currentEmployee = str;

  		var team = document.querySelectorAll('.team-inner');

  		for (var i = 0; i < team.length; i++) {
  			team[i].classList.remove('active');
  			team[str.id].classList.add('active');
  		}
  	}
  },
	computed: {
		vm() {
			return vm;
		}
	},  
  data () {
    return {
    	currentEmployee: vm._data.team[0]
    }
  }
};
</script>

<style lang="sass">
@import './sass/_home'
</style>