import React from 'react';
import './SortBy.css';
const SortBy = () => {
    return (
        <div className="sort">
            <div className="collection-sort">
                <label>Filter by:</label>
                <select>
                    <option value="/">All Jackets</option>
                    <option value="/">2016</option>
                    <option value="/">jacket</option>
                    <option value="/">Jackets</option>
                    <option value="/">layers</option>
                    <option value="/">Obermeyer</option>
                    <option value="/">Roxy</option>
                    <option value="/">womens</option>
                </select>
            </div>
        </div>
    );
};

export default SortBy;
