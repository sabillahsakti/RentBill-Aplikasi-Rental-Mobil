import {StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import {dummyPesanans} from '../../data'
import {colors, getData} from '../../utils'
import {ListHistory} from '../../components'
import { connect } from 'react-redux'
import {getListHistory} from '../../actions/HistoryActions'

class History extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         pesanans: dummyPesanans
      }
    }

    componentDidMount(){
      getData('user').then(res => {
        const data = res
  
        if(!data){
          this.props.navigation.replace('Login')
        }else{
          
          this.props.dispatch(getListHistory(data.uid))
        }
      })
    }
  render() {
    const {pesanans} = this.state
    return (
      <View style={styles.pages}>
        <ListHistory pesanans={pesanans} navigation={this.props.navigation}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    pages:{
        backgroundColor: colors.white,
        flex: 1
    }
})

export default connect()(History)