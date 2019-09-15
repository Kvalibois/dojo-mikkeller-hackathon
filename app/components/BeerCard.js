import React from 'react';

import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';

const BeerCard = (beer) => {
    return (
        <View style={styles.container}>
            <View style={styles.contentWrapper}>
                <Image source={{uri: beer.image}} style={styles.image} />
                <View style={styles.textWrap}> 
                    <Text style={styles.title}>{beer.title}</Text>
                    <Text style={styles.bodyText}>{beer.description}</Text>
                </View>
            </View>
            <View style={styles.metaWrapper}>
                <Text style={styles.metaText}>37% Sweet</Text>
                <Text style={styles.metaText}>100% Good for you</Text>
                <Text style={styles.metaText}>100% Good for you</Text>
            </View>
        </View>
    )
}

export default BeerCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        color: '#ff0000',
        margin: 15,
        padding: 10,
        paddingTop: 15,
        paddingBottom: 5,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
      },
    contentWrapper: {
        flexDirection: 'row',
    },
    textWrap: {
        flex: 0,
        flexShrink:1,
    },
    title: {
        fontWeight: '700',
    },
    image: {
        height:100,
        width:100,
    },
    bodyText: {
        color: '#111',
        flex:0,
        flexShrink:1,
    },
    metaWrapper: {
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 15,
        flex:0,
        flexShrink:1,
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