import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Axios from 'axios';

import Filter from '../filter'

const Search = (props) => {

    const searchResultList = useSelector(state => state.appReducer);

    useEffect( () => {
        const fetchData = async () => {
           const data = await Axios.post("https://search.torre.co/opportunities/_search/?currency=USD$&page=0&lang=en&size=10&aggregate=true&offset=0", 
                {"and":[{"remote":{"term":false}},{"timezone":{"code":"GMT+10:00"}}]})
                .then( response => response.data )
                .catch( () => [] );
            return data;
        }
        fetchData().then( (data) => props.setSearchResult(data));
    }, []);

    return (
        <div id="search">
            <Filter {...props}/>
            <div id="searchResult">
                
            </div>
        </div>
    )
}

export default Search;