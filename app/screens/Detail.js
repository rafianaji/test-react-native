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
    }
    return (
        <View style={styles.container}>
            <View style={{backgroundColor: '#fff', borderRadius: 5, padding: 15}}>
                <Text style={{fontSize: 25, fontWeight: "bold", textAlign: 'center'}}>{(data.nama_barang).toUpperCase()}</Text>
                <Text style={{fontSize: 12, textAlign: 'center'}}>{data.kode_barang}</Text>
                <Text style={{fontSize: 17, marginTop: 5}}>{data.deskripsi_barang}</Text>
                <View style={{marginTop: 8,flexDirection: "row", alignItems: 'center', width: "100%", justifyContent:'space-between', marginBottom: 9}}>
                    <Text style={{textAlign: 'right', fontSize: 14}}>Stock: {data.stock}</Text>
                    <Text style={{fontSize: 18,fontWeight: "bold"}}>Rp. {(data.harga_satuan)}</Text>
                </View>
                <View style={{marginBottom: 8}}>
                    <Button title="Edit" onPress={() => {navigation.navigate('Edit', data)}} />
                </View>
                <Button color="#e12a3a" title="Delete" onPress={() => {deleteHandle()}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E4E9EF',
      padding: 10,
    },
});