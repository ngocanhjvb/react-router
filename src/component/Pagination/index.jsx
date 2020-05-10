import React from 'react';
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';



const Pagination = props => {

    const {pagination, onPageChange} = props;

    const {_limit, _page, _totalRows} = pagination


    let totalPage = Math.ceil(_totalRows / _limit);


    const handlePageChange = (page) => {
        onPageChange(page)
    }


    return (
        <div>
            <Button variant="contained" disabled={_page <= 1} onClick={() => handlePageChange(_page - 1)}>
                Prev
            </Button>
            <Button variant="contained" disabled={_page === totalPage} onClick={() => handlePageChange(_page + 1)}>
                Next
            </Button>
        </div>
    );
};

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func
};

export default Pagination;
