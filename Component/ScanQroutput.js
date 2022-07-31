import { View, Text, TouchableOpacity,ToastAndroid } from 'react-native'
import React from 'react'
import Clipboard from '@react-native-clipboard/clipboard';
const ScanQroutput = (props) => {
    const Copytext = () => {
        Clipboard.setString(props.route.params.data);
        ToastAndroid.show('Copied to clipboard', ToastAndroid.SHORT);

    }
    return (
        <View
            style={{
                flex: 1,
                // justifyContent: 'center',
                // alignItems: 'center',
                backgroundColor: '#06113C',
                // paddingTop:"51%"
                padding: 10
            }}
        >
            <Text
                style={{

                    color: "#FEB139",
                    fontWeight: "600",
                    borderWidth: 1,
                    borderColor: "#ccc",
                    padding: 10,



                }}
            >{props.route.params.data} </Text>
            <TouchableOpacity onPress={Copytext} activeOpacity={0.7} style={{
                backgroundColor: "#FEB139",
                padding: 10,
                borderRadius: 12,
                alignItems: "center",
                marginTop:"5%"

            }} >

                <Text style={{
                    fontSize: 14,
                    color: "#fff"
                }}>Copy</Text>

            </TouchableOpacity>
        </View>
    )
}

export default ScanQroutput