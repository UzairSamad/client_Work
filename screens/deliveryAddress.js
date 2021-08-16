import React, { useEffect, useState } from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FloatingButton from '../Components/FloatingButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;
const DeliveryAddress = () => {
  const [adresData, setAddressData] = useState({ area: '', city: '', address: '' })
  const [userAddress, setUserAddress] = useState([])
  const [tab, setTab] = useState(1)

  const handleSave = async () => {
    try {
      let newData = [...userAddress]
      newData.push(adresData)
      console.log(userAddress, 'adresDataadresData')
      await AsyncStorage.mergeItem(
        'userAddress',
        JSON.stringify({ userAddress: newData })
      );
      alert('Address Added Succesfully')
    } catch (error) {
      alert(JSON.stringify(error))
      console.log(error, 'aaa')

      // Error saving data
    }
  };



  useEffect(() => {
    allAdress()
  }, [])
  const allAdress = async () => {
    try {
      let value = await AsyncStorage.getItem('userAddress');
      console.log(JSON.parse(value), "VALUEE_BEFOREEEEEEEEEEE");
      if (value) {
        // We have data!!
        let valll = JSON.parse(value)
        setUserAddress(valll.userAddress)
      }
    } catch (error) {
      // Error retrieving data
      console.log(error)
    }
  };
  console.log(userAddress, 'ususussu')

  return (
    <>
      {tab === 1 ?
        <View
          style={{
            flex: 1,
            backgroundColor: '#f9f9f9',
          }}>
          <View
            style={{
              // flex: 0.5,
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              marginRight: 10,
              marginVertical:20
            }}>
            <TouchableOpacity onPress={_=>setTab(2)}>
              <AntDesign name="pluscircleo" size={30} color="#4fb853" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.2,
            }}>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 35,
                fontWeight: '900',
              }}>
              Delivery Address
            </Text>
          </View>
    <ScrollView style={{flex:0.6}}>
      {userAddress.map(val=>{
        return(
          <TouchableOpacity style={{borderWidth:1 ,borderColor:'red',marginBottom:15,paddingVertical:10,paddingHorizontal:10,width:'95%',alignSelf:'center',borderRadius:10}}>
            <Text style={{fontSize:16}}>{`Address:${val.address}`}</Text>
            <Text style={{fontSize:16}}>{`Area: ${val.area}`}</Text>
            <Text style={{fontSize:16}}>{`City: ${val.city}`}</Text>
          </TouchableOpacity>
        )
      })}

    </ScrollView>

          
         

          <View style={{ flexDirection: 'row-reverse' }}>
            <FloatingButton style={{ bottom: 80, left: wp('90%') }} />

          </View>
     
        </View>
        :
        <ScrollView style={{flex:1}}>

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
            <TouchableOpacity onPress={_=>setTab(1)}>
              <MaterialIcons name="arrow-back" size={30} color="#4fb853" />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 4,
              marginTop:15
            }}>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 35,
                fontWeight: '900',
              }}>
              Add New Address
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
                onChangeText={val => setAddressData({ ...adresData, address: val })}
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
                onChangeText={val => setAddressData({ ...adresData, area: val })}
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
                onChangeText={val => setAddressData({ ...adresData, city: val })}

              />
            </View>

            <View
              style={{
                width: wp('83%'),
                marginTop: vh*0.03,
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
              marginTop: vh*0.02,
            }}>
            <TouchableOpacity
              onPress={_ => handleSave()}
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
              marginTop: vh*0.07,

            }}>
            <Image
              style={{
                width: vw*0.43,
                height: vh*0.2
              }}
              source={require('../Assets/logo.png')}
            />
          </View>
          <View
            style={{
              flex: 0.6,
              justifyContent: 'center',
              marginTop: vh*0.18,

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
          </View>

          <View
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
          </View>

          <View
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

              <View style={{ flexDirection: 'row-reverse' }}>
                <FloatingButton style={{ bottom: 80, left: wp('90%') }} />

              </View>
            </View>
          </View>
        </View>
        </ScrollView>


      }
    </>
  );
};

export default DeliveryAddress;
