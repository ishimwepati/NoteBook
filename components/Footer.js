import React from 'react'
import { 
	View, 
	Text,
	StyleSheet,
	TouchableOpacity,

} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default Footer = (props)=>(
	<View style={styles.footer}>

			<TouchableOpacity style={styles.new1}
				onPress={props.moveToAddNote}
			>
			<Icon name="file" size={30}/> 
			</TouchableOpacity>
	</View>

	)

const styles = StyleSheet.create({

	footer: {
		flex: 0.9,
		borderTopWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderTopWidth: 1,
		borderTopColor: 'rgba(0,0,0,0.1)',

	},
	new1: {
		marginTop: 3,
	},
	
})
