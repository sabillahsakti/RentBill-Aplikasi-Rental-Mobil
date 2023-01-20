import { StyleSheet, View, TextInput } from 'react-native';
import React, { Component } from 'react';
import { colors, responsiveHeight } from '../../../utils';
import {IconCari,IconKeranjang} from '../../../assets';
import {Jarak, Tombol} from '../../kecil';

export default class HeaderComponent extends Component {
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.wrapperHeader}>

          {/* Input Search */}
          <View style={styles.searchSection}>
            <IconCari/>
            <TextInput placeholder='Cari Mobil. . .' style={styles.input}/>
          </View>
          <Jarak width={10}/>
          <Tombol icon="keranjang" totalKeranjang={2} padding={10} onPress={() => navigation.navigate('Keranjang')}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: responsiveHeight(125)

  },
  wrapperHeader:{
    marginTop:50,
    marginHorizontal:30,
    flexDirection: 'row'
  },
  searchSection:{
    backgroundColor: colors.white,
    borderRadius:5,
    paddingLeft:10,
    flex:1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input:{
    fontSize:18,
    height:45,
    fontFamily: "regular"
  },
  
})