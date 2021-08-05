import "./SearchPanel.scss";
import React, { useState } from "react";

const SearchPanel = ({ searchMovies = Function.prototype }) => {
    const [searchValue, setSearchValue] = useState('');
    const [category, setCategory] = useState('all');

    const handleKey = (event) => {
        if (event.key === "Enter") {
            searchMovies(searchValue, category);
        }
    };

    const handleFilter = (event) => {
        setCategory(event.target.dataset.cat)
        searchMovies(searchValue, event.target.dataset.cat);
    }

    return (
        <div className='search-panel'>
            <div className='search-panel__input'>
                <input
                    onChange={(e) => setSearchValue(e.target.value)}
                    value={searchValue}
                    type='search'
                    onKeyDown={handleKey}
                />

                <button
                    onClick={() =>
                        searchMovies(
                            searchValue,
                            category
                        )
                    }
                    className='search-panel__magnifier'
                ></button>

                <button className='search-panel__sort'></button>
            </div>

            <div className='search-panel__sortlist sortlist '>
                <div className='sortlist__category'>
                    <div className='radio'>
                        <input
                            onChange={handleFilter}
                            id='radio-3'
                            name='type'
                            type='radio'
                            data-cat='all'
                            checked={category === "all"}
                        />
                        <label for='radio-3' className='radio-label'>
                            All
                        </label>
                    </div>

                    <div className='radio'>
                        <input
                            onChange={handleFilter}
                            id='radio-1'
                            name='type'
                            type='radio'
                            data-cat='movie'
                            checked={category === "movie"}
                        />
                        <label for='radio-1' className='radio-label'>
                            Movie
                        </label>
                    </div>

                    <div className='radio'>
                        <input
                            onChange={handleFilter}
                            id='radio-2'
                            name='type'
                            type='radio'
                            data-cat='series'
                            checked={category === "series"}
                        />
                        <label for='radio-2' className='radio-label'>
                            Series
                        </label>
                    </div>
                </div>

                {/* <div className='sortlist__category'>
                        <div className='sortlist__category-item'>Genres</div>
                        <div className='sortlist__category-item'>
                            Сompilations
                        </div>
                        <div className='sortlist__category-item'>Year</div>
                    </div> */}
            </div>
        </div>
    );
};

export default SearchPanel;
