import api from '../../utils/GetApiClient'
const Register = async(data) => {
    const response = await api.post('/seller/register' , data)
    console.log(response)
    return response.data
}

const Login = async(data) => {
    const response = await api.post('/seller/login' , data)
    console.log(response)
    return response.data
}

export default Register
export {Login}