<template>
  <div>
    <!-- Loop thru & show a joke for each on in the array. -->
    <Joke
      v-for="joke in jokes"
      :key="joke.id"
      :id="joke.id"
      :joke="joke.joke"
    />
  </div>
</template>

<script>
import axios from 'axios'
import Joke from '../../components/Joke'
export default {
  components: { Joke },
  data() {
    return {
      jokes: [],
    }
  },
  async created() {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }
    try {
      const res = await axios.get('https://icanhazdadjoke.com/search', config)
      this.jokes = res.data.results
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  },
  head() {
    return {
      title: 'Jokes',
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

<style>
</style>
