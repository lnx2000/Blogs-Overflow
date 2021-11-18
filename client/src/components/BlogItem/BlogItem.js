import React from 'react';
import Card from "@material-ui/core/Card";
import './BlogItem.css';
import copy_link from "../../vecs/copy_link.svg";
import upvote from "../../vecs/upvote.svg";
import downvote from "../../vecs/downvote.svg";


class BlogItem extends React.Component{
    constructor(props){
        super(props);
    }

    callAPI(){
    }
    componentWillMount(){
        this.callAPI();
    }
    render(){
        return (
            <div className="main">
                <div className="BlogItem">
                    <Card style={{borderRadius:7}}>
                        <div className="TopLine"></div>
                        <div className="TopInfo">
                            <p className="BlogPosted">{"Posted: " + this.props.created}</p>
                            <div className="clicks">
                                <img src={upvote} width="22" alt=".upvote" style={{marginLeft: 10, marginRight:5}}/>
                                <img src={downvote} width="22" alt=".downvote" style={{marginLeft: 5, marginRight:5}}/>
                                <img src={copy_link} width="22" alt=".link" style={{marginLeft: 5, marginRight:10}}/>
                            </div>
                        </div>
                        <p className="BlogTitle">{this.props.title}</p>
                        <p className="BlogBody">{this.props.description}</p>
                        <div className="AuthorBox">
                            <div className="AuthorBoxSub">
                                <p className="AuthorName">{this.props.author}</p>
                                <p className="AuthorInfo">{this.props.authorInfo}</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}
export default BlogItem


