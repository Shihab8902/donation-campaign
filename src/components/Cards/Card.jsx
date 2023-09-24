import React from 'react'

const Card = ({ card }) => {
    const { image, title, category, category_bg_color, text_color, card_bg_color } = card;


    const handleClick = () => {

    }


    return <div className={`bg-[${card_bg_color}] rounded-lg`} onClick={handleClick}>
        <img src={image} alt="Image not found" />
        <div className='py-6 px-5'>
            <span className={`bg-[${category_bg_color}] text-[${text_color}] px-5 py-2 rounded-md text-sm font-semibold`}>{category}</span>
            <h3 className={`mt-5 text-xl font-bold text-[${text_color}]`}>{title}</h3>
        </div>
    </div>
}

export default Card