import { Input } from '@material-ui/core';
import React from 'react';
import "./InputForm.css"

class InputForm extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div class="container">  
                <form id="contact" action="" method="post">
                    <h4>Post a Blog</h4>
                    <fieldset>
                        <input placeholder="Name" type="text" tabindex="1" required autofocus/>
                    </fieldset>
                    <fieldset>
                        <input placeholder="Position" type="email" tabindex="2" required/>
                    </fieldset>
                    <fieldset>
                        <input placeholder="Blog Title" type="tel" tabindex="3" required/>
                    </fieldset>
                    <fieldset>
                        <textarea placeholder="Desciption" tabindex="5" required></textarea>
                    </fieldset>
                    <fieldset>
                        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default InputForm