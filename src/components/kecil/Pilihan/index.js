import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {Picker} from '@react-native-picker/picker';
import { responsiveHeight } from '../../../utils';

const Pilihan = ({label, datas, width, height, fontSize, selectedValue, onValueChange}) => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.label(fontSize)}>{label} :</Text>
      <View style={styles.wrapperPicker}>
      <Picker
        selectedValue={selectedValue}
        itemStyle={styles.picker(width, height, fontSize)}
        onValueChange={onValueChange}
        >
        <Picker.Item label="-- Pilih --" value=""/>
        {datas.map((item, index)=>{
          if(label == "Provinsi"){
            return <Picker.Item label={item.province} value={item.province_id} key={item.province_id} /> 
          }else if(label== "Kota/Kab"){
            return <Picker.Item label={item.type+" "+item.city_name} value={item.city_id} key={index.city_id} />
          }else if(label == "Diantar atau tidak?"){
            return <Picker.Item label={item} value={item} key={index} />
          }else{
            return <Picker.Item label={item} value={item} key={index} />
          }
        })}
      </Picker>
      </View>
    </View>
  )
}

export default Pilihan

const styles = StyleSheet.create({
    container:{
      marginTop:10,
  },

  label: (fontSize) => ({
      fontSize: fontSize ? fontSize : 18,
      fontFamily: "regular"
  }),
  picker: (width, height, fontSize) => ({
    fontSize: fontSize ? fontSize : 18,
    fontFamily: "regular",
    width: width,
    height: height ? height : responsiveHeight(46),
    color: 'black'
  }),
  wrapperPicker:{
    borderWidth: 1,
    borderRadius: 5,
  }
})