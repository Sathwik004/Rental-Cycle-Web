import supabase from './client.js';

export async function getAvailableBicycles() {
    
    let {data,error} = await supabase.rpc('get_location_lot_count');
    if (error) 
    {
        console.error(error)
        return null;
    }
    return data;
}

export async function getAvailableSlots()
{
    let {data,error} = await supabase.rpc('get_empty_locations_with_count');
    if (error) 
    {
        console.error(error)
        return null;
    }
    return data;
}
