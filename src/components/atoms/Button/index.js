import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../res'


const Button = ({onPress, text}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} >
        <Text style={styles.text}> { text }</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    width: 259,
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center'
},
text: {
  fontSize: 18,
  fontFamily: fonts.Medium,
  color: colors.white,
  textAlign: 'center',
  }
})