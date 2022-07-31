import React, { useState,useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details_picker from './Component/Details_picker';
import Generate_Qr from './Component/Generate_Qr';
import Splashscreen from './Splashscreen';
import Choose_type from './Component/Choose_type';
import ScanQR from './Component/ScanQR';
import ScanQroutput from './Component/ScanQroutput';
const Stack = createNativeStackNavigator();

const App = () => {
  const [loading, setloading] = useState(true)
  useEffect(()=>{
    setTimeout(() => {
        setloading(false)
    }, 3000);

  },[])
  return (
    !loading ? <NavigationContainer>
      <Stack.Navigator
        initialRouteName='choosetype'
      >
        <Stack.Screen name="details_picker" component={Details_picker}

          options={{
            title: "QR Code Generator",
          }}
        />
        <Stack.Screen name="generate_qr" component={Generate_Qr}
          options={{
            title: "QR Code Generator",
            headerStyle:{
              backgroundColor: '#06113C',
              bordeColor: '#06113C',

            },
            headerTintColor: '#fff',

          }}
        />
        <Stack.Screen name="choosetype" component={Choose_type}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen name="scanqr" component={ScanQR}
          options={{
            title: "Scan QR Code",
          }}
        />
        <Stack.Screen name="qr_scan_o/p" component={ScanQroutput}
          options={{
            title: "Output",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer> : <Splashscreen />
  )
}

export default App