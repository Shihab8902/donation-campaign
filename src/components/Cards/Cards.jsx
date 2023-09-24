import React, { useEffect, useState } from 'react'
import Card from './Card';

const Cards = () => {

    const [cards, setCards] = useState([]);

    const [renderCards, setRenderCards] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => {
                setCards(data)
                setRenderCards(data)
            })
    }, [])


    return <section className=' my-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-5 '>
        {
            renderCards.map(card => <Card key={card.id} card={card} />)
        }
    </section>
}

export default Cards