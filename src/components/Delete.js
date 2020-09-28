import React from "react";
import "../App.css";

const Delete = (props) => {

  const id = props.idToDelete;
  const deleteFunction = () => {
    const token = sessionStorage.getItem("token");

    fetch("/delete?q=" + id, {
      method: "DELETE",
      header: {
        Accept: "application.json",
        "Content-Type": "application.json",
        token: token,
      },
    });

    props.reRenderFunction();
    console.log(props.idToDelete);
  };

  return (
    <button
      className="book-delete-button"
      onClick={deleteFunction}
    >
      Delete Post
    </button>
  );
};

export default Delete;
