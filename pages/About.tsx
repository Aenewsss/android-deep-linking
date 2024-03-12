import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function About() {

  function changePage() {
    Linking.openURL("deeplinking://")
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={changePage} style={styles.button}>
        <Text style={{ color: 'white' }}>Home Page Deep Linking!</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: "#00aabb",
    paddingHorizontal: 30,
    borderRadius: 20,
    paddingVertical: 10
  }
});