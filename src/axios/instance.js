import axios from "axios";
import { toast } from "react-toastify";

const instance = axios.create({
  baseURL: 'https://dummyapi.io/data/v1',
  withCredentials: false,
  headers: {
    'app-id': '6480293687c6130d3d3f302f'
  }
})

axios.interceptors.response.use((success) => {
  toast.success('Success')
  return success
}, (error) => {
  toast.error('Error')
  return Promise.reject(error)
})

export default instance;