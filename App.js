
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
  const [newdata, setNewData] = useState(102);

  const fruit = (val) => {
    setNewData(20); // Update state using setNewData function
    console.warn(newdata); // This will log 100, not the updated value
  }

  return (
    <View>
      <Text style={{ fontSize: 30 }}>{newdata}</Text>
      <Button title='Press Here' onPress={() => fruit('hello')} color={'green'}></Button>
    </View>
  );
};

export default App;




  

