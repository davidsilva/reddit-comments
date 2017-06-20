import React, { Component } from 'react';
import { connect } from 'react-redux';

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
	return { post };
}

export default connect(mapStateToProps)(PostsList);
