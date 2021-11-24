import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../../../actions/post_actions';
import { fetchComments } from '../../../actions/comment_actions';
import { openModal } from '../../../actions/modal_actions';
import { createComment } from '../../../actions/comment_actions';
import Post from './post_item';

const mSTP = state => ({
  sessionId: state.session.id,
  currentUser: state.entities.users[state.session.id],
  comments: Object.values(state.entities.comments)
});

const mDTP = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchComments: postId => dispatch(fetchComments(postId)),
  openEditPostModal: post => dispatch(openModal("editPost", post)),
  deletePost: post => dispatch(deletePost(post)),
  createComment: comment => dispatch(createComment(comment))
});

export default connect(mSTP, mDTP)(Post);