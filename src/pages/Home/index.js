import { ScrollView,Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { BannerSlider, HeaderComponent, ListMerk, ListCar } from '../../components'
import { colors } from '../../utils'
import {Tombol,Jarak} from '../../components'
import { connect } from 'react-redux'
import { getListMerk } from '../../actions/MerkAction'
import {limitCar} from '../../actions/CarAction'


class Home extends Component {

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.props.dispatch(getListMerk())
      this.props.dispatch(limitCar())
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  render() {
    const {navigation} = this.props
    return (
        <View style={styles.page}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <HeaderComponent navigation={navigation} page="Home"/>
            <BannerSlider/>
            <View style={styles.pilihmerk}>
              <Text style={styles.label}>Pilih Merk</Text>
              <ListMerk navigation={navigation}/>
            </View>
            <View style={styles.pilihcar}>
              <Text style={styles.label}>Pilih <Text style={styles.boldLabel}>Mobil</Text> Yang Anda Inginkan</Text>
              <ListCar navigation={navigation}/>
              <Tombol title="Lihat Semua" type="text" padding={7}/>
            </View>
            <Jarak height={110}/>
          </ScrollView>
          
        </View>
    )
  }
}

export default connect()(Home)
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