import React from 'react';
import './FilterBy.css';

const FilterBy = ({ data }) => {
    const categories = data
        .map((item) => item.category)
        .filter((value, index, array) => array.indexOf(value) === index);

    return (
        <div className="sort">
            <div className="collection-sort">
                <label>Filter by:</label>
                <select>
                    <option>All</option>
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
