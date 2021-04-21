// export const state = () => ({
//     loggedIn = false;
// })

// export const mutations = {
//     addItem(state, id){
//         let item = state.products.find(product => product.id == id)
//         state.myRentals.push(item)
//     },
// }

// export const getters = {
//     getProductById: (state) => (id) => {
//         return state.products.find(product => product.id == id)
//     } 
// }

import Vuex from 'vuex'


const createStore = () => {
    return new Vuex.Store({
        state: () => ({
            // USER NAV COMPONENT
            loggedIn: false,
        }),
        actions: {
            async login() {
              //console.log("check login");
              this.state.loggedIn = true;
              //console.log("check login", this.state.loggedIn);

            },
            async nuxtServerInit({ commit }) {
              const response = await this.$axios.get('/videos');
              const videos = response.data;
              //console.log(videos);
              commit("setVideos", videos);
            }
        },
        mutations: {
          setVideos(state, videos) {
            state.videos = videos;
          }
        }

    })
}

export default createStore