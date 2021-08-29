import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': ProcessingInstruction.env.REACT_APP_RAPIDAPI_KEY
            } 
          });
        return data;
    }catch(error){
        console.log(error);
    }
}

export const getWeaterdata=async(lat,lng)=>{
  try{
    const {data}=await axios.get('https://community-open-weather-map.p.rapidapi.com/find',{
      params: {
        lon: '0',
        lat: '0',
      },
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': ProcessingInstruction.env.REACT_APP_RAPIDAPI_KEY
      }
    })
  }catch(error){
    console.log(error);
  }
}