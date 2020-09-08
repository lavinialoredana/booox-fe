import React, {useState, useEffect} from  'react';
import '../App.css';






const Delete = (props) =>{

  const [isDeleted, setIsDeleted] = useState(true);

    
      const deleteFunction = (id) => {
          fetch('/delete?q=' + id, {
              method: "DELETE",
              header: {'Accept' : "application.json",
              "Content-Type" : "application.json"
            }
          } )
          if (isDeleted === true){
            setIsDeleted(false);

          }

          if(isDeleted === false){
            setIsDeleted(true);
          }

          props.reRenderFunction(isDeleted)

      }




    return <button className="book-delete-button"  onClick={ () => {deleteFunction(props.idToDelete)}}><p>DELETE</p></button> 
}

export default Delete;