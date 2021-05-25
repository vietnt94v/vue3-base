import Const from '../constants'
import axios from 'axios'

class TodoService {
  getTodo() {
    return axios.get(Const.api_url + 'todos')
  }
}

export default new TodoService
