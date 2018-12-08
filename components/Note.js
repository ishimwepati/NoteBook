import React from 'react'
import {
	Text, TouchableOpacity } from 'react-native'

export default ({note, movetoDetailscreen})=>(
		<TouchableOpacity
			onPress={movetoDetailscreen}
			style={{

				padding: 20,
				borderBottomWidth: 0.7,
				borderBottomColor: 'rgba(0,0,0,0.1)'
			}}>

		<Text style={{fontSize: 18}}>
		{note.length>=32?(note.slice(0,20)+'......'):note}
	{/*ternary Operator*/}
		</Text>
		</TouchableOpacity>
	)