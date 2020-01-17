/* eslint-disable prettier/prettier */
import React from 'react';
import { Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { SignUpView, ForgotPassword, LoginView } from './src/views';


const AuthStack = createStackNavigator({
 SignUp: SignUpView,
 ForgotPas: ForgotPassword,
 Login: LoginView,
});


const TabNavigator = createBottomTabNavigator({
    Auth: AuthStack,
});

export default createAppContainer(TabNavigator);
