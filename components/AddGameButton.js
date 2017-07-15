import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	TextInput,
	AsyncStorage
} from 'react-native';

let i = 0;

export default class AddGameButton extends Component {
	
	constructor(props) {
		super(props);
		this.state = {text: 'Useless Placeholder'};
	}
	
	render() {
		return (
			<View style={ styles.box }>
				<TextInput
					style={ { height: 40, borderColor: 'gray', borderWidth: 1 } }
					onChangeText={ (text) => this.setState({ text }) }
					defaultValue={ this.state.text }
					onSubmitEditing={ (text) => this.addToList(text) }
				/>
				 <Text>
					 <div>
						{ AsyncStorage.getItem('game ') }
					</div>
				</Text> 
			</View>
		);
	}
	
	addToList(text) {
		AsyncStorage.setItem('game ', text);
	}
}

AddGameButton.propTypes = {
	text: React.PropTypes.string
};

const styles = StyleSheet.create({
	box : {
		padding: 25,
		backgroundColor: "#F8F8F8",
		borderBottomWidth:1,
		borderColor: '#eee'
	}
});

