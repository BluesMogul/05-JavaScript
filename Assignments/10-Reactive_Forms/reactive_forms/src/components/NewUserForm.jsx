import { useState } from 'react';

const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);  // default value of false

    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();

        // shorthand ES6 syntax for building an object
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
    	setUsername("");
    	setEmail("");
    	setPassword("");

        // updating state will change the message to be displayed in the form
        setHasBeenSubmitted( true );
    };

    const formMessage = () => {
        if( hasBeenSubmitted ) {
	    return "Thanks {userName}! You're Registered!";
	} else {
	    return "Welcome, Please Complete and Submit the New User Form";
	}
    };

    return (
        <form onSubmit={createUser}>
            <div className="userFormBox">
                <h1>NEW USER FORM</h1>
                <h3>{ formMessage() }</h3>
                <div>
                    <label>Enter Your Username: </label>
                    <input type="text" value={username} onChange={ (e) => setUsername(e.target.value) } />
                </div>
                <div>
                    <label>Enter Your Email Address: </label>
                    <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Enter Your Password: </label>
                    <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label>Confirm Your Password: </label>
                    <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <input type="submit" value="Create User" />
            </div>
        </form>
    );
};

export default NewUserForm;
