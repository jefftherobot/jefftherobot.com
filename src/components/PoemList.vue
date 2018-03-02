<template lang="pug">
	div
		PoemListItem(v-for="poem in PoemData" :key="poem.id" :poem="poem")
</template>

<script>
	import PoemData from '@data/poems.json';
	import PoemListItem from './PoemListItem.vue'

	export default {
		components: {
			PoemListItem
		},
		data() { console.log(PoemData)
			return {
				PoemData
			}
		}
	}
</script>