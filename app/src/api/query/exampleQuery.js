import Axios from "../axios"
export const fetchExample = async ()=>{
  try{
    const {data} = await  Axios.get("/")
    return data
  }catch(error){
   throw Error(error.response.data.message) 
  }
}