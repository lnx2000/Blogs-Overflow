import React from 'react';
import './NoData.css'
import empty from '../../vecs/empty.svg'

class NoData extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <div className="arrange-vertically">
                <img src={empty} alt={"No Post Found"} width={100}/><br/>
                <a href='https://www.freepik.com/'> www.freepik.com</a>
                <h2>No Data Found</h2>
            </div> 
        )
    }
}
export default NoData