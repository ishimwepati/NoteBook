import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AsyncStorage} from 'react-native';
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'


 export default class Home_Screen extends Component {
	 constructor (props){
	 	super(props)

    this.state ={
      notes:[]
    }

    this.props.navigation.addListener('didFocus', payload=>{

    AsyncStorage.getItem('@notes').then ((list)=>
        {
          if (list !== null){
            var notes =JSON.parse(list)
            this.setState({notes})
          }
          else {
            //alert('no notes !')
            //this.setState({refreshing:false})
          }
        })
     })
  }

    

  static navigationOptions ={
       header: null,
  }
  
  render() {
    return (
      <View style={styles.container}>
 		<Header/>
 		<Body data={this.state.notes}
      navigat={this.props.navigation}
    />
 		<Footer 
 			moveToAddNote={()=>this.props.navigation.navigate('AddNote')}
 		/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
 
});