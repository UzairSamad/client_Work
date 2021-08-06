import {StyleSheet, platform} from 'react-native';
import colors from '../colors';
const styles = StyleSheet.create({
  tagline: {
    color: colors.black,
    fontSize: 18,
    fontWeight: '500',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});
export default styles;
