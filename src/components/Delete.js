import React from "react";
import "../App.css";

const Delete = (props) => {
  const deleteFunction = (id) => {
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
  };

  return (
    <button
      className="book-delete-button"
      onClick={() => {
        deleteFunction(props.idToDelete);
      }}
    >
      Delete Post
    </button>
  );
};

export default Delete;
