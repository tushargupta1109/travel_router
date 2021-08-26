import axios from "axios";
const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': '16914a7986msh0c529a7e83a6426p148239jsn36f82e316ffb'
  }
};

export const getPlaceData=async()=>{
    try{
        const {data :{data}}=await axios.get(URL,options);
        return data;
    }catch(error){
        console.log(error);
    }
}