import 'react-native-gesture-handler';
import React from 'react';

import Inicio from '../pages/Inicio';
import Info from '../pages/Info';

const Stack1 = createStackNavigator();
const Stack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack1.Screen name="Home" component={Inicio} />
                <Stack1.Screen name="Details" component={Info} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Stack1