import * as React from 'react';
import { Appbar, Avatar } from 'react-native-paper';
import MyNavbar from './MyNavbar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const MyAppbar = () => {
    <SafeAreaProvider>
    <Appbar.Header>
        <Appbar.BackAction onPress={() => { }} />
        <Appbar.Content title="Title" />
        <Appbar.Action icon="calendar" onPress={() => { }} />
        <Appbar.Action icon="magnify" onPress={() => { }} />
    </Appbar.Header>
    
    </SafeAreaProvider>
}

export default MyAppbar