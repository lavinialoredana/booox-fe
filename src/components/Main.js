import React, { Component } from "react";
import "../App.css";


export class Main extends Component{ 
  render(){ 
    return( 
<div className="row header">
  <h1 className="m3 d-flex justify-content-center"> <p> Real Books </p></h1>
  <h3 className="m3 d-flex justify-content-center">
    {" "}
    Exchange books. Real books. The ones with scribbles, dust and (wink!)
    bookmarks!{" "}
  </h3>
</div>
);
}
}

export default Main;


