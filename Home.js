import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Header} from 'react-native-elements'
import {Icon} from 'native-base'

export default class Home extends Component {
  render() {
    return (
      <View>
           <Header
        leftComponent={ <Icon 
            style={{color:'#fff',marginTop:0}}
            name='menu'
            onPress={()=>{
              this.props.navigation.openDrawer();
            }}
            />}
        centerComponent={{ text: 'Project TITLE', style: { color: '#fff' } }}
        rightComponent={<Icon 
            style={{color:'#fff',marginTop:0}}
            name='list'
            onPress={()=>{
                this.props.navigation.navigate('เพิ่ม');
            }}
            />}
        />
        <Text> textInComponent Home </Text>


        
      </View>
    )
  }
}