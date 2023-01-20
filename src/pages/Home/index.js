import { ScrollView,Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { BannerSlider, HeaderComponent, ListMerk, ListCar } from '../../components'
import { colors } from '../../utils'
import {dummyCars, dummyMerks} from '../../data'
import {Tombol,Jarak} from '../../components'


export default class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       merks : dummyMerks,
       cars: dummyCars
    }
  }
  render() {
    const {merks, cars} = this.state;
    const {navigation} = this.props
    return (
        <View style={styles.page}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <HeaderComponent navigation={navigation}/>
            <BannerSlider/>
            <View style={styles.pilihmerk}>
              <Text style={styles.label}>Pilih Merk</Text>
              <ListMerk merks={merks}/>
            </View>
            <View style={styles.pilihcar}>
              <Text style={styles.label}>Pilih <Text style={styles.boldLabel}>Mobil</Text> Yang Anda Inginkan</Text>
              <ListCar cars={cars} navigation={navigation}/>
              <Tombol title="Lihat Semua" type="text" padding={7}/>
            </View>
            <Jarak height={110}/>
          </ScrollView>
          
        </View>
    )
  }
}

const styles = StyleSheet.create({
  page:{ flex: 1, backgroundColor: colors.white},
  pilihmerk:{
    marginHorizontal:30,
    marginTop: 10,
  },
  pilihcar:{
    marginHorizontal:30,
    marginTop: 10,
  },
  label:{
    fontSize: 18,
    fontFamily : "regular"
  },
  boldLabel:{
    fontSize: 18,
    fontFamily : "bold"
  }
})