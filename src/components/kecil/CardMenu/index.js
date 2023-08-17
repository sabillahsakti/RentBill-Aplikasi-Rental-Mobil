import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconArrowRight } from '../../../assets'
import { clearStorage, colors, responsiveHeight } from '../../../utils'
import FIREBASE from '../../../config/FIREBASE'

const CardMenu = ({menu, navigation}) => {

    const onSubmit = () => {
        if(menu.halaman === "Login"){
            FIREBASE.auth().signOut().then(function() {
                clearStorage()
                navigation.replace('Login')
            }).catch(function(error){
                alert(error)
            })
        }else{
            navigation.navigate(menu.halaman)
        }
    }
  return (
    <TouchableOpacity style={styles.container} onPress={() =>onSubmit()}>
        <View style={styles.menu}>
            {menu.gambar}
            <Text style={styles.text}>{menu.nama}</Text>
        </View>
        <IconArrowRight/>
    </TouchableOpacity>
  )
}

export default CardMenu

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginHorizontal: 30,
        padding: responsiveHeight(20),
        borderRadius: 10,
        alignItems: 'center'
    },
    text:{
        fontSize:18,
        fontFamily: "bold",
        marginLeft: 20
    },
    menu:{
        flexDirection: 'row',
        alignItems: 'center'
    }
})