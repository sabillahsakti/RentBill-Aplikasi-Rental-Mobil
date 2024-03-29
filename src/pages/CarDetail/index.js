import { StyleSheet, View, Text, Alert } from 'react-native'
import React, { Component } from 'react'
import { colors, responsiveHeight, numberWithCommas, heightMobileUI, responsiveWidth, getData } from '../../utils'
import {CardMerk, CarSlider, Inputan, Pilihan, Tombol, Jarak} from '../../components'
import { RFValue } from 'react-native-responsive-fontsize'
import { connect } from 'react-redux'
import {getDetailMerk} from '../../actions/MerkAction'
import {masukKeranjang} from '../../actions/KeranjangAction'

class CarDetail extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      car: this.props.route.params.car,
      images: this.props.route.params.car.gambar,
      jumlah: '',
      durasi: '',
      keterangan: '',
      uid: ''
    }
  }

  componentDidMount(){
    const {car} = this.state
    this.props.dispatch(getDetailMerk(car.merk));
  }

  componentDidUpdate(prevProps){
    const { saveKeranjangResult } = this.props

    if(saveKeranjangResult && prevProps.saveKeranjangResult !== saveKeranjangResult){
        this.props.navigation.navigate("Keranjang")
    }
  }

  masukKeranjang = () => {
    const {jumlah, durasi, keterangan} = this.state

    getData('user').then((res) => {
      if(res) {
        //Simpan UID local storage ke state
        this.setState({
          uid: res.uid
        })

        //Validasi Form
        if(jumlah && keterangan && durasi){
          //Hubungkan ke action masuk keranjang
          this.props.dispatch(masukKeranjang(this.state))
        }else{
          Alert.alert("Error", "Jumlah, Ukuran, dan Keterangan Harus Diisi")
          
        }

      }else{
        Alert.alert("Error", "Silahkan Login Terlebih Dahulu")
        this.props.navigation.replace('Login')
      }
    })
  }
  render() {
    const {navigation, getDetailMerkResult, saveKeranjangLoading} = this.props
    const {car,images, jumlah, keterangan, durasi} = this.state
    return (
        <View style={styles.page}>
              <View style={styles.button}>
                  <Tombol icon="arrow-left" padding={7} onPress={()=> navigation.goBack()} />
              </View>
              <CarSlider images={images}/>
              <View style={styles.container}>
                  <View style={styles.merk}>
                      <CardMerk merk={getDetailMerkResult} navigation={navigation} id={car.merk}/>
                  </View>
                  <View style={styles.desc}>
                    <Text style={styles.nama}>{car.nama}</Text>
                    <Text style={styles.harga}>Harga: Rp. {numberWithCommas (car.harga)}</Text>
                    <View style={styles.garis}/>
                    <View style={styles.wrapperJenis}>
                        <Text style={styles.jenis}>Kondisi: {car.jenis}</Text>
                    </View>
                    <View style={styles.wrapperInput}>
                        <Inputan 
                          label="Jumlah" 
                          width={responsiveWidth(166)} 
                          height={responsiveHeight(43)}
                          fontSize={13}
                          value={jumlah}
                          onChangeText={(jumlah) => this.setState({jumlah})}
                          keyboardType="number-pad"
                        />
                        <Pilihan 
                          label="Durasi" 
                          width={responsiveWidth(166)} 
                          height={responsiveHeight(43)}
                          fontSize={13}
                          datas={car.durasi}
                          selectedValue={durasi}
                          onValueChange={(durasi) => this.setState({durasi})}
                        />
                    </View>
                      <Inputan label="Keterangan" textarea 
                          fontSize={13}
                          placeholder="isi jika Ingin Menambahkan Keterangan"
                          value={keterangan}
                          onChangeText={(keterangan) => this.setState({keterangan})}
                      />
                      <Jarak height={15}/>
                      <Tombol
                          title="Masuk Keranjang"
                          type="textIcon"
                          icon="keranjang-putih"
                          padding={responsiveHeight(17)}
                          fontSize={18}
                          onPress={() => this.masukKeranjang()}
                          loading={saveKeranjangLoading}
                      />
                    </View>
                      
              </View>
        </View>
    )
  }
}

const mapStateToProps = (state) => ({
  getDetailMerkResult: state.MerkReducer.getDetailMerkResult,

  saveKeranjangLoading: state.KeranjangReducer.saveKeranjangLoading,
  saveKeranjangResult: state.KeranjangReducer.saveKeranjangResult,
  saveKeranjangError: state.KeranjangReducer.saveKeranjangError,
})

export default connect(mapStateToProps, null)(CarDetail)

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.white,
    position: 'absolute',
    bottom:0,
    height: responsiveHeight(493),
    width : '100%',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40
  },
  page:{
    flex:1,
    backgroundColor: colors.primary
  },
  button:{
    position: 'absolute',
    marginTop: 40,
    marginLeft: 30,
    zIndex: 1
  },
  desc:{
    marginHorizontal: 30
  },
  nama:{
    fontSize: RFValue(24, heightMobileUI),
    fontFamily: "bold",
    textTransform: 'capitalize'
  },
  harga:{
    fontSize: RFValue(24, heightMobileUI),
    fontFamily: "light",
  },
  merk:{
    alignItems: 'flex-end',
    marginRight: 30,
    marginTop: -30
  },
  garis:{
    borderWidth: 0.4,
    marginVertical: 5,
    
  },
  wrapperJenis:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  jenis:{
    fontSize: 13,
    fontFamily: "regular",
    marginRight: 30
  },
  wrapperInput:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})