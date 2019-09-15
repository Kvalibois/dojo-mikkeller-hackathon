import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';

import Colors from '../constants/Colors';

export default function TabBarLabel(props) {
    return (
      <Text>
      {props.label}
      </Text>
    );
  }