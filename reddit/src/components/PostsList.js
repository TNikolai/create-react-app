import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchPosts, { thumbnailDefault } from '../actions/FetchPosts';
import Pagination from './Pagination';

class PostsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      paginationCount: 25
    }
  }

  componentWillMount() {
    this.props.fetchPosts(this.props.location.pathname);
  }

  renderPosts() {

    if (!this.props.posts.data) {
      return (
        <h5>____Loading...</h5>
      );
    }

    const posts = this.props.posts.data.children
    return posts.map((post) => {
      const thumbnail = this.isUrl(post.data.thumbnail) ? post.data.thumbnail : thumbnailDefault;
      return (
        <li className="list-group-item" key={post.data.id}>
          <img src={thumbnail} width="70" height="52" alt="" />
          <a onClick={(event) => this.didSelectLink(event, post)}>
            <strong  > {post.data.title} </strong>
          </a>
        </li>
      );
    })
  }

  didSelectLink(e, post) {
    window.open(post.data.url, "_self")
  }

  onClickPagination(pathComponent) {
    if (!pathComponent) return;
    var count = this.state.paginationCount;
    count = (pathComponent && pathComponent.includes('before')) ? (count - 25) : (count + 25);
    this.props.fetchPosts(this.props.location.pathname, pathComponent, count);
    this.setState((prevState, props) => {
      return { paginationCount: count }
    });
  }

  render() {
    const data = this.props.posts.data || {}
    const title = this.props.location.pathname;
    return (
      <div >
        <h1>  Posts for - {title}</h1>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
        <Pagination after={data.after}
          before={data.before}
          onClickPagination={this.onClickPagination.bind(this)} >
        </Pagination>
      </div>
    );
  }

  isUrl(s) {
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(s);
  }

}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(PostsList);