import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Card from '../Components/Card';
import FloatingButton from '../Components/FloatingButton';
import {SliderBox} from 'react-native-image-slider-box';
import ModalDropdown from 'react-native-modal-dropdown';
import {Load_Products} from '../Store/Shopping/Shopping-actions';
import {connect} from 'react-redux';
import {ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import firestore from '@react-native-firebase/firestore';
import branchData from '../Data/Assets/branchData';
import {styles} from './itemlistStyle';
import {ItemCategory} from './component/itemCategory';

const Itemlist = ({route, addproducts, navigation}) => {
  const Data = route.params;
  const firedata = Data[1];
  const UserData = Data[0];

  const [PhoneNumber, setPhoneNumber] = useState();
  const [name, setName] = useState();
  branchData()
    .then(e => {
      branchParser(e);
    })
    .catch(e => console.log('Error Branch data'));
  useEffect(() => {
    addproducts(firedata);
    firestore()
      .collection('Users')
      .where('email', '==', UserData.email)
      .get()
      .then(e => {
        setPhoneNumber(e.docs[0].data().phoneNumber);
        setName(e.docs[0].data().displayName);
      });
    setDataFilter(Sale);
  }, []);
  let branches = [];
  const branchParser = array => {
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      branches.push(element.name);
    }
  };

  // const SelectArray = ['Banni,Rawalpindi', 'Banni,Lahore', 'Banni,Rawalpindi'];
  const [branch, SetBranch] = useState([]);
  const Sale = firedata
    ? firedata.filter(item => {
        return item.SalePrice > 0 ? item : null;
      })
    : null;
  const Naan = firedata
    ? firedata.filter(item => {
        return item.Category === 'NAAN';
      })
    : null;
  const BarBq = firedata
    ? firedata.filter(item => {
        return item.Category === 'BARB.Q';
      })
    : null;
  const ChickenPulao = firedata
    ? firedata.filter(item => {
        return item.Category === 'CHICKENPULAO';
      })
    : null;
  const Offers = firedata
    ? firedata.filter(item => {
        return item.Category === 'OFFERS';
      })
    : null;

  const Sweets = firedata
    ? firedata.filter(item => {
        return item.Category === 'SWEETS';
      })
    : null;
  const Shanwari = firedata
    ? firedata.filter(item => {
        return item.Category === 'Shanwari';
      })
    : null;
  const TakaTak = firedata
    ? firedata.filter(item => {
        return item.Category === 'TakaTak';
      })
    : null;
  const Special = firedata
    ? firedata.filter(item => {
        return item.Category === 'Special';
      })
    : null;
  const Chinese = firedata
    ? firedata.filter(item => {
        return item.Category === 'Chinese';
      })
    : null;
  const Starter = firedata
    ? firedata.filter(item => {
        return item.Category === 'Starter';
      })
    : null;
  const Breakfast = firedata
    ? firedata.filter(item => {
        return item.Category === 'Breakfast';
      })
    : null;
  const PulaoBiryani = firedata
    ? firedata.filter(item => {
        return item.Category === 'PulaoBiryani';
      })
    : null;
  const RoastBroastSajji = firedata
    ? firedata.filter(item => {
        return item.Category === 'RoastBroastSajji';
      })
    : null;
  const Fish = firedata
    ? firedata.filter(item => {
        return item.Category === 'Fish';
      })
    : null;
  const ChapliKabab = firedata
    ? firedata.filter(item => {
        return item.Category === 'ChapliKabab';
      })
    : null;
  const Beverage = firedata
    ? firedata.filter(item => {
        return item.Category === 'Beverage';
      })
    : null;
  const SideOrder = firedata
    ? firedata.filter(item => {
        return item.Category === 'SideOrder';
      })
    : null;
  const HotBeverage = firedata
    ? firedata.filter(item => {
        return item.Category === 'HotBeverage';
      })
    : null;

  const [dataFilter, setDataFilter] = useState(Offers);
  const [colorChangeId, setcolorChangeId] = useState('Sale');
  let categoryArray = [
    {name: 'Shanwari', obj: Shanwari},
    {name: 'TakaTak', obj: TakaTak},
    {name: 'Special', obj: Special},
    {name: 'Chinese', obj: Chinese},
    {name: 'Starter', obj: Starter},
    {name: 'Breakfast', obj: Breakfast},
    {name: 'Pulao-Biryani', obj: PulaoBiryani},
    {name: 'Roast-Broast-Sajji', obj: RoastBroastSajji},
    {name: 'Fish', obj: Fish},
    {name: 'Chapli-Kabab', obj: ChapliKabab},
    {name: 'Beverage', obj: Beverage},
    {name: 'Side-Order', obj: SideOrder},
    {name: 'Hot-Beverage', obj: HotBeverage},
  ];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#e4e4e4',
      }}>
      <View
        style={{
          flex: 0.5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingRight: 5,
          paddingLeft: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Branch
          </Text>
          <ModalDropdown
            options={branches}
            style={{
              marginLeft: 10,
              color: '#000',
              width: '50%',
            }}
            dropdownStyle={{width: '50%'}}
            onSelect={Value => {
              SetBranch(Value);
            }}></ModalDropdown>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flex: 1,
          }}>
          <TouchableOpacity>
            <AntDesign name="search1" size={30} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Cart', [UserData, PhoneNumber, name]);
            }}>
            <FontAwesome name="shopping-cart" size={30} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('UserDetail', [UserData, PhoneNumber])
            }>
            <FontAwesome name="user-circle-o" size={30} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1.5,
        }}>
        <SliderBox
          images={[
            {
              uri:
                'https://firebasestorage.googleapis.com/v0/b/balla-tikka.appspot.com/o/Assets%2FBanner.png?alt=media&token=2881a560-4959-486f-89eb-660e19593bd0',
            },
            {
              uri:
                'https://firebasestorage.googleapis.com/v0/b/balla-tikka.appspot.com/o/Assets%2Fbg.jpg?alt=media&token=2593497b-9b66-47d7-bebd-10190e85498a',
            },
          ]}
        />
      </View>
      <View
        style={{
          flex: 0.4,
          width: '100%',
          backgroundColor: '#f1f2f2',
          justifyContent: 'center',
        }}>
        <ScrollView horizontal={true}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: wp(410),
              marginTop: '2%',
            }}>
            <View
              style={[
                {backgroundColor: colorChangeId === 'Sale' ? 'red' : null},
                styles.subListStyle,
              ]}>
              <TouchableOpacity
                onPress={() => {
                  setDataFilter(Sale);
                  setcolorChangeId('Sale');
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>Sale</Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                {backgroundColor: colorChangeId === 'Offers' ? 'red' : null},
                styles.subListStyle,
              ]}>
              <TouchableOpacity
                onPress={() => {
                  setDataFilter(Offers);
                  setcolorChangeId('Offers');
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>Offers</Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                {backgroundColor: colorChangeId === 'BBQ' ? 'red' : null},
                styles.subListStyle,
              ]}>
              <TouchableOpacity
                onPress={() => {
                  setDataFilter(BarBq);
                  setcolorChangeId('BBQ');
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>Bar B.Q</Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                {
                  backgroundColor:
                    colorChangeId === 'Chicken Pulao' ? 'red' : null,
                },
                styles.subListStyle,
              ]}>
              <TouchableOpacity
                onPress={() => {
                  setDataFilter(ChickenPulao);
                  setcolorChangeId('Chicken Pulao');
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                  Chicken Pulao
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                {backgroundColor: colorChangeId === 'Sweet' ? 'red' : null},
                styles.subListStyle,
              ]}>
              <TouchableOpacity
                onPress={() => {
                  setDataFilter(Sweets);
                  setcolorChangeId('Sweet');
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>Sweet</Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                {backgroundColor: colorChangeId === 'Naan' ? 'red' : null},
                styles.subListStyle,
              ]}>
              <TouchableOpacity
                onPress={() => {
                  setDataFilter(Naan);
                  setcolorChangeId('Naan');
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>Naan</Text>
              </TouchableOpacity>
            </View>
            {categoryArray.map(item => (
              <ItemCategory
                setDataFilter={setDataFilter}
                setcolorChangeId={setcolorChangeId}
                colorChangeId={colorChangeId}
                itemName={item.name}
                filterValue={item.obj}
              />
            ))}
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          flex: 4,
          marginTop: 10,
          backgroundColor: '#e2e2e2',
        }}>
        <FlatList
          data={dataFilter}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Card
              key={item.id}
              title={item.name}
              image={item.image}
              price={item.price}
              qty={item.qty}
              item={item}
            />
          )}
        />
      </View>
      <FloatingButton style={{bottom: 100}} />
    </View>
  );
};
const mapDispatchToProps = dispatch => {
  return {addproducts: item => dispatch(Load_Products(item))};
};
export default connect(null, mapDispatchToProps)(Itemlist);
