import listingsService from '../services/listingService';
import axios from 'axios';


const listingsReducer = (state = [], action) => {

    switch(action.type){
        case 'INIT_LISTINGS':
            return action.data;

        case 'ADD_LISTING':
            return [...state, action.data] ;  

        case 'ADD_LIST':
            console.log("action.data")
            console.log(action.data)
            return [...state, action.data];

            default:
                return state;
        
    }
};


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
    // axios.get("http://localhost:3004/").then(e=>{
    //     console.log(e)
    //  })
    axios.post("http://localhost:3004/farm/", {name: name, tel: tel, gender: gender}).then(res=>{
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