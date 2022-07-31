import { View, StyleSheet,Image,Text } from 'react-native'
import React from 'react'

const Splashscreen = () => {
  return (
    <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#035397',

    }}
    >
      <Image
      source={require('./Component/qr-code.png')}
      style={styles.image}
      />
      <Text
      style={styles.text}
      >QR Code </Text>
      <Text
      style={styles.text1}
      >Generate and Scan QR Code</Text>
    </View>
  )
}

export default Splashscreen
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    backgroundColor:"#fff"
  },
  text:{
    fontSize:20,
    color:'#fff',
    fontWeight:'bold',
    marginTop:"5%"
  },
  text1:{
    fontSize:14,
    marginTop:"5%",
    color:"#fff"
  }
})
