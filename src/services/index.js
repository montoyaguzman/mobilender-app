import axios from 'axios'
const API = 'https://reqres.in/api/users'
const SWAPI = 'https://swapi.dev/api'
const OPTIONS = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json', 
    }
}

export default class Services {
    
    getUsers(id) {
        const path = `${API}?page=${id}`
        return axios.get(path, OPTIONS)
    }

    getPlanets(entity) {
        const path = `${SWAPI}/${entity}`
        return axios.get(path, OPTIONS)
    }

}