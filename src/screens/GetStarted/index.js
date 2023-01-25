import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { Image } from 'react-native-svg'
import { IL_GetStarted_PNG } from '../../res/images/Illustrations'

const GetStarted = () => {
    return (
        <View style={{flex: 1, paddingHorizontal: 20, justifyContent: 'center'}}>
            <Image source={IL_GetStarted_PNG} style={{height: 225, width: '100%', resizeMode: 'stretch'}} />
        </View>
    )
}

export default GetStarted

const styles = StyleSheet.create({})