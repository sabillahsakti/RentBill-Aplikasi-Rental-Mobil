import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, Splash, ListMobil, Profile, CarDetail, Keranjang, CheckOut, EditProfile, ChangePassword, History, Login, Register1, Register2, Maps, Midtrans} from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="ListMobil" component={ListMobil} options={{title:'Mobil' , headerShown: false}}/>
      <Tab.Screen name="Profile" component={Profile}  options={{headerShown: false}}  />
    </Tab.Navigator>
  );
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
        <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}}/>
        <Stack.Screen name="CarDetail" component={CarDetail} options={{headerShown: false}}/>
        <Stack.Screen name="Keranjang" component={Keranjang}/>
        <Stack.Screen name="CheckOut" component={CheckOut}/>
        <Stack.Screen name="EditProfile" component={EditProfile} options={{title:'Edit Profile'}}/>
        <Stack.Screen name="ChangePassword" component={ChangePassword} options={{title:'Change Password'}}/>
        <Stack.Screen name="History" component={History} options={{title:'History Sewa'}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Register1" component={Register1} options={{headerShown: false}}/>
        <Stack.Screen name="Register2" component={Register2} options={{headerShown: false}}/>
        <Stack.Screen name="Maps" component={Maps} options={{headerShown: false}}/>
        <Stack.Screen name="Midtrans" component={Midtrans} options={{title: "Lanjutkan Pembayaran"}}/>
    </Stack.Navigator>
  )
}

export default Router