
import { Modal } from '@mui/material';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import { useState } from 'react';


const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#FFCB69',
    }
    
  });

  
const BookList = (props)=>{
    const [open, setOpen] = useState(false);
    // const handleOpen = () => {setOpen(true);}
    const handleClose = () => setOpen(false);
    
  const [specInfo, setSpecInfo] = useState(undefined)
  const [specLength, setSpecLength] = useState(undefined)
  
    return (
    <>
        
       <div className="book-list">
            {props.books.map((book, index)=> {
                    const  authorsLength= book.volumeInfo.authors === undefined ?
                    0: book.volumeInfo.authors.length

                const handleSelect = (e) =>{
                   setOpen(true)
                   setSpecInfo(book);
                   setSpecLength(book.volumeInfo.authors.length)
                    // console.log(book)
                }
                return (
                 <>
              
        <div className="card-container" key={book.id}>
               {/* {console.log(specInfo)} */}
            <div className="book-card">
                <div className="img-container">
                <img        src={book.volumeInfo.imageLinks === undefined
                            ? "https://na3.taadd.com/es_manga/logo/202112/202112090140345185.jpg"
                            : `${book.volumeInfo.imageLinks.thumbnail}`}
                alt=""
                className="image"/>
                </div>
            <div className="book-info">
                    <div className="text">
                <div className="title">{book.volumeInfo.title}</div>
                    <div className="info">
                  
                 <div className="author">
                    <strong>
                    {authorsLength > 1?
                        "Authors: ":
                        "Author: "}
                    </strong>
                   
                    {book.volumeInfo.authors === undefined ? "Unknown" :
                    
                   ( `${authorsLength> 1? 
                        (`${book.volumeInfo.authors[0]} and ${book.volumeInfo.authors[1]}`) : 
                    
                       (`${book.volumeInfo.authors}`) 
                    
                    }`)}
            
                    </div>
                
                <div className="pages"><strong>Pages:</strong> {book.volumeInfo.pageCount ? book.volumeInfo.pageCount: "" }</div>
                <div className="rating">

                    {book.volumeInfo.averageRating === undefined ?
                    
                    <p>Rating not available</p>:
                    (<StyledRating className="rating-stars" 
                    defaultValue={2.5} 
                    precision={0.5} 
                    name="read-only" 
                    value={book.volumeInfo.averageRating} 
                    readOnly />)
                    }
                

            
                </div>
            </div>
                </div>
               
                <div className="button-container">

                <button className="more-btn" onClick={handleSelect}   >
            
                    See More
                </button>

                </div>
            
                </div>
             
            </div>
          
        </div>
                </>
                )}
            )}
         <Modal 
                    open={open}
                   onClose={handleClose}
                   sx={{
                    overflow: 'scroll',
    
                    marginTop: 1.5,
                    padding: 1,
                   
                    fontSize: 14,
                    
                  }}>
          
                       <>
                <div className="book-info-container">
                <div className="card-info-container">
                    <div className="book-title">
                       {specInfo === undefined ? "" : specInfo.volumeInfo.title}
                    </div>
                    <img   src={specInfo === undefined ? "" : (specInfo.volumeInfo.imageLinks?.thumbnail === undefined ?
                     "https://na3.taadd.com/es_manga/logo/202112/202112090140345185.jpg":
                     `${specInfo?.volumeInfo.imageLinks.thumbnail}`)}
                    alt=""
                    className="image-info"/>

                <div className="info-content">
                    <div className="author">
                <strong>
                {specLength > 1?
                    "Authors: ":
                    "Author: "}
                </strong>
            
                {specInfo?.volumeInfo.authors === undefined ? "Unknown" :
                
               ( `${specLength> 1? 
                    (`${specInfo.volumeInfo.authors[0]} and ${specInfo.volumeInfo.authors[1]}`) : 
                
                   (`${specInfo.volumeInfo.authors}`) 
                
                }`)}
           
                </div>
                
            <div><strong>Category: </strong>{specInfo === undefined ? "" : specInfo.volumeInfo.categories}</div>
            <div><strong>Pages:</strong> {specInfo === undefined ? "" : specInfo.volumeInfo.pageCount}</div>
            <div><strong>Published date: </strong>{specInfo === undefined ? "" : specInfo.volumeInfo.publishedDate}</div>
            <div>
                <strong>Publisher: </strong>
            {specInfo?.volumeInfo.publisher === undefined ? "Unknown" : specInfo.volumeInfo.publisher}
            </div>
            </div>
                </div>
                <div className="card-info">
                   
                <div className="description">
                   
                {specInfo?.volumeInfo.description === undefined ? "No description available." : specInfo.volumeInfo.description}
                
                </div>
                <div className="sample-button-container">
                    <button className="sample-btn">
                       <a href={specInfo?.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">Read a sample</a> 
                        </button>
                </div>
           
           </div>
            
                      </div>
                      </>

         </Modal>
       </div>
       
    </>
    )  
}

export default BookList;

