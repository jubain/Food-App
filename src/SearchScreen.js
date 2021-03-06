import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native'
import SearchBar from './components/SearchBar'
import useResults from './hooks/useResults'
import ResultList from './components/ResultList'

function SearchScreen({ navigation }) {
    const [searchTerm, setsearchTerm] = useState("")
    const [searchApi, restaurants, errorMessage] = useResults()

    function filterResultByPrice(price) {
        return restaurants.filter(restaurant => {
            return restaurant.price === price
        })
    }

    return (
        <>
            <SearchBar
                term={searchTerm}
                onTermChange={setsearchTerm}
                onTermSubmit={() => searchApi(searchTerm)}
            />
            {/* {errorMessage ? <Text>{errorMessage}</Text> : null} */}

            <ScrollView>
                <ResultList
                    results={filterResultByPrice('$')}
                    title="Cost Effective"
                    navigation={navigation}
                />
                <ResultList
                    results={filterResultByPrice('$$')}
                    title="Bit Pricier"
                    navigation={navigation}
                />
                <ResultList
                    results={filterResultByPrice('$$$')}
                    title="Big Spender"

                />
            </ScrollView>

        </>
    );
}

export default SearchScreen;