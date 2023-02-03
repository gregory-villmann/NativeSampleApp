import {Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button, firstChild} from "@react-native-material/core";
import Splash from "./src/screens/auth/splash";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Splash></Splash>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
