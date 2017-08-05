import React, { Component } from 'react';
import SortableList from 'react-native-sortable-list';
import {
	Animated,
	Easing,
	AppRegistry,
	StyleSheet,
	Text,
	Image,
	View,
	Dimensions,
	Platform,
} from 'react-native';

import RowComponent from './RowComponent';

const data = {
	0: {
		image: 'https://placekitten.com/200/240',
		text: 'Chloe',
	},
	1: {
		image: 'https://placekitten.com/200/201',
		text: 'Jasper',
	},
	2: {
		image: 'https://placekitten.com/200/202',
		text: 'Pepper',
	},
	3: {
		image: 'https://placekitten.com/200/203',
		text: 'Oscar',
	},
	4: {
		image: 'https://placekitten.com/200/204',
		text: 'Dusty',
	},
	5: {
		image: 'https://placekitten.com/200/205',
		text: 'Spooky',
	},
	6: {
		image: 'https://placekitten.com/200/210',
		text: 'Kiki',
	},
	7: {
		image: 'https://placekitten.com/200/215',
		text: 'Smokey',
	},
	8: {
		image: 'https://placekitten.com/200/220',
		text: 'Gizmo',
	},
	9: {
		image: 'https://placekitten.com/220/239',
		text: 'Kitty',
	},
};


export default class UserList extends Component {
	render() {
		return (
			<SortableList
				style={ styles.list }
				contentContainerStyle={ styles.contentContainer }
				data={ data }
				renderRow={ this.renderRow } />
		);
	}

	getList() {
		// TODO: Create class that abstracts the DB/ single point of access
        return AsyncStorage.getAllKeys().then(ks => {
            return Parse.Promise.when(ks.map(k => AsyncStorage.getItem(k)));
        });
	}
	
	renderRow({data, active}) {
		return <RowComponent data={data} active={active} />
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#eee',
		
		...Platform.select({
			ios: {
				paddingTop: 20,
			},
		}),
	},
	
	
	contentContainer: {
		width: window.width,
		
		...Platform.select({
			ios: {
				paddingHorizontal: 30,
			},
			
			android: {
				paddingHorizontal: 0,
			}
		})
	},
	
	title: {
		fontSize: 20,
		paddingVertical: 20,
		color: '#999999',
	},
});
