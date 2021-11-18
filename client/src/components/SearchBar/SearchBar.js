import React from 'react';
import './SearchBar.css'


class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchString: ""
        }
        this.searchRef= React.createRef();
    }
    getDataFromAPI(){

    }
    handleChange(searchQuery){
        this.setState({searchString : searchQuery});
    }
    render(){
        return(
            <div className="SearchBarContainer">
                <input
                    className="searchbar"
                    type="text"
                    ref={this.searchRef}
                    onInput={e => this.handleChange(e.target.value)}
                    placeholder="Search for Author"
                />
                <button className="submit" type="submit">Search</button>
            </div> 
        )
    }
}
export default SearchBar