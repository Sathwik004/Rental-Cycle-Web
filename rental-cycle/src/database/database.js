import supabase from './client.js';
import { useNavigate } from 'react-router-dom';

export async function getAvailableBicycles() {

    let { data, error } = await supabase.rpc('get_location_lot_count');
    if (error) {
        console.error(error)
        return null;
    }
    return data;
}

export async function getAvailableSlots() {
    let { data, error } = await supabase.rpc('get_empty_locations_with_count');
    if (error) {
        console.error(error)
        return null;
    }
    return data;
}

export async function bookCycle(uid, source_name, destination_name) {
    let { data, error } = await supabase.rpc('cycle_rent', {
        destination_name, 
        source_name, 
        uid
      });

    if (error) {
        console.error(error);
        return null;
    }
    console.log('data', data);
    return data;
}

export async function returnCycle(d_lotid, duration) {
    let { data, error } = await supabase.rpc('cycle_return', {
        d_lotid,
        duration
    });

    if (error) {
        console.error(error);
        return null;
    }
    return data;
}

export async function getUserDetails(uid) {
    let { data, error } = await supabase.rpc('get_user_data', {
        uid
    });

    if (error) {
        console.error(error);
        return null;
    }
    return data;
}

export async function getUserTransactions(uid) {
    let { data, error } = await supabase.rpc('get_user_trans_data', {
        uid
    });

    if (error) {
        console.error(error);
        return null;
    }
    return data;
}

export async function logout() {
    supabase.auth.signOut().then(({ error }) => {
        if (error) {
            console.log('error in logout', error);
        }
        window.location.href = '/';
    });
}