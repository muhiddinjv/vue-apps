<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="text" placeholder="Search jokes..." />
    <input type="submit" value="Search jokes" />
  </form>
</template>

<script>
export default {
  name: 'SearchJokes',
  data() {
    return {
      text: '',
    }
  },
  methods: {
    onSubmit() {
      // alert('hi')
      this.$emit('search-text', this.text)
      this.text = ''
    },
  },
}
</script>

<style>
input[type='submit'] {
  height: 30px;
}
</style>
