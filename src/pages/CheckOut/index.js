import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { colors, numberWithCommas, responsiveHeight } from './../../utils'
import {CardAlamat, Jarak, Pilihan, Tombol} from '../../components/kecil'
import {dummyPesanans, dummyProfile} from '../../data'

export default class CheckOut extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       profile: dummyProfile,
       pesanan: dummyPesanans[0],
       ekspedisi: []
    }
  }
  render() {

    const {profile, pesanan, ekspedisi} = this.state
    return (
      <View style={styles.pages}>
        <View style={styles.isi}>
            <Text style={styles.textBold}>Apakah Benar Alamat Ini ?</Text>
            <CardAlamat profile={profile}/>
            <View style={styles.totalHarga}>
              <Text style={styles.textBold}>Total Harga :</Text>
              <Text style={styles.textBold}>Rp. {numberWithCommas(pesanan.totalHarga)}</Text>
            </View>

            <Pilihan label="Diantar atau tidak?" datas={ekspedisi}/>
            <Jarak height={10}/>

            <Text style={styles.textBold}>Biaya Ongkir :</Text>

            <View style={styles.ongkir}>
              <Text style={styles.text}>Jumlah</Text>
              <Text style={styles.textBold}>Rp. {numberWithCommas(50000)}</Text>
            </View>

            <View style={styles.ongkir}>
              <Text style={styles.text}>Estimasi Waktu</Text>
              <Text style={styles.textBold}>30 Menit</Text>
            </View>

        </View>
        <View style={styles.footer}>
              {/* Total Harga*/}
              <View style={styles.totalHarga}>
                  <Text style={styles.textBold}>Total Harga :</Text>
                  <Text style={styles.textBold}>Rp. {numberWithCommas(pesanan.totalHarga+50000)}</Text>
              </View>

              {/* Tombol*/}
              <Tombol 
                title="Bayar" 
                type="textIcon" 
                fontSize={18} 
                padding={responsiveHeight(15)}
                icon="keranjang-putih"
                onPress={() => this.props.navigation.navigate("CheckOut")}
              />
        </View>
      </View>
    )
  }
}

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