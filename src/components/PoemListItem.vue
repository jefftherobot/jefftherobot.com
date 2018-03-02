<template lang="pug">
  div {{ poem.content }}
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