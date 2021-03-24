import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UploadBook.css";
// import Button from "./Button";

const BookUpload = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publisher: "",
    published_date: "",
    isbn: "",
    subtitle: "",
    language: "",
  });

  const initialForm = {
    title: "",
    author: "",
    publisher: "",
    published_date: "",
    isbn: "",
    subtitle: "",
    language: "",
  };

  const handleOnChange = (event) => {
    const updatedFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    };
    setFormData(updatedFormData);
  };

  const emptyForm = {
    title: "",
    author: "",
    publisher: "",
    published_date: "2020-01-01",
    isbn: "",
    subtitle: "",
    language: "",
  };

  const handleSubmit = async (event) => {
    const token = sessionStorage.getItem("token");
    event.preventDefault();
    await fetch("http://localhost:3001/book", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: token,
      },
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(formData),
    }).then(function (response) {
      if (response.status === 201) {
        alert("Your book has been posted successfully");
      }
    });

    setFormData(initialForm);
  };

  return (
    <div className="main-container">
      <div className="uploadbook-heading">
        <h2>/ UPLOAD YOUR BOOK</h2>
        <p>
          *Submit your book to be reviewed and published to the library. As soon
          as we will approve your book lorem ipsum lorem ipsum lorem ipsum..
        </p>
      </div>

      <form
        className="uploadbook-form"
        // action="/book"
        // method="POST"
        onSubmit={handleSubmit}
      >
        <div className="uploadbook-field-div">
          <label className="label-top" htmlFor="book-title">
            Book title
          </label>
          <input
            type="text"
            id="book-title"
            name="title"
            onChange={handleOnChange}
            value={formData.title}
          />
        </div>

        <div className="uploadbook-field-div">
          <label className="label-top" htmlFor="author">
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

        <div className="uploadbook-field-div">
          <label className="label-top" htmlFor="publisher">
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

        <div className="uploadbook-field-div">
          <label className="label-top" htmlFor="publish-date">
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

        <div className="uploadbook-field-div">
          <label className="label-top" htmlFor="isbn">
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

        <div className="uploadbook-field-div">
          <label className="label-top" htmlFor="subtitle">
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

        <div className="uploadbook-field-div">
          <label className="label-top" htmlFor="language">
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
        <div className="button-normal">
          <button>
            <Link to="/userprofile"> CANCEL</Link>
          </button>
          <button>SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default BookUpload;
