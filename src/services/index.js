import axios from 'axios'
const API = 'https://reqres.in/api/users'
const OPTIONS = {
    headers: {
        "Access-Control-Allow-Origin": '*',
    }
}

export default class Services {
    
    getUsers(id) {
        const path = `${API}?page=${id}`
        return axios.get(path, OPTIONS)
    }

}