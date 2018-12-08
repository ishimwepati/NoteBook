import React from 'react'
import {View, Text} from 'react-native'

export default ({navigation})=>{
	let note = navigation.getParam('text', '')
	return(
		<View style ={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
		<Text style={{fontSize: 20}}>
		{note}
		</Text>

	</View>
	)
}