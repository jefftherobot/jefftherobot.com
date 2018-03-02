<template lang="pug">
	#app
		PoemList
</template>

<script>
import PoemList from './components/PoemList.vue'

export default {
	components: {
		PoemList
	}
}
</script>

<style lang="postcss">
	body
		background: #f8f2e3
	#app
		-webkit-font-smoothing: antialiased
		-moz-osx-font-smoothing: grayscale
		display: grid
		justify-items: center
		margin: 60px 0 0
</style>