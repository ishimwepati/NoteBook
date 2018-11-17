import React from 'react'
import { 
	View, 
	Text,
	StyleSheet,
	ScrollView,
} from 'react-native'

export default Body = ()=>(
	<View style={styles.body}>
			<ScrollView style={styles.bodyScroll}>
			<Text>My Books </Text>
			</ScrollView>
	</View>

	)

const styles = StyleSheet.create({

	body: {
		flex: 7,
		justifyContent: 'center',
		alignItems: 'center',
		
	},
	bodyScroll: {
		flex: 1,
		
	},
})
