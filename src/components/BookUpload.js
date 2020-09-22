import React, { useState, useEffect } from "react";
import "../App.css";
// import Button from "./Button";

const BookUpload = () => {

  const [loggedInUserId , setLoggedInUserId ] = useState({
    user_id : "",
    book_id : ""
  });

console.log(loggedInUserId);

  const getDetails =async  () => {
    try {
        const response = await fetch("/bookupload", {
            method : "GET",
            headers: {token: localStorage.token}
        })

        const parseRes = await response.json();
          setLoggedInUserId({
            user_id : parseRes.user_id,
            book_id : ""
          })
          console.log(parseRes);
        
        
    } catch (error) {
        console.error(error);
    }
}

useEffect(() => {
    getDetails()
}, [])

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publisher: "",
    published_date: "",
    isbn: "",
    subtitle: "",
    language: ""

  });

  const initialForm = {
    title: "",
    author: "",
    publisher: "",
    published_date: "",
    isbn: "",
    subtitle: "",
    language: ""
  };

  const handleOnChange = (event) => {
    const updateFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    };
    setFormData(updateFormData);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch("http://localhost:3001/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(formData),
    }).then(response => response.json())
    .then((data) => 
      { setLoggedInUserId({
        user_id : loggedInUserId.user_id,
        book_id : data.id
      })
        fetch("http://localhost:3001/usersvsbooks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // We convert the React state to JSON and send it as the POST body
          body: JSON.stringify(loggedInUserId),
        }).then( error => console.log(error))
      
      })


//posting into books_vs_users table 
    setFormData(initialForm);
    

    
  };


  return (
    
    
    <div className="book-form-div">
      <div>BOOK UPLOAD FORM</div>
      <form
        className="book-upload-form"
        // action="/book"
        // method="POST"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="book-title">Book title</label>
          <input
            type="text"
            id="book-title"
            name="title"
            onChange={handleOnChange}
            value={formData.title}
          />
        </div>

          <div>
            <label className="label-top" for="author">
              Author{" "}
            </label>
            <input
              type="text"
              name="author"
              id="author"
              onChange={handleOnChange}
              value={formData.author}
            />
          </div>

          <div>
            <label className="label-top" for="publisher">
              Publisher
            </label>
            <input
              type="text"
              name="publisher"
              id="publisher"
              onChange={handleOnChange}
              value={formData.publisher}
            />
          </div>

          <div>
            <label className="label-top" for="publish-date">
              Publish Date
            </label>
            <input
              type="date"
              name="published_date"
              id="publish-date"
              onChange={handleOnChange}
              value={formData.published_date}
            />
          </div>

          <div>
            <label className="label-top" for="isbn">
              ISBN
            </label>
            <input
              type="text"
              name="isbn"
              id="isbn"
              onChange={handleOnChange}
              value={formData.isbn}
            />
          </div>

          <div>
            <label className="label-top" for="subtitle">
              Subtitle
            </label>
            <input
              type="text"
              name="subtitle"
              id="subtitle"
              onChange={handleOnChange}
              value={formData.subtitle}
            />
          </div>

          <div>
            <label className="label-top" for="language">
              Language
            </label>
            <input
              type="text"
              name="language"
              id="language"
              onChange={handleOnChange}
              value={formData.langauage}
            />
          </div>

          {/* <div>
        
        <div>Book state</div>
        <label htmlFor="book-state">Brand New</label>
        <input type="checkbox" name="Brand-New" id="book-state-new" />

        <label htmlFor="book-state">Pre Loved</label>
        <input type="checkbox" name="Pre-Loved" id="book-state-pre-loved" />

        <label htmlFor="book-state">Vintage</label>
        <input type="checkbox" name="Vintage" id="book-state-vintage" />
        </div> */}

        {/* <Button buttonName="Submit" /> */}
        <button className="button-normal">
          Submit
        </button>
      </form>

    </div>
  );
};

export default BookUpload;
