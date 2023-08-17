import { StyleSheet, View, ActivityIndicator, Text } from 'react-native'
import React from 'react'
import {CardMerk} from '../../kecil'
import { connect } from 'react-redux'
import { colors } from '../../../utils'

const ListMerk = ({getListMerkLoading, getListMerkResult, navigation}) => {

  return (
    <View style={styles.container}>
        {getListMerkResult ? (
            Object.keys(getListMerkResult).map((key) => {
            return <CardMerk navigation={navigation} merk={getListMerkResult[key]} key={key} id={key}/>
        })
        ) : getListMerkLoading ? (
            <View style={styles.loading}>
                <ActivityIndicator color={colors.primary}/>
            </View>
        ) : (
            <Text>Data Kosong</Text>
        )}
    </View>
  )
}

const mapStateToProps = (state) => ({
    getListMerkLoading: state.MerkReducer.getListMerkLoading,
    getListMerkResult: state.MerkReducer.getListMerkResult,
})
export default connect(mapStateToProps)(ListMerk)

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50
    },

    loading:{
        flex:1,
        marginTop: 10,
        marginBottom: 30
    }
})