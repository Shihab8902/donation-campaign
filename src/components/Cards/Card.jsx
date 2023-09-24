import React from 'react'
import { useNavigate } from 'react-router-dom';

const Card = ({ card }) => {
    const { id, image, title, category, category_bg_color, text_color, card_bg_color } = card;

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/card/${id}`);
    }


    return <div style={{ backgroundColor: card_bg_color }} className="rounded-lg cursor-pointer" onClick={handleClick}>
        <img src={image} alt="Image not found" />
        <div className='py-6 px-5'>
            <span style={{ backgroundColor: category_bg_color, color: text_color }} className="px-5 py-2 rounded-md text-sm font-semibold">{category}</span>
            <h3 style={{ color: text_color }} className="mt-5 text-xl font-bold">{title}</h3>
        </div>
    </div>
}

export default Card