import * as React from 'react'
import { NativeModules, StyleSheet, View } from 'react-native'

//import Scanner from './components/scanner'
import App from './App'
//import Home from './components/home'
//import HomeStack from './routes/homeStack'
export const Scanner = () => {
  return (
    <View style={styles.AppContainer}>
      <App />
    </View>
  )
}

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',

    flexDirection: 'column-reverse',

    // justifyContent: 'center',
    alignContent: 'center',
  },
})
export default NativeModules.RNAffinidiModule
