import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

// material UI
import { Input } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const Search = () =>{
    const [search,setSearch] = useState();
    const [show, setShow] = useState(0);
    const listings = useSelector((state)=> state.listings)

    
   
    return(
        <Fragment>
           <Input
           type="text"
           placeholder="Search by name or tel."
           onChange={({target}) => 
               setSearch(target.value)}
           />
           {listings.filter(list => list.name === search || list.tel === search).map((l, inx)=>(
               <div key={inx}>
                  {show === 0 ? <p>{l.name}</p>: <p>{l.name} {l.tel} {l.gender}</p> }  
                    <Button 
                     variant="contained"
                     color="secundary"
                     style={{ backgroundColor: "#ffbf00"}}
                    onClick={()=>{
                        setShow(1)
                    }}>Show more</Button>
               </div>
              
           ) 
       

       
    )}
        </Fragment>
    )
}
export default  Search;