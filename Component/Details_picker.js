import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal';
import { ColorPicker } from 'react-native-color-picker'
import * as ImagePicker from 'react-native-image-picker';

const Details_picker = (props) => {
    const [txt, settxt] = React.useState('')
    const [color_, setcolor] = React.useState('#000000')
    const [image_, setimage] = React.useState(null)
    const [modalvisible, setmodalvisible] = React.useState(false)
    const GenerateQR = () => {
        if (txt.length > 0) {
            props.navigation.navigate('generate_qr', { txt: txt, color: color_, image: image_ })
        }

    }

    const imagepicker=()=>{
       const options = {
            title: 'Select  Image',
            customButtons: [
                { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
    
        };
        ImagePicker.launchImageLibrary(options, (response) => {
            // console.log('Response = ', response);
            if (response.didCancel) {
                // console.log('User cancelled image picker');
            } else if (response.error) {
                // console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                // console.log('User tapped custom button: ', response.customButton);
            } else {
                // const source = { uri: response.uri };
                // console.log(response.uri)
                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                setimage(response.assets[0].uri)
                
                
                



            }
        })


    }
    return (
        <View
            style={{
                flex: 1,
                margin: 10,

            }}
        >
            <TextInput
                style={styles.TextInputStyle}
                onChangeText={(text) => settxt(text)}
                underlineColorAndroid="transparent"
                placeholder="Enter your text here"
                multiline={true}
                value={txt}
            />
            <TouchableOpacity
                style={[styles.colorbtn, { backgroundColor: color_ }]}
                onPress={() => {
                    setmodalvisible(true)
                }}
            />
            <Text
                style={styles.txtcolorstyle}
            >Color</Text>
            <Image
                source={image_ == null ? require("../Component/image.png") : { uri: image_ }}
                style={styles.img}

            />
            <TouchableOpacity
                style={styles.imbtn}
                onPress={imagepicker}
            >
                <Text
                    style={styles.txtchooseimg}
                >Choose Image</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={GenerateQR} activeOpacity={0.7} style={styles.button} >

                <Text style={styles.TextStyle}> Click Here To Generate QR Code </Text>

            </TouchableOpacity>
            <Modal
                backdropOpacity={0.5} animationIn={"fadeIn"} animationOut={'fadeOut'}
                isVisible={modalvisible}
            >
                <View style={{
                    flex: 1, justifyContent: "center", alignItems: 'center',
                    backgroundColor: "#000"

                }} >
                    <ColorPicker
                        onColorSelected={color => {
                            setcolor(color)
                            setmodalvisible(false)
                        }}
                        style={{
                            width: 300,
                            height: 250
                        }}
                        
                    />

                </View>
            </Modal>

        </View>
    )
}

export default Details_picker
const styles = StyleSheet.create({

    txtchooseimg: {
        fontSize: 14,
        color: "#fff"
    },
    imbtn: {
        width: "40%",
        // height: "5%",
        backgroundColor: "#035397",
        padding: 10,
        borderRadius: 12,
        alignItems: "center"

    },

    img: {
        width: 150,
        height: 150,
        // borderRadius: 50,
        marginTop: 10,
        marginBottom: 10,
        resizeMode: "contain"


    },

    txtcolorstyle: {
        fontSize: 15,
        marginTop: 5,
        marginBottom: 10,
        color: '#212121',
        marginLeft: "2%"

    },
    colorbtn: {
        width: 90,
        height: 30,
        borderWidth: 5,
        borderColor: "#ccc",
        marginTop: "1%"

    },
    button: {

        width: '100%',
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: '#009688',
        borderRadius: 7,
        marginBottom: 20,
        marginTop: "2%"
    },

    TextStyle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18
    },
    TextInputStyle: {
        width: '100%',
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#F44336',
        textAlign: 'center'
    }

})