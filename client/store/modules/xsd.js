
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
  ADD_ITEM (state, payload) {
    state.items.push(payload)
  },
  UPDATE_ITEM (state, payload) {
    const idx = state.items.findIndex( item => item.id == payload.id )
    state.items.splice(idx, 1, payload)
  },
  REMOVE_ITEM (state, payload) {
    const idx = state.items.findIndex( item => item.id == payload )
    state.items.splice(idx, 1)
  },
  SET_TRANSES(state, payload){
    state.transes = payload
  }
}

const actions = {
  setItems ({ commit }, items) {
    commit('SET_ITEMS', items)
  },
  addItem ({ commit }, payload) {
    commit('ADD_ITEM', payload)
  },
  updateItem ({ commit }, payload) {
    commit('UPDATE_ITEM', payload)
  },
  removeItem ({ commit }, payload) {
    commit('REMOVE_ITEM', payload)
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
