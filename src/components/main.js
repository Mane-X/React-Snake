import React from "react";
import {Route,BrowserRouter} from "react-router-dom"
import Game from './game';
import Start from './startGame';


const Main =()=>{
        return(
            <div>
                <BrowserRouter>
                    <Route exact={true} path="/" component={Start}></Route>
                    <Route  path="/game" component={Game}></Route>
                </BrowserRouter>
                
            </div>
        )
}


export default Main;