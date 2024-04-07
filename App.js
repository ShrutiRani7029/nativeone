
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
  const [name,setName]=useState("sh")
  

  return (
    <View>
      <Text style={{fontSize:30}}>Props in React native</Text>
      <Button title='Update Props' onPress={()=>setName("shru")}/>
      <User name={name} age={22} friend={"dev"}/>

    </View>
  );
};
const User=(props)=>{
   return (
    <View style={{backgroundColor:'green', padding: 7}} >
      <Text style={{fontSize:30}}>Name: {props.name}</Text>
      <Text style={{fontSize:30}}>Age: {props.age}</Text>
      <Text style={{fontSize:30}}>Friend: {props.friend}</Text>
    </View>
   )
}



export default App;




  

