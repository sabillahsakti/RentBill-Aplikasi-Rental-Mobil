import {GET_LIST_MERK, GET_DETAIL_MERK} from '../../actions/MerkAction'

const initialState = {
    getListMerkLoading: false,
    getListMerkResult: false,
    getListMerkError: false,

    getDetailMerkLoading: false,
    getDetailMerkResult: false,
    getDetailMerkError: false,
}

export default function (state = initialState, action){
    switch(action.type){
        case GET_LIST_MERK:
            
            return{
                ...state,
                getListMerkLoading: action.payload.loading,
                getListMerkResult: action.payload.data,
                getListMerkError: action.payload.errorMessage,
            }
        
        case GET_DETAIL_MERK:
            
            return{
                ...state,
                getDetailMerkLoading: action.payload.loading,
                getDetailMerkResult: action.payload.data,
                getDetailMerkError: action.payload.errorMessage,
            }

        default:
            return state
    }
}