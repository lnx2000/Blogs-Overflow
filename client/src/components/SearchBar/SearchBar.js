import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
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
        this.state.searchString = searchQuery;
        console.log(this.state.searchString);
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