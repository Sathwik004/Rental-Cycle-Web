import supabase from './client.js';

async function getAvailableBicycles() {
    
    let {data,error} = await supabase.rpc('get_location_lot_count');
    //console.log('in getAvailable ',data);
    if (error) 
    {
        console.error(error)
        return null;
    }
    else 
    {
        console.log('in getAvailabeee ',data)
    }
    return data;
}

export default getAvailableBicycles;