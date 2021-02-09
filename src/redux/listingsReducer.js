import listingsService from '../services/listingService';


const listingsReducer = (state = [], action) => {

    switch(action.type){
        case 'INIT_LISTINGS':
            return action.data;

        case 'ADD_LISTING':
            return [...state, action.data] ;  
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