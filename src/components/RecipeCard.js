import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import { recipes } from '../constants/recipes';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const RecipeCard = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      showsVerticalScrollIndicator={false}
      data={recipes}
      renderItem={({ item }) => (
        <Pressable
          style={{
            backgroundColor: '#fff',
            borderRadius: 8,
            marginVertical: 15,
            paddingHorizontal: 10,
            paddingVertical: 25,
            alignItems: 'center',
          }}
          onPress={() => {
            navigation.navigate('RecipeDetails', { item: item });
          }}
        >
          <Image source={item.image} style={{ width: 150, height: 150 }} />
          <Text>{item.name}</Text>
          <View style={{ flexDirection: 'row', marginTop: 8 }}>
            <Text>{item.time}</Text>
            <Text> | </Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginRight: 3 }}>{item.rating}</Text>
              <FontAwesome name="star" size={15} color={'#00796B'} />
            </View>
          </View>
        </Pressable>
      )}
    />
  );
};

export default RecipeCard;

const styles = StyleSheet.create({});
