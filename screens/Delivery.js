import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import firebase from 'firebase'
import firebase from 'firebase/app';
import 'firebase/firestore';
const Delivery = () => {

  const [state, setState] = useState({})
  const [userdata, setuserdata] = useState({})

  useEffect(() => {
    AsyncStorage.getItem('UserData').then(e => {
      setuserdata(e);
    });
  }, [])
  useEffect(async () => {
    try {
      let arr = []
      let ref = await firebase.firestore().collection("Orders").get()
      ref.docs.map(doc => {
        arr.push(doc.data())
      })
      console.log(arr, 'aaaaaaaaaaaaaaa')
      setState(arr)
    } catch (err) {
      console.log(err, 'errrr')
    }
  }, [])

  const renderCard = (item) => {

    console.log(item)
    console.log(userdata, 'userdata')
    let user = JSON.parse(userdata)

    return (
      <>
        {user?.email === item?.item?.Customer_Details?.email ?
          <View
            style={{
              backgroundColor: 'white',
              width: wp('96%'),
              marginTop: 10,
              alignSelf: 'center',
              height: 105,
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 6,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: wp('90%'),
                alignSelf: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text style={{ fontSize: 15 }}>{`Product Name: ${item?.item?.OrderDetails?.length > 0 ? item.item.OrderDetails[0].name : ''}`}</Text>
                <Text style={{ fontSize: 15 }}>{`Customer Name: ${item?.item?.Customer_Details ? item?.item?.Customer_Details.Name : ''}`}</Text>
                <Text style={{ fontSize: 15 }}>{`PhoneNo: ${item?.item?.Customer_Details ? item?.item?.Customer_Details.Phonenumber : ''}`}</Text>
                <Text style={{ fontSize: 15 }}>{`Status: ${item?.item?.Status ? item?.item?.Status : ''}`}</Text>
                <Text style={{ fontSize: 15 }}>{`Bill:${item?.item?.TotalPrice ? item?.item?.TotalPrice : ''}`}</Text>
              </View>

              {/* <View>
            <TouchableOpacity>
              <Ionicons name="ios-trash-bin-outline" size={30} color="pink" />
            </TouchableOpacity>
          </View> */}
            </View>
          </View> :
          
          // <View>
          //   <Text>No Data Found</Text>
          // </View>
          null
          }
      </>


    )
  }
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
          flex: 6,
        }}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 35,
            fontWeight: '900',
          }}>
          Order History
        </Text>

        {
          state.length > 0 ?
            <FlatList
              data={state}
              renderItem={item => renderCard(item)}
            />
            : <View style={{ flex: 1, justifyContent: 'center' }}>
              <ActivityIndicator color="red" size="large" />

            </View>

        }

        {/* <View
            style={{
              width: wp('90%'),
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text style={{ fontSize: 15 }}>Street#1,House#786,Banni</Text>
              <Text style={{ fontSize: 15 }}>Rawalpindi.</Text>
            </View>

            <View>
              <TouchableOpacity>
                <Ionicons name="ios-trash-bin-outline" size={30} color="pink" />
              </TouchableOpacity>
            </View>
          </View> */}
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
            {/* <View
              style={{
                width: wp('10%'),
                alignItems: 'center',
                alignItems: 'center',
              }}>
              <EvilIcons name="sc-facebook" size={30} color="#000000" />
            </View> */}

            {/* <View
              style={{
                width: 1,
                height: 25,
                backgroundColor: '#909090',
              }}></View> */}

            {/* <View
              style={{
                width: wp('10%'),
                alignItems: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="instagram" size={26} color="#000000" />
            </View> */}

            {/* <View
              style={{
                width: 1,
                height: 25,
                backgroundColor: '#909090',
              }}></View> */}

            {/* <View
              style={{
                width: wp('10%'),
                alignItems: 'center',
                alignItems: 'center',
              }}>
              <Ionicons name="md-globe-outline" size={26} color="#000000" />
            </View> */}
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

export default Delivery;
