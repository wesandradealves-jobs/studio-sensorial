<template>
	<nav :class="'navigation -' + this.layout + ((tpl === 'mobile' && this.open) ? ' opened' : '')">
		<ul>
			<li v-if="link.name!=='PageNotFound'&&link.name!=='Home'" v-for="link in this.items">
		        <router-link v-if="tpl!=='social'" :title="link.name" :to="{ path: `${link.path}` }">
		        	{{link.name}}
		        </router-link>   
		        <a v-if="tpl==='social'" :href="link.path">
		        	<i :class="`socicon-${link.slug}`"></i>
		        </a>
			</li>
			<li v-if="tpl==='main'">
		        <button
		          class="hamburger hamburger--collapse"
		          :class="{ 'is-active': this.isActive }"
		          type="button"
		          @click="openMenu"
		        >
		          <span class="hamburger-box">
		            <span class="hamburger-inner"></span>
		          </span>
		        </button>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
  	name: 'navigation',
  	props: ['items', 'layout', 'open'],
  	methods: {
	    openMenu: function() {
			this.isActive = !this.isActive;

			this.$emit('openMenu', this.isActive);
	    },
	    closeMenu: function() {
	    	this.isActive = false;
	    	
			this.$emit('openMenu', 'close');
	    },
  	},
  	mounted() {
		window.addEventListener("resize", this.closeMenu, false);
  	},
	computed: {
		tpl() {
			return this.layout;
		}
	},  	
	data () {
		return {
			navigation: this.items,
			isActive: false
		}
	}
};
</script>

<style lang="sass">
@import './sass/_navigation'
</style>