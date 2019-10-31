<template>
	<div class="post-card">
		<div v-if="this.post.thumbnail" :style="{ backgroundImage: 'url('+this.post.thumbnail+')' }" class="thumbnail"></div>
		<h3>{{this.post.title}} <small>{{this.post.date}}</small></h3>
		<p>{{this.post.excerpt}}</p>
	</div>
</template>

<script>
export default {

  name: 'postCard',
  props: ['post'],
  data () {
    return {

    }
  }
};
</script>

<style lang="sass">
@import './sass/_postCard'
</style>