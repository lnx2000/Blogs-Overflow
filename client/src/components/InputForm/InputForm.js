import React from 'react';
import "./InputForm.css"

class InputForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            author : "",
            authorInfo : "",
            title : "",
            description : "",
            shortDescription: ""
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
        else if(e.target.id === "shortDescription"){
            this.setState({shortDescription : e.target.value});
        }
    }
    onSubmit(e){
        
        console.log("Called this");
        e.preventDefault();
        const post = {
            author : this.state.author.substring(0, 20),
            authorInfo : this.state.authorInfo.substring(0, 20),
            title : this.state.title,
            description : this.state.description,
            shortDescription: this.state.shortDescription
        }
        this.props.onSubmit(post);
    }
    render(){
        return (
            <div className="container">  
                <form id="contact" action="" method="post" onSubmit={(e) => this.onSubmit(e)}>
                    <h4>Post a Blog</h4>
                    <fieldset>
                        <input placeholder="Name (max 20 chars)" type="text" tabIndex="1" required autoFocus onChange={(e) => {this.onTextChange(e)}} id="author"/>
                    </fieldset>
                    <fieldset>
                        <input placeholder="Profession e.g. SDE@Google (max 20 chars)" type="text" tabIndex="2" required onChange={(e) => {this.onTextChange(e)}} id="authorInfo"/>
                    </fieldset>
                    <fieldset>
                        <input placeholder="Blog Title" type="text" tabIndex="3" required onChange={(e) => {this.onTextChange(e)}} id="title"/>
                    </fieldset>
                    <fieldset>
                        <input placeholder="Short description (max 250 chars)" type="text" tabIndex="3" required onChange={(e) => {this.onTextChange(e)}} id="shortDescription"/>
                    </fieldset>
                    <fieldset>
                        <textarea placeholder="Desciption (Markdown supported)" tabIndex="5" required onChange={(e) => {this.onTextChange(e)}} id="description"/>
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