import axios from 'axios'

export const api = axios.create({

        baseURL:'http://localhost:5005/api/users',
        headers:{
            "Content-Type":"application/json"

        }

})