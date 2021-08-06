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
import DropDownPicker from 'react-native-dropdown-picker';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SelectBranch = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Rawalpindi', value: 'Rawalpindi'},
    {label: 'Banni', value: 'Banni'},
  ]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ededed',
      }}>
      <View
        style={{
          flex: 0.3,
          justifyContent: 'center',
        }}>
        <Ionicons name="close" size={30} color="#dc8284" />
      </View>

      <View
        style={{
          flex: 1.5,
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
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
          flex: 2,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 40,
            fontWeight: '800',
          }}>
          Select Branch
        </Text>

        <Text
          style={{
            alignSelf: 'center',
            marginTop: -7,
          }}>
          Please select your desired branch
        </Text>

        <DropDownPicker
          style={{
            width: wp('90%'),
            marginTop: 20,
            borderBottomWidth: 0.5,
            alignSelf: 'center',
            borderWidth: 0,
            backgroundColor: '#ededed',
          }}
          open={open}
          disableBorderRadius={true}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          dropDownContainerStyle={{
            width: wp('90%'),
            alignSelf: 'center',
            borderWidth: 0,
            backgroundColor: '#ededed',
          }}
        />

        <DropDownPicker
          style={{
            width: wp('90%'),
            marginTop: 10,
            borderBottomWidth: 0.5,
            alignSelf: 'center',
            borderWidth: 0,
            backgroundColor: '#ededed',
          }}
          open={open}
          disableBorderRadius={true}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          dropDownContainerStyle={{
            width: wp('90%'),
            alignSelf: 'center',
            borderWidth: 0,
            backgroundColor: '#ededed',
          }}
        />
      </View>

      <View
        style={{
          flex: 0.9,
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: wp('66%'),
            height: 55,
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
            Confirm
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0.5,
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            flexDirection: 'row',
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
      </View>
    </View>
  );
};

export default SelectBranch;
