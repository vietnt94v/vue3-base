import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export const key: InjectionKey<Store<State>> = Symbol()

export interface State {
  count: number,
  todos: Array<Todo>
}

export interface Todo {
  name: String,
  completed: Boolean
}

const Todo = createStore<State>({
  state: {
    count: 0,
    todos: []
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  }
})

export default Todo