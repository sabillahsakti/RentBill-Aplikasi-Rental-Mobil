import { Alert } from "react-native"
import FIREBASE from "../config/FIREBASE"
import {storeData} from '../utils'
import {dispatchError, dispatchLoading, dispatchSuccess} from '../utils'

export const UPDATE_PROFILE = 'UPDATE_PROFILE'
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD'

export const updateProfile = (data) => {
    return (dispatch) => {
        // Loading
        dispatchLoading(dispatch, UPDATE_PROFILE);

         
        const dataBaru = {
            uid: data.uid,
            nama: data.nama ? data.nama : data.namaLama,
            alamat: data.alamat ? data.alamat : data.alamatLama,
            nohp: data.nohp ? data.nohp : data.nohpLama,
            kota: data.kota ? data.kota : data.kotaLama,
            provinsi: data.provinsi ? data.provinsi : data.provinsiLama,
            email : data.email ? data.email : data.emailLama,
            status : 'user',
            avatar: data.updateAvatar ? data.avatarForDB : data.avatarLama
        }

        FIREBASE.database()
        .ref('users/'+dataBaru.uid)
        .update(dataBaru)
        .then((response) =>{

            //SUKSES
            dispatchSuccess(dispatch, UPDATE_PROFILE, response ? response : [] )
            
            //Simpan Ke Lokal Storage(Async Storage)
            storeData('user', dataBaru)
        })
        .catch((error)=> {
            //ERROR
            dispatchError(dispatch, UPDATE_PROFILE, error.message)

            alert(error)
        })
    }
}

export const changePassword = (data) => {
    return (dispatch) => {
        dispatchLoading(dispatch, CHANGE_PASSWORD)

        //Cek apakah benar email & password lama (login)
        FIREBASE.auth()
            .signInWithEmailAndPassword(data.email, data.password)
            .then((response) => {
                //Update password jika sukses
                const user = FIREBASE.auth().currentUser;

                user.updatePassword(data.newPassword)
                .then(() => {
                    // Update successful.
                    dispatchSuccess(dispatch, CHANGE_PASSWORD, "Password Berhasil Diubah")
                    

                }).catch((error) => {
                    dispatchError(dispatch, CHANGE_PASSWORD, error)
                    alert(error)
                });
            }).catch((error) => {
                //Error
                dispatchError(dispatch, CHANGE_PASSWORD, error.message)
                alert(error.message)
            })


    }
}