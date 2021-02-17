import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

const Search = () =>{
    const [search,setSearch] = useState();
    const [show, setShow] = useState(0);
    const listings = useSelector((state)=> state.listings)

    
   
    return(
        <Fragment>
           <input
           type="text"
           placeholder="Search by name or tel."
           onChange={({target}) => 
               setSearch(target.value)}
           />
           {listings.filter(list => list.name === search || list.tel === search).map((l, inx)=>(
               <div key={inx}>
                  {show === 0 ? <p>{l.name}</p>: <p>{l.name} {l.tel} {l.gender}</p> }  
                    <button onClick={()=>{
                        setShow(1)
                    }}>Show more</button>
               </div>
              
           ) 
       

       
    )}
        </Fragment>
    )
}
export default  Search;