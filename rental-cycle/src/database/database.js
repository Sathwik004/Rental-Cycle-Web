import supabase from './client.js';

async function getnames() {
    
    const {data,error} = await supabase.from('test').select('*');
    
    console.log(data); 
    return data;
}

export default getnames;