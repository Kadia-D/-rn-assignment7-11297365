import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const CheckOut = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      let savedCart = await AsyncStorage.getItem('cart');
      setCart(savedCart ? JSON.parse(savedCart) : []);
    };
    fetchCart();
  }, []);

  const handleNavigate = () => {
    navigation.navigate('home');
  };

  const removeFromCart = async (productId) => {
    let updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
  };



  return (
    <ScrollView style={styles.container}>
        <View style={styles.header}>
            <View style={styles.logoView}>
            <TouchableOpacity onPress={handleNavigate}>
                <Image style={styles.logo} source={require('../assets/Logo.png')}/>
            </TouchableOpacity>
            </View>
           
            <Image style={styles.searchIcon} source={require('../assets/Search.png')}/>
        </View>
        <Text style={styles.heading}>CheckOut</Text>
        <View style={styles.cartList} >
            {cart.map((item) => (
                <View style={styles.product}  key={item.id} >
                
                    <Image style={styles.itemImage} source={item.ImageSrc}/>
                    <View style={styles.productRight} >
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.description}>{item.description}</Text>

                        <View style={styles.bottom} >
                            <Text style={styles.price}>{item.price}</Text>
                            <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                                <Image style={styles.remove} source={require('../assets/remove.png')} />
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                    
                </View>
                ))}
        </View>
        

        <View style={styles.bottomView}>
            <View style={styles.totalView}>
                <Text style={styles.est}>EST. TOTAL</Text>
                <Text style={styles.total}>$240</Text>
            </View>
            <View style={styles.CheckoutView}>
                <Image style={styles.shoppingBag} source={require('../assets/icons8-shopping-bag-50.png')} />
                <Text style={styles.bottomheading}>CheckOut</Text>
            </View>
        </View>
       
        
    </ScrollView>
  );
};


const styles = StyleSheet.create({
    container: {
        padding: '30px',
        marginTop: 20, 
         height: '100%',
    },
    logoView: {
        alignItems: 'center',
        flex: 1.3
    },
    logo: {
        width: '95px',
        height: '38px',
        
    },
    searchIcon:{
        width: '35px',
        height: '35px',
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '20px',
        alignItems: 'center'
    },
    heading: {
        fontSize: '30px',
        fontWeight: 500,
        letterSpacing: 3,
        marginBottom: '30px',
        alignItems: 'center',
        textAlign: 'center',
    },
    cartList: {
        marginBottom: '120px'
    },
    product: {
        height: '100px',
        flexDirection: 'row',
        marginBottom: '20px',
        justifyContent: 'space-between',
        width: '95%',

    },
    productRight: {
        flex: 2,
        padding: 5
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemImage: {
        height: '100%',
        width: '60px',
        marginRight: '15px',
    },
    itemName: {
        fontWeight: 500,
        fontSize: '18px',
    },
    description: {
        fontWeight: 500,
        fontSize: '18px',
        color: 'lightgrey',
        lineHeight: '18px',
        marginBottom: 5,
    },
    price: {
        fontWeight: 500,
        fontSize: '18px',
        color: 'brown'
    },
    remove: {
        width: '25px',
        height: '25px',
    },
    bottomView: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        left: 0,
    },
    totalView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    total: {
        color: 'brown',
        fontSize: '18px'
    },
    est: {
        letterSpacing: 2,
        fontSize: '18px'
    },
    CheckoutView: {
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        height: 70, 
        justifyContent: 'center',  
    },
    shoppingBag: {
        width: '35px',
        height: '35px',
        marginRight: '20px',
    },
    bottomheading: {
        fontSize: '23px',
        letterSpacing: 2,
        color: 'white',
        textAlign: 'center',
    }
})