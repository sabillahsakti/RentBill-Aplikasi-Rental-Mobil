import FIREBASE from '../config/FIREBASE'
import {dispatchError, dispatchLoading, dispatchSuccess} from '../utils'

export const GET_LIST_CAR = "GET_LIST_CAR"
export const GET_LIST_CAR_BY_MERK = "GET_LIST_CAR_BY_MERK"
export const DELETE_PARAMETER_CAR = "DELETE_PARAMETER_CAR"
export const SAVE_KEYWORD_CAR = "SAVE_KEYWORD_CAR"

export const getListCar = (idMerk, keyword) => {
    return (dispatch) => {

        dispatchLoading(dispatch, GET_LIST_CAR);

        if(idMerk){
            FIREBASE.database()
            .ref('cars')
            .orderByChild('merk')
            .equalTo(idMerk)
            .once('value', (querySnapshot) => {

                let data = querySnapshot.val() ? querySnapshot.val() : []

                dispatchSuccess(dispatch, GET_LIST_CAR, data)
            })
            .catch((error) => {
                dispatchError(dispatch, GET_LIST_CAR, error)
                alert(error)
            })
        }else if (keyword) {
            FIREBASE.database()
            .ref('cars')
            .orderByChild('nama')
            .equalTo(keyword)
            .once('value', (querySnapshot) => {

                let data = querySnapshot.val() ? querySnapshot.val() : []

                dispatchSuccess(dispatch, GET_LIST_CAR, data)
            })
            .catch((error) => {
                dispatchError(dispatch, GET_LIST_CAR, error)
                alert(error)
            })
        }else{
            FIREBASE.database()
            .ref('cars')
            .once('value', (querySnapshot) => {

                let data = querySnapshot.val() ? querySnapshot.val() : []

                dispatchSuccess(dispatch, GET_LIST_CAR, data)
            })
            .catch((error) => {
                dispatchError(dispatch, GET_LIST_CAR, error)
                alert(error)
            })
        }

        
    }
}

export const limitCar = () => {
    return (dispatch) => {

        dispatchLoading(dispatch, GET_LIST_CAR);

        FIREBASE.database()
            .ref('cars')
            .limitToLast(6)
            .once('value', (querySnapshot) => {

                let data = querySnapshot.val() ? querySnapshot.val() : []

                dispatchSuccess(dispatch, GET_LIST_CAR, data)
            })
            .catch((error) => {
                dispatchError(dispatch, GET_LIST_CAR, error)
                alert(error)
            })
    }
}

export const getCarByMerk = (id, namaMerk) => ({
    type: GET_LIST_CAR_BY_MERK,
    payload:{
        idMerk: id,
        namaMerk: namaMerk
    }
})

export const deleteParameterCar = () => ({
    type: DELETE_PARAMETER_CAR,
})

export const saveKeywordCar = (search) => ({
    type: SAVE_KEYWORD_CAR,
    payload:{
        data: search
    }
})