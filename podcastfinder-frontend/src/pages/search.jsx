// Filename - pages/search.jsx

import React, {useState} from "react";
import axios from "axios";
import {Link, useNavigate, useLocation} from "react-router-dom";
import { FaHeadphones } from "react-icons/fa";

const Search = () => {
    const location = useLocation();
    const token = localStorage.getItem('token');
    let signedIn = false;
    if (token !== null){
        signedIn = true;
    }else{
        signedIn = false;
    }
    const [genre, setGenre] = useState('');
    const [providers, setProviders] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = () => {
        axios.post('http://localhost:8000/api/get-podcasts/', {
            'genre': genre,
            'providers': providers
        })
            .then(response => {
                let newPath = '/results';
                navigate(newPath, {state: {appleData: response.data.appleResults, spotifyData: response.data.spotifyResults}})
      }).catch(error => {
        console.log(error);
      });

    }

    const addOrRemoveProvider = (value) => {
        let tempProviders = providers
        if (providers.includes(value)){
            tempProviders.pop(value)
        }else{
            tempProviders.push(value)
        }
        setProviders(tempProviders);
        console.log(providers);
    };

    if(signedIn !== false){
        return (
            <>
            <div className="secondary-header">
                    <div className="columns-1 mb-10 heading flex justify-center">
                        <h1 className="font-bold pr-2.5">Search PodcastFinder</h1>
                        <FaHeadphones color="#242424" fontSize="3rem"/>
                    </div>
            </div>
            <div className="content container mx-10">
                <form>
                    <label>Genre</label>
                    <br/>
                    <input type='text' name='genre' placeholder='Type genre here' onChange={e => setGenre(e.target.value)}/>
                    <br/>
                    <label>Providers</label>
                    <fieldset name='providers'>
                        <legend>Select the providers you wish to search podcasts for:</legend>
                        <div>
                            <input type='checkbox' name='apple' value='apple' id='apple' onChange={e => addOrRemoveProvider(e.target.value)} />
                            <label>Apple Podcasts</label>
                        </div>
                        <div>
                            <input type='checkbox' name='spotify' value='spotify' id='spotify' onChange={e => addOrRemoveProvider(e.target.value)} />
                            <label>Spotify</label>
                        </div>
                    </fieldset>
                    <button type='button' onClick={handleSubmit}>Submit</button>
                </form>
            </div>
            </>
        );
    } else {
        return(
            <>
             <div className="secondary-header">
                <div className="columns-1 mb-10 heading flex justify-center">
                    <h1 className="font-bold pr-2.5">Search PodcastFinder</h1>
                    <FaHeadphones color="#242424" fontSize="3rem"/>
                </div>
            </div>
                <div className="content container mx-10">
                    <p>You must be logged in to use our search functionality.</p>
                </div>
            </>
        )
    }

    
};

export default Search;