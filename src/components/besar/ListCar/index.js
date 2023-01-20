import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {CardCar} from '../../kecil'

const ListCar = ({cars, navigation}) => {
  return (
    <View style={styles.container}>
      {cars.map((car)=>{
        return(
            <CardCar key={car.id} car={car} navigation={navigation}/>
        )
      })}
    </View>
  )
}

export default ListCar

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent : 'space-between',
        marginTop: 10
    }
})