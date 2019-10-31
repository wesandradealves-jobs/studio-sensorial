<template>
	<h2 class="section-title">
		<span>&#x25cf;</span> {{this.header}}
		<small>{{this.subheader}}</small>
	</h2>	
</template>

<script>
export default {

  name: 'sectionHeader',
  props: ['header','subheader'],
  data() {
    return {

    };
  },
};
</script>

<style lang="sass">
@import './sass/_sectionHeader'
</style>
