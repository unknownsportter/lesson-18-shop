import React, { useState, useContext } from 'react';
import MyContext from '../../MyContext';
import './FilterBy.css';

const FilterBy = () => {
    const { filterProductByCategory, categories } = useContext(MyContext);

    return (
        <div className="sort">
            <div className="collection-sort">
                <label>Filter by:</label>
                <select
                    onChange={(e) => filterProductByCategory(e.target.value)}
                >
                    <option value={'All'}>All Products</option>
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
