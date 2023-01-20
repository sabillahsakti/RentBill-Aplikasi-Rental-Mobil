import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconKeranjang, IconBack, IconKeranjangPutih, IconSubmit } from '../../../assets'
import { colors } from '../../../utils'
import Jarak from '../jarak'

const TextIcon = ({icon, padding, onPress, title, fontSize}) => {

    const Icon = () =>{
        if(icon === "keranjang"){
            return <IconKeranjang/>
        }
        else if(icon === "arrow-left"){
            return <IconBack/>
        }
        else if(icon === "keranjang-putih"){
            return <IconKeranjangPutih/>
        }
        else if(icon === "submit"){
            return <IconSubmit/>
        }

        return <IconKeranjang/>
    }

    
    return (
        <TouchableOpacity style={styles.container(padding)} onPress={onPress}>
            <Icon/>
            <Jarak width={5}/>
            <Text style={styles.title(fontSize)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TextIcon;

const styles = StyleSheet.create({
    container:(padding)=>({
        backgroundColor : colors.primary,
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