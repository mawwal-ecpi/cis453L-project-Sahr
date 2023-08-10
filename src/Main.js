import { Component } from "react";
import { Route, Routes,
    NavLink, 
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Items from "./Items";
import Checkout from "./Checkout";



class Main extends Component{
    render() {
        return (
            <HashRouter>
                <div className="title">
                    <h1> Welcome To My Page</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/items">Items</NavLink></li>
                        <li><NavLink to="/checkout">Checkout</NavLink></li>
                    </ul>
                    <div className="content">
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/items" element={<Items/>} />
                        <Route path="/checkout" element={<Checkout/>} />
                    </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}



export default Main;