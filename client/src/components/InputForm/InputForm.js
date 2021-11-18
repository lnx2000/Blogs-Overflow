import React from 'react';
import "./InputForm.css"

class InputForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            author : "",
            authorInfo : "",
            title : "",
            description : ""
        }
    }
    onTextChange(e){
        if (e.target.id === 'author') {
            this.setState({ author : e.target.value });
        }
        else if (e.target.id === 'authorInfo') {
            this.setState({ authorInfo : e.target.value });
        }
        else if (e.target.id === 'title') {
            this.setState({ title : e.target.value });
        }
        else if (e.target.id === 'description') {
            this.setState({ description : e.target.value });
        }
    }
    onSubmit(e){
        
        console.log("Called this");
        e.preventDefault();
        const post = {
            author : this.state.author,
            authorInfo : this.state.authorInfo,
            title : this.state.title,
            description : this.state.description
        }
        this.props.onSubmit(post);
    }
    render(){
        return (
            <div class="container">  
                <form id="contact" action="" method="post" onSubmit={(e) => this.onSubmit(e)}>
                    <h4>Post a Blog</h4>
                    <fieldset>
                        <input placeholder="Name" type="text" tabIndex="1" required autoFocus onChange={(e) => {this.onTextChange(e)}} id="author"/>
                    </fieldset>
                    <fieldset>
                        <input placeholder="Position" type="text" tabIndex="2" required onChange={(e) => {this.onTextChange(e)}} id="authorInfo"/>
                    </fieldset>
                    <fieldset>
                        <input placeholder="Blog Title" type="text" tabIndex="3" required onChange={(e) => {this.onTextChange(e)}} id="title"/>
                    </fieldset>
                    <fieldset>
                        <textarea placeholder="Desciption" tabIndex="5" required onChange={(e) => {this.onTextChange(e)}} id="description"/>
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