import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {colors, numberWithCommas, responsiveHeight, responsiveWidth} from '../../../utils'
import { IconHapus } from '../../../assets'
import Jarak from '../jarak'

const CardKeranjang = ({keranjang}) => {
  return (
    <View style={styles.container}>
      <Image source={keranjang.product.gambar[0]} style={styles.gambar}/>
      <View style={styles.deskripsi}>
        <Text style={styles.nama}>{keranjang.product.nama}</Text>
        <Text style={styles.text}>Rp. {numberWithCommas(keranjang.product.harga)}</Text>
        <Jarak height={responsiveHeight(14)}/>
        <Text style={styles.textBold}>Pesan : <Text style={styles.text}>{keranjang.jumlahPesan}</Text></Text>
        <Text style={styles.textBold}>Durasi : <Text style={styles.text}>{keranjang.durasi}</Text></Text>
        <Text style={styles.textBold}>Total Harga: <Text style={styles.text}>Rp. {numberWithCommas(keranjang.totalHarga)}</Text></Text>
        <Text style={styles.textBold}>Keterangan:</Text>
        <Text style={styles.text}>{keranjang.keterangan}</Text>
      </View>
      <View style={styles.hapus}>
        <IconHapus/>
      </View>
    </View>
  )
}

export default CardKeranjang

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
        marginTop: 15,
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginHorizontal: 30,
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15
  },

  gambar:{
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    resizeMode: 'contain'
  },
  hapus:{
    flex:1,
    alignItems: 'flex-end',
    
  },
  nama:{
    fontFamily: "bold",
    fontSize: 15,
    textTransform: 'capitalize'
  },
  text:{
    fontFamily: "regular",
    fontSize: 13,
  },
  textBold:{
    fontFamily: "bold",
    fontSize: 13,
  },
})