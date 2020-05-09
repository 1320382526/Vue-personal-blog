import axios from 'axios'

if(process.env.NODE_ENV === "development"){
    axios.defaults.baseURL = 'http://localhost:12306'
}

export default axios