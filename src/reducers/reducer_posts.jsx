import _ from 'lodash';
import { FETCH_POSTS } from '../actions/index';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_POSTS:
			console.log("action.payload.data.data.children=");
			console.log(action.payload.data.data.children);
			return _.mapKeys(action.payload.data.data.children, 'id');
		default:
			return state;
	}
}
