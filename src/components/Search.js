import React, {useState} from  'react';
import '../App.css';
import Button from './Button';




const Search = (props) =>{

    const [inputValue, setInputValue ] = useState("");

    const handleOnChange = (event) => {
        const newData = event.target.value
       setInputValue(newData);
      

    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.search(inputValue);
       
    }
    


    return (
        <div>
            <h2>Search Book</h2>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="search"></label>
                <input
                type="text"
                name="search"
                id="search"
                onChange={handleOnChange}
                value={inputValue}/>
                <Button buttonName="submit"/>
            </form>

        </div>
    )
}

export default Search;