import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      maskedEmail: ''
    },
    mutations: {
      SET_MASKED_EMAIL(state, email) {
        state.maskedEmail = email;
      }
    }
  });
};

export default createStore;
