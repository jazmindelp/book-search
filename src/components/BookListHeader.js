import { useState } from "react";
import { NavLink } from "react-router-dom";

const BookListHeader =() =>{
    const [isShown, setIsShown] = useState(false);
    return(
        <div className="col-header">
            <div>
            <NavLink
            to={{pathname: '/'}}
            >
            BookSearch
            </NavLink>
            </div>
            <div className="about-me"
                 onMouseEnter={() => setIsShown(true)}
                 onMouseLeave={() => setIsShown(false)}>
                About me

            {isShown && (
        <div className="list-about-me">
        <ul>
            <li> 
                <a href="https://www.linkedin.com/in/jazm%C3%ADn-del-puerto-61397222a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li>
                <a href="https://github.com/jazmindelp" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
        </ul>
    </div>
      )}
            
            </div>
        </div>
    );
};

export default BookListHeader;