import { View, Dimensions } from 'react-native'
import React from 'react'
import AppLovinMAX from "react-native-applovin-max";

export default function Adview(props) {
    const SDK_KEY = 'gghtfO8GT1PK_yfVfHufmWiq_64wrQgOpEG_BlavnEbBbO5h0xDttMofxLxw9DfWPTC7nNtVvEhv2RbWBxMoF4';
    const [isInitialized, setInitialized] = React.useState(false)
    const initAppLovinMax = () => {
      console.log('Applovin Sdk initializi ng',AppLovinMAX.isInitialized())
      if (AppLovinMAX.isInitialized()){
        setInitialized(true)
        return
      } ;
      AppLovinMAX.setTestDeviceAdvertisingIds([]);
      AppLovinMAX.initialize(SDK_KEY, (configuration) => {
        // SDK is initialized, start loading ads
       console.log('Applovin Sdk initialized')
       setInitialized(true)
        
  
      });
  
  
      attachAdListeners()
  
    }
    const attachAdListeners = () => {
      // MREC Ad Listeners
      AppLovinMAX.addEventListener('OnMRecAdLoadedEvent', (adInfo) => {
        console.log('MREC ad loaded from ' + adInfo.networkName);
      });
      AppLovinMAX.addEventListener('OnMRecAdLoadFailedEvent', (errorInfo) => {
        console.log('MREC ad failed to load with error code ' + errorInfo.code + ' and message: ' + errorInfo.message);
      });
      AppLovinMAX.addEventListener('OnMRecAdClickedEvent', (adInfo) => {
        console.log('MREC ad clicked');
      });
      AppLovinMAX.addEventListener('OnMRecAdExpandedEvent', (adInfo) => {
        console.log('MREC ad expanded')
      });
      AppLovinMAX.addEventListener('OnMRecAdCollapsedEvent', (adInfo) => {
        console.log('MREC ad collapsed')
      });
      AppLovinMAX.addEventListener('OnMRecAdRevenuePaid', (adInfo) => {
        console.log('MREC ad revenue paid: ' + adInfo.revenue);
      });
    }
  
  
    React.useEffect(() => {
      initAppLovinMax();
  
  
    }, [])
  return (
    <>
       {isInitialized&&<AppLovinMAX.AdView
        adUnitId={"9991314aee02cda4"}

        adFormat={AppLovinMAX.AdFormat.BANNER}
        // adFormat={AppLovinMAX.AdFormat.MREC}
        autoRefresh={true}
        style={{
          width: Dimensions.get('window').width ,
    minHeight: 150,
    flexWrap: 'wrap',
    flexGrow: 1,
    marginTop:25,
    backgroundColor: props?.bg?props?.bg: 'transparent',


        }}
      />}
    </>
  )
}