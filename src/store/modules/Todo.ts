// export interface State {
//   count: number,
//   todos: Array<Todo>
// }

// export interface Todo {
//   name: String,
//   completed: Boolean
// }

const Todo = {
  state: () => ({
    count: 0,
    todos: []
  }),
  mutations: {
    increment(state: any) {
      state.count++
    }
  },
  actions: {
    increment(context: any) {
      context.commit('increment')
    }
  },
  getters: {
    doubleCount(state: any) {
      return state.count * 2
    }
  }
}

export default Todo