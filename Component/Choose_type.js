import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const Choose_type = (props) => {
  return (
    <View
    style={{
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#06113C',
        paddingTop:"51%"
    }}
    >
      <TouchableOpacity
      style={styles.button}
        onPress={()=>props.navigation.navigate('details_picker')}
      >
        <MaterialCommunityIcons
        name="qrcode-edit"
        size={25}
        color="#06113C"
        />
          <Text
          style={styles.btntext}
          >Generate QR Code</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.button}
        onPress={()=>props.navigation.navigate('scanqr')}
      >
      <MaterialCommunityIcons
        name="qrcode-scan"
        size={25}
        color="#06113C"
        />
         
          <Text
           style={styles.btntext}
          >Scan QR Code</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Choose_type

const styles=StyleSheet.create({
    button:{
        width:"50%",
        flexDirection:"row",
        justifyContent:"space-around",
        padding:15,
        borderRadius:12,
        backgroundColor:"#FAFDD6",
        marginTop:"5%"
    },
    btntext:{
        color:"#FEB139",    
        fontWeight:"700",
        fontSize:15
    }
})