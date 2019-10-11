import axios from 'axios';

export const GET_SMURFS = 'GET_SMURFS';
export const GOT_SMURFS = 'GOT_SMURFS';
export const NOT_GOT_SMURFS = 'NOT_GOT_SMURFS';

export const getSmurfs = () => dispatch => {

    dispatch({ type:GET_SMURFS });
    
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res.data);
            dispatch({ type: GOT_SMURFS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: NOT_GOT_SMURFS, payload: err })
        })
}