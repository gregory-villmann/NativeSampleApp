import { StatusBar } from 'expo-status-bar';
import {Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button} from "@react-native-material/core";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button title={"Click me "}></Button>
    </SafeAreaView>
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
