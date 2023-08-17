import axios from 'axios'
import {API_HEADER_RAJAONGKIR, API_RAJAONGKIR, API_TIMEOUT} from '../utils/constant'
import {dispatchError, dispatchLoading, dispatchSuccess} from '../utils'

export const GET_PROVINSI = "GET_PROVINSI";
export const GET_KOTA = "GET_KOTA";
export const GET_KOTA_DETAIL = "GET_KOTA_DETAIL";

export const getProvinsiList = () => {

  return (dispatch) => {

        // Loading
        dispatchLoading(dispatch, GET_PROVINSI);
        
        axios({
            method: 'get',
            url: API_RAJAONGKIR+"province",
            timeout: API_TIMEOUT,
            headers: API_HEADER_RAJAONGKIR
        }).then((response) => {
            if(response.status !== 200){

                //ERROR
                dispatchError(dispatch, GET_PROVINSI, response)
                
            }else{
                
                //SUKSES
                dispatchSuccess(dispatch, GET_PROVINSI, response.data ? response.data.rajaongkir.results : [] )
                
            }
        }).catch((error) => {
            
            //ERROR
            dispatchError(dispatch, GET_PROVINSI, error)

            alert(error)
        })

    }
}

export const getKotaList = (provinsi_id) => {

    return (dispatch) => {
  
          // Loading
        dispatchLoading(dispatch, GET_KOTA);
          
          axios({
              method: 'get',
              url: API_RAJAONGKIR+"city?province="+provinsi_id,
              timeout: API_TIMEOUT,
              headers: API_HEADER_RAJAONGKIR
          }).then((response) => {
              if(response.status !== 200){
                  //ERROR
                dispatchError(dispatch, GET_KOTA, response)
              }else{     
                  //SUKSES
                dispatchSuccess(dispatch, GET_KOTA, response.data ? response.data.rajaongkir.results : [] )
              }
          }).catch((error) => {
              
              //ERROR
            dispatchError(dispatch, GET_KOTA, error)
  
            alert(error)
          })
  
      }
  }

export const getKotaDetail = (kota_id) => {

    return (dispatch) => {
  
          // Loading
        dispatchLoading(dispatch, GET_KOTA_DETAIL);
          
          axios({
              method: 'get',
              url: API_RAJAONGKIR+"city?id="+kota_id,
              timeout: API_TIMEOUT,
              headers: API_HEADER_RAJAONGKIR
          }).then((response) => {
              if(response.status !== 200){
                  //ERROR
                dispatchError(dispatch, GET_KOTA_DETAIL, response)
              }else{     
                  //SUKSES
                dispatchSuccess(dispatch, GET_KOTA_DETAIL, response.data ? response.data.rajaongkir.results : [] )
              }
          }).catch((error) => {
              
              //ERROR
            dispatchError(dispatch, GET_KOTA_DETAIL, error)
  
            alert(error)
          })
  
      }
  }