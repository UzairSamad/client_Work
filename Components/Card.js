import React from 'react';
import {Text, View, Image, TouchableOpacity, ToastAndroid} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {addToCart} from '../Store/Shopping/Shopping-actions';
function Card({title, image, price, qty, item, addToCart}) {
  const Addtocart = () => {
    ToastAndroid.show('Item added to Cart', ToastAndroid.SHORT);
    addToCart(item.id);
  };
  return (
    <View
      style={{
        backgroundColor: 'white',
        height: 130,
        flexDirection: 'row',
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom: 10,
        // flex: 1,
        borderWidth: 1,
      }}>
      <View
        style={{
          width: wp('35%'),
          height: '100%',
          // flex: 1,
          overflow: 'hidden',
        }}>
        <Image
          style={{
            flex: 1,
            width: wp('40%'),
            borderRadius: 10,
            shadowColor: 'red',
          }}
          source={{
            uri: image,
          }}
          resizeMode="stretch"
        />
      </View>
      <View
        style={{
          width: wp('55%'),
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
          height: 180,
        }}>
        <View
          style={{
            height: 30,
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              marginLeft: '8%',
              fontSize: 15,
              fontWeight: '700',
            }}>
            {title}
          </Text>
          <TouchableOpacity style={{marginRight: '8%', marginTop: '3%'}}>
            <AntDesign name="staro" size={25} color="#121212" />
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginLeft: '8%',
          }}>
          <Text>{qty} pieces</Text>
        </View>

        <View
          style={{
            height: '40%',
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginHorizontal: 15,
              flex: 1,
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '700',
              }}>
              {item.SalePrice ? 'Sale RS:' + item.SalePrice : 'RS:' + price}
            </Text>

            <View>
              <TouchableOpacity
                style={{
                  width: wp('20%'),
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 30,
                  marginLeft: 40,
                  borderRadius: 10,
                  backgroundColor: '#f90000',
                }}
                onPress={() => {
                  Addtocart();
                }}>
                <Text
                  style={{
                    color: '#fffdff',
                    marginLeft: 10,
                    fontSize: 20,
                  }}>
                  Add
                </Text>
                <Ionicons name="cart" size={20} color="#fffdff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const mapDispatchToProps = dispatch => {
  return {addToCart: id => dispatch(addToCart(id))};
};

export default connect(null, mapDispatchToProps)(Card);
