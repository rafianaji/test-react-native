import axios from 'axios'

export function getAll() {
    return (dispatch, getState) => {
        fetch(`http://222.124.168.221:8500/mitra_test/api/barang/get-all`)
            .then(res => {
                return res.json()
            })
            .then(({data}) => {
                dispatch({
                    type: 'GET_ALL',
                    payload: data
                })
            })
    }
}

export function create(data) {
    return (dispatch, getState) => {
        fetch(`http://222.124.168.221:8500/mitra_test/api/barang/create`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: 'CREATE',
                    payload: 'SUCCESS'
                })
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export function getOne(id) {
    return (dispatch, getState) => {
        fetch(`http://222.124.168.221:8500/mitra_test/api/barang/get-one/${id}`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                dispatch({
                    type: 'GET_ONE',
                    payload: data
                })
            })
    }
}

export function update(id, data) {
    console.log(id,'tekan kene');
    return (dispatch, getState) => {
        axios({
            method: 'POST',
            url: `http://222.124.168.221:8500/mitra_test/api/barang/update/${id}`,
            data: data
        })
            .then(res => {
                dispatch({
                    type: 'UPDATE',
                    payload: 'SUCCESS'
                })
            })
            .catch(err => console.log(err))
    }
}

export function deleteOne(id) {
    return (dispatch, getState) => {
        fetch(`http://222.124.168.221:8500/mitra_test/api/barang/delete/${id}`, {
            method: 'DELETE', // Method itself
            headers: {
             'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
            },
        })
            .then(response => response.json())
            .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
            .catch(err => console.log(err)) // Do something with the error
    }
}