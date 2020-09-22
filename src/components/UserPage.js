import React, {useState, useEffect} from  'react';
import '../App.css';
import LoggedInNavigation from './LoggedInNavigation';
import Search from './SearchResults';
import SearchResults from './SearchResults';
import BookUpload from './BookUpload';
import Delete from './Delete';





const UserPage = (props) =>{

    const [userDetails, setUserDetails] = useState([]);
    const [bookDetails, setBookDetails] = useState([]);
    
    const [renderOnDelete, setRenderOnDelete] = useState(false);
    console.log(bookDetails);

    const changeDeleteState = ( ) => {
        if (renderOnDelete === false){
          setRenderOnDelete(true);
    
        }
    
        else {
          setRenderOnDelete(false);
        }
        console.log(renderOnDelete);
      }

  


    const getDetails =async  () => {
        try {
            const response = await fetch("/userpage", {
                method : "GET",
                headers: {token: localStorage.token}
            })

            const parseRes = await  response.json();
            console.log("details",parseRes);
            setUserDetails(parseRes);
            
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getDetails()
    }, [])

    useEffect(()  => {
        fetch(`/mybooks?q=${userDetails.user_id}`)
          .then((res) => res.json())
          .then((result) => setBookDetails(result))
          .catch((error) => console.error(error));
      }, [userDetails, renderOnDelete]);


    return (

            
        <div className="user-page">
            <div className="user-page-left">
                
                   <h1> Welcome to Boox </h1>
                   <h2>{userDetails.user_name}</h2>
                   <h3>Home</h3>
                   <h3>My books</h3>
                   <h3>Messages</h3>
                   <h3>Update info</h3>
                   <h3>Update Password</h3>
                   <h3></h3>
        </div>

        <div className="user-page-right">
                
         <h1> Logged in as {userDetails.user_name} </h1>
            <h2>Total Books owned : {bookDetails.length}</h2>

     {bookDetails.map(any =>
            
             <div className="single-book-details">
             <Delete idToDelete={any.id} reRenderFunction={changeDeleteState}/>
            <div><b>Title :</b> {any.title}</div>
            <div><b>Author :</b> {any.author}</div>
            <div><b>Published date:</b> {any.published_date}</div>
            <div><b>Publisher:</b> {any.publisher}</div>    
            <div><b>Subtitle :</b>{any.subtitle}</div>
            <div><b>Language:</b> {any.language}</div>
            <div><b>ISBN :</b>{any.isbn}</div>

          </div>)  }
                   
        </div>


            
        </div>
    )
}

export default UserPage;