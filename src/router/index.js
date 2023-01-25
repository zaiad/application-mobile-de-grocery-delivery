import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GetStarted } from '../screens';
const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="GatStarted"
                component={GetStarted}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})