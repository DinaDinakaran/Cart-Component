import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import FinalComponent  from "./finalcomponent";
 
function Card(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<FinalComponent/>}/>
            </Routes>
        </Router>
       
    )
}
export default Card;