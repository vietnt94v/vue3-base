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
  }
}

export default Todo