import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {CardKeranjang} from '../../kecil'
import { ScrollView } from 'react-native-gesture-handler'

const ListKeranjang = ({keranjangs}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {keranjangs.map((keranjang => {
            return <CardKeranjang keranjang={keranjang} key={keranjang.id}/>
        }))}
    </View>
    </ScrollView>
  )
}

export default ListKeranjang

const styles = StyleSheet.create({
  container:{
    marginVertical: 10
  }
})