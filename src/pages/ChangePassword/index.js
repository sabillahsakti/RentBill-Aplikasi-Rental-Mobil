import {StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import {colors, responsiveHeight} from '../../utils'
import {Inputan, Tombol} from '../../components'

export default class ChangePassword extends Component {

  render() {

    return (
      <View style={styles.pages}>
            <View>
                <Inputan label="Password Lama" secureTextEntry/>
                <Inputan label="Password Baru" secureTextEntry/>
                <Inputan label="Konfirmasi Password Baru" secureTextEntry/>
            </View>
            
            <View style={styles.submit}>
                <Tombol title="Submit" type="textIcon" icon="submit" padding={responsiveHeight(15)} fontSize={18}/>
            </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    pages:{
        flex:1,
        backgroundColor: colors.white,
        paddingHorizontal: 30,
        paddingTop: 10,
        justifyContent: 'space-between'
    },
    submit:{
        marginVertical: 30
    }
})