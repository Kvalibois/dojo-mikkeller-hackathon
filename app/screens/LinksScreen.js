import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import brain from 'brain.js';

import beerData from '../constants/Beers'

var trainingData = [
  // Talisker
  { input: { fruity: 5, sweetness: 0}, output: [1] },
  // Highland Park
  { input: { fruity: 7, sweetness: 0}, output: [1] },
  // Dalwhinnie
  { input: { fruity: 10, sweetness: 10}, output: [0] }, 
];


const recommendBeer = (beerList) => {
  var percentage = 0;
  var mostLikelyBeer;
  
  beerList.forEach( (beer) => {
    a = beer.fruity
    b = beer.sweetness
    likeliness = Array.from(network.run({fruity: a, sweetness: b}))
    if (likeliness > percentage) {
      percentage = likeliness
      mostLikelyBeer = beer
    }
  })
  return mostLikelyBeer
}

const network = new brain.NeuralNetwork();
network.train(trainingData);

recommendBeer(beerData)

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
       <Text style={styles.padded}>{recommendBeer(beerData).name}</Text>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Recommendations',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  padded: {
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: 28
  }
});