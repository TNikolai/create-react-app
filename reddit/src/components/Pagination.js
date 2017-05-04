
import React from 'react';
import '../styles/index.css';

const Pagination = (props) => {
    var prev = props.before && <button onClick={event => props.onClickPagination('before=' + props.before)} > previos </button>;
    var next = props.after && <button onClick={event => props.onClickPagination('after=' + props.after)} > next </button>;

    return (
        <div className="pagination">
            {prev}
            {next}            
        </div>
    );
}    

export default Pagination;