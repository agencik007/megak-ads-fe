import React, {SyntheticEvent, useContext, useState} from "react";
import {Btn} from "./common/Btn";
import {SearchContext} from "../../contexts/search.context";

import './Header.css';

export const Header = () => {
    const {search, setSearch} = useContext(SearchContext);
    const [inputVal, setInputVal] = useState(search);

    const setSearchFromLocalState = (e: SyntheticEvent) => {
        e.preventDefault();
        setSearch(inputVal);
    };

    return (
        <header className='grid-container'>
            {/*<h1>*/}
            {/*    <a href="http://localhost:3000"><strong>Mega</strong> Ogłoszenia</a>*/}
            {/*</h1>*/}
            <Btn to="/" text="Mega Ogłoszenia"/>
            <Btn to="/add" text='Dodaj ogłoszenie'/>
            <form className="search" onSubmit={setSearchFromLocalState}>
                <input
                    type="text"
                    placeholder="Szukaj ogłoszeń..."
                    value={inputVal}
                    onChange={e => setInputVal(e.target.value)}
                />
                {/*<Btn text='Szukaj'/>*/}
            </form>
        </header>
    );
};