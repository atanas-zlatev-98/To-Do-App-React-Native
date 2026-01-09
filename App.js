import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.body}>

      <View>
        <Text style={styles.heading}>Heading</Text>
      </View>

      <View>
        <Text>Creation</Text>
      </View>

      <View>
        <Text>View</Text>
      </View>
    </View>
  );
}


const styles = {
  body: {
    padding:20,
    alignItems:'center'
  },
  heading:{
    fontSize:30,
    marginTop:20,
    fontWeight:'bold'
  }
}