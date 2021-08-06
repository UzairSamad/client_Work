import React from 'react';
import {Text} from 'react-native';
import styles from './Style';

function AppText({children, style}) {
  return <Text style={[styles.tagline, style]}>{children}</Text>;
}

export default AppText;
