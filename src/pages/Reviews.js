import { useState } from 'react';
import axios from 'axios';

function Reviews() {
    const apiKey = process.env.REACT_APP_LASTFM_API_KEY;
    const [artists, setArtists] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    function handleChange(e) {
        const artistName = e.target.value;
        setSearchTerm(artistName);
                
        if (artistName.trim() === '') {
            setArtists([]);
            return;
        }

        axios.get('http://ws.audioscrobbler.com/2.0/', {
            params: {
                method: 'artist.search',
                artist: artistName,
                api_key: apiKey,
                format: 'json'
            }
        }).then(response => {
            let artistResults = response.data.results?.artistmatches?.artist || [];
            artistResults = artistResults.filter(item => {
                return item.mbid !== '';
            });

            setArtists(Array.isArray(artistResults) ? artistResults : [artistResults]);
        }).catch(error => {
            console.error(error);
            setArtists([]);
        });
    }


    return (
        <div className="p-5">
            <input
                placeholder="Search Artist"
                className="w-full p-2 border rounded outline-none"
                value={searchTerm}
                onChange={handleChange}
                autoFocus
            />

            <ul>
                {artists.length === 0 ? (
                    <div></div>
                ) : (
                    artists.map((artist, index) => (
                        <li key={index}>{artist.name}</li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default Reviews;