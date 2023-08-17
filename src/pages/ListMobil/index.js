import { ScrollView,Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { HeaderComponent, ListMerk, ListCar } from '../../components'
import { colors } from '../../utils'
import {Jarak} from '../../components'
import { connect } from 'react-redux'
import { getListCar } from '../../actions/CarAction'
import { getListMerk } from '../../actions/MerkAction'


class ListMobil extends Component {
  
  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      const {idMerk, keyword} = this.props
      this.props.dispatch(getListMerk())
      this.props.dispatch(getListCar(idMerk, keyword))
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  componentDidUpdate(prevProps){
    const { idMerk, keyword } = this.props

    if(idMerk && prevProps.idMerk !== idMerk){
      this.props.dispatch(getListCar(idMerk, keyword))
    }
    if(keyword && prevProps.keyword !== keyword){
      this.props.dispatch(getListCar(idMerk, keyword))
    }
} 

  render() {
    const {navigation, namaMerk, keyword} = this.props
    
    return (
        <View style={styles.page}>
          <HeaderComponent navigation={navigation} page="ListMobil"/>
          <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={styles.pilihmerk}>
              <ListMerk navigation={navigation}/>
            </View>
            <View style={styles.pilihcar}>
              {keyword ? (
                <Text style={styles.label}>
                  Cari : <Text style={styles.boldLabel}>{keyword} </Text> 
              </Text>
              ) : (
                <Text style={styles.label}>
                  Pilih <Text style={styles.boldLabel}>Mobil </Text>
                  {namaMerk ? namaMerk : "Yang Anda Inginkan"}
                </Text>
              )}
              <ListCar navigation={navigation}/>
            </View>
            <Jarak height={110}/>
          </ScrollView>
          
        </View>
    )
  }
}

const mapStateToProps = (state) => ({
  idMerk: state.CarReducer.idMerk,
  namaMerk: state.CarReducer.namaMerk,
  keyword: state.CarReducer.keyword
})

export default connect(mapStateToProps, null)(ListMobil)
const styles = StyleSheet.create({
  page:{ flex: 1, backgroundColor: colors.white},
  container:{
    marginTop : -30
  },
  pilihmerk:{
    marginHorizontal:30,
  },
  pilihcar:{
    marginHorizontal:30,
    marginTop: 10,
  },
  label:{
    fontSize: 18,
    fontFamily : "regular"
  },
  boldLabel:{
    fontSize: 18,
    fontFamily : "bold"
  }
})