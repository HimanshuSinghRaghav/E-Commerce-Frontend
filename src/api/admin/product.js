import api from '../../utils/GetApiClient'
const product = async() => {
    const response = await api.get('/seller/product')
    console.log(response)
    return response.data
}

const categorys = async() => {
    const response = await api.get('/seller/categorys')
    console.log(response)
    return response.data
}


export default product
export {categorys}
