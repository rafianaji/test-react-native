import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import Box from '../components/box'
import { getAll } from '../store/action'

export default function List({navigation}) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAll())
    }, [])
    const data = useSelector(state => state.itemReducer.data)
    return (
        <View style={styles.container}>
            {data && data.map((datum) => {
                return (
                    <Box key={datum.id} data={datum} navigation={navigation}></Box>
                )
            })}
            <Button title="Add Item" onPress={() => {navigation.navigate('Create')}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 3,
      backgroundColor: '#E4E9EF',
      alignItems: 'center',
    },
    touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        //backgroundColor:'black'
    },
});