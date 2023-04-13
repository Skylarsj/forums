import React, {useState} from 'react';



const UserForm = (props) => {
    const [formInput, setFormInput] = useState
        ([
            { name: "firstName", value: ""},
            { name: "lastName", value: ""},
            { name: "email", value: ""},
            { name: "password", value: ""},
            { name: "confirmPassword", value: ""},
        ]);
        const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {

        setHasBeenSubmitted(true);

    };
    
    return(
        <div>
            <form onSubmit={ createUser }>
            {
                hasBeenSubmitted ? 
                <h3>Thank you for submitting the form!</h3> :
                <h3>Welcome, please submit the form.</h3> 
            }
                <div>
                    <label>First Name: </label> 
                    <input name="firstName" type="text" onChange={ (e) => setFormInput(e.target.value) } />
                </div>
                <input type="submit" value="Create User" />
            </form>
            
            <div>
                <p>Live Feed</p>
                <p>First Name: {formInput.firstName}</p>
            </div>
        </div>
    );
};
export default UserForm;
