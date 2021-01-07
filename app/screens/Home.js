import React from 'react'
import { View, Text, StyleSheet, Button, Image, Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('window').width
export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.imageVector}
                source={require('../assets/5272-freepik-com.png')}
            />
            <Text style={{marginBottom: 5}}>Manage Your Items Now!</Text>
            <View style={{borderRadius: 50}}>
                <Button style={{borderRadius: 50}} title="Get Started"
                    onPress={() => {navigation.navigate('List')}}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageVector: {
        marginTop: -100,
        width: 380,
        height: 300,
    }
})