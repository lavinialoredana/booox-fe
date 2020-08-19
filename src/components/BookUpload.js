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
  langauage: ""
})


  const handleOnChange = (event) => {

  const updateFormData = {formData, [event.target.name]: event.target.value};
  setFormData(updateFormData);
}

  return (
    <div className="book-form-div">
      <h2>Upload your book</h2>
      <form class="book-upload-form" action="/book" method="POST"  >
        <div>
        <label for="book-title">Book title</label>
        <input type="text" id="book-title" name="title" onChange={handleOnChange} value={formData.title} />
        </div>

        <div>
        <label for="author">Author </label>
        <input type="text" name="author" id="author" onChange={handleOnChange} value={formData.author}/>
        </div>

        <div>
        <label for="publisher">Publisher</label>
        <input type="text" name="publisher" id="publisher" onChange={handleOnChange} value={formData.publisher}/>
        </div>

        <div>
        <label for="publish-date">Publish Date</label>
        <input type="date" name="published_date" id="publish-date" onChange={handleOnChange} value={formData.published_date}/>
        </div>

        <div>
        <label for="isbn">ISBN</label>
        <input type="text" name="isbn" id="isbn" onChange={handleOnChange} value={formData.isbn}/>
        </div>

        <div>
        <label for="subtitle">Subtitle</label>
        <input type="text" name="subtitle" id="ubtitle" onChange={handleOnChange} value={formData.subtitle}/>
        </div>

        <div>
        <label for="language">Language</label>
        <input type="text" name="language" id="language" onChange={handleOnChange} value={formData.langauage}/>
        </div>

        {/* <div>
        
        <div>Book state</div>
        <label for="book-state">Brand New</label>
        <input type="checkbox" name="Brand-New" id="book-state-new" />

        <label for="book-state">Pre Loved</label>
        <input type="checkbox" name="Pre-Loved" id="book-state-pre-loved" />

        <label for="book-state">Vintage</label>
        <input type="checkbox" name="Vintage" id="book-state-vintage" />
        </div> */}

        <Button buttonName="Submit" />
      </form>
    </div>
  );
};

export default BookUpload;
