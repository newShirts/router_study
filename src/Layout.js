import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {

    return(
        
        <div>
            <header style={{background: "lightgray", padding: 15, fontSize: 25}}>
                Header
            </header>
        
            <main>
                <Outlet/>
            </main>

        </div>

         

    )
}

export default Layout;