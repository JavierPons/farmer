import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getList}  from '../redux/listingsReducer'
import axios from "axios";

// material UI
import { Input } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const Search = () =>{
    const [search,setSearch] = useState();
    const [show, setShow] = useState(false);
    const [list, setList] = useState([])   
    // used only to store in Redux data
    // const listings = useSelector((state)=> state.listings)
    // const dispatch = useDispatch();
     
    
    // useEffect(()=>{
    const getList = ()  =>{axios.get("http://localhost:3004/api/list/").then(resp=>{
            console.log(resp.data)
            setList(resp.data) ;
        })}   
    // },[])
    
    return(
      
        <Fragment>
           <Input
           type="text"
           placeholder="Search by name or tel."
           onChange={({target}) => (getList(),setSearch(target.value))
               }
               
           />
           {list.filter(list => list.name === search || list.tel === search).map((l, inx)=>(
               
               <div key={inx}>
                  {show === false ? <p>{l.name}</p>: <p>{l.name} {l.tel} {l.gender}</p> }  
                   {show == true ?<Button 
                     variant="contained"
                     color="secundary"
                     style={{ backgroundColor: "#ffbf00"}}
                    onClick={()=>{
                        setShow(false)
                    }}>Show less</Button> :<Button 
                    variant="contained"
                    color="secundary"
                    style={{ backgroundColor: "#ffbf00"}}
                   onClick={()=>{
                       setShow(true)
                   }}>Show more</Button>} 
               </div>
              
           ) 
       

       
    )}
        </Fragment>
    )
}
export default  Search;