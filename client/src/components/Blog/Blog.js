import React, {useState, useEffect} from 'react';
import {useParams } from "react-router-dom";
import Card from "@material-ui/core/Card";
import "./Blog.css";
import Comment from "../comment/comment";
import github from "../../vecs/github.svg";
import insta from "../../vecs/instagram.svg";
import linkedin from "../../vecs/linkedin.svg";
import ReactMarkdown from 'react-markdown';
import copy_link from "../../vecs/copy_link.svg";
import upvotesrc from "../../vecs/upvote.svg";
import downvotesrc from "../../vecs/downvote.svg";
import upvote_filled from "../../vecs/upvote_filled.svg";
import downvote_filled from "../../vecs/downvote_filled.svg";
import {toast } from 'react-toastify';


const fetchBlog = async (id) => {
    const res = await fetch(`http://localhost:5000/posts?id=${id}`);
    const data = await res.json();
    return data;
}

const OnUpdatePost = (changes, id) =>{

    fetch(`http://localhost:5000/posts/update?id=${id}`, {
        method: 'PUT',
        body: JSON.stringify(changes),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) =>{});
  }

const fetchComments = async (id) => {
    const res = await fetch(`http://localhost:5000/comment?post_id=${id}`);
    const data = await res.json();
    return data;
}
const onSubmitFrom = (comment, comments, setComments) => {
    fetch('http://localhost:5000/comment/add/', {
            method: 'POST',
            body: JSON.stringify(comment),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (response.status >= 200 && response.status < 300) {
                var newComments = [comment].concat(comments);
                setComments(newComments);
            } else {
                alert("Error occured :(");
            }
        });
}
const onSubmit = (e, id, comments, setComments) =>{
    e.preventDefault();

    const comment = {
        post_id : id,
        body : document.getElementById('commentText').value,
        posted: new Date().toJSON()
    }
    onSubmitFrom(comment, comments, setComments);
}
function Blog() {
    let params = useParams();
    const [blog, setBlog] = useState(null);
    const [comments, setComments] = useState([]);
    const [upvotecount, setUpvoteCount] = useState(0);
    const [downvotecount, setDownvoteCount] = useState(0);
    const [upvote, setUpvote] = useState(false);
    const [downvote, setDownvote] = useState(false);
    const [upsrc, setUpSrc] = useState(upvotesrc);
    const [downsrc, setDownSrc] = useState(downvotesrc);

    useEffect(() =>{
        async function fetchData(){
            var requiredData = [fetchBlog(params._id), fetchComments(params._id)]
            var fetchedData = await Promise.all(requiredData);
            setBlog(fetchedData[0][0]);
            setComments(fetchedData[1]);
        }
        fetchData();
    }, [null]);

    useEffect(()=>{
        if(blog != null){
            setUpvoteCount(blog.upvotes);
            setDownvoteCount(blog.downvotes);
        }
    }, [blog]);


    const copy = () =>{
        navigator.clipboard.writeText(`${window.location.origin}/post/${blog._id}`);
        toast("Copied link to the post");
    }
    const onImageClick = (e) =>{
        var upcnt, downcnt;
        if(e.target.id === "uvote"){
            if(!upvote){
                upcnt = upvotecount + 1;
                downcnt = downvotecount;
                if(downvote)
                    downcnt -= 1;
                
                setUpvoteCount(upcnt);
                setDownvoteCount(downcnt);
                setUpvote(true);
                setDownvote(false);
                setUpSrc(upvote_filled);
                setDownSrc(downvotesrc);
            }
        }
        else{
            if(!downvote){
                downcnt = downvotecount + 1 ;
                upcnt = upvotecount;
                if(upvote)
                    upcnt -= 1;
                setUpvoteCount(upcnt);
                setDownvoteCount(downcnt);
                setUpvote(false);
                setDownvote(true);
                setUpSrc(upvotesrc);
                setDownSrc(downvote_filled);
            }
        }
        var changes = {
            
            upvotes : upcnt,
            downvotes : downcnt
        }
        //this.props.update(changes, this.props.id.toString());
        OnUpdatePost(changes, blog._id.toString());

    }
        
    
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
                                <img src={upsrc} width="22" alt=".upvote" style={{marginLeft: 10, marginRight:5}} id="uvote" onClick={(e) => onImageClick(e)}/>
                                <img src={downsrc} width="22" alt=".downvote" style={{marginLeft: 5, marginRight:5}} id="dvote" onClick={(e) => onImageClick(e)}/>
                                <img src={copy_link} width="22" alt=".link" style={{marginLeft: 5, marginRight:10}} id="link" onClick={(e) => copy()}/>
                            </div>
                        </div>
                        <p className="BlogTitle">{blog.title}</p>
                        <h3 style={{marginLeft: "20px", marginRight: "20px"}}>Short description</h3>
                        <p className='BlogShortDescription'>{blog.shortDescription}</p>
                        <br></br>
                        <ReactMarkdown className="blogBody">{blog.description}</ReactMarkdown>
                        <div className="AuthorBox">
                            <div className="AuthorBoxSub">
                                <p className="AuthorName">{blog.author}</p>
                                <p className="AuthorInfo">{blog.authorInfo}</p>
                            </div>
                        </div>
                    </Card>
                    <form id="contact" action="" method="post" onSubmit={(e) => onSubmit(e, blog._id, comments, setComments)}>
                        <p style={{"font-size":"15px", marginTop:"-50px"}}><b>Post a comment</b></p>
                        <fieldset>
                            <textarea className="TextArea" name="Text1" cols="40" rows="5" placeholder='Type something...' id='commentText'></textarea>
                        </fieldset>
                        
                        <fieldset>
                            <button style={{width:"100px", float:"right", marginTop:"-10px"}} name="submit" type="submit" id="contact-submit" data-submit="...Sending" >Submit</button>
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






/*

_italic_
**bold**
**_bold with italic_**
# header 1
## header 2
### header 3
#### header 4
##### header 5
###### header 6
[Visit GitHub!](www.github.com)
![](https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg)  

I read this interesting quote the other day:

> "Her eyes had called him and his soul had leaped at the call. To live, to err, to fall, to triumph, to recreate life out of life!" 

* Flour
* Cheese
* Tomatoes

1. Cut the cheese
2. Slice the tomatoes
3. Rub the tomatoes in flour

*/