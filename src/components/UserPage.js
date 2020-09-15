import React, {useState, useEffect} from  'react';
import '../App.css';
import LoggedInNavigation from './LoggedInNavigation';
import Search from './SearchResults';
import SearchResults from './SearchResults';
import BookUpload from './BookUpload';





const UserPage = (props) =>{

    const [userDetails, setUserDetails] = useState([]);


    const getDetails =async  () => {
        try {
            const response = await fetch("/userpage", {
                method : "GET",
                headers: {token: localStorage.token}
            })

            const parseRes = await  response.json();
            setUserDetails(parseRes);
            
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getDetails()
    }, [])

    return (

            
        <div className="user-page">
            <div className="user-page-left">
                   <h1> Welcome to Boox </h1>
                   <h2>{userDetails.user_name}</h2>
        </div>


            <div className="user-page-right">
            <BookUpload />
            </div>
            
        </div>
    )
}

export default UserPage;