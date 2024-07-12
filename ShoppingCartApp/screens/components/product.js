import { View, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native';


export function Item ({ImageSrc, name, price, description, addToCart, id }) {

    return (
        <View style={styles.ItemContainer}>
            <Image style={styles.itemImage} source={ImageSrc}/>
            <TouchableOpacity onPress={() => addToCart({ ImageSrc, name, price, description, id })}>
                <Image style={styles.add} source={require('../assets/add_circle.png')} />
            </TouchableOpacity>
            <Text style={styles.itemName}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.price}>{price}</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    ItemContainer: {
        width: '48%',
        marginBottom: 10,
        height: 340,

    },
    itemImage: {
        width: '100%',
        height: '75%',
        marginBottom: 10,
    },
    add: {
        width: '25px',
        height: '25px',
        position: 'absolute',
        right: 10,
        bottom: 20,
    },
    itemName: {
        fontWeight: 500,
        fontSize: '18px',
    },
    description: {
        fontWeight: 500,
        fontSize: '15.5px',
        color: 'grey',
        lineHeight: '18px',
        marginBottom: 5,
    },
    price: {
        fontWeight: 500,
        fontSize: '18px',
        color: 'brown'
    },
})