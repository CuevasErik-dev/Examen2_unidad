import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, Avatar, PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MyAppbar from './src/components/MyAppbar';
import Inicio from './src/pages/Inicio';
import MyNavbar from './src/components/MyNavbar';


export default function App() {
  return (

    <SafeAreaProvider>
      {/* <Stack1/> */}
      <Appbar.Header>
        <Appbar.BackAction onPress={() => { }} />
        <Appbar.Content title="Examen II Oportunidad" />
        <Appbar.Action icon="calendar" onPress={() => { }} />
        <Appbar.Action icon="magnify" onPress={() => { }} />
      </Appbar.Header>

      <Inicio />
      <MyNavbar />
    </SafeAreaProvider>
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
