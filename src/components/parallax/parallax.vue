<template>
	<section :style="{ backgroundImage: 'url('+this.background+')' }" class="parallax">
		<div class="container">
			<div>
				<h3>{{this.text}}</h3>
			</div>
		</div>
	</section>
</template>

<script>
export default {

  name: 'parallax',
  props: ['background','text'],
  data() {
    return {

    };
  },
};
</script>

<style lang="sass">
@import './sass/_parallax'
</style>