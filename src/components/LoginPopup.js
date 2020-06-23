import React, {useContext} from "react";
import styled from "styled-components";
import {UserContext} from "../context/UserContext";
import {useForm} from "react-hook-form";

const LoginStyle = styled.div`

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 80;


.form-structor {
background-color: rgba(62, 48, 48, 0.76);
border-radius: 15px;
height: 550px;
width: 350px;
position: relative;
overflow: hidden;

&::after {
content: "";
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
background-repeat: no-repeat;
background-position: left bottom;
background-size: 500px;
}

.signup {
position: absolute;
top: 50%;
left: 50%;
-webkit-transform: translate(-50%, -50%);
width: 65%;
z-index: 5;
-webkit-transition: all 0.3s ease;

&.slide-up {
top: 5%;
-webkit-transform: translate(-50%, 0%);
-webkit-transition: all 0.3s ease;
}

&.slide-up .form-holder,
&.slide-up .submit-btn {
opacity: 0;
visibility: hidden;
}

&.slide-up .form-title {
font-size: 1em;
cursor: pointer;
}

&.slide-up .form-title span {
margin-right: 5px;
opacity: 1;
visibility: visible;
-webkit-transition: all 0.3s ease;
}

.form-title {
color: #fff;
font-size: 1.7em;
text-align: center;

span {
color: rgba(0, 0, 0, 0.4);
opacity: 0;
visibility: hidden;
-webkit-transition: all 0.3s ease;
}
}

.form-holder {
border-radius: 15px;
background-color: #fff;
overflow: hidden;
margin-top: 50px;
opacity: 1;
visibility: visible;
-webkit-transition: all 0.3s ease;

.input {
border: 0;
outline: none;
box-shadow: none;
display: block;
height: 30px;
line-height: 30px;
padding: 8px 15px;
border-bottom: 1px solid #eee;
width: 100%;
font-size: 12px;

&:last-child {
border-bottom: 0;
}
&::-webkit-input-placeholder {
color: rgba(0, 0, 0, 0.4);
}
}
}

.submit-btn {
background-color: rgba(0,0,0,0.58);
color: rgba(256, 256, 256, 0.7);
border: 0;
border-radius: 15px;
display: block;
margin: 15px auto;
padding: 15px 45px;
width: 100%;
font-size: 13px;
font-weight: bold;
cursor: pointer;
opacity: 1;
visibility: visible;
-webkit-transition: all 0.3s ease;

&:hover {
transition: all 0.3s ease;
background-color: rgba(0, 0, 0, 0.8);
}
}
}

.login {
position: absolute;
top: 20%;
left: 0;
right: 0;
bottom: 0;
background-color: #fff;
z-index: 5;
-webkit-transition: all 0.3s ease;

&::before {
content: "";
position: absolute;
left: 50%;
top: -20px;
-webkit-transform: translate(-50%, 0);
background-color: #fff;
width: 200%;
height: 250px;
border-radius: 50%;
z-index: 4;
-webkit-transition: all 0.3s ease;
}

.center {
position: absolute;
top: calc(50% - 10%);
left: 50%;
-webkit-transform: translate(-50%, -50%);
width: 65%;
z-index: 5;
-webkit-transition: all 0.3s ease;

.form-title {
color: #000;
font-size: 1.7em;
text-align: center;

span {
color: rgba(0, 0, 0, 0.4);
opacity: 0;
visibility: hidden;
-webkit-transition: all 0.3s ease;
}
}

.form-holder {
border-radius: 15px;
background-color: #fff;
border: 1px solid rgba(71,69,69,0.79);
overflow: hidden;
margin-top: 50px;
opacity: 1;
visibility: visible;
-webkit-transition: all 0.3s ease;

.input {
border: 0;
outline: none;
box-shadow: none;
display: block;
height: 30px;
line-height: 30px;
padding: 8px 15px;
border-bottom: 1px solid #eee;
width: 100%;
font-size: 12px;

&:last-child {
border-bottom: 0;
}
&::-webkit-input-placeholder {
color: rgba(0, 0, 0, 0.4);
}
}
}

.submit-btn {
background-color: #6b92a4;
color: rgba(256, 256, 256, 0.7);
border: 0;
border-radius: 15px;
display: block;
margin: 15px auto;
padding: 15px 45px;
width: 100%;
font-size: 13px;
font-weight: bold;
cursor: pointer;
opacity: 1;
visibility: visible;
-webkit-transition: all 0.3s ease;

&:hover {
transition: all 0.3s ease;
background-color: rgba(0, 0, 0, 0.8);
}
}
}

&.slide-up {
top: 90%;
-webkit-transition: all 0.3s ease;
}

&.slide-up .center {
top: 10%;
-webkit-transform: translate(-50%, 0%);
-webkit-transition: all 0.3s ease;
}

&.slide-up .form-holder,
&.slide-up .submit-btn {
opacity: 0;
visibility: hidden;
-webkit-transition: all 0.3s ease;
}

&.slide-up .form-title {
font-size: 1em;
margin: 0;
padding: 0;
cursor: pointer;
-webkit-transition: all 0.3s ease;
}

&.slide-up .form-title span {
margin-right: 5px;
opacity: 1;
visibility: visible;
-webkit-transition: all 0.3s ease;
}
}
}

  .auth-errors{
      position: relative;
      left: 20%;
      color: #ff0101;
  }
`;

function Login() {

    const {register, handleSubmit, errors, watch} = useForm();
    const password = watch("password");

    const {
        register: register2,
        errors: errors2,
        handleSubmit: handleSubmit2
    } = useForm();

    const {
        customRegister,
        login
    } = useContext(UserContext);

    const slideUpForSignup = (e) => {
        e.currentTarget.classList.remove('slide-up');
        e.currentTarget.nextSibling.classList.add('slide-up');
    }

    const slideUpForLogin = (e) => {
        e.currentTarget.classList.remove('slide-up');
        e.currentTarget.previousSibling.classList.add('slide-up');
    }

    const registerCheck = data => {

        console.log(data);
        customRegister(data.username, data.email, data.password)
        // register();
    }

    const loginCheck = data => {
        console.log(data)
        // login(data.username, data.password);
    }

    return (
        <LoginStyle>
            <div className="form-structor">
                <div className="signup" onClick={slideUpForSignup}>
                    <h2 className="form-title" id="signup"><span>or</span>Sign up</h2>
                    {errors.passwordConfirm && <p className="auth-errors">{errors.passwordConfirm.message}</p>}
                    {errors.email && <p className="auth-errors">{errors.email.message}</p>}
                    <form key={1} onSubmit={handleSubmit(registerCheck)}>
                        <div className="form-holder">
                            <input
                                type="text"
                                className="input"
                                placeholder="Name"
                                name="username"
                                required
                                ref={register({
                                    required: true,
                                    maxLength: 5
                                })}
                            />
                            <input
                                type="email"
                                className="input"
                                placeholder="Email"
                                name="email" required
                                ref={register({
                                    required: true,
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "invalid email address"
                                    }
                                })}/>
                            <input
                                type="password"
                                className="input"
                                placeholder="Password"
                                name="password"
                                required
                                ref={register({
                                    required: true
                                })}/>
                            <input
                                type="password"
                                className="input"
                                placeholder="Password Confirm"
                                name="passwordConfirm"
                                required
                                ref={register({
                                    required: "Confirm new password is required",
                                    validate: value =>
                                        password === value
                                            ? true
                                            : "password and password confirm does not match"
                                })}/>
                        </div>
                        <button className="submit-btn" type="submit">Sign up</button>
                    </form>
                </div>
                <div className="login slide-up" onClick={slideUpForLogin}>
                    <div className="center">
                        <h2 className="form-title" id="login"><span>or</span>Log in</h2>
                        <form key={2} onSubmit={handleSubmit2(loginCheck)}>
                            <div className="form-holder">
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Username"
                                    name="username"
                                    required
                                    ref={register2({required: true})}
                                />
                                <input
                                    type="password"
                                    className="input"
                                    placeholder="Password"
                                    name="password"
                                    required
                                    ref={register2({required: true})}
                                />
                            </div>
                            <button className="submit-btn">Log in</button>
                        </form>
                    </div>
                </div>
            </div>
        </LoginStyle>
    )

}

export default Login;