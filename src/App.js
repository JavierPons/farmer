import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import style from './style.css'
import AddData from './components/AddData'
import Search from './components/Search';
import { initListings, addListing , addListStore} from './redux/listingsReducer';

function App() {
  const dispatch = useDispatch();
  const listings = useSelector((state)=> state.listings)

  useEffect(() => {
   dispatch(addListStore());
  }, [dispatch])


  return (
    <div className='form'>
    {/* {listings.map((l, k)=>(
      <p key={k}>  {l.name}, {l.tel}, {l.gender}</p>
  ))}     */}
 
  <AddData/>
  <Search/>
    </div>
  );
}

export default App;
