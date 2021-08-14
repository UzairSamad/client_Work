import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import CheckOutCard from '../Components/CheckOutCard';
import AppText from '../Components/AppText';
import colors from '../Components/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import GetLocation from 'react-native-get-location';
import firestore from '@react-native-firebase/firestore';

function Cart({cart, route}) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const UserData = route.params[0];
  const PhoneNumber = route.params[1];
  const Name = route.params[2];
  useEffect(() => {
    let items = 0;
    let price = 0;
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        setLongitude(location.longitude);
        setLatitude(location.latitude);
      })
      .catch(error => {
        const {code, message} = error;
        // console.log(code, message);
      });
    cart.forEach(item => {
      items += item.qty;
      price += item.SalePrice
        ? item.qty * item.SalePrice
        : item.qty * item.price;
    });
    setTotalPrice(price);
    setTotalItems(items);
  }, [totalItems, setTotalItems, totalPrice, setTotalPrice, cart]);
  const handleCheckout = () => {
    firestore()
      .collection('Orders')
      .add({
        Customer_Details: {
          Name: UserData.displayName
            ? UserData.displayName
            : Name
            ? Name
            : 'null',
          email: UserData.email,
          Phonenumber: UserData.phoneNumber
            ? UserData.phoneNumber
            : PhoneNumber
            ? PhoneNumber
            : 'null',
        },
        OrderDetails: cart,
        TotalPrice: totalPrice,
        Location_parameters: {Longitude: longitude, Latitude: latitude},
        Order_Time: firestore.FieldValue.serverTimestamp(),
        GeoPoints: new firestore.GeoPoint(latitude, longitude),
        Status: 'Pending',
      })
      .then(res => {
        alert('Your Order is placed');
      })
      .catch(err => {
        alert('Try Again', err);
      });
  };
  return (
    <View style={{height: '100%'}}>
      <FlatList
        data={cart}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <CheckOutCard
            title={item.name}
            image={item.image}
            Price={item.price}
            qty={item.qty}
            subTitle={item.Category}
            item={item}
          />
        )}
      />
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          backgroundColor: colors.lightGrey,
        }}>
        <View
          style={{
            width: '50%',
          }}>
          <View style={{marginBottom: 10}}>
            <AppText>Cart Items: {totalItems}</AppText>
          </View>
          <View style={{marginBottom: 10}}>
            <AppText>Total Bill: {totalPrice}</AppText>
          </View>
        </View>
        <TouchableOpacity
          onPress={handleCheckout}
          style={{
            width: wp('40%'),
            height: hp('6%'),
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: '#4e91fd',
            borderColor: 'black',
            borderRadius: 15,
            borderWidth: 1,
            alignContent: 'center',
            elevation: 5,
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontWeight: 'bold',
              fontSize: 15,
              color: 'white',
            }}>
            Check Out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const mapStateToProps = state => {
  return {cart: state.shop.cart};
};
export default connect(mapStateToProps)(Cart);
