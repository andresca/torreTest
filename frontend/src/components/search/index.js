import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import env from "react-dotenv";

import Filter from '../filter'
import './search.css'

const Search = (props) => {

    const searchResultList = useSelector(state => state.appReducer);

    useEffect( () => {
        const requestData = {
        }

        const fetchData = async () => {
            const data = await axios.post(`${env.BACKENDPATH}/searchTalent`, { requestData })
                .then( response => response.data )
                .catch( () => [] );
            return data;
        }
        fetchData().then( (data) => props.setSearchResult(data));

    }, []);

    return (
        <div id="search" hidden={props.hidden === 'bio'}>
            <div id="search_elems">
                <Filter {...props}/>
                <div id="searchResult">
                    {
                        searchResultList.searchResult &&
                        searchResultList.searchResult.results.map( (talent) => (
                            <div className="founded">
                                <img src={talent.picture} alt=""/>
                                <div>
                                    <label>{talent.name}</label>
                                    <label>{talent.professionalHeadline}</label>
                                    <label>{talent.locationName}</label>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Search;