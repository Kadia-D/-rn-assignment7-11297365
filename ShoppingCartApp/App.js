import 'react-native-gesture-handler';
import { StyleSheet, Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from './screens/homeScreen';
import { CheckOut } from './screens/checkoutScreen';
import { ProductDetailScreen } from './screens/productDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CustomHeaderTitle = () => (
  <Image 
    source={require('./assets/Logo.png')} 
    style={{ width: 100, height: 30, marginLeft:85}}
    resizeMode="contain"
  />
);

const CustomHeaderRight = () => {
  const navigation = useNavigation();
  return(
  <View style={{display:'flex', flexDirection:'row', gap:15, paddingRight:15}}>
  <TouchableOpacity >
    <Image 
      source={require('./assets/Search.png')} 
      style={{ width: 24, height: 24, marginRight: 10 }}
    />
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
    <Image 
      source={require('./assets/shoppingBag.png')} 
      style={{ width: 24, height: 24, marginRight: 10 }}
    />
  </TouchableOpacity>
  
  </View>


)};
export default function App() {
  return (
    <NavigationContainer >
        <Drawer.Navigator
      
      >
      <Drawer.Screen name="Home" component={Home}  
      options={() => ({
        headerTitle: () => <CustomHeaderTitle />,
        headerRight: ({ navigation }) => <CustomHeaderRight navigation={navigation} />,
        headerStyle: {
          backgroundColor: '#fff',
          elevation: 0
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}
      />
      <Drawer.Screen name="Cart" component={CheckOut} 
      options={() => ({
        headerTitle: () => <CustomHeaderTitle />,
        headerRight: () => (<TouchableOpacity >
          <Image 
            source={require('./assets/Search.png')} 
            style={{ width: 24, height: 24, marginRight: 10 }}
          />
        </TouchableOpacity>),
        headerStyle: {
          backgroundColor: '#fff',
          elevation: 0
        },
        headerTintColor: '#000', 
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        drawerItemStyle: {
          display:'none'
        }
      })}
      />
      <Drawer.Screen name="ProductDetail" component={ProductDetailScreen} 
       options={() => ({
        headerTitle: () => <CustomHeaderTitle />,
        headerRight: () => <CustomHeaderRight />,
        headerStyle: {
          backgroundColor: '#fff',
          elevation: 0
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        drawerItemStyle: {
          display:'none'
        }
      })}
      />
      <Drawer.Screen name="Store" component={''} />
      <Drawer.Screen name="Locations" component={''} />
      <Drawer.Screen name="Blog" component={''} />
      <Drawer.Screen name="Jewelery" component={''} />
      <Drawer.Screen name="Electronic" component={''} />
      <Drawer.Screen name="Clothing" component={''} />
      </Drawer.Navigator>

  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
});