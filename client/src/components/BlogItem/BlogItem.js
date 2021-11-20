import React from 'react';
import Card from "@material-ui/core/Card";
import './BlogItem.css';
import copy_link from "../../vecs/copy_link.svg";
import upvote from "../../vecs/upvote.svg";
import downvote from "../../vecs/downvote.svg";
import upvote_filled from "../../vecs/upvote_filled.svg";
import downvote_filled from "../../vecs/downvote_filled.svg";


class BlogItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            upvotecount : props.upvotecount,
            downvotecount : props.downvotecount,
            upvote : false,
            downvote : false,
            upsrc : upvote,
            downsrc : downvote
        }
    }
    onImageClick = (e) =>{
        var upcnt, downcnt;
        if(e.target.id === "uvote"){
            if(!this.state.upvote){
                upcnt = this.state.upvotecount + 1;
                downcnt = this.state.downvotecount;
                if(this.state.downvote)
                    downcnt -= 1;
                console.log(upcnt);
                console.log(downcnt);
                this.setState({
                    upvotecount : upcnt,
                    downvotecount : downcnt,
                    upvote : true,
                    downvote : false,
                    upsrc : upvote_filled,
                    downsrc : downvote  
                })
            }
        }
        else{
            if(!this.state.downvote){
                downcnt = this.state.downvotecount + 1 ;
                upcnt = this.state.upvotecount;
                if(this.state.upvote)
                    upcnt -= 1;
                console.log(upcnt);
                console.log(downcnt);
                this.setState({
                    upvotecount : upcnt,
                    downvotecount : downcnt,
                    upvote : false,
                    downvote : true,
                    upsrc : upvote,
                    downsrc : downvote_filled
                })
            }
        }
        var changes = {
            
            upvotes : upcnt,
            downvotes : downcnt
        }
        this.props.update(changes, this.props.id.toString());

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
                                <img src={this.state.upsrc} width="22" alt=".upvote" style={{marginLeft: 10, marginRight:5}} id="uvote" onClick={(e) => this.onImageClick(e)}/>
                                <img src={this.state.downsrc} width="22" alt=".downvote" style={{marginLeft: 5, marginRight:5}} id="dvote" onClick={(e) => this.onImageClick(e)}/>
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


