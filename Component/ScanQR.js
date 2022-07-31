
import React, {Component } from 'react'
import { Text, StyleSheet, TouchableOpacity,Linking } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
// const ScanQR = (props) => {
// const scanner=useRef(null);


//   useEffect(()=>{
//     props.navigation.addListener('focus',()=>{
//       scanner?.current?.reactivate();
//     })

//   },[props.navigation])
//   return (
//     <QRCodeScanner
//         ref={scanner}
//         reactivate={false}
//         showMarker={true}
//         reactivateTimeout={1000000}
//         onRead={onSuccess}
//         flashMode={RNCamera.Constants.FlashMode.auto}


 
//         bottomContent={
//           <TouchableOpacity style={styles.buttonTouchable}
//           onPress={()=>{
//             // this.scanner.reactivate()
//             scanner.current.reactivate();
//           }}
//           >
//             <Text style={styles.buttonText}>OK. Got it!</Text>
//           </TouchableOpacity>
//         }
//       />
//   )
// }


export class ScanQR extends Component {
    validURL=(str)=> {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}
   onSuccess = e => {
    try {
      if(e.data){
        if(this.validURL(e.data)){
          if(e.data.includes('https://')||e.data.includes('http://')){
            Linking.openURL(e.data)
          }else{
            Linking.openURL('http://'+e.data)
          }

    
        }
        else if (typeof e.data === 'string') {
          // scanner.current.reactivate();
  
          this.props.navigation.replace('qr_scan_o/p',{data:e.data})
        }
      }else{
        alert("Scanning failed, try again!");
      }
    } catch (error) {
      console.log(error);
      
    }
    
   
    this.scanner.reactivate();
  };
  render() {
    return (
      <QRCodeScanner
              ref={(ref)=>{
                this.scanner=ref;
              }}
              reactivate={false}
              showMarker={true}
              reactivateTimeout={1000000}
              onRead={(e)=>{
                this.onSuccess(e)

              }}
              flashMode={RNCamera.Constants.FlashMode.auto}
      
      
       
              bottomContent={
                <TouchableOpacity style={styles.buttonTouchable}
                onPress={()=>{
                  // this.scanner.reactivate()
                  this.scanner.reactivate();
                }}
                >
                  <Text style={styles.buttonText}>OK. Got it!</Text>
                </TouchableOpacity>
              }
            />
    )
  }
}


export default ScanQR
const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});