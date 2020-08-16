import React from 'react';
import '../App.css';
import Button from './Button'

const ApiBookSearch = ( ) => {
    return (
        <div class="form-div-1">
                    <form className="search-form">
                        <label for="book-name"><h2>Search for all kind of books</h2></label>
                        <input type="text" name="bookName" id="book-name" />
                        <Button buttonName = 'Search' />
                    </form>
        </div>
    )

}

export default ApiBookSearch;