const state = {
  language: "English"
};

const getters = {
  language: state => state.language
};

const actions = {
  changeLanguage({ commit }) {
    commit('changeLanguage', state.language)
  }
};

const mutations = {
  changeLanguage: (state, lang) => {
    if (lang==="English") return state.language="Japanese"
    return state.language="English"    
  }
};

export default { state, getters, actions, mutations }