import React, { useContext, useEffect, useState } from 'react'
import Card from './Card';
import { SearchContext } from '../Home/Home';
import NoData from '../NoData/NoData';

const Cards = () => {
    const [cards, setCards] = useState([]);

    const [renderCards, setRenderCards] = useState([]);

    const contextValue = useContext(SearchContext);
    const searchedValue = contextValue[0];


    useEffect(() => {
        if (searchedValue === "") {
            setRenderCards(cards)
        } else {
            const matchedCards = cards.filter(card => card.category.toLowerCase() === searchedValue.toLowerCase());
            setRenderCards(matchedCards)
        }
    }, [searchedValue])




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
            renderCards.length > 0 ? renderCards.map(card => <Card key={card.id} card={card} />) : <NoData />
        }
    </section>
}

export default Cards