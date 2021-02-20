import listingsService from '../services/listingService';
import axios from 'axios';


const listingsReducer = (state = [], action) => {

    switch(action.type){

        case 'INIT_LISTINGS':
            return action.data;

        case 'ADD_LISTING':
            return [...state, action.data] ; 
            
        case 'ADD_LIST_STORE':
            return [...state, action.data]

        case 'ADD_LIST':
            return [...state, action.data];

            default:
                return state;
        
    }
};

//getting list
export const addListStore = ()=>{
    return async dispatch => {
    axios.get('http://localhost:3004/api/list/',{}).then(resp =>{
        dispatch({
            type: 'ADD_LIST_STORE',
            data: resp.data
        })
    })
}
}

export const initListings = () => {
    return async dispatch => {
        const listings =  await listingsService.getAll();
        dispatch({
            type: 'INIT_LISTINGS',
            data: listings,
        });
    };
};


export const addList = (name, tel, gender) => { 
    return async dispatch => {
   
    axios.post("http://localhost:3004/api/farm/", {name: name, tel: tel, gender: gender}).then(res=>{
        dispatch({
            type: 'ADD_LIST', 
            data: res.data
        })
    }).catch(function (err) {
        console.log(err)
    })
} 
}
// only without DB just redux state/store 
export const addListing = (name, tel, gender) => {
    return async dispatch => {
        const listings = await listingsService.addListing(name, tel, gender);
        dispatch({
            type: 'ADD_LISTING',
            data: listings,
        });
    };
};

export default listingsReducer;