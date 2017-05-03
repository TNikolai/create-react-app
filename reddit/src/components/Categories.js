import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories, thumbnailDefault } from '../actions/FetchPosts';
import Pagination from './Pagination';


class CategoryList extends Component {
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
      const thumbnail = this.isUrl(category.data.thumbnail) ? category.data.thumbnail : thumbnailDefault;              
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
      this.props.fetchCategories(pathComponent);
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

isUrl(s) {
   var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
   return regexp.test(s);
}

}

function mapStateToProps(state) {
  return { categories: state.posts.categories };
}


export default connect(mapStateToProps, { fetchCategories })(CategoryList);