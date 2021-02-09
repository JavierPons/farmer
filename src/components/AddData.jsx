import React, { Fragment, useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addListing } from '../redux/listingsReducer'

import InputGroupWithExtras from "react-bootstrap/esm/InputGroup";



const AddData = () =>{
    const [name, setName] = useState();
    const [tel, setTel] = useState();
    const [gender, setGender] = useState();
    
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addListing(name,tel,gender));
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                onChange={({target})=> setName(target.value)}
            />
            <input
                type="text"
                placeholder="Telephone"
                onChange={({target})=> setTel(target.value)}
            />
            <input
                type="text"
                placeholder="Gender"
                onChange={({target})=> setGender(target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    )
   
}
export default  AddData;