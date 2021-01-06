export function getAll() {
    return (dispatch, getState) => {
        // http://222.124.168.221:8500/mitra_test
        fetch(`http://localhost:3000/data`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                dispatch({
                    type: 'GET_ALL',
                    payload: data
                })
            })
    }
}