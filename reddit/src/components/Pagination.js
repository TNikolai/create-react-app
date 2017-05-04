
import React from 'react';
import styles from '../styles/index.css';

const Pagination = (props) => {

        var prev = props.before ? <button onClick={event => props.onClickPagination('before=' + props.before)} > previos </button> : null;
        var next = props.after ? <button onClick={event => props.onClickPagination('after=' + props.after)} > next </button> : null;

        return (
        <div className={styles.pagination} >
            {prev}
            {next}            
        </div>
        )
    }    

export default Pagination;