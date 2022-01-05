import React, {useState, useEffect} from 'react';
import {useParams } from "react-router-dom";
import Card from "@material-ui/core/Card";
import "./Blog.css";
import Comment from "../comment/comment";
import github from "../../vecs/github.svg";
import insta from "../../vecs/instagram.svg";
import linkedin from "../../vecs/linkedin.svg";


const fetchBlog = async (id) => {
    const res = await fetch(`http://localhost:5000/posts?id=${id}`);
    const data = await res.json();
    return data;
}

const fetchComments = async (id) => {
    const res = await fetch(`http://localhost:5000/comment?post_id=${id}`);
    const data = await res.json();
    return data;
}

function Blog() {
    let params = useParams();
    const [blog, setBlog] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() =>{
        async function fetchData(){
            var requiredData = [fetchBlog(params._id), fetchComments(params._id)]
            var fetchedData = await Promise.all(requiredData);
            setBlog(fetchedData[0][0]);
            setComments(fetchedData[1]);
        }
        fetchData();
    }, []);

    if(blog == null) return <div></div>
    console.log(JSON.stringify(comments));
    return (
        <div className='fill-window'>
            <div className="TopBar"/>
            <div className="splitScreen">
                <div className="leftPane">
                    <Card style={{borderRadius:7, marginLeft:"20px", marginRight:"20px"}}>
                        <div className="TopLine"></div>
                        <div className="TopInfo">
                            <p className="BlogPosted">{"Posted: " + blog.created.substring(0, 10)}</p>
                            <div className="clicks">
                                {/* <img src={this.state.upsrc} width="22" alt=".upvote" style={{marginLeft: 10, marginRight:5}} id="uvote" onClick={(e) => this.onImageClick(e)}/>
                                <img src={this.state.downsrc} width="22" alt=".downvote" style={{marginLeft: 5, marginRight:5}} id="dvote" onClick={(e) => this.onImageClick(e)}/>
                                <img src={copy_link} width="22" alt=".link" style={{marginLeft: 5, marginRight:10}} id="link" onClick={(e) => this.copy()}/> */}
                            </div>
                        </div>
                        <p className="BlogTitle">{blog.title}</p>
                        <p className="BlogBody">{blog.description}</p>
                        <div className="AuthorBox">
                            <div className="AuthorBoxSub">
                                <p className="AuthorName">{blog.author}</p>
                                <p className="AuthorInfo">{blog.authorInfo}</p>
                            </div>
                        </div>
                    </Card>
                    <form id="contact" action="" method="post" onSubmit={(e) => this.onSubmit(e)}>
                        <p style={{"font-size":"15px", marginTop:"-50px"}}><b>Post a comment</b></p>
                        <fieldset>
                            {/* <input placeholder="Type something..." type="text" tabIndex="1" required autoFocus onChange={(e) => {this.onTextChange(e)}} id="author"/> */}
                            <textarea name="Text1" cols="40" rows="5" placeholder='Type something...'></textarea>
                        </fieldset>
                        
                        <fieldset>
                            <button style={{width:"100px", float:"right", marginTop:"-10px"}} name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                        </fieldset>
                    </form>

                </div>
                <div className="rightPane">
                    <h1 style={{marginLeft:"20px"}}>Comments</h1>
                    <ul className="list1" style={{lineHeight:1.5}}>
                        {
                            comments.map((comment, index) =>(
                            <Comment
                                posted={"Posted on " + comment.posted.substring(0, 10) + " " + comment.posted.substring(11, 11+8)}
                                body={comment.body}
                            />
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="BottomBar">
                <div className="links">
                    <img src={github} width="25" alt=".github" style={{marginLeft: 10, marginRight:10}}/>
                    <img src={insta} width="25" alt=".instagram"style={{marginLeft: 10, marginRight:10}}/>
                    <img src={linkedin} width="25" alt=".linkedin" style={{marginLeft: 10, marginRight:10}}/>
                </div>
            </div>
        </div>

    )
}

export default Blog;