import React from 'react'
import { Text, View, Button } from 'react-native'

export default function landing( { navigation }) {
    return (
        <View style={{flex: 1, justifyConent: 'center', alignSelf: 'center' }}>
            <Button
                title="Register"
                onPress={() => navigation.navigate("Register")}/>
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}/>
        </View>
    )
}
