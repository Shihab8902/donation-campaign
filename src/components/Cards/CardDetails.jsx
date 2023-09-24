import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { setDataToLS } from '../../utilities/localStorage';

const CardDetails = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    const selectedCard = cards.find(card => card.id === idInt);

    const { image, title, text_color, price, description } = selectedCard;


    const addDonation = () => {
        setDataToLS(selectedCard);
        alert("Donation added");
    }


    return <div className='px-5'>
        <div className='w-full h-[300px] md:h-[500px] my-14 relative'>
            <img className='w-full block h-full rounded-lg' src={image} alt="" />
            <div className='absolute  w-full bottom-0 bg-[#0b0b0b7f] p-9'>
                <button onClick={addDonation}
                    style={{ backgroundColor: text_color }} className="text-white font-semibold  text-xl px-6 py-4 rounded-lg">Donate ${price}</button>
            </div>
        </div>

        <div>
            <h3 className='font-bold text-3xl'>{title}</h3>
            <p className='my-6 leading-8'>{description}</p>
        </div>
    </div>
}

export default CardDetails