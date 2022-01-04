import React, {useState, useEffect} from 'react';
import { render } from "react-dom";
import { Routes, Route, useParams } from "react-router-dom";


const fetchBlog = async (id) => {
    console.log("fetching blog")
    const res = await fetch(`http://localhost:5000/posts?id=${id}`);
    const data = await res.json();
    console.log(data);
    return data;
}

const fetchComments = async (id) => {
    const res = await fetch(`http://localhost:5000/comments?post_id=${id}`);
    const data = await res.json();
    console.log(data);
    return data;
}

function Blog() {
    console.log("blog just called");
    let params = useParams();
    const [blog, setBlog] = useState(null);
    const [comments, setComments] = useState([]);

    var requiredData = [fetchBlog(params._id)]//, fetchComments(params._id)]
    var fetchData = Promise.all(requiredData);

    // useEffect(() =>{
    //     setBlog(fetchData[0]);
    //     setComments(fetchData[1]);
    // }, []);

    return <h1>{params._id}</h1>
}

export default Blog;