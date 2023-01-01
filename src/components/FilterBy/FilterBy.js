import React, { useState } from 'react';
import './FilterBy.css';

const FilterBy = ({ categories, funcFilter }) => {
    return (
        <div className="sort">
            <div className="collection-sort">
                <label>Filter by:</label>
                <select onChange={funcFilter}>
                    <option value={'All'}>All</option>
                    {categories.map((item, index) => {
                        return (
                            <option key={index + 1} value={item}>
                                {item}
                            </option>
                        );
                    })}
                </select>
            </div>
        </div>
    );
};

export default FilterBy;
