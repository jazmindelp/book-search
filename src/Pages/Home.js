import {useState} from 'react';
import { useEffect } from 'react';
import BookList from '../components/BookList';
import SearchBar from '../components/SearchBar';

const Home = ()=>{


    const [books, setBooks] = useState([]);

    const[searchValue, setSearchValue]= useState('');
    
    const getBookRequest = async ()=>{
    const url=`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=AIzaSyC4kIVsFQ8qC_i6GqODeJ2DGFeEn2TWsfg`
    
      const response = await fetch(url);
      const responseJson = await response.json();
      // console.log(responseJson.items)

    
      if(responseJson.items){
       
      setBooks(responseJson.items)}
     
    };
  
    useEffect(()=>{
      getBookRequest();
      }, [searchValue]);
   
  return(
     
        <div className='container'>
            <div className='search-container'>
              <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>

         
            <div className='row'>
              <BookList books={books} setBooks={setBooks}/>
            </div>
        
      </div>
      )
}

export default Home;