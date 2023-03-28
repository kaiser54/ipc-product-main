import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      maskedEmail: ''
    },
    mutations: {
      setMaskedEmail(state, email) {
        state.maskedEmail = email;
      }
    }
  });
};

export default createStore;
