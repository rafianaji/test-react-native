import React from 'react'
import { View, Text, Dimensions, StyleSheet, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const deviceWidth = Dimensions.get('window').width

export default function box(props) {
    const { data, navigation } = props
    function detailHandle() {
        navigation.navigate('Detail', data)
    }
    return (
        <TouchableOpacity 
            style={{backgroundColor: "#fff", margin: 7, padding: 10, borderRadius: 7, width: (deviceWidth-20)}}
            onPress={() => {detailHandle()}}
        >
            <Text style={styles.largeText}>{(data.nama_barang).toUpperCase()}</Text>
            <Text>{data.deskripsi_barang}</Text>
            <View style={{display: "flex", flexDirection: 'row', marginTop: 3}}>
                <Text style={styles.smallText}>Rp. {(data.harga_satuan)} </Text>
                {/* <Text style={styles.smallText}> Stock: {data.stock}</Text> */}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    largeText: {
        fontSize: 16,
        fontWeight: "bold"
    },
    smallText: {
        fontSize: 18,
        fontWeight: "bold"
    },
});