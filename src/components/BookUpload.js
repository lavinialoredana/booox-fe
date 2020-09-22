import React, { useState } from "react";
import "../App.css";
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

  const handleOnChange = (event) => {
    const updateFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    };
    setFormData(updateFormData);
  };

  const emptyFormData = {
    title: "",
    author: "",
    publisher: "",
    published_date: "",
    isbn: "",
    subtitle: "",
    language: "",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = sessionStorage.getItem("token");
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
      console.log(response);
      console.log(response.json());
    });
    setFormData(emptyFormData);
  };

  return (
    <div className="book-form-div">
      <h2>BOOK UPLOAD FORM</h2>
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

        <div>
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

        <div>
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

        <div>
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

        <div>
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

        <div>
          <label className="label-top" htmlFor="language">
            Language
          </label>
          <input
            type="text"
            name="language"
            id="language"
            onChange={handleOnChange}
            value={formData.language}
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
        <button className="button-normal">Submit</button>
      </form>
    </div>
  );
};

export default BookUpload;
