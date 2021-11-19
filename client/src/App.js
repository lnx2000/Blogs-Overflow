import React  from 'react';
import './App.css';
import BlogItem from './components/BlogItem/BlogItem';
import github from "./vecs/github.svg";
import insta from "./vecs/instagram.svg";
import linkedin from "./vecs/linkedin.svg";
import SearchBar from "./components/SearchBar/SearchBar"
import InputForm  from './components/InputForm/InputForm';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { posts:[], filtered_posts:[]};
  }

  callAPI(){
    fetch("http://localhost:5000/posts")
    .then(res => res.json())
    .then(res =>this.setState({posts : res, filtered_posts:res}
    ))

  }
  componentWillMount(){
      this.callAPI();
  }
  onSubmitFrom = (post) => {
    fetch('http://localhost:5000/posts/add/', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (response.status >= 200 && response.status < 300) {
              
            } else {
                alert("Error occured :(");
            }
        });
  }

  onQuery = (queryString) => {
    var _filtered_posts = []
    var posts = this.state.posts;
    if(queryString === ""){
      this.setState({filtered_posts: posts});
    }
    else{
      for(let i=0;i<posts.length;i++){
        if(posts[i].title.toLowerCase().includes(queryString.toLowerCase()))
          _filtered_posts.push(posts[i]);
      }
      this.setState({filtered_posts : _filtered_posts});
    }
  }
  render(){
    var posts = this.state.filtered_posts;
    var posts1 = [], posts2 = [];
      for(let i=0;i<posts.length;i++){
        if(i%2 === 0){
          posts1.push(posts[i]);
        }
        else{
          posts2.push(posts[i]);
        }
      }
    return (
      <div className="App">
        <div className="TopBar"/>
        <SearchBar onQuery={this.onQuery}/>
        <NoData>/
        <a href='https://www.freepik.com/vectors/box'>Box vector created by brgfx - www.freepik.com</a>
        <div className="SplitScreen">
          <div className="LeftPane">
            <ul className="list1">
              {
                posts1.map((post, index) =>(
                  <BlogItem author={post.author} authorInfo={post.authorInfo} title={post.title} description={post.description} created={post.created}/>
                ))
              }
            </ul>
          </div>
          <div className="RightPane">
            <ul className="list2"> 
              {
                posts2.map((post, index) =>(
                  <BlogItem author={post.author} authorInfo={post.authorInfo} title={post.title} description={post.description} created={post.created}/>
                ))
                }
            </ul>
          </div>
        </div>
        <InputForm onSubmit = {this.onSubmitFrom}/>
        <div className="BottomBar">
          <div className="links">
              <img src={github} width="25" alt=".github" style={{marginLeft: 10, marginRight:10}}/>
              <img src={insta} width="25" alt=".instagram"style={{marginLeft: 10, marginRight:10}}/>
              <img src={linkedin} width="25" alt=".linkedin" style={{marginLeft: 10, marginRight:10}}/>
          </div>
        </div>
      </div>
    );
  }
}

////this.state.posts.map((post) => <BlogItem author={post.author} authorInfo={post.authorInfo} title={post.title} description={post.description}/>)
export default App;
