import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchPosts, { thumbnailDefault } from '../actions/FetchPosts';

class PostsList extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    if (!this.props.posts.data) {
      return (
        <h5>Loading...</h5>
      );
    }

    const posts = this.props.posts.data.children
    return posts.map((post) => {
      const thumbnail = this.isUrl(post.data.thumbnail) ? post.data.thumbnail : thumbnailDefault;
                            
      return (
        <li className="list-group-item" key={post.data.id}>
          <img src={thumbnail} width="70" height="52" alt="" />
          <Link onClick={(event) => this.didSelectLink(event, post)}  to={"posts/" + post.data.id}>
             <strong  > {post.data.title} </strong>
          </Link>
        </li>
      );
    })
  }

  didSelectLink(e, post) {
    window.open(post.data.url,"_self")
  }

  render() {
    return (
      <div > 
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }

isUrl(s) {
   var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
   return regexp.test(s);
}

}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(PostsList);