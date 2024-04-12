import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

const SearchFilter = ({ icon, placeholder }) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginVertical: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
      }}
    >
      <FontAwesome name={icon} size={20} color={'#00796B'} />
      <TextInput
        placeholder={placeholder}
        style={{ paddingLeft: 10, fontSize: 16, color: '#808080' }}
      />
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({});
