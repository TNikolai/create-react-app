import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories, thumbnailDefault } from '../actions/FetchPosts';
import Pagination from './Pagination';


class CategoryList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      paginationCount: 25
    }
  }

  componentWillMount() {
      this.props.fetchCategories();
  }

  renderCategories() {
    if (!this.props.categories.data) {
      return (
        <h5>____Loading...</h5>
      );
    }
    const categories = this.props.categories.data.children

    return categories.map((category) => {
      const thumbnail = thumbnailDefault;              
      return (
        <li className="list-group-item" key={category.data.id}>
          <img src={thumbnail} width="70" height="52" alt="" />
          <Link to={category.data.url}>
             <strong  > {category.data.title} </strong>
          </Link>
        </li>
      );
    })
  }

    onClickPagination(pathComponent) {
      if (!pathComponent) return;
      var count = this.state.paginationCount;
      count = (pathComponent && pathComponent.includes('before')) ? (count - 25) : (count + 25);
      this.props.fetchCategories(pathComponent, count);
      this.setState((prevState, props) => {
        return { paginationCount: count }
      });
  }

  render() {
    const data = this.props.categories.data || {};
    return (
      <div > 
        <h2>Categories: </h2>
        <ul className="list-group">
          {this.renderCategories()}
        </ul>
        <Pagination after={data.after}
                    before={data.before}
                    onClickPagination={this.onClickPagination.bind(this)} >
        </Pagination>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return { categories: state.posts.categories };
}


export default connect(mapStateToProps, { fetchCategories })(CategoryList);