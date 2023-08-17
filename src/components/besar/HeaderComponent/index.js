import { StyleSheet, View, TextInput } from 'react-native';
import React, { Component } from 'react';
import { colors, getData, responsiveHeight } from '../../../utils';
import {IconCari,IconKeranjang} from '../../../assets';
import {Jarak, Tombol} from '../../kecil';
import { connect } from 'react-redux';
import { saveKeywordCar } from '../../../actions/CarAction';
import { getListKeranjang } from '../../../actions/KeranjangAction';

class HeaderComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       search: ''
    }
  }

  componentDidMount(){
    getData('user').then((res) =>{

      if(res){
        //Sudah Login
        this.props.dispatch(getListKeranjang(res.uid))
      }
    })
  }

  selesaiCari = () => {
    const {page, navigation, dispatch} = this.props
    const {search} = this.state

    //Jalankan action saveKeyword
    dispatch(saveKeywordCar(search))

    //Jika halaman Home akan diarahkan ke List Mobil
    if(page !== "ListMobil"){
      navigation.navigate("ListMobil")
    }

    //Kembalikan "search" ke string kosong
    this.setState({
      search: ''
    })
  }
  render() {
    const {search} = this.state
    const {navigation, getListKeranjangResult} = this.props

    let totalKeranjang;

    if(getListKeranjangResult){
      totalKeranjang = Object.keys(getListKeranjangResult.pesanans).length
    }

    return (
      <View style={styles.container}>
        <View style={styles.wrapperHeader}>

          {/* Input Search */}
          <View style={styles.searchSection}>
            <IconCari/>
            <TextInput 
              placeholder='Cari Mobil. . .' 
              style={styles.input} 
              value={search} 
              onChangeText={(search) => this.setState({search})}
              onSubmitEditing={() => this.selesaiCari()}
            />
          </View>
          <Jarak width={10}/>
          <Tombol 
            icon="keranjang"  
            padding={10} 
            onPress={() => navigation.navigate('Keranjang')}
            totalKeranjang={totalKeranjang}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  getListKeranjangResult: state.KeranjangReducer.getListKeranjangResult,
})

export default connect(mapStateToProps, null)(HeaderComponent)
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: responsiveHeight(125)

  },
  wrapperHeader:{
    marginTop:50,
    marginHorizontal:30,
    flexDirection: 'row'
  },
  searchSection:{
    backgroundColor: colors.white,
    borderRadius:5,
    paddingLeft:10,
    flex:1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input:{
    fontSize:18,
    height:45,
    fontFamily: "regular"
  },
  
})