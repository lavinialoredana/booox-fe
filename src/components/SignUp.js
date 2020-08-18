import React, { useState, useEffect } from 'react';
import '../App.css'; 
import Button from './Button';




const SignUp = () => {



    



const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: ""
});

const handleOnChange = event => {
    
    const updateFormData = {
      ...formData,
      [event.target.name]: event.target.value
    };
    setFormData(updateFormData);


}



const [reRender, setReRender] = useState('enable')
const handleSubmit = (event) => {
    if (reRender === 'enable'){
             setReRender('disable')
    }

    else{
        setReRender('enable')
    }
  };
console.log(formData.firstName);
console.log(formData.lastName);
console.log(formData.email);



const initialValue = {
    firstName: "",
    lastName: "",
    email: ""

}

const [fetchedData, setFetchedData] = useState([])
console.log(fetchedData);




console.log('rerender', reRender);

// function fetchData () {



// }

useEffect( ()=> {
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(data => setFetchedData(data))
}, [reRender])





    return (
            <div className="form-div-3" >
                <h2>Create Your Account Here</h2>
            <form  class="login-form signup-form" method="POST" action="http://localhost:3000/userinfo" target="_blank" onSubmit={handleSubmit} >

{/* <label for="username-new">Choose Your Username</label>
<input type="username" name="username-new" id="username-new" /> */}

<label for="firstname">First Name </label>
<input type="text" name="firstName" id="firstname" onChange={handleOnChange} value={formData.firstName.toString()}/>

<label for="lastname">Last Name</label>
<input type="text" name="lastName" id="lastname" onChange={handleOnChange} value={formData.lastName.toString()} />

<label for="email">Email</label>
<input type="text" name="email" id="email" onChange={handleOnChange} value={formData.email.toString()}/>

{/* <label for="address">Address</label>
<input type="text" name="address" id="address" />

<label for="password-new">Create Password</label>
<input type="password" name="password-new" id="password-new" />

<label for="confirm-password">Confirm Password</label>
<input type="password" name="confirm-password" id="confirm-password" /> */}
<Button type="submit" buttonName="SUBMIT" />
</form>

<div> 
    <span>
    {fetchedData.map( ( any) => {
       return  <p>{any.name}</p>
    })}
    </span>
</div>

        </div>
    )
}

export default SignUp;

