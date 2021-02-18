import React, { Fragment, useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addList, addListing } from '../redux/listingsReducer'

import InputGroupWithExtras from "react-bootstrap/esm/InputGroup";

// material UI
import { Input } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const AddData = () =>{
    const [name, setName] = useState();
    const [tel, setTel] = useState();
    const [gender, setGender] = useState();
    
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        // starting to work to save input to DB via API 
        //  dispatch(addList(name,tel,gender));
        dispatch(addList(name,tel,gender))
    }
    return(
        <div className="main">
        <form  onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="Name"
                onChange={({target})=> setName(target.value)}
            />
            <Input
                type="text"
                placeholder="Telephone"
                onChange={({target})=> setTel(target.value)}
            />
            <Input
                type="text"
                placeholder="Gender"
                onChange={({target})=> setGender(target.value)}
            />
            <Button   
                variant="contained"
                color="primary"
                style={{position:'relative', left:'20px'}}
                type="submit">Submit</Button>
            
        </form>
        </div>
    )
   
}
export default  AddData;