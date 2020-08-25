import React, { useState } from "react";
import "../App.css";
import Button from "./Button";

const BookUpload = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publisher: "",
    published_date: "",
    isbn: "",
    subtitle: "",
    langauage: "",

  });

  const handleOnChange = (event) => {
    const updateFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    };
    setFormData(updateFormData);

  return (
    <div className="uploadbook-form">
      <div className="book-cover">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/3410f355901095.56099d855bd94.jpg"
          alt="emily bronte"
        ></img>
      </div>
      <div className="uploadbook-form-container">
        <h2>Upload your book</h2>
        <form className="uploadbook-form" action="/book" method="POST">
          <div>
            <label className="label-top" for="book-title">
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
          <Button buttonName="Submit" />
        </form>
      </div>
    </div>
  );
};

export default BookUpload;
