import {React, useState} from "react";
import {Route, Routes, Link, Outlet} from 'react-router-dom'


function NavBar() { 
    return(
        <div>            
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient" id="navbar">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Movietrending</a>

                    <div class="collapse navbar-collapse" id="navbarDepliegable">
                        <div class="navbar-nav">
                            <span class="nav-link" ><Link to="/" style={{ textDecoration: 'none'}}>Películas</Link></span>
                            <span class="nav-link"><Link to="/reviews" style={{ textDecoration: 'none' }}>Reseñas</Link></span>
                        </div>
                    </div>     
                </div>

            </nav>
        </div>
    )
}

export default NavBar