import FIREBASE from '../config/FIREBASE'
import {dispatchError, dispatchLoading, dispatchSuccess} from '../utils'

export const MASUK_KERANJANG = "MASUK_KERANJANG"
export const GET_LIST_KERANJANG = "GET_LIST_KERANJANG"
export const HAPUS_KERANJANG = "HAPUS_KERANJANG"

export const masukKeranjang = (data) => {
    return (dispatch) => {
        dispatchLoading(dispatch, MASUK_KERANJANG)

        //cek apakah data keranjang user sudah ada atau tidak
        FIREBASE.database()
            .ref('keranjangs/'+data.uid)
            .once('value', (querySnapShot) => {

                if(querySnapShot.val()){
                    //Update Keranjang Utama jika ada
                    const keranjangUtama = querySnapShot.val()
                    const hargaBaru = parseInt(data.jumlah) * parseInt(data.car.harga) * parseInt(data.durasi)

                    FIREBASE.database()
                        .ref('keranjangs')
                        .child(data.uid)
                        .update({totalHarga: keranjangUtama.totalHarga+hargaBaru})
                        .then((response) =>{
                            //Simpan ke keranjang detail
                            dispatch(masukKeranjangDetail(data))
                        })
                        .catch((error) =>{
                            dispatchError(dispatch, MASUK_KERANJANG, error)
                            alert(error)
                        })
                }else{
                    //Simpan Keranjang Utama
                    const keranjangUtama = {
                        user: data.uid,
                        tanggal: new Date().toDateString(),
                        totalHarga: parseInt(data.jumlah) * parseInt(data.car.harga) * parseInt(data.durasi),
                        totalBerat: parseInt(30000)
                    }

                    FIREBASE.database()
                        .ref('keranjangs')
                        .child(data.uid)
                        .set(keranjangUtama)
                        .then((response) =>{
                    
                            //Simpan ke keranjang detail
                            dispatch(masukKeranjangDetail(data))
                        })
                        .catch((error) =>{
                            dispatchError(dispatch, MASUK_KERANJANG, error)
                            alert(error)
                        })
                }
            })
            .catch((error) => {
                dispatchError(dispatch, MASUK_KERANJANG, error)
                alert(error)
            })
    }
}

export const masukKeranjangDetail = (data) =>{
    return (dispatch) => {
        const pesanans = {
            product: data.car,
            jumlahPesan: data.jumlah,
            totalHarga: parseInt(data.jumlah) * parseInt(data.car.harga) * parseInt(data.durasi),
            totalBerat: parseInt(30000),
            keterangan: data.keterangan,
            durasi: data.durasi
        }

        FIREBASE.database()
            .ref('keranjangs/'+data.uid)
            .child('pesanans')
            .push(pesanans)
            .then((response) => {
                
                dispatchSuccess(dispatch, MASUK_KERANJANG, response ? response : [])
            }).catch((error) =>{
                dispatchError(dispatch, MASUK_KERANJANG, error)
                alert(error)
            })
    }
}

export const getListKeranjang = (id) => {
    return (dispatch) => {
        dispatchLoading(dispatch, GET_LIST_KERANJANG);

        FIREBASE.database()
            .ref('keranjangs/'+id)
            .once('value', (querySnapshot) => {
                //Hasil
                let data = querySnapshot.val()

                dispatchSuccess(dispatch, GET_LIST_KERANJANG, data)
            })
            .catch((error) => {
                dispatchError(dispatch, GET_LIST_KERANJANG, error)
                alert(error)
            })
    }
}

export const deleteKeranjang = (id, keranjangUtama, keranjang) => {
    return (dispatch) => {
        dispatchLoading(dispatch, HAPUS_KERANJANG)

        const totalHargaBaru = keranjangUtama.totalHarga - keranjang.totalHarga

        if(totalHargaBaru === 0){
            //Hapus keranjang utama & detail pesanan
            FIREBASE.database()
                .ref('keranjangs')
                .child(keranjangUtama.user)
                .remove()
                .then((response) => {
                    dispatchSuccess(dispatch, HAPUS_KERANJANG, "Keranjang Sukses Dihapus")
                }).catch((error) =>{
                    dispatchError(dispatch, HAPUS_KERANJANG, error)
                    alert(error)
                })
        }else{

            //Update total Harga
            FIREBASE.database()
                .ref('keranjangs')
                .child(keranjangUtama.user)
                .update({
                    totalHarga : totalHargaBaru
                })
                .then((response) => {
                    //Update keranjang utama & hapus pesanan detail
                    dispatch(deleteKeranjangDetail(id, keranjangUtama))
                }).catch((error) =>{
                    dispatchError(dispatch, HAPUS_KERANJANG, error)
                    alert(error)
                })

            
        }
    }
}

export const deleteKeranjangDetail = (id,keranjangUtama) => {
    return (dispatch) => {
        FIREBASE.database()
            .ref('keranjangs/'+keranjangUtama.user)
            .child('pesanans')
            .child(id)
            .remove()
            .then((response) => {
                dispatchSuccess(dispatch, HAPUS_KERANJANG, "Keranjang Sukses Dihapus")
            }).catch((error) =>{
                dispatchError(dispatch, HAPUS_KERANJANG, error)
                alert(error)
            })

    }
}