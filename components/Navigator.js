import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator
} from 'react-native';

import AddGameButton from './AddGameButton'
import UserList from './UserList';
import TitlePage from './TitlePage';

export default React.createClass({

	displayName: 'Navigator',

	propTypes: {

	},

	render: function () {
		const routes = [
			{title: 'TitlePage', index: 0},
			{title: 'UserList', index: 1},
			{title: 'AddGame', index: 2}
		];

		return (
			 <Navigator
				initialRoute={routes[0]}
				initialRouteStack={routes}
				renderScene={this.renderScene.bind(this)}
				configureScene={(route) => {
					if (route.sceneConfig) {
						return route.sceneConfig;
					}
					return Navigator.SceneConfigs.FloatFromBottom;
				}}
				navigationBar={
					<Navigator.NavigationBar
						routeMapper={{
							LeftButton: (route, navigator, index, navState) => {
								var routeTitle = route.title;

								if (routeTitle === 'UserList') {
									return null;
								} else {
									return (
										<TouchableHighlight onPress={() => navigator.pop()}>
											<Text>Back</Text>
										</TouchableHighlight>
								  );
								}
							},
							RightButton: (route, navigator, index, navState) => {
								var routeTitle = route.title;

								if (routeTitle === 'AddGame') {
									return null;
								} else {
									return (
										<TouchableHighlight onPress={() => navigator.push(routes[2])}>
											<Text>Add Game</Text>
										</TouchableHighlight>
									);
								}
							},
							Title: (route, navigator, index, navState) =>
								{ return (<Text>{route.title}</Text>); },
							}
					}
						style={{alignItems:'center'}}
					/>
				}
			/>
		);
	},

	renderScene ( route, navigator ) {
		var routeTitle = route.title;

		if (routeTitle === 'UserList') {
			return (
				<UserList
					navigator={navigator}/>
			);
		}
		if (routeTitle === 'AddGame') {
			return (
				<AddGameButton
					navigator={navigator}/>
			);
		}
		if (routeTitle === 'TitlePage') {
			return (
				<TitlePage
					navigator={navigator}/>
			);
		}
	}
});
