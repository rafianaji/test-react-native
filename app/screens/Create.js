import React, { useState } from 'react'
import { View, Text, Button, Dimensions, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { create } from '../store/action'

const deviceWidth = Dimensions.get('window').width

export default function Form({navigation, route}) {
    const [kodeBarang, setKodeBarang] = useState()
    const [namaBarang, setNamaBarang] = useState()
    const [deskripsiBarang, setDeskripsiBarang] = useState()
    const [hargaSatuan, setHargaSatuan] = useState()
    const [stock, setStock] = useState()
    const dispatch = useDispatch()
    function handleSubmit() {
        const obj={
            kode_barang: kodeBarang,
            nama_barang: namaBarang,
            deskripsi_barang: deskripsiBarang,
            harga_satuan: hargaSatuan,
            stock
        }
        dispatch(create(obj))
            navigation.navigate('List')
    }
    return (
        <View>
            <View style={styles.containerInput}>
                <Text>Kode Barang</Text>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => {setKodeBarang(text)}}
                />
            </View>
            <View style={styles.containerInput}>
                <Text>Nama Barang</Text>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => {setNamaBarang(text)}}
                />
            </View>
            <View style={styles.containerInput}>
                <Text>Deskripsi Barang</Text>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => {setDeskripsiBarang(text)}}
                />
            </View>
            <View style={styles.containerInput}>
                <Text>Harga Satuan</Text>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => {setHargaSatuan(text)}}
                />
            </View>
            <View style={styles.containerInput}>
                <Text>Stock</Text>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => {setStock(text)}}
                />
            </View>
            <Button title="Save" onPress={() => {handleSubmit()}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    containerInput: {
        display: "flex", 
        flexDirection: "row", 
        alignItems: "center"
    },
    textInputStyle: {
        height: 30, 
        borderWidth: 1, 
        borderColor: "black", 
        margin: 15, 
        borderRadius: 5, 
        width: deviceWidth/2
    }
});