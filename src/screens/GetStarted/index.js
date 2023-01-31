import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IL_GetStarted_PNG } from '../../res/images/Illustrations'
import { colors, fonts } from '../../res'
import { Button, Gap } from '../../components'

const GetStarted = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <Image source={IL_GetStarted_PNG}
            style={styles.image}
        />
            <View style={styles.wrapperSlogan}>
                <Text style={styles.txtSlogan}>Shop Your Daily</Text>
                <Text style={styles.txtSlogan} >Necessary</Text>
            </View>
            <Gap height={90} />
            <Button onPress={()=> navigation.navigate('register') } text="Get Started" />
        </View>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
    image: {
        height: 225,
        width: '100%',
        resizeMode: 'stretch'},
    wrapperSlogan: {
        marginTop:51
    },
    txtSlogan: {
        fontSize: 30,
        color: colors.primary,
        textAlign: 'center',
        fontFamily: fonts.Bold
    },
});