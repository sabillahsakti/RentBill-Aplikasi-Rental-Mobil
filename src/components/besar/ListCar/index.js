import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import {CardCar} from '../../kecil'
import { connect } from 'react-redux'
import {colors} from '../../../utils'

const ListCar = ({getListCarLoading, getListCarResult, getListCarError, navigation}) => {
  return (
    <View style={styles.container}>
      {getListCarResult ? (
            Object.keys(getListCarResult).map((key) => {
            return <CardCar key={key} car={getListCarResult[key]} navigation={navigation}/>
        })
        ) : getListCarLoading ? (
            <View style={styles.loading}>
                <ActivityIndicator color={colors.primary}/>
            </View>
        ) : getListCarError ? (
          <Text>{getListCarError}</Text>
        ) : (
            <Text>Data Kosong</Text>
        )}
      
    </View>
  )
}

const mapStateToProps = (state) => ({
    getListCarLoading: state.CarReducer.getListCarLoading,
    getListCarResult: state.CarReducer.getListCarResult,
    getListCarError: state.CarReducer.getListCarError,
})

export default connect(mapStateToProps, null)(ListCar)

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent : 'space-between',
        marginTop: 10
    },

    loading:{
      flex:1,
      marginTop: 10,
      marginBottom: 30
    }
})