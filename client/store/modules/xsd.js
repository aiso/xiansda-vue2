
const state = {
  items: null,
  transes: null
}

const getters = {
  items: state => state.items,
  transes: state => state.transes,
}

const mutations = {
  SET_ITEMS (state, payload) {
    state.items = payload
  },
  SET_TRANSES(state, payload){
    state.transes = payload
  }
}

const actions = {
  setItems ({ commit }, items) {
    commit('SET_ITEMS', items)
  },
  setTranses ({ commit }, transes) {
    commit('SET_TRANSES', transes)
  }  
}

module.exports = {
  state,
  getters,
  mutations,
  actions,
}
