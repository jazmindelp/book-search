import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookListHeader from "./components/BookListHeader";
import Home from "./Pages/Home";



const App = () =>{
 return(

   <BrowserRouter>
    <div className='row'>
          <BookListHeader header="Books"/>
        </div>
   
       
      <Routes>
     
          <Route path="/" element={ <Home />}/>
         
     
          
      </Routes>
   </BrowserRouter>
 )

}

export default App;