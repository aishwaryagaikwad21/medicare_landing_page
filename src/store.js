import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
export default new Vuex.Store({
    plugins: [createPersistedState()],
  state: {
    user: {
      loggedIn: false,
      data: null,
      isDoctor : false,
      username : "xyz",
      key : ""
    }
  },
  getters: {
    user(state){
      return state.user
    }
  },
  mutations: {
    SET_LOGGED_IN(state,isDoctor,username) {
        
      state.user.loggedIn = true;
      state.user.isDoctor = isDoctor;
      state.user.username = username
    },
    SET_USER(state, data) {
      state.user.username = data;
    },
    SET_KEY(state,data)
    {
        console.log("key is ",data);
        state.user.key = data;
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    }
  }
});