import React from 'react'
import { View, Text, Button, StyleSheet, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { deleteOne } from '../store/action'

export default function Detail({navigation, route}) {
    const dispatch = useDispatch()
    const data = route.params
    function deleteHandle() {
        Alert.alert(
            "WARNING",
            "Are you sure you want to delete this file?",
            [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Ok',
                    onPress: () => {
                        dispatch(deleteOne(data.id))
                        navigation.navigate('List')
                    }
                }
            ]
        )
        // dispatch(deleteOne(data.id))
        // navigation.navigate('List')
    }
    return (
        <View style={styles.container}>
            <Text>{data.kode_barang}</Text>
            <Text>{data.nama_barang}</Text>
            <Text>{data.deskripsi_barang}</Text>
            <Text>{data.harga_satuan}</Text>
            <Text>{data.stock}</Text>
            <View style={{flex: 1, flexDirection: "row", alignItems: 'flex-start'}}>
                <Button title="Edit" onPress={() => {navigation.navigate('Form', data)}}/>
                <Button color="#e12a3a" title="Delete" onPress={() => {deleteHandle()}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E4E9EF',
      alignItems: 'center',
    },
});