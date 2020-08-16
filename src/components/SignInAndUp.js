import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const SignInAndUp = ( ) => {

    const {displayStatus, setdisplayStatus} = useState(true);

    

    



return (
<div className="homepage-right">
            <section className="form-div-2">
                <SignIn />

            </section>

            <section className="form-div-3"> 
                
                <SignUp />

            </section >
 </div>
 )

}

export default SignInAndUp;