import { Image,StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, responsiveHeight, responsiveWidth } from '../../../utils'
import Tombol from '../Tombol'

const CardCar = ({car, navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.card}>
                <Image source={{uri:car.gambar[0]}} style={styles.gambar}/>
                <Text style={styles.text}>{car.nama}</Text>
            </TouchableOpacity>

            <Tombol type="text" title="Lihat" padding={8} onPress={() => navigation.navigate('CarDetail', {car})}/>        
        </View>
    )
}

export default CardCar

const styles = StyleSheet.create({
    container :{
        margin:13

    },
    card:{
        backgroundColor: colors.yellow,
        width: responsiveWidth(140),
        alignItems: 'center',
        padding:10,
        borderRadius:10,
        marginBottom: 10,
    },
    gambar: {
        width: 124,
        height: 124
    },
    text:{
        fontFamily: "bold",
        fontSize: 17,
        textTransform: 'capitalize',
        textAlign: 'center'
    }
    
})