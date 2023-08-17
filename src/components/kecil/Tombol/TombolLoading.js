import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'
import Jarak from '../jarak'

const TombolLoading = ({padding, fontSize}) => {
    
    return (
        <TouchableOpacity style={styles.container(padding)}>
            <ActivityIndicator size="small" color="#FFFFFF"/>
            <Jarak width={5}/>
            <Text style={styles.title(fontSize)}>Loading . . .</Text>
        </TouchableOpacity>
    )
}

export default TombolLoading;

const styles = StyleSheet.create({
    container:(padding)=>({
        backgroundColor : colors.border,
        padding: padding,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems : 'center'
    }),

    title:(fontSize) => ({
        color: colors.white,
        fontSize: fontSize,
        fontFamily: "bold"
    })
})