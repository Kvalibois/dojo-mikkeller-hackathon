import React from 'react';

import { Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BeerCardLarge from '../components/BeerCardLarge.js';

const horizontalMargin = 20;
const slideWidth = 300;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 200;

export default class App extends React.Component {
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
  _renderItem ({item, index}) {
    return (
      <View style={styles.slide}>
        <BeerCardLarge title={item.title} image={item.image} description={item.description}/>
      </View>
  );}

  render () {
    return (
      <Carousel
        layout={'tinder'}
        ref={(c) => { this._carousel = c; }}
        data={this.state.entries}
        renderItem={this._renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      />
 ); 
}}


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
