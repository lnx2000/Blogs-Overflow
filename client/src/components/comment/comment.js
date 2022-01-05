import React  from 'react';

class Comment extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return(
            <div style={{marginRight:"20px"}}>
                <p>{this.props.posted}</p>
                <h3>{this.props.body}</h3>
                <hr style={{
                    display: "block",
                    height: "1px",
                    border: "0",
                    borderTop: "1px solid #ccc",
                    margin: "1em 0",
                    padding: 0
                    }}></hr>
            </div>
        )
    }
}
export default Comment;