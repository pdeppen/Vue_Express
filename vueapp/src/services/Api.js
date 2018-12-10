import axios from 'axios'

export default() => {
    return axios.create({
        baseURL: `http://157.160.36.106:80/`
    })
}
