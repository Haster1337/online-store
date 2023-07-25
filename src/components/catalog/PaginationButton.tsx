import React, {useState} from 'react';

interface PaginationButtonProps {
    number: number,
    paginate: Function
}

const PaginationButton: React.FC<PaginationButtonProps> = ({number, paginate}) => {

    return (
        <button key={number} onClick={() => paginate(number)} className={`pagination_page`}>
            {number}
        </button>
    );
};

export default PaginationButton;