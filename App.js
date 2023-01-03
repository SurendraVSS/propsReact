import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './screens/Main';

export default function App() {
  let data = [{
    name:"adi",
    gender:'male',
    age:23
  }, 
    {
      name: "pranvi",
      gender: 'female',
      age: 22
    },
    {
      name: "pranvi",
      gender: 'female',
      age: 22
    }
]
 
 
  return (
    <View style={styles.container}>
      {data.map((item,index) => (
        <Main key={index} pranvi={item} />
      ))}
     
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
