import { Text, StyleSheet, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { Component } from 'react'
import { colors, responsiveHeight, responsiveWidth } from '../../utils'
import {IlustrasiRegister1} from '../../assets'
import {Inputan, Jarak, Tombol} from '../../components'
import { ScrollView } from 'react-native-gesture-handler'

export default class Register1 extends Component {
  render() {
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.page}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.btnBack}>
                        <Tombol icon="arrow-left" onPress={()=> this.props.navigation.goBack()}/>
                    </View>
                    <View style={styles.ilustrasi}>
                        <IlustrasiRegister1/>
                        <Jarak height={10}/>
                        <Text style={styles.title}>Daftar</Text>
                        <Text style={styles.title}>Isi Data Diri Anda</Text>

                        <View style={styles.wrapperCircle}>
                            <View style={styles.circlePrimary}></View>
                            <Jarak width={10}/>
                            <View style={styles.circleDisabled}></View>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <Inputan label="Nama"/>
                        <Inputan label="Email"/>
                        <Inputan label="No. Handphone" keyboardType="number-pad"/>
                        <Inputan label= "Password" secureTextEntry/>
                        <Jarak height={30}/>
                        <Tombol title="Continue" type="textIcon" icon="submit" padding={10} fontSize={18} onPress={()=> this.props.navigation.navigate('Register2')}/>
                    </View>
            </ScrollView>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        
    )
  }
}

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor: colors.white
    },
    ilustrasi:{
        alignItems: 'center',
        marginTop: responsiveHeight(50)
    },
    title:{
        fontSize: 24,
        fontFamily: "light",
        color: colors.primary
    },
    wrapperCircle:{
        flexDirection: 'row',
        marginTop: 10
    },
    circlePrimary:{
        backgroundColor: colors.primary,
        width: responsiveWidth(11),
        height: responsiveWidth(11),
        borderRadius: 10
    },
    circleDisabled:{
        backgroundColor: colors.border,
        width: responsiveWidth(11),
        height: responsiveWidth(11),
        borderRadius: 10
    },
    card:{
        marginHorizontal: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: colors.white,
        paddingHorizontal: 30,
        paddingBottom: 20,
        paddingTop: 10,
        borderRadius: 10,
        marginTop: 10
    },
    btnBack:{
        marginLeft: 30,
        marginTop: responsiveHeight(40),
        position: 'absolute',
        zIndex: 1
    }
})