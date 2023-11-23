import React, { useState } from "react";
import { Link } from "react-router-dom";



const Header = () => {
    const [Search , setSearch]  = useState('')
    
    
     return (
        <>
        <div className="bg-blue-500 h-40 flex justify-center gap-32 items-center">
            <div className="flex gap-4">
                <input className="h-10 w-96 rounded-md" type="text" onChange={(e) => setSearch(e.target.value)}></input>
                <button className="text-white">Serach</button>
            </div>
            {/* <div className=""> */}
                <Link to='/playlist'>
                <li className="list-none text-white">Playlist</li>
                </Link>
            {/* </div> */}  
               <Link>
               <li>Home</li>
               </Link> 
        </div>
        </>
    )
}

export default Header;