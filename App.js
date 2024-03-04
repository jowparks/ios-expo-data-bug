global.Buffer = require("buffer").Buffer;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { bugTest, success } from './modules/bug-module';

export default function App() {
  // Buffer.from("3b7e1539b70a0cb4ea2f7e485b1c9a6b3b7e1539b70a0cb4ea2f7e485b1c9a6b", "hex")
  bugTest("001122");
  success("FFEEDD")
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
