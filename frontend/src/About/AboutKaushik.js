import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AboutKaushik() {
    const [data, setData] = useState('Loading...');

    useEffect(() => {
        axios.get('http://localhost:5001/about/kaushik')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
                setData('Error occurred while fetching data');
            });
    }, []);

    return (
        <div>{data}</div>
    );
}

export default AboutKaushik;
