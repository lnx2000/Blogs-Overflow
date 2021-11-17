import React from 'react';
import Card from "@material-ui/core/Card";
import './BlogItem.css';
import copy_link from "../../vecs/copy_link.svg";
import upvote from "../../vecs/upvote.svg";
import downvote from "../../vecs/downvote.svg";
import { red } from '@material-ui/core/colors';
import { hexToRgb } from '@material-ui/core';


class BlogItem extends React.Component{
    constructor(props){
        super(props);
        this.state = { title : "Hello, this is my first blog!! :)", 
                        description: "And again I will be posting shits here. How you guys enjoy :). And again I will be posting shits here. How you guys enjoy :). And again I will be posting shits here. How you guys enjoy :). And again I will be posting shits here. How you guys enjoy :)" ,
                        posted: "15th Nov, 2021 05:25 AM", 
                        author: "Omkar Amilkanthwar", 
                        authorInfo: "SDE @Google" };
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
                    <div class="TopLine"></div>
                    <div className="TopInfo">
                        <p className="BlogPosted">{"Posted: " + this.state.posted}</p>
                        <div class="clicks">
                            <img src={upvote} width="22" style={{marginLeft: 10, marginRight:5}}/>
                            <img src={downvote} width="22" style={{marginLeft: 5, marginRight:5}}/>
                            <img src={copy_link} width="22" style={{marginLeft: 5, marginRight:10}}/>
                        </div>
                    </div>
                    <p className="BlogTitle">{this.state.title}</p>
                    <p className="BlogBody">{this.state.description}</p>
                    <div className="AuthorBox">
                        <div class="AuthorBoxSub">
                            <p className="AuthorName">{this.state.author}</p>
                            <p className="AuthorInfo">{this.state.authorInfo}</p>
                        </div>
                    </div>

                    </Card>
                </div>
            </div>
        )
    }
}
export default BlogItem


