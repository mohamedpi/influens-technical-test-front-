import React from "react"
import "./SearchBar.scss"
import tayara from "../Static/tayar_logo.png"
import { connect } from "react-redux";
import {filtredTitle} from "../Actions/actions"

 function SearchBar(props)
{
    return(
        <div class="main_bar">
         <img class ="logo_tayara" src={tayara}/>
         <div class="search_class">
         <input class="search-bar" placeholder="Search something.." onChange={event =>props.filtredTitle
         (event.target.value)}></input>
         <input type="submit" disabled value="Search" href="#"></input>
         </div>
         <div className=".bar_buttons_container">
         <button  className="bar_buttons">Login</button>
         <button  className="bar_buttons">Sign In</button>
         </div>

        </div>
    )
    
        
    
}

export default connect("", { filtredTitle })(SearchBar);