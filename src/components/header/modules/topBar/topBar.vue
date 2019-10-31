<template>
	<div class="topbar">
		<div class="container">
			<ul>
				<li v-for="info in infos">
					<md-icon :class="info.ico">{{ (info.mdIcon) ? info.ico : '' }}</md-icon>
					<a :href="((info.type === 'tel') ? 'tel:' : '') + info.callback" :title="info.text">{{ info.text }}</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {

  name: 'topBar',
  props: ['infos'],
  data () {
    return {

    }
  }
};
</script>

<style lang="sass">
@import './sass/_topBar'
</style>