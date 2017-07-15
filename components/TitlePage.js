import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

export default class TitlePage extends Component {
	render() {
		console.log('image init');
		return (
			<Image style={ styles.image } source={require('../assets/images/game-controller-icon.jpg')} />
		);
	}
};

const styles = StyleSheet.create({
  image : {
	justifyContent: 'center',
    resizeMode: 'cover',
    flex: 1,
    width: null,
    height: null
  }
});

