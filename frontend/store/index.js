
export const state = () => ({
  loggedIn: false,
  videos: [],
  viewed: [],
});

export const mutations = {
  setVideos(state, videos) {
    state.videos = videos.data;
  },
  setLoggedIn(state, loggedIn) {
    
    //making this a toggle might be better but
    //keeping it simple

    this.$cookies.set("loggedIn", loggedIn, {
        path: "/"
    });

    state.loggedIn = loggedIn;

  },
  addViewed(state, video_id) {
    //check and only add uniques
    if(state.viewed.indexOf(video_id) === -1) {
      state.viewed.push(video_id);
    }
    //console.log(state.viewed);
  },
};

export const actions = {
  async login({ commit }) {
    //console.log("check login");
    commit("setLoggedIn", true);
    //console.log("check login", this.state.loggedIn);

  },
  async logout({ commit }) {
    //console.log("check login");
    commit("setLoggedIn", false);
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
        return state.videos.find(video => video.id == id);
    },
    checkViewed: (state) => (video_id) => {
        return state.viewed.indexOf(video_id);
    } 
};