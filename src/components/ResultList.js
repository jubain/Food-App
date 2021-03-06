import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ResultsDetail from './ResultsDetail'

function ResultList(props) {
    if (!props.results.length) {
        return null
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={props.results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (<TouchableOpacity onPress={() => props.navigation.navigate('DetailScreen', { id: item.id })}>
                        <ResultsDetail
                            result={item}
                        />
                    </TouchableOpacity>)
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
})

export default ResultList;