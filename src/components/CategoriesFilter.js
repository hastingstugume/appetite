import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { categories } from '../constants/Categories';

const CategoriesFilter = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((category) => (
        <View
          style={{
            backgroundColor: '#00796B',
            borderRadius: 8,
            paddingVertical: 18,
            paddingHorizontal: 20,
            marginRight: 30,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowRadius: 7,
            shadowOpacity: 0.1,
            marginVertical: 12,
          }}
          key={category.id}
        >
          <Text style={{color: "#fff", fontSize: 16, fontWeight: '600'}}>{category.category}</Text>
        </View> 
      ))}
    </ScrollView>
  );
};

export default CategoriesFilter;

const styles = StyleSheet.create({});
