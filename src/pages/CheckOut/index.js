import { Text, StyleSheet, View, Alert } from 'react-native'
import React, { Component } from 'react'
import { colors, getData, numberWithCommas, responsiveHeight } from './../../utils'
import {CardAlamat, Jarak, Pilihan, Tombol} from '../../components/kecil'
import { connect } from 'react-redux'
import {getKotaDetail} from '../../actions/RajaOngkirAction'
import {snapTransactions} from '../../actions/PaymentAction'

class CheckOut extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       profile: false,
       ekspedisi: [],
       totalHarga: this.props.route.params.totalHarga,
       totalBerat: this.props.route.params.totalBerat,
       kota: '',
       provinsi: '',
       alamat: '',
       duration: this.props.route.params.duration,
       date: new Date().getTime(),
       ongkir: 50000
    }
  }

  componentDidMount(){
    this.getUserData()
  }

  getUserData = () => {
    getData('user').then(res => {
      const data = res

      if(data){
        this.setState({
          profile: data,
          alamat: data.alamat,

        })

        this.props.dispatch(getKotaDetail(data.kota))
      }else{
        this.props.navigation.replace('Login')
      }
    })
  }

  componentDidUpdate(prevProps){
    const { getKotaDetailResult, snapTransactionsResult } = this.props
    const { durasi } = this.props.route.params;

    if(getKotaDetailResult && prevProps.getKotaDetailResult !== getKotaDetailResult){
      this.setState({
        provinsi: getKotaDetailResult.province,
        kota: getKotaDetailResult.type+" "+getKotaDetailResult.city_name
      })
    }

    if(snapTransactionsResult && prevProps.snapTransactionsResult !== snapTransactionsResult){
      const params = {
        url : snapTransactionsResult.redirect_url,
        ongkir: this.state.ongkir,
        estimasi: durasi,
        order_id: "TEST-"+this.state.date+"-"+this.state.profile.uid
      }


      this.props.navigation.navigate('Midtrans', params)
    }
}

  Bayar = () => {

    const {totalHarga, ongkir, profile, date} = this.state

    const data = {
      transaction_details: {
        order_id : "TEST-"+date+"-"+profile.uid,
        gross_amount : parseInt(totalHarga+ongkir)
      },

      credit_card:{
        secure: true
      },

      customer_details:{
        first_name: profile.nama,
        email: profile.email,
        phone: profile.nohp
      }
    }

    if(!ongkir == 0){
      this.props.dispatch(snapTransactions(data))
    }else{
      Alert.alert("Error", "Ongkir Kosong")
    }
    
  }
  render() {

    const {ekspedisi, totalBerat, totalHarga, alamat, kota, provinsi, duration} = this.state
    const {navigation, snapTransactionsLoading} = this.props

    const { durasi } = this.props.route.params;
    
    return (
      <View style={styles.pages}>
        <View style={styles.isi}>
            <Text style={styles.textBold}>Apakah Benar Alamat Ini ?</Text>
            <CardAlamat alamat={alamat} provinsi={provinsi} kota={kota} navigation={navigation}/>
            <View style={styles.totalHarga}>
              <Text style={styles.textBold}>Total Harga :</Text>
              <Text style={styles.textBold}>Rp. {numberWithCommas(totalHarga)}</Text>
            </View>

            {/* <Pilihan 
              label="Diantar atau tidak?" 
              datas={['Ya', 'Tidak']}
              selectedValue
            /> */}
            <Jarak height={10}/>

            <Text style={styles.textBold}>Biaya Ongkir :</Text>

            <View style={styles.ongkir}>
              <Text style={styles.text}>Jumlah</Text>
              <Text style={styles.textBold}>Rp. {numberWithCommas(50000)}</Text>
            </View>

            <View style={styles.ongkir}>
              <Text style={styles.text}>Estimasi Waktu</Text>
              {durasi ? (
                <Text style={styles.textBold}>{Math.ceil(durasi)} menit</Text>
              ) : (
                <Text style={styles.textBold}>0 Menit</Text>
              )}
              
            </View>

            <Tombol 
                title="Cek Estimasi Waktu" 
                type="textIcon" 
                fontSize={18} 
                padding={responsiveHeight(15)}
                icon="submit"
                onPress={() => this.props.navigation.navigate("Maps")}
            />

        </View>
        <View style={styles.footer}>
              {/* Total Harga*/}
              <View style={styles.totalHarga}>
                  <Text style={styles.textBold}>Total Harga :</Text>
                  <Text style={styles.textBold}>Rp. {numberWithCommas(totalHarga+50000)}</Text>
              </View>

              {/* Tombol*/}
              <Tombol 
                title="Bayar" 
                type="textIcon" 
                fontSize={18} 
                padding={responsiveHeight(15)}
                icon="keranjang-putih"
                onPress={() => this.Bayar()}
                loading={snapTransactionsLoading}
              />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  getKotaDetailLoading: state.RajaOngkirReducer.getKotaDetailLoading,
  getKotaDetailResult: state.RajaOngkirReducer.getKotaDetailResult,
  getKotaDetailError: state.RajaOngkirReducer.getKotaDetailError,

  snapTransactionsResult: state.PaymentReducer.snapTransactionsResult,
  snapTransactionsError: state.PaymentReducer.snapTransactionsError,
  snapTransactionsLoading: state.PaymentReducer.snapTransactionsLoading,
})
export default connect(mapStateToProps, null)(CheckOut)
const styles = StyleSheet.create({
    pages:{
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: 30,
        justifyContent: 'space-between'
    },
    isi:{
        paddingHorizontal: 30,

    },
    textBold:{
        fontSize: 18,
        fontFamily: "bold"
    },
    text:{
      fontSize: 18,
      fontFamily: "regular"
    },
    totalHarga:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 20
    },
    ongkir:{
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    footer:{
      paddingHorizontal: 30,
      backgroundColor: colors.white,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
      paddingBottom: 30
    },
})