import ReactNative from 'react-native';
const { NavigationExperimental } = ReactNative;
const { Reducer: NavigationReducer } = NavigationExperimental;

const feedNavigation = NavigationReducer.StackReducer({
	getPushedReducerForAction: (action) => {
		if (action.type === 'push') {
			return (state) => (state || action.route);
		}
		return null;
	},
	initialState: {
		key: 'feed',
		index: 0,
		children: [
			{
				key: 'list',
				title: 'Items'
			},
		],
	},
});

module.exports = (state, action) => {
	if (action.scope && action.scope !== 'feed') {
		return state;
	} else {
		return feedNavigation(state, action);
	}
};
