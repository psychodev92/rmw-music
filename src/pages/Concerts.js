import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Cards from '../components/Cards';
import Single from '../components/Single';

function Concerts() {
    const [concerts, setConcerts] = useState([]);
    const [selectedConcert, selectConcert] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/reviews')
            .then(response => {
                setConcerts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    const handleSelectConcert = (data) => {
        selectConcert(data);
    }

    const showSingleConcert = () => {
        return(
            <>
                <div className="cursor-pointer" onClick={() => handleSelectConcert('')}>Back</div>

                <Single
                    data={selectedConcert}
                />
            </>
        )
    }

    const showConcertList = () => {
        return(
            <>
                <h1 className="text-3xl mb-5">Concerts Reviews</h1>
                <div>
                    {concerts.length === 0 ? (
                        <div>No concerts found</div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                            {concerts.map((concert, index) => (
                                <div key={index} className="cursor-pointer" onClick={ () => handleSelectConcert(concert) }>
                                    <Cards
                                        index={index}
                                        data={concert}
                                        orientation={"vertical"}
                                        overlay={true}
                                        share={true}
                                    ></Cards>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </>
        );
    }

    return (
        <div className="p-5 container mx-auto">
            { (selectedConcert) ? showSingleConcert() : showConcertList() }
        </div>
    );
}

export default Concerts;