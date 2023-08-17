import {GET_LIST_CAR, GET_LIST_CAR_BY_MERK, DELETE_PARAMETER_CAR, SAVE_KEYWORD_CAR} from '../../actions/CarAction'

const initialState = {
    getListCarLoading: false,
    getListCarResult: false,
    getListCarError: false,

    idMerk : false,
    namaMerk: false,

    keyword: false
}

export default function (state = initialState, action){
    switch(action.type){
        case GET_LIST_CAR:
            
            return{
                ...state,
                getListCarLoading: action.payload.loading,
                getListCarResult: action.payload.data,
                getListCarError: action.payload.errorMessage,
            }

        case GET_LIST_CAR_BY_MERK:
            return{
                ...state,
                idMerk: action.payload.idMerk,
                namaMerk: action.payload.namaMerk
            }
        
        case DELETE_PARAMETER_CAR:
            return{
                ...state,
                idMerk: false,
                namaMerk: false,
                keyword: false
            }

        case SAVE_KEYWORD_CAR:
            return{
                ...state,
                keyword: action.payload.data
            }
        default:
            return state
    }
}