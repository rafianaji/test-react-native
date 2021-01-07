import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
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
        <View>
            {data && data.map((datum) => {
                return (
                    <Box key={datum.id} data={datum} navigation={navigation}></Box>
                )
            })}
        </View>
    )
}
