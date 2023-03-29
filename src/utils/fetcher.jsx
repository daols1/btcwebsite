import axios from 'axios'

export const fetcher = async () => {
    const request =  await axios.get('http://localhost:1337/api/blogs')
    
    if (!request.status >= 200 && !request.status < 300){
    throw new Error('Error you have done rubbish')
    }
    return request.data
}

// export default fetcherList = async () => {
//     const request =  await axios.get('http://localhost:1337/api/blogs')
    
//     if (!request.status >= 200 && !request.status < 300){
//     throw new Error('Error you have done rubbish')
//     }
//     return request.data
// }