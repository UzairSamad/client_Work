import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../itemlistStyle';

export const ItemCategory = ({
  colorChangeId,
  itemName,
  setDataFilter,
  setcolorChangeId,
  filterValue,
}) => {
  return (
    <View
      style={[
        {backgroundColor: colorChangeId === itemName ? 'red' : null},
        styles.subListStyle,
      ]}>
      <TouchableOpacity
        onPress={() => {
          setDataFilter(filterValue);
          setcolorChangeId(itemName);
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
            marginLeft: 5,
            marginRight: 5,
          }}>
          {itemName}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
