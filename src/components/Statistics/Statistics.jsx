import React, { useState } from 'react'
import { getDataFromLS } from "../../utilities/localStorage"
import { useLoaderData } from 'react-router-dom';
import Chart from './Chart';


const Statistics = () => {

    const savedDonations = getDataFromLS();
    const totalDonationsData = useLoaderData();
    const totalDonations = totalDonationsData.length;
    const [myDonations, setMyDonations] = useState(savedDonations.length);

    myDonations > 12 && setMyDonations(12);



    return (
        <div>
            <Chart myDonations={myDonations} totalDonations={totalDonations} />
        </div>
    )
}

export default Statistics