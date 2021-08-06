import React, {useEffect, useState} from 'react';
import {Image, View, TouchableOpacity, Text} from 'react-native';
import AppText from './AppText';
import {StyleSheet} from 'react-native';
import colors from './colors';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {removeFromCart, adjustQty} from '../Store/Shopping/Shopping-actions';
import {connect} from 'react-redux';
function CheckOutCard({
  title,
  subTitle,
  Price,
  image,
  qty,
  removeFromCart,
  adjustQty,
  item,
}) {
  const totalPrice = item.SalePrice ? item.SalePrice * qty : Price * qty;
  const [counter, setCounter] = useState(item.qty);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  useEffect(() => {
    adjustQty(item.id, counter);
  }, [counter]);
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{uri: image}} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>
          {item.SalePrice ? 'Sale' : subTitle}
        </AppText>
        <AppText>RS:{totalPrice}</AppText>
        <View style={{flexDirection: 'row', flex: 1}}>
          {counter >= 2 ? (
            <>
              <Button title="+" onPress={handleIncrement} />
              <Text style={{fontSize: 18, marginLeft: 10, marginRight: 10}}>
                {counter}
              </Text>
              <Button
                color={colors.black}
                title="-"
                onPress={handleDecrement}
                style={styles.button}
              />
            </>
          ) : (
            <>
              <Button
                color={colors.black}
                title="+"
                onPress={handleIncrement}
              />
              <Text style={{fontSize: 18, marginLeft: 10, marginRight: 10}}>
                {item.qty}
              </Text>
              <Button
                color={colors.black}
                title="-"
                onPress={handleDecrement}
                style={styles.button}
                disabled
              />
            </>
          )}
          <TouchableOpacity
            style={{
              width: wp('25%'),
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              height: 30,
              marginLeft: 40,
              borderRadius: 10,
              backgroundColor: '#f90000',
            }}
            onPress={() => {
              removeFromCart(item.id);
            }}>
            <Text
              style={{
                color: '#fffdff',
                marginLeft: 10,
                fontSize: 18,
              }}>
              Remove
            </Text>
            <Icon name="delete" size={18} color="#fffdff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: id => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  };
};
export default connect(null, mapDispatchToProps)(CheckOutCard);
const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 5,
    top: 15,
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 10,
    flexDirection: 'row',
    flex: 1,
  },
  image: {
    backgroundColor: colors.black,
    height: wp('40%'),
    width: wp('40%'),
    marginTop: 10,
    marginBottom: 10,
  },
  detailsContainer: {paddingLeft: 20, paddingTop: 20},
  title: {
    marginBottom: 7,
    fontSize: 15,
    fontWeight: '700',
  },
  subTitle: {
    color: colors.secondary,
  },
});
