import React from 'react'
import { useNavigate } from 'react-router-dom';

const Donate = ({ donation }) => {

    const { id, image, title, category, category_bg_color, text_color, price } = donation;

    const navigate = useNavigate();

    const handleDetails = () => {
        navigate(`/card/${id}`);
    }

    return <div style={{ backgroundColor: category_bg_color }} className='flex  flex-col md:flex-row pb-5 md:pb-0 gap-6 items-center rounded-lg'>
        <div className='h-[200px]'>
            <img className='h-full rounded-lg' src={image} alt="Image not found" />
        </div>

        <div>
            <span style={{ backgroundColor: category_bg_color, color: text_color }} className="px-5 py-2 rounded-md text-sm font-semibold">{category}</span>
            <h3 className="mt-4 mb-1 text-xl font-bold">{title}</h3>
            <p style={{ color: text_color }} className='font-semibold text-base mb-5'>${price}</p>
            <button onClick={handleDetails}
                style={{ backgroundColor: text_color }} className='text-white text-lg font-semibold px-4 py-2 rounded-md'>View Details</button>
        </div>

    </div>
}

export default Donate