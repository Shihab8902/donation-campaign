import React, { useContext, useState } from 'react'

import banner from "../../assets/images/banner.jpg"
import { SearchContext } from '../Home/Home';


const Header = () => {

    const contextValue = useContext(SearchContext);
    const setSearchValue = contextValue[1];

    const [searchString, setSearchString] = useState("");

    const handleSearch = () => {
        setSearchValue(searchString);
        setSearchString('');
    }


    return <div className="hero h-screen md:h-[600px]" >
        <div className="hero-overlay opacity-10 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${banner})` }}></div>
        <div className="hero-content text-center ">
            <div >
                <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-12'>I Grow By Helping People In Need</h1>
                <div className="input-group w-full md:w-3/4 mx-auto">
                    <input onChange={(e) => setSearchString(e.target.value)} type="text" placeholder="Search here…" className="input input-bordered w-full" value={searchString} />
                    <button onClick={handleSearch} className="btn text-white hover:bg-[#ff444aee] bg-[#FF444A]"> Search </button>
                </div>
            </div>
        </div>
    </div>

}

export default Header