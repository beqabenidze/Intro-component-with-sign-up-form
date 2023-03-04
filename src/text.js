import "./text.css";
import { useEffect, useState } from "react";

function Text() {
  return (
    <>
      <div className="text">
        <h1>Learn to code by watching others</h1>
        <h4>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </h4>
      </div>
      <InputField />
    </>
  );
}

function InputField() {
  return (
    <div className="input">
      <h2>Try it free 7 days then $20/mo. thereafter</h2>
      <div className="container">
        <Inp />
      </div>
    </div>
  );
}

function Inp() {
  const [username, setusername] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [usernameDirty, setusernameDirty] = useState(false);
  const [lastnameDirty, setlastnameDirty] = useState(false);
  const [emailDirty, setemailnameDirty] = useState(false);
  const [passwordDirty, setpasswordDirty] = useState(false);

  const [formValid, setformValid] = useState(false);

  const [usernameError, setusernameError] = useState(
    "First name can't be empty"
  );
  const [lastnameError, setlastnameError] = useState(
    "Last name can't be empty"
  );
  const [emailError, setemailError] = useState("Email can't be empty");
  const [passwordError, setpasswordError] = useState("Password can't be empty");

  const usernameHandler = (e) => {
    setusername(e.target.value);
    if (e.target.value.length === 0) {
      setusernameError("First name can't be empty");
    } else {
      setusernameError("");
    }
  };

  const lastnameHandler = (e) => {
    setlastname(e.target.value);
    if (e.target.value.length === 0) {
      setlastnameError("Last name can't be empty");
    } else {
      setlastnameError("");
    }
  };

  const emailHandler = (e) => {
    setemail(e.target.value);

    if (e.target.value.length === 0) {
      setemailError("Email can't be empty");
    } else {
      setemailError("");
    }

    const validateEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (
      e.target.value.length !== 0 &&
      !String(e.target.value).toLowerCase().match(validateEmail)
    ) {
      setemailError("Looks like this is not an email");
    }
  };

  const passwordHandler = (e) => {
    setpassword(e.target.value);
    if (e.target.value.length == 0) {
      setpasswordError("Password can't be empty");
    } else {
      setpasswordError("");
    }

    if (e.target.value.length !== 0 && e.target.value.length < 8) {
      setpasswordError("You password should contain at least 8 characters");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "username":
        setusernameDirty(true);
        break;
      case "lastname":
        setlastnameDirty(true);
        break;
      case "email":
        setemailnameDirty(true);
        break;
      case "password":
        setpasswordDirty(true);
        break;
    }
  };

  useEffect(() => {
    if (usernameError || lastnameError || emailError || passwordError) {
      setformValid(false);
    } else {
      setformValid(true);
    }
  }, [usernameError, lastnameError, emailError, passwordError]);
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="First Name"
          name="username"
          value={username}
          onBlur={(e) => blurHandler(e)}
          onChange={(e) => usernameHandler(e)}
          style={
            usernameDirty && usernameError
              ? {
                  backgroundImage: `url(${
                    require("./icon-error.svg").default
                  })`,
                  outlineColor: "red",
                }
              : {}
          }
        />
        {usernameDirty && usernameError && (
          <i style={{ color: "red", fontSize: "10px", float: "right" }}>
            {usernameError}
          </i>
        )}
      </div>
      <div>
        <input
          type="text"
          placeholder="Last Name"
          name="lastname"
          value={lastname}
          onBlur={(e) => blurHandler(e)}
          onChange={(e) => lastnameHandler(e)}
          style={
            lastnameDirty && lastnameError
              ? {
                  backgroundImage: `url(${
                    require("./icon-error.svg").default
                  })`,
                  outlineColor: "red",
                }
              : {}
          }
        />
        {lastnameDirty && lastnameError && (
          <i style={{ color: "red", fontSize: "10px", float: "right" }}>
            {lastnameError}
          </i>
        )}
      </div>
      <div>
        <input
          type="text"
          placeholder="Email Address"
          name="email"
          value={email}
          onBlur={(e) => blurHandler(e)}
          onChange={(e) => emailHandler(e)}
          style={
            emailDirty && emailError
              ? {
                  backgroundImage: `url(${
                    require("./icon-error.svg").default
                  })`,
                  outlineColor: "red",
                }
              : {}
          }
        />
        {emailDirty && emailError && (
          <i style={{ color: "red", fontSize: "10px", float: "right" }}>
            {emailError}
          </i>
        )}
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onBlur={(e) => blurHandler(e)}
          onChange={(e) => passwordHandler(e)}
        />
        {passwordDirty && passwordDirty && (
          <i style={{ color: "red", fontSize: "10px", float: "right" }}>
            {passwordError}
          </i>
        )}
      </div>
      <button type="button" disabled={!formValid}>
        CLAIM YOUR FREE TRIAL
      </button>
      <h5>
        By clicking the button, you are agreeing to our{" "}
        <span>Terms and Services</span>
      </h5>
    </>
  );
}

export default Text;
