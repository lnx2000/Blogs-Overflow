import React from 'react';
import './LoginSignupForm.css'

class LoginSignupForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            login_toggle_background : "#fff",
            login_toggle_color : "#222",
            signup_toggle_background : "#57b846",
            signup_toggle : "#fff",
            login_form_display : "none",
            signup_form_display : "block"
        };
    }
    toggleSignup = () => {
        this.setState({
            login_toggle_background : "#fff",
            login_toggle_color : "#222",
            signup_toggle_background : "#57b846",
            signup_toggle : "#fff",
            login_form_display : "none",
            signup_form_display : "block"
        });
        document.getElementById("login-toggle").style.backgroundColor="#fff";
         document.getElementById("login-toggle").style.color="#222";
         document.getElementById("signup-toggle").style.backgroundColor="#57b846";
         document.getElementById("signup-toggle").style.color="#fff";
         document.getElementById("login-form").style.display="none";
         document.getElementById("signup-form").style.display="block";
     }
     
     toggleLogin = () => {
         console.log("eueueueue");
        this.setState({
            login_toggle_background : "#57B846",
            login_toggle_color : "#fff",
            signup_toggle_background : "#fff",
            signup_toggle : "#fff",
            login_form_display : "block",
            signup_form_display : "none"
        });
         document.getElementById("login-toggle").style.backgroundColor="#57B846";
         document.getElementById("login-toggle").style.color="#fff";
         document.getElementById("signup-toggle").style.backgroundColor="#fff";
         document.getElementById("signup-toggle").style.color="#222";
         document.getElementById("signup-form").style.display="none";
         document.getElementById("login-form").style.display="block";
     }
     
    render(){
        return (
        <div className="form-modal">
            <div className="form-toggle">
                <button id="login-toggle" onClick={this.toggleLogin}>log in</button>
                <button id="signup-toggle" onClick={this.toggleSignup}>sign up</button>
            </div>
            <div id="login-form">
                <form>
                    <input type="text" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <button type="button" className="btn login">login</button>
                    <p><a href="javascript:void(0)">Forgot password?</a></p>
                    
                </form>
            </div>
            <div id="signup-form">
                <form>
                    <input type="email" placeholder="Email"/>
                    <input type="text" placeholder="Name"/>
                    <input type="password" placeholder="Password"/>
                    <input type="password" placeholder="Retype password"/>
                    <button type="button" className="btn signup">create account</button>
                    <p>Clicking <strong>create account</strong> means that you are agree to our <a href="javascript:void(0)">terms of services</a>.</p>
                    
                </form>
            </div>
        </div>

        )
    }

}

export default LoginSignupForm