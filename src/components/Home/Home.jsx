import React, { createContext, useState } from 'react'
import Header from '../Header/Header'
import Cards from '../Cards/Cards'

export const SearchContext = createContext('');

const Home = () => {

    const [searchedValue, setSearchedValue] = useState('');

    return (
        <SearchContext.Provider value={[searchedValue, setSearchedValue]}>
            <section>
                <Header />
                <Cards />
            </section>
        </SearchContext.Provider>
    )
}
export default Home



