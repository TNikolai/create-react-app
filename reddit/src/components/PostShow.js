
import React, { Component } from 'react';
import { connect } from 'react-redux';
import showPost, { thumbnailDefault } from '../actions/FetchPosts';

class PostShow extends Component {
  componentWillMount() {
     this.props.showPost(this.props.params.id);
     console.log(this.props.params.id);
  }

  render() {
    const post = this.props.post;
    console.log(post);

    return (
      <div > 
          Hello
      </div>
    );
  }

}

function mapStateToProps(state) {
  return { post: state.post };
}

export default connect(mapStateToProps, { showPost })(PostShow);