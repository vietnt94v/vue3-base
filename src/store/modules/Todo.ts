const Todo = {
  state() {
    return {
      todos: []
    }
  },
  mutations: {
    getTodos(state: any) {
      state.todos = [
        { name: 'x', completed: false }
      ]
    }
  },
  actions: {
    getTodos(context: any,) {
      context.commit('getTodos')
    }
  },
  getters: {
    todos(state: any) {
      return state.todos
    }
  }
}

export default Todo
