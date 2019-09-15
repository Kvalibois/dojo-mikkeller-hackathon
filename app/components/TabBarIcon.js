import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <Image
      source={props.focused ? props.sourceActive : props.sourceInactive}
      height={25}
      width={25}
      style={{ marginBottom: -3, width: 25, height: 25 }}
    />
  );
}
