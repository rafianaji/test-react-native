import React from 'react'
import { View, Text, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { deleteOne } from '../store/action'

export default function Detail({navigation, route}) {
    const dispatch = useDispatch()
    const data = route.params
    function deleteHandle() {
        dispatch(deleteOne(data.id))
        navigation.navigate('List')
    }
    return (
        <View>
            <Text>{data.kode_barang}</Text>
            <Text>{data.nama_barang}</Text>
            <Text>{data.deskripsi_barang}</Text>
            <Text>{data.harga_satuan}</Text>
            <Text>{data.stock}</Text>
            <Button title="Update" onPress={() => {navigation.navigate('Form', data)}}/>
            <Button title="Delete" onPress={() => {deleteHandle()}}/>
        </View>
    )
}
