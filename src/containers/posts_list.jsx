import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsList extends Component {
	renderPost(postData) {
		const title = postData;

		return (
			<li>title</li>
		);
	}

	render() {
		return (
			<ol>
				{this.props.post.map(this.renderPost)}
			</ol>
		);
	}
}

function mapStateToProps({ post }) {
	console.log(post);
	return { post };
}

export default connect(mapStateToProps, { fetchPosts })(PostsList);
