import React from 'react';
import {createDrawerNavigator,DrawerItems} from 'react-navigation'
import { Text, View,StyleSheet ,TextInput,TouchableOpacity,Image} from 'react-native'
import Booking from './Booking'
import Home from './Home'
import About from './About'
export default class App extends React.Component {

  render() {
    return (
     <AppNavigator />
    );
  }
}

const AppNavigator = createDrawerNavigator({
  หน้าหลัก:Home,
  เกี่ยวกับเรา:About,
  Bookings:Booking,
});
