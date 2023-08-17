import { StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {colors, responsiveHeight,responsiveWidth} from '../../../utils'
import { connect } from 'react-redux'
import {getCarByMerk} from '../../../actions/CarAction'

const CardMerk = ({merk, navigation, id, dispatch}) => {
  const toCarByMerk = (id, namaMerk) => {

    // Ke Car Action
    dispatch(getCarByMerk(id, namaMerk))

    //Navigation ke ListCar
    navigation.navigate('ListMobil')
  }
  return (
    <TouchableOpacity style={styles.container} onPress={()=> toCarByMerk(id, merk.namaMerk)}>
      <Image source={{uri: merk.image}} style={styles.logo}/>
    </TouchableOpacity>
  )
}

export default connect()(CardMerk)

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
      padding: 10,
      borderRadius: 15,
  },
  logo:{
    width: responsiveWidth(57),
    height: responsiveHeight(70),
    alignItems: 'center'
  }
})