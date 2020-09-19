import React from "react";
import "../App.css";

const Delete = (props) => {
  const deleteFunction = (id) => {
    fetch("/delete?q=" + id, {
      method: "DELETE",
      header: {
        Accept: "application.json",
        "Content-Type": "application.json",
      },
    });

    props.reRenderFunction();
  };

  return (
    <div
      className="book-delete-button"
      onClick={() => {
        deleteFunction(props.idToDelete);
      }}
    >
      X
    </div>
  );
};

export default Delete;
