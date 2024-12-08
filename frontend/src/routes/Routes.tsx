import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from '../utils/constants';
import HomeScreen from '../screens/homeScreen';
import DetailScreen from '../screens/detailScreen';
import AddUserScreen from '../screens/addUserScreen';
import {RootStackParamList} from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name={screens.HomeScreen}
          component={HomeScreen}
          options={{
            headerTitle: 'Users',
          }}
        />
        <Stack.Screen
          name={screens.DetailScreen}
          component={DetailScreen}
          options={{
            headerTitle: 'User Details',
          }}
        />
        <Stack.Screen name={screens.AddUserScreen} component={AddUserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
