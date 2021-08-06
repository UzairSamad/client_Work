import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const branch = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#eeeeee',
      }}>
      <View
        style={{
          flex: 0.6,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <EvilIcons name="sc-facebook" size={30} color="black" />
        </View>

        <Image
          style={{
            width: 200,
            height: 200,
          }}
          source={require('../Assets/logo.png')}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: wp('80%'),
            height: 45,
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: 'white',
            borderColor: 'black',
            borderRadius: 5,
            borderWidth: 1,
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: wp('65'),
              justifyContent: 'space-around',
            }}>
            <EvilIcons name="sc-facebook" size={30} color="black" />

            <Text style={{fontWeight: 'bold'}}>Login with facebook</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: 70,
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
            }}>
            OR
          </Text>
        </View>

        <TouchableOpacity
          style={{
            width: wp('80%'),
            height: 45,
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: 'white',
            borderColor: 'black',
            borderRadius: 5,
            borderWidth: 1,
            alignContent: 'center',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontWeight: 'bold',
              fontSize: 15,
            }}>
            Sign up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: wp('80%'),
            height: 45,
            marginTop: 15,
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: '#0011ff',
            borderColor: 'black',
            borderRadius: 5,
            borderWidth: 1,
            alignContent: 'center',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontWeight: 'bold',
              fontSize: 15,
              color: 'white',
            }}>
            Login
          </Text>
        </TouchableOpacity>

        <View
          style={{
            height: 50,
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 17,
                color: '#999999',
                alignSelf: 'center',
              }}>
              Skip Login {'>> '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default branch;
