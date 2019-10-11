import { Get_SMURFS, GOT_SMURFS } from '../actions/actions';


const initialState = {
    smurfs: [],
    error:''
};

export const reducer = ( state = initialState, action) => {
    switch (action.type){
        case GOT_SMURFS:
            return{
                ...state,
                smurfs: action.payload
            };
            default:
                return state;
    }
};

export default reducer;