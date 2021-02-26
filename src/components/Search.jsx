import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getList, addListing, deleteList}  from '../redux/listingsReducer'
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
     
    const getList = ()  =>{
        axios.get("http://localhost:3004/api/list/")
        .then(resp=>{
            console.log(resp.data)
            setList(resp.data) ;
        })}   
   
    const deleteItem = (listId) =>{
        console.log(listId)
        axios.delete(`http://localhost:3004/api/deleteItem/`, {params: {id:listId}}).then(resp => {
            console.log(resp)
            // dispatch({
            //     type: 'DELETE_LIST',
            //     data: resp.data
            // })
        }).catch(err=> {
            console.log(err)
        })
        // deleteList(listId)
    }
    
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
                  {show === false ? <div > <p style={{ display:'inline-block', position:'relative', right:'5px'}}>{l.name}</p> <Button variant="contained"
                     color="secundary"  style={{height: '15px'}} onClick={()=>{deleteItem(l.id)}}>delete</Button></div>: <div><p>{l.name} {l.tel} {l.gender}</p></div>}  
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