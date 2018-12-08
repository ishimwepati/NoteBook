import React, {Component} from 'react'
import 
{View, Text, TouchableOpacity, StyleSheet, TextInput, AsyncStorage} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class AddNote extends Component {
	constructor (props){
	 	super(props)
	 	this.state = {
	 			text: '',
	 	}
	 }
 
	static navigationOptions ={
       header: null,}

       SavedNote(){
    const {text}=this.state

    var notes= []

    AsyncStorage.getItem('@notes').then((list)=>{

    	if (list !== null){
    		notes = JSON.parse(list)
    		notes.unshift({text})

    		AsyncStorage.setItem('@notes', JSON.stringify(notes))
    		.then(()=>{
    			/*alert('Note Added')*/
    			this.props.navigation.goBack()
    		})
    	}

    	else{
    		notes.unshift({text})
    		AsyncStorage.setItem('@notes', JSON.stringify(notes))
    		.then(()=>{
    			alert ('Note Added')
    			this.props.natigation.goBack()
    		})
    	  }
		})
    }

	render(){
		return (
			<View style={styles.all}>
				<View style={styles.head}>
					<TouchableOpacity style={styles.header1}
					onPress={()=>this.props.navigation.goBack()}>
							<Text style={{fontSize: 20}}>
							Back
							</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.header2}
						onPress={()=>this.SavedNote()}
					>
							<Text style={{fontSize: 20}}>
							Save
							</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.body}>
					<TextInput style={{fontSize: 20}} 
					multiline={true}
					onChangeText = {(note)=>this.setState({text:note})}
					autoFocus
					//placeholder={'Start Typing Your Notes'}				'
					/>
					
				</View>
			</View>
			)
		}
	}
const styles = StyleSheet.create({
  
  all : {
  	flex: 1,
  },

  	head:{
  			flex: 1,
  			flexDirection: 'row',
  			elevation: 10,
		   },

			  header1: {
				   	flex: 1,
				    marginLeft: 5,
				    marginTop: 3,
				    
			  },
			  header2: {
			  		flex: 1,	
				    alignItems: 'flex-end',
				    marginRight: 5,
				    marginTop: 3,			    
		 				},   

   body: {
    flex: 10,
    marginTop: 1,
	fontSize: 24,
	margin: 10,
	
  },
 
});
		
