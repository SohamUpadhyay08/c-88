import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import Profile from '../screens/Profile';
import Logout from '../screens/Logout';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={StackNavigator}
        options={{ unMountOnBlur: true }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ unMountOnBlur: true }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{ unMountOnBlur: true }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
