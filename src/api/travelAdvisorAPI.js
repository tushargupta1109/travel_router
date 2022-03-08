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
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
      },
    });
    return data; 
  } catch (error) {
    console.log(error);
  }
};


// latitude: '28.375694',
//         longitude: '79.43167',
        // lang: 'en_US',
        // hotel_class: '1,2,3',
        // limit: '30',
        // adults: '1',
        // amenities: 'beach,bar_lounge,airport_transportation',
        // rooms: '1',
        // child_rm_ages: '7,10',
        // currency: 'USD',
        // checkin: '2022-03-08',
        // zff: '4,6',
        // subcategory: 'hotel,bb,specialty',
        // nights: '2'