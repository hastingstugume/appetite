import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#f9f9f9' }}>
      <Image source={require('../../assets/images/recipe-bg.jpeg')} />
      <Text
        style={{
          color: '#00796B',
          fontSize: 22,
          fontWeight: 'bold',
          marginTop: 44,
          textAlign: 'center',
        }}
      >
        Explore Thousands of Exquisite Recipes
      </Text>
      <Text
        style={{
          fontSize: 42,
          fontWeight: '700',
          marginTop: 44,
          marginBottom: 40,
          color: '#666',
        }}
      >
        Cook like a Chef
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#00796B',
          borderRadius: 18,
          paddingVertical: 18,
          width: '80%',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('RecipeList');
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: '500', color: '#fff' }}>
          Explore Recipes
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
