import { useState } from "react";
import { v4 as uuid4 } from "uuid";

const UserForm = (props) => {
  //Define user list to be rendered on submit
  const [userList, setUserList] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const validateFirstName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 1) {
      setFirstNameError("First Name is required!");
    } else if (e.target.value.length < 2) {
      setFirstNameError("First Name must be at least 2 characters!");
    } else {
      // an empty string is considered a "falsy" value
      setFirstNameError("");
    }
  };

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const validateLastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 1) {
      setLastNameError("Last Name is required!");
    } else if (e.target.value.length < 2) {
      setLastNameError("Last Name must be at least 2 characters!");
    } else {
      setLastNameError("");
    }
  };

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 1) {
      setEmailError("Email is required!");
    } else if (e.target.value.length < 8) {
      setEmailError("Email must be 8 characters or longer!");
    } else {
      setEmailError("");
    }
  };

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const validatePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 1) {
      setPasswordError("Email is required!");
    } else if (e.target.value.length < 8) {
      setPasswordError("Email must be at least 8 characters!");
    } else {
      setPasswordError("");
    }
  };

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const validateConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPasswordError("Passwords Do Not Match");
    } else {
      setConfirmPasswordError("");
    }
  };

  //Define default value for conditional rendering on the form
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false); // default value of false

  const createUser = (e) => {
    e.preventDefault();

    const newUser = { firstName, lastName, email, password };
    console.log("Welcome! ${newUser}");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    setUserList((prevUserList) => [
      ...prevUserList,
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      },
    ]);

    setHasBeenSubmitted(true);
    setTimeout(() => {
      setHasBeenSubmitted(false);
    }, 2000);
  };

  return (
    <div className="userFormBox">
      <p className="formTitle">NEW USER FORM</p>
      <form onSubmit={createUser}>
        {hasBeenSubmitted ? (
          <p className="formSubHead">Thanks for Submitting the Form!</p>
        ) : (
          <p className="formSubHead">
            Welcome! Please Complete and Submit the Form Below:
          </p>
        )}
        <div className="inputFields">
          <label>
            Enter Your <b>First Name:&nbsp;</b>{" "}
          </label>
          <input
            className={firstNameError ? "error" : ""}
            value={firstName}
            onChange={validateFirstName}
            placeholder="Enter First Name"
          />
        </div>
        <div className="inputFields">
          <label>
            Enter Your <b>Last Name:&nbsp;</b>{" "}
          </label>
          <input
            className={lastNameError ? "error" : ""}
            value={lastName}
            onChange={validateLastName}
            placeholder="Enter Last Name"
          />
        </div>
        <div className="inputFields">
          <label>
            Enter Your <b>Email Address:&nbsp;</b>
          </label>
          <input
            className={emailError ? "error" : ""}
            value={email}
            onChange={validateEmail}
            placeholder="Enter Email Address"
          />
        </div>
        <div className="inputFields">
          <label>
            Enter Your <b>Password:&nbsp; </b>
          </label>
          <input
            className={passwordError ? "error" : ""}
            type="password"
            value={password}
            onChange={validatePassword}
            placeholder="Enter Password"
          />
        </div>
        <div className="inputFields">
          <label>
            Confirm Your <b>Password:&nbsp; </b>
          </label>
          <input
            className={confirmPasswordError ? "error" : ""}
            type="password"
            value={confirmPassword}
            onChange={validateConfirmPassword}
            placeholder="Confirm Your Password"
          />
        </div>
        <div className="buttonBox">
          <input type="submit" value="Create New User" />
        </div>
        <div className="userListBox">
          <p className="userListTitle">USER LIST</p>
          {userList.map((userList) => (
            <p className="userListText">
              {userList.firstName} {userList.lastName} ({userList.email})
            </p>
          ))}
        </div>
      </form>
    </div>
  );
};

export default UserForm;
