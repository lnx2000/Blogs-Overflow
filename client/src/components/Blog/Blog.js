import React from 'react';
import { render } from "react-dom";
import { Routes, Route, useParams } from "react-router-dom";

function Blog() {
    let params = useParams();
    return <h1>Invoice {params._id}</h1> ;
}

export default Blog;