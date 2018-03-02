<template lang="pug">
	pre {{ poem.content }}
</template>

<script>
export default {
	props: {
		poem: {
			type: Object,
			required: true
		}
	}
}
</script>

<style lang="postcss" scoped>
	pre
		margin: 0 0 30px
		padding: 0 0 30px
		font-family: 'Special Elite'
		font-size: 15px
		line-height: 1.5
		color: #2c3e50
		border-bottom: 1px solid #cec9b9
</style>