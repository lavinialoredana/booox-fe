import React, {useState, useEffect} from  'react';
import '../App.css';
import Search from "./Search";




const SearchResults = ( ) =>{

    const [finalSearchValue, setFinalSearchValue ] = useState("");
 console.log(finalSearchValue);

    const [fetchedData, setFetchedData] = useState([]);


   useEffect(( ) =>{

    fetch('/search')
    .then(res => res.json())
    .then(result => setFetchedData(result))
    .catch(error => console.error(error))


   }, [])

   console.log(fetchedData);

   finalSearchValue.toLowerCase();
   

   const filtered = fetchedData.filter((any) => any.author.toLowerCase().includes(finalSearchValue) || any.title.toLowerCase().includes(finalSearchValue) || any.language.toLowerCase().includes(finalSearchValue) || any.publisher.toLowerCase().includes(finalSearchValue) || any.subtitle.toLowerCase().includes(finalSearchValue));
   console.log("filtered", filtered);

   const DisplayAll = ( ) => {
       if (finalSearchValue === "*"){
           return (
            fetchedData.map(any => {
                return (
                    <div className="single-book-details">
                    <div >{any.title}</div>
                    <div >{any.author}</div>
                    <div >{any.published_date}</div>
                    <div >{any.publisher}</div>
                    <div >{any.subtitle}</div>
                    <div >{any.language}</div>
                    <div >{any.isbn}</div>
                    </div>
                )
            })
           )
       }
       else{ return (
        filtered.map(any => {
            return (
                <div className="single-book-details">
                <div >{any.title}</div>
                <div >{any.author}</div>
                <div >{any.published_date}</div>
                <div >{any.publisher}</div>
                <div >{any.subtitle}</div>
                <div >{any.language}</div>
                <div >{any.isbn}</div>
                </div>
            )
        })
       )}
   }

  
   


 




    


    return (
        <div>
            <Search search={setFinalSearchValue}/>
            {finalSearchValue ? DisplayAll()
             
             
             
            : <div>Do search with title, bookname,  </div>}
        </div>
    )
}

export default SearchResults;