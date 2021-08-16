import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import { TouchableOpacity } from 'react-native';

export default class FloatingButton extends React.Component {
  state = {
    isVisible: false
  }

  modal = () => {
    return (
      <View style={{ backgroundColor: '#fff' }}>
        <Modal isVisible={this.state.isVisible}>

          <View style={{ flex: 0.3, backgroundColor: '#fff', padding: 10, borderRadius: 15, paddingVertical: 15 }}>
            <View style={{ flexDirection: 'row', marginLeft: 25}}>
              <Text style={{ fontSize: 20, alignSelf: 'center', marginBottom: 25 }}>Contact-us on Whatsapp</Text>
              <TouchableOpacity onPress={_ => this.setState({ isVisible: false })}>
                <MaterialIcons name="cancel" size={22} color="red" style={{ marginLeft: 40 }} />
              </TouchableOpacity>
            </View>

            <Text style={{ fontSize: 18, marginBottom: 5,marginLeft:3 }}>Rawalpindi</Text>
            <TouchableOpacity
              onPress={_ => Linking.openURL('whatsapp://send?text=I want to order&phone=+920515170821')}
              style={{ marginBottom: 12, flexDirection: 'row', paddingBottom: 12 }}>
              <MaterialCommunityIcons name="whatsapp" size={22} color="green" />
              <Text style={{ fontSize: 16, marginLeft: 5 }}>0515170821</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 18, marginBottom: 5 ,marginLeft:3}} >Banni</Text>
            <TouchableOpacity
              onPress={_ => Linking.openURL('whatsapp://send?text=I want to order&phone=+920515550822')}
              style={{ flexDirection: 'row', paddingBottom: 12 }} >
              <MaterialCommunityIcons name="whatsapp" size={22} color="green" />
              <Text style={{ fontSize: 16, marginLeft: 5}}>0515550822</Text>

            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    )
  }
  animation = new Animated.Value(0);
  toggleMenu = () => {
    const toValue = this.open ? 0 : 1;
    Animated.spring(this.animation, {
      toValue,
      friction: 5,
      useNativeDriver: true,
    }).start();
    this.open = !this.open;
  };
  render() {
    const FbStyle = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -80],
          }),
        },
      ],
    };
    const InstaStyle = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -140],
          }),
        },
      ],
    };
    const WebStyle = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -200],
          }),
        },
      ],
    };
    const WebStyle2 = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -260],
          }),
        },
      ],
    };
    const WebStyle3 = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -320],
          }),
        },
      ],
    };

    const rotation = {
      transform: [
        {
          rotate: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '45deg'],
          }),
        },
      ],
    };

    return (
      <View style={[styles.container, this.props.style]}>
        {this.modal()}
        <TouchableWithoutFeedback
          onPress={() => {
            Linking.openURL('https://balatikkahouse.com/');
          }}
        >
          <Animated.View style={[styles.button, styles.secondary, WebStyle3]}>
            <MaterialCommunityIcons name="web" size={20} color="#F02A4B" />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            this.setState({ isVisible: true })
            // Linking.openURL('whatsapp://send?text=I want to order&phone=+92515170821');
          }}
        >
          <Animated.View style={[styles.button, styles.secondary, WebStyle2]}>
            <MaterialCommunityIcons name="whatsapp" size={20} color="#F02A4B" />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => {
            Linking.openURL('tel:0515550822');
          }}
        >
          <Animated.View style={[styles.button, styles.secondary, WebStyle]}>
            <Icon name="call" size={20} color="#F02A4B" />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => {
            Linking.openURL('https://www.instagram.com/balatikkahouse');
          }}
        >
          <Animated.View style={[styles.button, styles.secondary, InstaStyle]}>
            <AntDesign name="instagram" size={20} color="#F02A4B" />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => {
          Linking.openURL('https://www.facebook.com/balatikkahouse');
        }}>
          <Animated.View style={[styles.button, styles.secondary, FbStyle]}>
            <Icon name="facebook" size={20} color="#F02A4B" />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => {
          Linking.openURL('https://www.facebook.com/balatikkahouse');
        }}>
          <Animated.View style={[styles.button, styles.secondary, FbStyle]}>
            <Icon name="facebook" size={20} color="#F02A4B" />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.toggleMenu}>
          <Animated.View style={[styles.button, styles.menu, rotation]}>
            <Icon name="contact-support" size={24} color="#000" />
          </Animated.View>
        </TouchableWithoutFeedback>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
  },
  button: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 10,
    shadowColor: '#F02A4B',
    shadowOpacity: 0.3,
    shadowOffset: { height: 10 },
  },
  menu: {
    backgroundColor: '#F02A4B',
    left: 10,
  },
  secondary: {
    height: 48,
    width: 48,
    borderRadius: 48 / 2,
    backgroundColor: '#fff',
    left: 10,
  },
});
{
  /* <View
style={{
  flex: 1,
  justifyContent: 'flex-end',
  position: 'absolute',
  bottom: '1%',
  backgroundColor: '#fff',
  opacity: 0.8,
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
</View> */
}
