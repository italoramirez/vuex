import { createStore } from 'vuex'

export default createStore({
  state: {
    msg: 'Vuex desde ceros',
    nombre: 'italo',
    apellido: 'ramirez',
    amigos: [],
    amigo: ''
  },
  mutations: {
    //se realizará siempre y cuando sea llamado desde acción
    addAmigo ( state ) {
      state.amigos = [state.amigo, ...state.amigos]
    }
  },
  actions: {
    addAmigoAction ( context ) {
      context.commit('addAmigo');
    }
  },
  modules: {
  },
  getters: {
    mensaje (state) {
      return state.msg;
    },
    nombreCompleto ( state ) {
      return `${state.nombre} ${state.apellido}`
    }
  }
})
