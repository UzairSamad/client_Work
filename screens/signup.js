import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import colors from '../Components/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Signup = props => {
  const [Name, setName] = useState();
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [RePassword, setRePassword] = useState();
  const Userdata = {Name, mobile, email};
  const Signupi = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert('SignUp Successful,Please Login Now');
        firestore()
          .collection('Users')
          .add({displayName: Name, phoneNumber: mobile, email: email});
        // props.navigation.navigate('Itemlist', Userdata);
        props.navigation.goBack();
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          alert('That email address is invalid!');
        }

        alert(error);
      });
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#dddddd',
      }}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <FontAwesome name="user-circle-o" size={150} color="black" />
          <TouchableOpacity
            style={{
              marginLeft: -20,
              marginTop: 45,
            }}>
            <AntDesign name="pluscircleo" size={30} color="#4fb853" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 2,
          }}>
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
              placeholder={'Your Name'}
              placeholderTextColor={colors.mediumGrey}
              style={{
                fontSize: 20,
              }}
              onChangeText={text => {
                setName(text);
              }}
            />
          </View>

          <View
            style={{
              alignSelf: 'center',
              //marginTop:10,
              borderBottomColor: 'black',
              borderBottomWidth: 0.5,
              width: wp('80%'),
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <TextInput
              placeholder={'Mobile#'}
              placeholderTextColor={colors.mediumGrey}
              keyboardType="numeric"
              keyboardAppearance="dark"
              style={{
                fontSize: 15,
              }}
              onChangeText={text => {
                setMobile(text);
              }}
            />
          </View>

          <View
            style={{
              alignSelf: 'center',
              //marginTop:10,
              borderBottomColor: 'black',
              borderBottomWidth: 0.5,
              width: wp('80%'),
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <TextInput
              placeholder={'Email'}
              placeholderTextColor={colors.mediumGrey}
              style={{
                fontSize: 15,
              }}
              onChangeText={text => {
                setEmail(text);
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
              placeholder={'Password'}
              placeholderTextColor={colors.mediumGrey}
              style={{
                fontSize: 20,
              }}
              secureTextEntry
              onChangeText={text => {
                setPassword(text);
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
              placeholder={'Re-enter Password'}
              placeholderTextColor={colors.mediumGrey}
              style={{
                fontSize: 20,
              }}
              secureTextEntry
              onChangeText={text => {
                setRePassword(text);
              }}
            />
          </View>

          {password ? (
            password === RePassword ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  height: 70,
                  alignItems: 'flex-end',
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#0011ff',
                    height: 40,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: wp('40%'),
                    borderWidth: 0.5,
                    borderRadius: 6,
                    borderColor: 'black',
                  }}
                  onPress={() => {
                    Signupi();
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                    }}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  height: 70,
                  alignItems: 'flex-end',
                }}>
                <TouchableOpacity
                  disabled
                  style={{
                    backgroundColor: colors.mediumGrey,
                    height: 40,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: wp('40%'),
                    borderWidth: 0.5,
                    borderRadius: 6,
                    borderColor: 'black',
                  }}
                  onPress={() => {
                    Signupi();
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                    }}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            )
          ) : (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                height: 70,
                alignItems: 'flex-end',
              }}>
              <TouchableOpacity
                disabled
                style={{
                  backgroundColor: colors.mediumGrey,
                  height: 40,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: wp('40%'),
                  borderWidth: 0.5,
                  borderRadius: 6,
                  borderColor: 'black',
                }}
                onPress={() => {
                  Signupi();
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                  }}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View
          style={{
            flex: 1,
          }}>
          <Image
            style={{
              width: 200,
              marginTop: '5%',
              height: 150,
              alignSelf: 'center',
            }}
            source={require('../Assets/logo.png')}
          />

          <TouchableOpacity
            style={{
              marginTop: 10,
            }}>
            <Text
              style={{
                fontSize: 17,
                color: '#999999',
                alignSelf: 'center',
              }}>
              Skip Login {'>>'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Signup;
