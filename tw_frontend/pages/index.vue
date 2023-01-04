<template>
  <div class="container">
    <h1>独り言App</h1>

    <div>
      <div>つぶやく内容を入力して下さい</div>
      <input type="text" v-model="tweet" />
      <button v-on:click="addTweet">つぶやく</button>
    </div>

    <div>
      <h2>つぶやき一覧</h2>
    </div>

    <div class="tweet_container">
      <table>
        <tr v-for="(data, index) in this.$store.state.tweet_list" class="tweet">
          <td>●</td>
          <td>{{ data.tweet }}</td>
          <td>
            <button v-on:click="delTweet(data.id)">削除</button>
          </td>
        </tr>
      </table>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      tweet: '',
    }
  },
  created() {
    this.$store.commit('tweetList');
  },
  methods: {
    addTweet() {
      const sendData = {
        tweet: this.tweet
      }
      this.$store.dispatch('addTweet', sendData);
      this.tweet = '';
    },
    delTweet(value) {
      this.$store.dispatch('delTweet', value);
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.tweet_container {
  margin: 0 auto;
  border: 1.5px solid gray;
  max-width: 500px;
  min-height: 200px;
}

.tweet td:nth-child(1){
  font-size: 50px;
  color: red;
}

.tweet td:nth-child(2) {
  min-width: 380px;
  text-align: left;
}
</style>