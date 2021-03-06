import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native'
function ResultsDetail(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: props.result.image_url }} />
            <Text style={styles.name}>{props.result.name}</Text>
            <Text>{props.result.rating} Stars, {props.result.review_count} Reviews</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginBottom: 5
    },
    image: {
        width: 220,
        height: 160,
        borderRadius: 5,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 14
    }
})

export default ResultsDetail;