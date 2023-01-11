import { StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import { StyleSheet , PermissionsAndroid } from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import MyStack from './src/screens/Stack'
import { store } from './src/redux';

export default function App() {

  const requestFilePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: "TEAM UI",
          message:"This App needs to store data of selected team data.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("you can use files");
      } else {
        console.log("file permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };
  
useEffect(()=>{
  requestFilePermission()
},[])
  return (
    <Provider store={store}>
        <MyStack />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight
  },
});
