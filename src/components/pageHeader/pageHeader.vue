<template>
	<section class="page-header">
		<div class="container">
			<h2>{{this.title}}</h2>
		</div>
	</section>
</template>

<script>
export default {

  name: 'pageHeader',
  props: ['title'],
  data() {
    return {

    };
  },
};
</script>

<style lang="sass">
@import './sass/_pageHeader'
</style>
