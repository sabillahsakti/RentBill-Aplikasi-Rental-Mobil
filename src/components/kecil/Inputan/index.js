import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'

const Inputan = ({textarea, width, height, fontSize, placeholder, label, value, secureTextEntry, keyboardType}) => {
    if (textarea){
        return(
            <View style={styles.container}>
                <Text style={styles.label(fontSize)}>{label} :</Text>
                <TextInput 
                    style={styles.inputTextArea(fontSize)} 
                    multiline={true} 
                    numberOfLines={4}
                    value={value}
                    
                />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.label(fontSize)}>{label} :</Text>
            <TextInput style={styles.input(width,height,fontSize)}
            value={value} secureTextEntry={secureTextEntry} keyboardType={keyboardType}/>
            
        </View>
    )
}

export default Inputan

const styles = StyleSheet.create({
    container:{
        marginTop:10,
    },

    label: (fontSize) => ({
        fontSize: fontSize ? fontSize : 18,
        fontFamily: "regular"
    }),
    input: (width, height, fontSize) => ({
        fontSize: fontSize ? fontSize : 18,
        fontFamily: "regular",
        width: width,
        height: height,
        borderWidth: 1,
        borderRadius: 5,
        bordercolor: colors.border,
        paddingVertical: 5,
        paddingHorizontal: 10,
        
    }),
    inputTextArea: (fontSize) => ({
        fontSize: fontSize ? fontSize : 18,
        fontFamily: "regular",
        borderWidth: 1,
        borderRadius: 5,
        bordercolor: colors.border,
        paddingVertical: 5,
        paddingHorizontal: 10,
        textAlignVertical: 'top',
        height:100, 
        
    })
})