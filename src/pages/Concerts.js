import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from '../components/Cards';

function Concerts() {
    const [concerts, setConcerts] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/reviews')
            .then(response => {
                setConcerts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    return (
        <div className="p-5 container mx-auto">
            <h1 className="text-3xl mb-5">Concerts Reviews</h1>
            <div>
                {concerts.length === 0 ? (
                    <div>No concerts found</div>
                ) : (
                    <div className="grid grid-grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {concerts.map((concert, index) => (
                            <Cards
                                key={index}
                                index={index}
                                data={concert}
                                orientation={"vertical"}
                                overlay={true}
                                share={true}
                            ></Cards>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Concerts;