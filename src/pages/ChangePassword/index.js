import {StyleSheet, View, Image, Alert } from 'react-native'
import React, { Component } from 'react'
import {colors, getData, responsiveHeight} from '../../utils'
import {Inputan, Tombol} from '../../components'
import { connect } from 'react-redux'
import {changePassword} from '../../actions/ProfileAction'

class ChangePassword extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       password: '',
       newPassword: '',
       newPasswordComfirmation: ''
    }

  }

  onSubmit = () => {
    const {password, newPassword, newPasswordComfirmation} = this.state;

    if(newPassword !== newPasswordComfirmation){
      Alert.alert('Error', "Password Tidak Sama")
    }else if(password && newPassword && newPasswordComfirmation){
      //Ambil data email dari local storage
      getData('user').then((res) => {
        const parameter = {
          email: res.email,
          password : password,
          newPassword: newPassword
        }

        this.props.dispatch(changePassword(parameter))
      })
    }else{
      Alert.alert('Error', "Isi semua data")
    }
  }

  componentDidUpdate(prevProps){
    const { changePasswordResult } = this.props

    if(changePasswordResult && prevProps.changePasswordResult !== changePasswordResult){
        Alert.alert("Sukses", "Berhasil Ganti Password")
        this.props.navigation.replace("MainApp")
    }
  }

  render() {
    const {password, newPassword, newPasswordComfirmation} = this.state

    const {changePasswordLoading} = this.props
    return (
      <View style={styles.pages}>
            <View>
                <Inputan 
                  label="Password Lama" 
                  secureTextEntry 
                  value={password}
                  onChangeText={(password) => this.setState({password})}
                />
                <Inputan 
                  label="Password Baru" 
                  secureTextEntry 
                  value={newPassword}
                  onChangeText={(newPassword) => this.setState({newPassword})}
                />
                <Inputan 
                  label="Konfirmasi Password Baru" 
                  secureTextEntry 
                  value={newPasswordComfirmation}
                  onChangeText={(newPasswordComfirmation) => this.setState({newPasswordComfirmation})}
                />
            </View>
            
            <View style={styles.submit}>
                <Tombol 
                  title="Submit" 
                  type="textIcon" 
                  icon="submit" 
                  padding={responsiveHeight(15)} 
                  fontSize={18}
                  onPress={()=> this.onSubmit()}
                  loading={changePasswordLoading}
                />
            </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  changePasswordLoading: state.ProfileReducer.changePasswordLoading,
  changePasswordResult: state.ProfileReducer.changePasswordResult,
  changePasswordError: state.ProfileReducer.changePasswordError,
})
export default connect(mapStateToProps, null)(ChangePassword)

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