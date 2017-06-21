import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchComments } from '../actions';

class CommentsList extends Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchComments(id);
	}

	renderOriginalPost() {
		if (this.props.thread.originalPost) {
			console.log('this.props.thread.originalPost');
			console.log(this.props.thread.originalPost);
			return (
				<h1>{this.props.thread.originalPost.title}</h1>
			)
		}
	}
	
	renderComments() {
		console.log('this.props.thread.originalPost=');
		console.log(this.props.thread.originalPost);
		console.log('this.props.thread.comments=');
		console.log(this.props.thread.comments);
		return (
			_.map(this.props.thread.comments, comment => {
				return (
					<li key={comment.data.id} className="list-group-item">
						{comment.data.body}
					</li>
				);
			})
		);
	}

	render() {
		return (
			<div>
			<div>{this.renderOriginalPost()}</div>
			<ol class="list-group">
				{this.renderComments()}
			</ol>
			</div>
		);
	}
}

function mapStateToProps(state) {
	console.log('state.thread=');
	console.log(state.thread);
	return {
		thread: state.thread
	};
}

export default connect(mapStateToProps, { fetchComments })(CommentsList);
