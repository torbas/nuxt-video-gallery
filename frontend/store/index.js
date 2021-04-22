
export const state = () => ({
  loggedIn: false,
  videos: [],
});

export const mutations = {
  setVideos(state, videos) {
    state.videos = videos.data;
  }
};

export const actions = {
  async login() {
    //console.log("check login");
    this.state.loggedIn = true;
    //console.log("check login", this.state.loggedIn);

  },
  async logout() {
    //console.log("check login");
    this.state.loggedIn = false;
    //console.log("check login", this.state.loggedIn);

  },
  async nuxtServerInit({ commit }) {
    const response = await this.$axios.get('/videos');
    const videos = response.data;
    //console.log(videos);
    commit("setVideos", videos);
  }
};

export const getters = {
    getVideoById: (state) => (id) => {
        //console.log(state.videos);
        return state.videos.find(video => video.id == id)
    } 
};