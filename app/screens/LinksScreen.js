import React from 'react';
import { ScrollView, StyleSheet, Text, AppState, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { ExpoLinksView } from '@expo/samples';
import brain from 'brain.js';

import { Gyroscope, DeviceMotion } from 'expo-sensors';

import beerData from '../constants/Beers'

import {
  Image,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';


import BeerCardLarge from '../components/BeerCardLarge.js';
const horizontalMargin = 20;
const slideWidth = 300;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 200;

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
  constructor() {
    super()
    this.state = {
      entries: [
        {title: 'beer 1', image: 'https://cdn.shopify.com/s/files/1/1268/5569/products/Stick_A_Finger_In_The_Soil_Single_Bottle_1024x1024.jpg', description: 'Lorem ipsum dolor sit amet'},
        {title: 'beer 1', image: 'https://cdn.shopify.com/s/files/1/1268/5569/products/Stick_A_Finger_In_The_Soil_Single_Bottle_1024x1024.jpg', description: 'Lorem ipsum dolor sit amet'},
        {title: 'beer 1', image: 'https://cdn.shopify.com/s/files/1/1268/5569/products/Stick_A_Finger_In_The_Soil_Single_Bottle_1024x1024.jpg', description: 'Lorem ipsum dolor sit amet'},
        {title: 'beer 1', image: 'https://cdn.shopify.com/s/files/1/1268/5569/products/Stick_A_Finger_In_The_Soil_Single_Bottle_1024x1024.jpg', description: 'Lorem ipsum dolor sit amet'}
      ],
    }
  }
  
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
  
  _renderItem ({item, index}) {
    return (
      <View style={styles.slide}>
        <BeerCardLarge title={item.title} image={item.image} description={item.description}/>
      </View>
  );}

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
         <Carousel
          layout={'tinder'}
          ref={(c) => { this._carousel = c; }}
          data={this.state.entries}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
      </ScrollView>
    );
  }
}

LinksScreen.navigationOptions = {
  title: 'Recommendations',
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#fff',
  },
  slide: {
    width: itemWidth,
    height: itemHeight,
    paddingHorizontal: horizontalMargin,
    alignItems: 'center',
    // other styles for the item container
  },
  slideInnerContainer: {
      width: slideWidth,
      flex: 1,
      // other styles for the inner container
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
