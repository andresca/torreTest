import React, { useEffect } from 'react'
import axios from 'axios';
import env from "react-dotenv";
import './filter.css'

const Filter = (props) => {

    useEffect( () => {
        const fetchData = async () => {
            const data = await axios.post(`${env.BACKENDPATH}/searchTalent`, { requestData: {} })
                .then( response => response.data )
                .catch( () => [] );
            return data;
        }
        fetchData()
    }, []);

    return (
        <div id="filterElems">
            <div id="searchType">
                <ul>
                    <li>People</li>
                    <li>Companies</li>
                </ul>
            </div>
            <div id="searchOptions">
                <ul>
                    <li>Hola</li>
                </ul>
            </div>
        </div>
    )
}

export default Filter;