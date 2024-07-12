import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.materials}>Materials</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.bottomBanner}>
        <Text style={styles.bottomBannerText}> ADD TO BASKET</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007AFF',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'black',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: '#DD8560',
    fontWeight:'bold',
    marginBottom: 10,
  },
  category: {
    fontSize: 20,
    textTransform:'capitalize',
    color: '#555555',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555555',
  },
  materials: {
    fontSize: 22 ,
    marginBottom: 8,

  },
  bottomBanner: {
    backgroundColor: '#000',
    padding: 25,
    alignItems: 'center',
  },
  bottomBannerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'black',
  },
});

export default ProductDetailScreen;