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
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DeliveryAddress = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#f9f9f9',
      }}>
      <View
        style={{
          flex: 0.5,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          marginRight: 10,
        }}>
        <TouchableOpacity>
          <AntDesign name="pluscircleo" size={30} color="#4fb853" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 3,
        }}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 35,
            fontWeight: '900',
          }}>
          Delivery Addresskkk
        </Text>

        <View
          style={{
            alignSelf: 'center',
            marginTop: 10,
            borderBottomColor: 'black',
            borderBottomWidth: 0.5,
            width: wp('80%'),
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <TextInput
            placeholder={'Enter your address here'}
            placeholderTextColor={'#cecece'}
            style={{
              fontSize: 20,
            }}
          />
        </View>

        <View
          style={{
            alignSelf: 'center',
            marginTop: 10,
            borderBottomColor: 'black',
            borderBottomWidth: 0.5,
            width: wp('80%'),
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <TextInput
            placeholder={'Area'}
            placeholderTextColor={'#cecece'}
            style={{
              fontSize: 20,
            }}
          />
        </View>

        <View
          style={{
            alignSelf: 'center',
            marginTop: 10,
            borderBottomColor: 'black',
            borderBottomWidth: 0.5,
            width: wp('80%'),
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <TextInput
            placeholder={'City'}
            placeholderTextColor={'#cecece'}
            style={{
              fontSize: 20,
            }}
          />
        </View>

        <View
          style={{
            width: wp('83%'),
            marginTop: 2,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              color: '#b5b5b5',
            }}>
            Delivery will be made within 5km from the branch, you can change
            area from main menu.
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
        }}>
        <TouchableOpacity
          style={{
            width: wp('40%'),
            height: 40,
            alignSelf: 'center',
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 1,
            justifyContent: 'center',
            backgroundColor: '#0011ff',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 2.6,
          alignSelf: 'center',
        }}>
        <Image
          style={{
            width: 225,
            height: 200,
          }}
          source={require('../Assets/logo.png')}
        />
      </View>
      <View
        style={{
          flex: 0.6,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: wp('95%'),
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: wp('10%'),
                alignItems: 'center',
                alignItems: 'center',
              }}>
              <EvilIcons name="sc-facebook" size={30} color="#000000" />
            </View>

            <View
              style={{
                width: 1,
                height: 25,
                backgroundColor: '#909090',
              }}></View>

            <View
              style={{
                width: wp('10%'),
                alignItems: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="instagram" size={26} color="#000000" />
            </View>

            <View
              style={{
                width: 1,
                height: 25,
                backgroundColor: '#909090',
              }}></View>

            <View
              style={{
                width: wp('10%'),
                alignItems: 'center',
                alignItems: 'center',
              }}>
              <Ionicons name="md-globe-outline" size={26} color="#000000" />
            </View>
          </View>

          <View>
            <TouchableOpacity
              style={{
                width: wp('20%'),
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                height: 40,
                borderRadius: 10,
                backgroundColor: '#f90000',
              }}>
              <Ionicons name="ios-call" size={20} color="#fffdff" />
              <Text
                style={{
                  color: '#fffdff',
                  marginLeft: 10,
                  fontSize: 20,
                }}>
                Call
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DeliveryAddress;
