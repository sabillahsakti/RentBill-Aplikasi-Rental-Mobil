import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import {CardKeranjang} from '../../kecil'
import { ScrollView } from 'react-native-gesture-handler'
import {colors} from '../../../utils'
const ListKeranjang = ({
  getListKeranjangLoading, 
  getListKeranjangResult, 
  getListKeranjangError
}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>    
      {getListKeranjangResult ? (
          Object.keys(getListKeranjangResult.pesanans).map((key) => {
            return (
              <CardKeranjang
                keranjang={getListKeranjangResult.pesanans[key]}
                keranjangUtama={getListKeranjangResult}
                key={key}
                id={key}
              />
            );
          })
        ) : getListKeranjangLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator color={colors.primary} />
          </View>
        ) : getListKeranjangError ? (
          <Text>{getListKeranjangError}</Text>
        ) : (
          <Text>Data Kosong</Text>
        )}
    </View>
    </ScrollView>
  )
}

export default ListKeranjang

const styles = StyleSheet.create({
  container:{
    marginVertical: 10
  },

  loading:{
    flex:1,
    marginTop: 10,
    marginBottom: 30
  }
})