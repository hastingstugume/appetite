import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Image source={require('../../assets/images/recipe-bg.jpeg')} />
      <Text
        style={{
          color: '#f96163',
          fontSize: 22,
          fontWeight: 'bold',
          marginTop: 44,
        }}
      >
        40K+ Premium Recipes!
      </Text>
      <Text
        style={{
          fontSize: 42,
          fontWeight: '700',
          marginTop: 44,
          marginBottom: 40,
          color: '#3c444c',
        }}
      >
        Cook like a Chef
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#f96163',
          borderRadius: 18,
          paddingVertical: 18,
          width: '80%',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: '500', color: '#fff' }}>
          Let's Begin
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
