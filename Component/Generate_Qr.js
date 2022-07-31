import { View, Text, TouchableOpacity, StyleSheet, ToastAndroid, PermissionsAndroid } from 'react-native'
import { useRef } from 'react'
import React from 'react'
import QRCode from 'react-native-qrcode-svg';
import RNFS from "react-native-fs"
import CameraRoll from "@react-native-community/cameraroll";
const Generate_Qr = (props) => {
    const qrref = useRef(null)
    var d = new Date();
    const saveqrcode = () => {
        savepermission().then((res) => {
            if (res) {
                qrref.current.toDataURL((data) => {
                    RNFS.writeFile(RNFS.CachesDirectoryPath + `/${d.getTime()}.png`, data, 'base64')
                        .then((success) => {
                            return CameraRoll.save(RNFS.CachesDirectoryPath + `/${d.getTime()}.png`, 'photo')
                        })
                        .then(() => {
                            ToastAndroid.show('Saved to gallery !!', ToastAndroid.SHORT)
                        }).catch((err) => {
                            ToastAndroid.show('Error saving to gallery !!', ToastAndroid.SHORT)
                        })
                })
            }

        }).catch((err) => {
            console.log(err)

        });

    }

    const savepermission = async () => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                title: "Storage Permission",
                message: "Storage Permission is required to save QR code",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        )
        return granted === PermissionsAndroid.RESULTS.GRANTED

    }
    return (
        <View
            style={{
                backgroundColor: '#06113C',
                flex: 1,
                alignItems: "center",
                paddingTop: "5%"
            }}
        >
            <QRCode
                value={props.route.params.txt}
                logo={{ uri: props.route.params.image }}
                logoSize={65}
                size={250}
                style={styles.qrstyle}
                color={props.route.params.color}
                // logoBackgroundColor='transparent'
                getRef={qrref}
                quietZone={10}
                logoBorderRadius={5}
                backgroundColor="#fff"




            />
            <TouchableOpacity onPress={saveqrcode} activeOpacity={0.7} style={styles.button} >

                <Text style={styles.TextStyle}> Click Here To Save QR Code </Text>

            </TouchableOpacity>
        </View>
    )
}

export default Generate_Qr
const styles = StyleSheet.create({
    qrstyle: {
        alignSelf: "center",
        marginTop: "4%",
        backgroundColor: "#000",
        padding:10
    },

    button: {

        width: '80%',
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: '#009688',
        borderRadius: 7,
        marginTop: "5%"
    },

    TextStyle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18
    },
    TextInputStyle: {
        width: '100%',
        height: 40,
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#F44336',
        textAlign: 'center'
    }

})