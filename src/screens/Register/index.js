import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts, IC_Back } from '../../res'
import { Gap } from '../../components'

const Register = ({navigation}) => {
  return (
    <View style={styles.back}>
      <View style={styles.backIcon} >
        <TouchableOpacity > 
            <IC_Back style={{color: colors.white}}  onPress={() => navigation.goBack()} />
        </TouchableOpacity>
        <Text style={styles.sign}>Create Account.</Text>
      </View>
      <View style={styles.backForm}>
        <TextInput style={styles.form}
            placeholder="Full Name" placeholderTextColor='black' />
        <TextInput style={styles.form}
            placeholder="Email" placeholderTextColor='black' />
        <TextInput style={styles.form}
          secureTextEntry={true}
          placeholder="Password" placeholderTextColor='black'
        />
        <Gap height={40}/>
        <TouchableOpacity style={styles.container}>
          <Text style={styles.text}> Submit</Text>
        </TouchableOpacity>
        <View style={styles.low}>
          <Text style={styles.textAccount} pointerEvents='box-only' onPress={()=> navigation.navigate('Login')}>Already have an account ?</Text>
        </View>
      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  back: {
    // flex: 1,
    width: '100%',
    height: '100%',
    // backgroundColor: colors.primary
    backgroundColor: '#3CCF4E'
  },
  backIcon: {
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  sign: {
    width: '70%',
    fontFamily: fonts.SemiBold,
    fontSize: 40,
    color: colors.white,
    marginTop: 30,
  },
  backForm: {
    height: 100,
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 70,
    borderBottomRightRadius: 70,
    marginTop: 20
  },
  form: {
    borderColor: '#3CCF4E',
    borderWidth: 3,
    borderRadius: 4,
    width: '70%',
    marginHorizontal: 50,
    marginTop: 40,
    paddingLeft: 10,
    fontFamily: fonts.Lights,
    fontSize: 20,
  },
  low: {

  },
  textAccount: {
    fontSize: 20,
    marginVertical: 20,
    marginHorizontal: 20
  },
  container: {
    backgroundColor:'#3CCF4E',
    height: 50,
    width: 170,
    borderRadius: 6,
    justifyContent: 'center',
    marginHorizontal: 90,
},
text: {
  fontSize: 18,
  fontFamily: fonts.Medium,
  color: colors.white,
  textAlign: 'center',
  }
})