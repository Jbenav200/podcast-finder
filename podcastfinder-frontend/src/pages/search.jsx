// Filename - pages/signup.jsx

import React, {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const Search = () => {
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

    return (
        <>
        <div className="content container">
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
};

export default Search;