<template>
	<div>
		<page-header :title="vm._data.title" />
		<section class="consultorias">
			<div class="container">
				<ul>
					<li v-for="consultoria in vm._data.consultorias">
						<section-header 
							:header="consultoria.title" 
						/>
						<ul>
							<li @click="redirect(item.url)" v-for="item in consultoria.items">
								<img :src="item.image" />
							</li>
						</ul>	
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>

<script>
import Vue from 'vue';
import pageHeader from "@/components/pageHeader/pageHeader.vue";
import sectionHeader from "@/components/sectionHeader/sectionHeader.vue";

var vm = new Vue({
  data: {
  	title: '',
  	consultorias: [
      {
        'title':'Consultorias com Fernanda Carneiro',
        'items': [
          {
            'image':'./static/consultoria1.png',
            'url':'#'
          },
          {
            'image':'./static/consultoria2.png',
            'url':'#'
          }
        ]
      }
  	]
  }
});
export default {

  name: 'consultorias',
  beforeRouteEnter (to, from, next) {
  	vm._data.title = to.name;

  	next();
  },
  methods: {
  	redirect(url) {
  		window.location = url;
  	}
  },
	computed: {
		vm() {
			return vm;
		}
	},  
  components: {
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
@import './sass/_consultorias'
</style>