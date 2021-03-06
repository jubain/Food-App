import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import Yelp from './Api/Yelp'
function DetailScreen({ navigation, route }) {
    const [result, setresult] = useState(null)
    const id = route.params.id

    const getResult = async (id) => {
        const response = await Yelp.get(`/${id}`)
        setresult(response.data)
    };
    useEffect(() => {
        getResult(id)
    }, []);

    if (!result) {
        return null
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(item) => item}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        marginBottom: 10
    }
})

export default DetailScreen;