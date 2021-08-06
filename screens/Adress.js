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

const Address = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#f3f3f3'}}>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: 150,
            height: 150,
          }}
          source={require('../Assets/logo.png')}
        />
      </View>

      <View
        style={{
          flex: 0.7,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              width: wp('30'),
              alignItems: 'center',
              alignItems: 'center',
            }}>
            <EvilIcons name="sc-facebook" size={30} color="#000000" />
            <Text
              style={{
                fontSize: 13,
              }}>
              @ballaTikkahouse
            </Text>
          </View>

          <View
            style={{
              width: 1,
              height: 25,
              backgroundColor: '#909090',
            }}></View>

          <View
            style={{
              width: wp('30'),
              alignItems: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="instagram" size={26} color="#000000" />

            <Text
              style={{
                fontSize: 13,
              }}>
              #ballaTikkahouse
            </Text>
          </View>

          <View
            style={{
              width: 1,
              height: 25,
              backgroundColor: '#909090',
            }}></View>

          <View
            style={{
              width: wp('30'),
              alignItems: 'center',
              alignItems: 'center',
            }}>
            <Ionicons name="md-globe-outline" size={26} color="#000000" />

            <Text
              style={{
                fontSize: 12,
              }}>
              ballaTikkahouse.com
            </Text>
          </View>
        </View>
      </View>

      <View style={{flex: 3}}>
        <View
          style={{
            width: wp('90%'),
            height: 80,
            justifyContent: 'flex-end',
            alignSelf: 'center',
          }}>
          <Image
            style={{
              width: 125,
              height: 70,
            }}
            source={require('../Assets/bala.png')}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: wp('65%'),
            marginLeft: 15,
          }}>
          <Text
            style={{
              fontSize: 35,
              fontWeight: 'bold',
            }}>
            BANNI
          </Text>
          <Ionicons name="ios-call" size={20} color="#000000" />
          <Text>051-5550822</Text>
        </View>

        <View
          style={{
            width: wp('65%'),
            marginTop: -10,
            marginLeft: 25,

            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 22,
              marginRight: 12,
            }}>
            B R A N C H
          </Text>
          <Entypo name="location" size={20} color="#000000" />
          <Text
            style={{
              marginLeft: 19,
            }}>
            bani-chowk,rawalpindi
          </Text>
        </View>

        <View
          style={{
            width: wp('90%'),
            height: 80,
            justifyContent: 'flex-end',
            alignSelf: 'center',
          }}>
          <Image
            style={{
              width: 125,
              height: 70,
            }}
            source={require('../Assets/bala.png')}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: wp('65%'),
            marginLeft: 15,
          }}>
          <Text
            style={{
              fontSize: 35,
              marginRight: 15,
              fontWeight: 'bold',
            }}>
            P.W.D
          </Text>
          <Ionicons name="ios-call" size={20} color="#000000" />
          <Text>051-5550822</Text>
        </View>

        <View
          style={{
            width: wp('65%'),
            marginTop: -10,
            marginLeft: 25,

            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 22,
              marginRight: 12,
            }}>
            B R A N C H
          </Text>
          <Entypo name="location" size={20} color="#000000" />
          <Text
            style={{
              marginLeft: 17,
            }}>
            PWD,Rawalpindi
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{
            width: wp('60%'),
            height: 170,
          }}
          source={require('../Assets/gd.png')}
        />
      </View>

      <View style={{flex: 0.5}}>
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

export default Address;
