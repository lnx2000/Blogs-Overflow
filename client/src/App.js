import logo from './logo.svg';
import React  from 'react';
import './App.css';
import BlogItem from './components/BlogItem/BlogItem';
import github from "./vecs/github.svg";
import insta from "./vecs/instagram.svg";
import linkedin from "./vecs/linkedin.svg";
import SearchBar from "./components/SearchBar/SearchBar"
import InputForm  from './components/InputForm/InputForm';
import { Input } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <div className="TopBar"/>
      <SearchBar/>
      <div className="SplitScreen">
        <div className="LeftPane">
          <ul className="list1">
            <BlogItem></BlogItem>
            <BlogItem></BlogItem>
            <BlogItem></BlogItem>
            <BlogItem></BlogItem>
          </ul>
        </div>
        <div className="RightPane">
        <ul className="list2"> 
            <BlogItem></BlogItem>
            <BlogItem></BlogItem>
            <BlogItem></BlogItem>
          </ul>
        </div>
      </div>
      <InputForm/>
      <div className="BottomBar">
        <div class="links">
            <img src={github} width="25" style={{marginLeft: 10, marginRight:10}}/>
            <img src={insta} width="25" style={{marginLeft: 10, marginRight:10}}/>
            <img src={linkedin} width="25" style={{marginLeft: 10, marginRight:10}}/>
        </div>
      </div>
    </div>
  );
}

export default App;
