import { StyleSheet, View } from 'react-native'
import React from 'react'
import {CardMerk} from '../../kecil'

const ListMerk = ({merks}) => {
  return (
    <View style={styles.container}>
        {merks.map((merk) => {
            return(
                <CardMerk merk={merk} key={merk.id}/>
            )
        })}
    </View>
  )
}

export default ListMerk

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    }
})