import React, {Component} from 'react'
import { 
	View, 
	Text,
	TextInput,
	StyleSheet,
	ScrollView,
	AsyncStorage,
	FlatList,

} from 'react-native'
import Note from './Note'

export default class Body extends Component{

	state={
		notes: null,
		refreshing: false
}
	/*componentDidMount(){
			this.refresh ()
	}*/

	refresh (){
		this.setState({refreshing: true})
		AsyncStorage.getItem('@notes').then ((list)=>
		{
			if (list !== null){
				var notes =JSON.parse(list)
				this.setState({notes, refreshing:false})
			}
			else {
				alert('no notes !')
				this.setState({refreshing:false})
			}
		})
	}

	render(){
		const{notes, refreshing} = this.state

		return (
	<View style={styles.body}>
			{/*<ScrollView style={styles.bodyScroll}>
				{notes.map((note, i)=>
					<Note
						note={note.text}
						key={i}
						/>
					)}
			</ScrollView>
		*/}
	{/* flatlist is Good when creating a list of things*/}
		<FlatList
				data={notes ? notes: this.props.data}
				keyExtractor={(item, index)=> JSON.stringify (index)}
				renderItem={({item})=> 
					<Note note={item.text} 
						movetoDetailscreen={
							()=>this.props.navigat.navigate('Details', item)}/>
					}
				refreshing={refreshing}
				onRefresh = {()=>this.refresh()}
			/>
	</View>
		)
	}
}

const styles = StyleSheet.create({

	body: {
		flex: 7,
		margin: 20,
		
	},
	bodyScroll: {
		flex: 1,
		
	},
})
