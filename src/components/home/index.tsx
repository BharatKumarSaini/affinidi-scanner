import React, { useRef, useState } from 'react'
import { Button, StyleSheet, View } from 'react-native'
import RBSheet from 'react-native-raw-bottom-sheet'
import CameraScanner from '../../Camera'
import PhoneSignIn from '../phone/auth/index'
import { IScannerProps } from '../../Camera'

interface Ihome {
  data: IScannerProps
}

const Home = (props: Ihome) => {
  console.log('Entred Home --------------------------')

  const [flag, setFlag] = useState(true)
  const [data, setData] = useState(null)
  console.log(data)

  const refRBSheet = useRef<any>(null)
  return (
    <View>
      {flag ? (
        <View>
          <Button
            title='Welcome to Wits Scanner'
            onPress={() => refRBSheet.current.open()}
          />
          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}
            customStyles={{
              wrapper: {
                backgroundColor: 'transparent',
              },
              draggableIcon: {
                backgroundColor: '#000',
              },
            }}
          >
            <PhoneSignIn setFlag={setFlag} refRBSheet={refRBSheet} />
          </RBSheet>
        </View>
      ) : (
        <View style={styles.container}>
          <CameraScanner
            apiKey='SQSKUdOMO6BcbK1I090571wsfl0JMjWPd971AIMidtIJqWkJmL13l8umXzEjQmoP'
            url='https://asli-documents-service.dev.in.affinidi.io/api/v1/documents/extract-document'
            documentType='ADHAR'
            getResponse={setData}
          />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#000',
    // justifyContent: 'center',
    alignContent: 'center',
    // alignItems: 'stretch',
    width: '100%',
    // position: 'relative',

    //paddingVertical: 50,
  },
})

export default Home
