import React, { useState } from 'react'
import { View, Text, Button, Dimensions, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { update, create } from '../store/action'

const deviceWidth = Dimensions.get('window').width

export default function Form({navigation, route}) {
    const data = route.params
    const [kodeBarang, setKodeBarang] = useState(data.kode_barang)
    const [namaBarang, setNamaBarang] = useState(data.nama_barang)
    const [deskripsiBarang, setDeskripsiBarang] = useState(data.deskripsi_barang)
    const [hargaSatuan, setHargaSatuan] = useState(data.harga_satuan)
    const [stock, setStock] = useState(data.stock)
    const dispatch = useDispatch()
    function handleSubmit() {
        const obj={
            kode_barang: kodeBarang,
            nama_barang: namaBarang,
            deskripsi_barang: deskripsiBarang,
            harga_satuan: hargaSatuan,
            stock
        }
        dispatch(update(data.id, obj))
            navigation.navigate('List')
    }
    return (
        <View>
            <View style={styles.containerInput}>
                <Text>Kode Barang</Text>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => {setKodeBarang(text)}}
                    defaultValue={kodeBarang}
                />
            </View>
            <View style={styles.containerInput}>
                <Text>Nama Barang</Text>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => {setNamaBarang(text)}}
                    defaultValue={namaBarang}
                />
            </View>
            <View style={styles.containerInput}>
                <Text>Deskripsi Barang</Text>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => {setDeskripsiBarang(text)}}
                    defaultValue={deskripsiBarang}
                />
            </View>
            <View style={styles.containerInput}>
                <Text>Harga Satuan</Text>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => {setHargaSatuan(text)}}
                    defaultValue={String(hargaSatuan)}
                />
            </View>
            <View style={styles.containerInput}>
                <Text>Stock</Text>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => {setStock(text)}}
                    defaultValue={String(stock)}
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