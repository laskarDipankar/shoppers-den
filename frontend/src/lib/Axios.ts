import axios from 'axios'

export const api = axios.create({

        // baseURL:'http://localhost:5006/api/users',
        baseURL:'https://denshoppers.onrender.com/api/users',
        headers:{
            "Content-Type":"application/json"

        }

})