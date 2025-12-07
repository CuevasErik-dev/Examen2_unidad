import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const MyButton = () => {
    return (
        <View style={{alignItems:"flex-end", margin:5}}>
            
        <Button  style={{ width: 200, height:50}}
        icon="heart" mode="contained" onPress={() => console.log('Pressed')}>
            Press me
        </Button>
        </View>
    )
}

export default MyButton