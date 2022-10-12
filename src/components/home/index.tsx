import React, { useRef, useState } from 'react'
import { Button, View } from 'react-native'
import RBSheet from 'react-native-raw-bottom-sheet'
import CameraScanner from '../../Camera'
import PhoneSignIn from '../phone/auth/index'
//import Scanner from '../scanner'
const Home = () => {
  console.log(
    'enterd home----------------------------------------------------------------------------------------'
  )
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
        <View style={{ flex: 1 }}>
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

export default Home
