import { createStore } from 'vuex'

export interface State {
  todos: Array<Todo>,
}

export interface Todo {
  id: number,
  text: string,
  completed: boolean
}

const Todo = createStore<State>({
  state: () => ({
    todos: [
      { id: 1, text: 'Vuex', completed: true },
      { id: 2, text: 'Typescript', completed: false }
    ]
  }),
  mutations: {
    increment() {
      console.log('mutation');
    }
  },
  actions: {
    increment(context: any) {
      context.commit('increment')
    }
  },
  getters: {}
})

export default Todo
