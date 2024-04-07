
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
  
  let name="Shru";
  let age="22";
  let friend="dev";

  return (
    <View>
      <Text style={{fontSize:30}}>Props in React native</Text>
      <User name={name}/>
      <User friend={friend}/>
      <User ag={age}/>


    </View>
  );
};
const User=(props)=>{
   return (
    <View style={{backgroundColor:'green', padding: 7}} >
      <Text style={{fontSize:30}}>{props.name}</Text>
      <Text style={{fontSize:30}}>{props.friend}</Text>
      <Text style={{fontSize:30}}>{props.ag}</Text>
    </View>
   )
}



export default App;




  

