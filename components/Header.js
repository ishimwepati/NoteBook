import React from 'react'
import { 
	View, 
	Text,
	StyleSheet

} from 'react-native'

export default Header = ()=>(
	<View style={styles.header}>
		<Text style={styles.txt}>My NoteBook</Text>
	</View>

	)

const styles = StyleSheet.create({

	header: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0,0,0,0.1)',
		elevation: 10,
	},
	txt: {
		flex: 1,
		marginTop: 10,
		fontSize: 24,
		
	},
})
