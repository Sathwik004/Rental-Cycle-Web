import supabase from './client.js';

async function getbicycles() {
    
    const {data,error} = await supabase.from('bicycles').select('*');
    
    console.log(data); 
    return data;
}

export default getbicycles;