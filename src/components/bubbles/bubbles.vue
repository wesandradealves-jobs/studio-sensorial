<template>
	<ul class="bubbles">
		<li :style="(options.width) ? `width: ${options.width}` : ''" v-for="item in this.items">
			<div class="thumbnail">
				<div class="ico">
					<div v-html="item.image" v-if="item.svg"></div>
					<img :src="item.image" v-else />
				</div>
				<div class="bubble">
					<svg enable-background="new 0 0 1200 1200" version="1.1" viewBox="0 0 1200 1200" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
					<path d="m1068.2 894.91c53.305-84.721 84.254-184.93 84.254-292.41 0-303.76-246.24-550-550-550-303.75 1e-3 -550 246.24-550 550 0 303.76 246.24 550 550 550 115.05 0 221.81-35.379 310.11-95.777l239.9 91.688-84.254-253.5z" fill="none" stroke="#262626" stroke-miterlimit="10" stroke-width="5"/>
					</svg>
				</div>
			</div>
			<h3>{{ item.title }}</h3>
			<p>{{ item.text }}</p>
		</li>
	</ul>
</template>

<script>
export default {

  name: 'bubbles',
  props: ['items','settings','svg'],
  data() {
    return {
    	opt: {
    		width: this.settings.width
    	}
    };
  },
  computed: {
  	options() {
  		return this.opt;
  	}
  }
};
</script>

<style lang="sass">
@import './sass/_bubbles'
</style>
