import React from 'react';
import { Dimensions } from 'react-native'

import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const BeerCardLarge = (beer) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.imageWrapper}>
                    <Image source={{uri: beer.image}} style={styles.image} />
                </View>
                <Text style={styles.title}>{beer.title}</Text>
                <Text style={styles.description}>{beer.description}</Text>
                <View style={styles.metaWrapper}>
                    <Text style={styles.metaText}>100% Happy boi</Text>
                </View>
            </View>
        </View>
    )
}

export default BeerCardLarge

const styles = StyleSheet.create({
    container: {
        height:550,
        width:300,
        justifyContent: 'center',
    },
    card: {
        margin:10,
        padding:20,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    imageWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    image: {
        width:200,
        height:200,
    },
    title: {
        fontSize: 42,
        textAlign: 'center',
    },
    description: {
        textAlign: 'center',
    },
    metaWrapper: {
        marginTop: 10,
        marginBottom: 5,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    metaText: {
        color: "#005b5d",
        borderRadius:10,
        fontSize: 10,
        backgroundColor: '#eefbef',
        padding:5,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight:5,
        marginTop:5,
    }
});