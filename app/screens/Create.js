import React, { useState } from 'react'
import { View, Text, Button, Dimensions, StyleSheet, Alert } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { create } from '../store/action'

const deviceWidth = Dimensions.get('window').width

export default function Form({navigation, route}) {
    const [kodeBarang, setKodeBarang] = useState('')
    const [namaBarang, setNamaBarang] = useState('')
    const [deskripsiBarang, setDeskripsiBarang] = useState('')
    const [hargaSatuan, setHargaSatuan] = useState('')
    const [stock, setStock] = useState('')
    const dispatch = useDispatch()
    function handleSubmit() {
        if (Number(hargaSatuan) && Number(stock) && Number(kodeBarang)) {
            const obj={
                kode_barang: kodeBarang,
                nama_barang: namaBarang,
                deskripsi_barang: deskripsiBarang,
                harga_satuan: hargaSatuan,
                stock
            }
            dispatch(create(obj))
            navigation.navigate('List')
        } else if (!kodeBarang || !namaBarang || !deskripsiBarang || !hargaSatuan || !stock) {
            Alert.alert(
                'Warning',
                'Semua form harus diisi dan Kode Barang, Harga, Stock harus diisi angka'
            )
        } else {
            Alert.alert(
                'Warning',
                'Kode Barang, Harga, Stock harus diisi angka'
            )
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.containerInput}>
                <Text style={styles.labelInput}>Kode Barang</Text>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => {setKodeBarang(text)}}
                    defaultValue={kodeBarang}
                />
            </View>
            <View style={styles.containerInput}>
                <Text style={styles.labelInput}>Nama Barang</Text>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => {setNamaBarang(text)}}
                    defaultValue={namaBarang}
                />
            </View>
            <View style={styles.containerInput}>
                <Text style={styles.labelInput}>Deskripsi Barang</Text>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => {setDeskripsiBarang(text)}}
                    defaultValue={deskripsiBarang}
                />
            </View>
            <View style={styles.containerInput}>
                <Text style={styles.labelInput}>Harga Satuan</Text>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => {setHargaSatuan(text)}}
                    defaultValue={String(hargaSatuan)}
                />
            </View>
            <View style={styles.containerInput}>
                <Text style={styles.labelInput}>Stock</Text>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => {setStock(text)}}
                    defaultValue={String(stock)}
                />
            </View>
            <Button 
             title="Save"
             onPress={() => {handleSubmit()}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerInput: {
        display: "flex", 
        flexDirection: "column", 
        alignItems: 'flex-start',
        marginBottom: 8
    },
    textInputStyle: {
        height: 40, 
        borderWidth: 1, 
        borderColor: "black", 
        marginTop: 5, 
        borderRadius: 3, 
        padding: 10,
        width: deviceWidth/2
    },
    container: {
        flex: 1,
        backgroundColor: '#E4E9EF',
        padding: 5
    },
    labelInput: {
        fontWeight: 'bold'
    }
});