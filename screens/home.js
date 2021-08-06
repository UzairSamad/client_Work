import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../Assets/bg.jpg')}
        style={{height: hp('100%'), width: wp('100')}}>
        <View
          style={{
            flex: 0.7,
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <Image source={require('../Assets/logo.png')} />
        </View>
        <View style={{flex: 0.7, justifyContent: 'center'}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              justifyContent: 'space-around',
              alignItems: 'center',
              width: wp('50%'),
              backgroundColor: 'black',
              height: 60,
              borderRadius: 5,
            }}>
            <View>
              <AntDesign name="apple1" size={38} color="white" />
            </View>

            <View style={{marginLeft: -20}}>
              <Text style={{color: 'white'}}>Download on the</Text>
              <Text style={{color: 'white', fontSize: 25, marginTop: -5}}>
                App Store
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              marginTop: 20,
              alignSelf: 'center',
              justifyContent: 'space-around',
              alignItems: 'center',
              width: wp('50%'),
              backgroundColor: 'black',
              height: 60,
              borderRadius: 5,
            }}>
            <View>
              <Ionicons name="logo-google-playstore" size={38} color="white" />
            </View>

            <View style={{marginLeft: -20}}>
              <Text style={{color: 'white'}}>Get It On</Text>
              <Text style={{color: 'white', fontSize: 25, marginTop: -5}}>
                Google Play
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 0.5,
            justifyContent: 'flex-end',
          }}>
          <Image
            style={{
              width: wp('40%'),
              height: 100,
            }}
            source={require('../Assets/gd.png')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;
