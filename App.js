
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';


const App = () => {
  let newdata=100;
  const fruit=(val)=>{
    console.warn(newdata);
  }
  return (
    <View>

      <Text style={{fontSize:30}}>{newdata}</Text>
      <Button title='Press Here' onPress={()=>fruit ('hello')} color={'green'}></Button>
    </View>
  );
  };



  

export default App;
