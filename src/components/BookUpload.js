import React from "react";
import "../App.css";
import Button from "./Button";

const BookUpload = () => {
  return (
    <div className="form-div-3">
      <h2>Upload your book</h2>
      <form class="book-upload-form">
        <label for="book-title">Book title</label>
        <input type="text" name="book-title" id="book-title" />

        <label for="author">Author </label>
        <input type="text" name="author" id="author" />

        <label for="publisher">Publisher</label>
        <input type="text" name="publisher" id="publisher" />

        <label for="publish-date">Publish Date</label>
        <input type="date" name="publish-date" id="publish-date" />

        <label for="isbn">ISBN</label>
        <input type="text" name="isbn" id="isbn" />

        <label for="subtitle">Subtitle</label>
        <input type="text" name="subtitle" id="ubtitle" />

        <label for="language">Language</label>
        <input type="text" name="language" id="language" />

        <label for="book-state">Book State</label>
        <label for="book-state">Brand New</label>
        <input type="checkbox" name="Brand-New" id="book-state-new" />
        <label for="book-state">Pre Loved</label>
        <input type="checkbox" name="Pre-Loved" id="book-state-pre-loved" />
        <label for="book-state">Vintage</label>
        <input type="checkbox" name="Vintage" id="book-state-vintage" />

        <Button buttonName="Submit" />
        <Button buttonName="Delete" />
      </form>
    </div>
  );
};

export default BookUpload;
