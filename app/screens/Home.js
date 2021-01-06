import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../store/action'

export default function Home() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAll())
    }, [dispatch])
    const data = useSelector(state => state.itemReducer.data)
    return (
        <View>
            {/* <Text>{JSON.stringify(data, null, 2)}</Text> */}
            <Text>fsdfs</Text>
        </View>
    )
}
