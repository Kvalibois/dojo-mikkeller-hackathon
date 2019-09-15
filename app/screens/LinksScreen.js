import React from 'react';
import { ScrollView, StyleSheet, Text, AppState } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import brain from 'brain.js';

import { Gyroscope, DeviceMotion } from 'expo-sensors';

import beerData from '../constants/Beers'


var trainingData = [
  // Talisker
  { input: { fruity: 5, sweetness: 0}, output: [1] },
  // Highland Park
  { input: { fruity: 7, sweetness: 0}, output: [1] },
  // Dalwhinnie
  { input: { fruity: 10, sweetness: 10}, output: [0] }, 
];

// if (Gyroscope.isAvailableAsync()) {
// }

var angle = 0

var lastRatingGesture = ""

const addBeerToTrainingData = ( { fruitiness, sweetness, verdict } ) => {
  var beerObject = { 
    input: {fruity: fruitiness, sweetness: sweetness}, 
    output: verdict 
  };
  trainingData.push(beerObject);
}

const recommendBeer = (beerList) => {
  var percentage = 0;
  var mostLikelyBeer;
  
  beerList.forEach( (beer) => {
    a = beer.fruity;
    b = beer.sweetness;
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

export default class LinksScreen extends React.Component {
  state = {
    gesture: ""
  };
  componentDidMount() {
    DeviceMotion.addListener(result => {
      // console.log(result.rotation)
      displayRatingGesture(result.rotation)
    })
  }
  const = displayRatingGesture = (angle) => {
    // console.log(angle)
    if (angle.beta <= -1 && lastRatingGesture != "Downvote") {
      lastRatingGesture = "Downvote"
      this.setState( {
        gesture: lastRatingGesture
      })
      console.log(lastRatingGesture)
    }
    if (angle.gamma >= 2 && lastRatingGesture != "Upvote") {
      lastRatingGesture = "Upvote"
      this.setState( {
        gesture: lastRatingGesture
      })
      console.log(lastRatingGesture)
    }
  }
  

  render() {
    let ratingVerdict = this.state.rating
    return (
      <ScrollView style={styles.container}>
        {/**
         * Go ahead and delete ExpoLinksView and replace it with your content;
         * we just wanted to provide you with some helpful links.
         */}
         <Text style={styles.padded}>{recommendBeer(beerData).name}</Text>
         <Text>{this.state.gesture} xxxs</Text>
      </ScrollView>
    );
  }
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