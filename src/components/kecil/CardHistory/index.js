import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {colors, numberWithCommas, responsiveHeight, responsiveWidth} from '../../../utils'
import Jarak from '../jarak'

const CardHistory = ({pesanan}) => {

    const history = pesanan.pesanans
  return (
    <View style={styles.container}>
      <Text style={styles.tanggal}>{pesanan.tanggal}</Text>
      {Object.keys(history).map((key, index)=>{
        return (
            <View key={index} style={styles.history}>
                <Text style={styles.textBold}>{index+1}.</Text>
                <Image source={{uri: history[key].product.gambar[0]}} style={styles.car}/>
                <View style={styles.deskripsi}>
                    <Text style={styles.nama}>{history[key].product.nama}</Text>
                    <Text style={styles.harga}>Rp. {numberWithCommas(history[key].product.harga)}</Text>

                    <Jarak height={10}/>

                    <Text style={styles.textBold}>Pesan: {history[key].jumlahPesan}</Text>
                    <Text style={styles.textBold}>Total Harga : Rp. {numberWithCommas(history[key].totalHarga)}</Text>
                </View>
            </View>
        )
      })}

      <Jarak height={10}/>

      <View style={styles.footer}>
        <View style={styles.label}>
            <Text style={styles.textBlue}>Status :</Text>
            <Text style={styles.textBlue}>Ongkir({Math.ceil(pesanan.estimasi)} Menit) : </Text>
            <Text style={styles.textBlue}>Total Harga : </Text>
        </View>

        <View style={styles.label}>
            <Text style={styles.textBlue}>{pesanan.status}</Text>
            <Text style={styles.textBlue}>Rp. {numberWithCommas(pesanan.ongkir)}</Text>
            <Text style={styles.textBlue}>Rp. {numberWithCommas(pesanan.totalHarga+pesanan.ongkir)}</Text>
        </View>
    
      </View>

    </View>
  )
}

export default CardHistory

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        padding: 15,
        borderRadius: 10,
        marginBottom: 20
    },
    history:{
        flexDirection: 'row',
        marginTop: 10
    },
    car:{
        height: responsiveHeight(80),
        width: responsiveWidth(80),
        
    },
    tanggal:{
        fontSize: 14,
        fontFamily: "bold"
    },
    textBold:{
        fontSize: 11,
        fontFamily: "bold"
    },
    deskripsi:{
        marginLeft: responsiveWidth(7)
    },
    nama:{
        fontSize: 13,
        fontFamily: "bold",
    },
    harga:{
        fontSize: 13,
        fontFamily: "regular"
    },
    footer:{
        flexDirection: 'row',

    },
    label:{
        flex: 1
    },
    textBlue:{
        fontFamily: "bold",
        fontSize: 14,
        color: colors.primary,
        textTransform: 'uppercase',
        textAlign: 'right'
    }
})