import React, {useState, useEffect} from  'react';
import '../App.css';






const Delete = (props) =>{

    
      const deleteFunction = (id) => {
          fetch('/delete?q=' + id, {
              method: "DELETE",
              header: {'Accept' : "application.json",
              "Content-Type" : "application.json"
            }
          } )

      }




    return <button className="book-delete-button" onClick={ () => {deleteFunction(props.idToDelete)}}>X</button> 
}

export default Delete;