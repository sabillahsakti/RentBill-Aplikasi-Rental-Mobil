import { Text, StyleSheet, View, Image, Alert } from 'react-native'
import React, { Component } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import {colors, responsiveHeight, responsiveWidth, getData} from '../../utils'
import {Inputan, Pilihan, Tombol} from '../../components'
import { connect } from 'react-redux'
import {getProvinsiList, getKotaList} from '../../actions/RajaOngkirAction'
import { DefaultImage } from '../../assets'
import {launchImageLibrary} from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
import {updateProfile} from '../../actions/ProfileAction'


class EditProfile extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        uid: '',
        nama: '',
        email: '',
        nohp: '',
        alamat: '',
        provinsi: false,
        kota: false,
        avatar: false,
        avatarForDB: '',
        avatarLama : '',
        updateAvatar: false,
        namaLama: '',
        emailLama: '',
        nohpLama: '',
        alamatLama: '',
        provinsiLama: false,
        kotaLama: false,
      }
    }

    componentDidMount(){
        this.getUserData();
        this.props.dispatch(getProvinsiList())
    }

    componentDidUpdate(prevProps){
        const { updateProfileResult } = this.props

        if(updateProfileResult && prevProps.updateProfileResult !== updateProfileResult){
            Alert.alert("Sukses", "Update Profile Sukses")
            this.props.navigation.replace("MainApp")
        }
    }
    getUserData = () => {
        getData('user').then(res => {
          const data = res
          this.setState({
            uid: data.uid,
            nama: data.nama,
            email: data.email,
            nohp: data.nohp,
            alamat: data.alamat,
            kota: data.kota,
            provinsi: data.provinsi,
            avatar: data.avatar,
            avatarLama: data.avatar,
            namaLama: data.nama,
            emailLama: data.email,
            nohpLama: data.nohp,
            alamatLama: data.alamat,
            kotaLama: data.kota,
            provinsiLama: data.provinsi,
          })

          this.props.dispatch(getKotaList(data.provinsi))
        })
    }

    ubahProvinsi = (provinsi) => {
        this.setState({
            provinsi: provinsi
        })

        this.props.dispatch(getKotaList(provinsi))
    }
    

    getImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
            base64: true,
            width: 500,
            height: 500,
            
          });
      
          if (!result.canceled) {
            const source = result.assets[0].uri
            const fileString = 'data:image/jpg;base64,' + result.assets[0].base64

            this.setState({
                avatar: source,
                avatarForDB: fileString,
                updateAvatar: true
            })
            
          } else {
            alert('You did not select any image.');

          }
    }

    onSubmit = () => {
        const {nama, email, alamat, nohp, provinsi, kota, avatar, avatarForDB} = this.state
        if(nama || nohp || alamat || provinsi || kota){
            //dispatch update
            this.props.dispatch(updateProfile(this.state))
        }else{
            Alert.alert("Error", "Salah satu data tidak diisi")
        }
    }

  render() {

    
    const {nama, email, alamat, nohp, provinsi, kota, avatar, avatarForDB} = this.state

    const {getKotaResult, getProvinsiResult, updateProfileLoading} = this.props

    return (
      <View style={styles.pages}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Inputan 
                label="Nama" 
                value={nama} 
                onChangeText={(nama)=> this.setState({nama})}
            />
            <Inputan 
                label="Email" 
                value={email} disabled
            />
            <Inputan 
                label="No Handphone" 
                value={nohp} 
                onChangeText={(nohp)=> this.setState({nohp})}
                keyboardType="number-pad"
            />
            <Inputan 
                label="Alamat" 
                value={alamat} 
                onChangeText={(alamat)=> this.setState({alamat})} 
                textarea
            />

            <Pilihan 
                label="Provinsi" 
                datas={getProvinsiResult ? getProvinsiResult : []} 
                selectedValue={provinsi}
                onValueChange={(provinsi) => this.ubahProvinsi(provinsi)}
            />
            <Pilihan label="Kota/Kab" 
                datas={getKotaResult ? getKotaResult : []} 
                selectedValue={kota}
                onValueChange={(kota)=> this.setState({ kota: kota})}
            />

            <View style={styles.inputFoto}>
                <Text style={styles.label}>Foto Profile :</Text>

                <View style={styles.wrapperUpload}>
                    <Image source={avatar ? {uri:avatar} : DefaultImage} style={styles.foto}/>
                    <View style={styles.tombolChangePhoto}>
                        <Tombol 
                            title="Change Photo" 
                            type="text" 
                            padding={7}
                            onPress={()=> this.getImage()}
                        />
                    </View>
                </View>
            </View>
            
            <View style={styles.submit}>
                <Tombol
                    loading={updateProfileLoading}
                    title="Submit" 
                    type="textIcon" 
                    icon="submit" 
                    padding={responsiveHeight(15)} 
                    fontSize={18}
                    onPress={()=> this.onSubmit()}
                />
            </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps= (state) => ({
    getProvinsiResult : state.RajaOngkirReducer.getProvinsiResult,
    getKotaResult : state.RajaOngkirReducer.getKotaResult,
    
    updateProfileLoading: state.ProfileReducer.updateProfileLoading,
    updateProfileResult: state.ProfileReducer.updateProfileResult,
    updateProfileError: state.ProfileReducer.updateProfileError,

})

export default connect(mapStateToProps, null)(EditProfile)

const styles = StyleSheet.create({
    pages:{
        flex:1,
        backgroundColor: colors.white,
        paddingHorizontal: 30,
        paddingTop: 10
    },
    inputFoto:{
        marginTop: 20
    },
    label:{
        fontSize: 18,
        fontFamily: "regular"
    },
    foto:{
        width: responsiveWidth(150),
        height: responsiveWidth(150),
        borderRadius: 40,
    },
    wrapperUpload:{
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center'
    },
    tombolChangePhoto:{
        marginLeft: 20,
        flex: 1,
        
    },
    submit:{
        marginVertical: 30
    }
})