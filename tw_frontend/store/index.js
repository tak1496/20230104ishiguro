import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      tweet_list: []
    },
    mutations: {
      async tweetList(state) {
        await this.$axios.get("http://127.0.0.1:8000/api/tweet/")
          .then(result => {
            state.tweet_list = result.data.data;
        });
      },
    },
    actions: {
      async addTweet(state, sendData) {
        await this.$axios.post("http://127.0.0.1:8000/api/tweet/", sendData)
        .then(result => {
          state.commit('tweetList');
        });
      },
      async delTweet(state, sendData) {
        await this.$axios.delete("http://127.0.0.1:8000/api/tweet/" + sendData)
          .then(result => {
          state.commit('tweetList');
        });
      },

    }
  })
}

export default createStore