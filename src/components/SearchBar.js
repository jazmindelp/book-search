

import SearchIcon from '@mui/icons-material/Search';

const SearchBar = (props)=>{
  
  
    return(
        <>
            <input 
            className="search-bar"
            placeholder="Search book or author name..."
            value={props.value}
            onKeyPress={event=> {
                if(event.key==='Enter')
                    {props.setSearchValue(event.target.value)
                        }
               
                } }
            >
            </input>

            <SearchIcon className="search-icon"/>
            </>
    )
}

export default SearchBar;