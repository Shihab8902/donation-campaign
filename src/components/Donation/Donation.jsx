import React, { useState } from 'react'
import { getDataFromLS } from '../../utilities/localStorage'
import Donate from './Donate';
import NoData from "../NoData/NoData"


const Donation = () => {

    const savedDonation = getDataFromLS();

    const [visibleDataLength, setVisibleDataLength] = useState(4);

    const [isVisible, setIsVisible] = useState(true);

    const handleShowAll = () => {
        setVisibleDataLength(savedDonation.length);
        setIsVisible(false);
    }

    return <section className=' my-24'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 px-5 lg:px-0'>
            {
                savedDonation.length > 0 ? savedDonation.slice(0, visibleDataLength).map((donation, idx) => <Donate key={idx} donation={donation} />) : <NoData />
            }
        </div>

        <div onClick={handleShowAll}
            className={`my-10 text-center  ${savedDonation.length > 4 ? "visible" : "hidden"} ${isVisible ? "visible" : "hidden"}`}>
            <button className='text-white bg-[#009444] font-semibold  px-7 py-3 rounded-lg'>See All</button>
        </div>
    </section>
}

export default Donation