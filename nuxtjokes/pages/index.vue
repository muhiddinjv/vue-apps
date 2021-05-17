<template>
  <div>
    <h1>Welcome</h1>
    <p>The best corny dad jokes app on the web.</p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Best place for corny dad jokes',
        },
      ],
    }
  },
}
</script>