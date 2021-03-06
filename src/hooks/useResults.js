import React, { useEffect, useState } from 'react';
import Yelp from '../Api/Yelp'



export default () => {
    const [restaurants, setRestaurants] = useState([])
    const [errorMessage, seterrorMessage] = useState("")

    const searchApi = async (readymadeTerm) => {
        try {
            const res = await Yelp.get('/search', {
                params: {
                    limit: 50,
                    term: readymadeTerm,
                    location: "Virginia"
                }
            })
            setRestaurants(res.data.businesses)
        } catch (err) {
            console.log(err);
            seterrorMessage('Something went wrong')
        }

    }

    // calls function first time when page renders
    useEffect(() => {
        searchApi('pasta')
    }, [])
    return [searchApi, restaurants, errorMessage]
};