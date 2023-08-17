import FIREBASE from '../config/FIREBASE'
import {dispatchError, dispatchLoading, dispatchSuccess} from '../utils'

export const GET_LIST_MERK = "GET_LIST_MERK"
export const GET_DETAIL_MERK = "GET_DETAIL_MERK"

export const getListMerk = () => {
    return (dispatch) => {

        dispatchLoading(dispatch, GET_LIST_MERK);

        FIREBASE.database()
            .ref('merks')
            .once('value', (querySnapshot) => {

                let data = querySnapshot.val() ? querySnapshot.val() : []

                dispatchSuccess(dispatch, GET_LIST_MERK, data)
            })
            .catch((error) => {
                dispatchError(dispatch, GET_LIST_MERK, error)
                alert(error)
            })
    }
}

export const getDetailMerk = (id) => {
    return (dispatch) => {

        dispatchLoading(dispatch, GET_DETAIL_MERK);

        FIREBASE.database()
            .ref('merks/'+id)
            .once('value', (querySnapshot) => {

                let data = querySnapshot.val()

                dispatchSuccess(dispatch, GET_DETAIL_MERK, data)
            })
            .catch((error) => {
                dispatchError(dispatch, GET_DETAIL_MERK, error)
                alert(error)
            })
    }
}