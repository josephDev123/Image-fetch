import React from 'react';
import './imagestyle.css';
class Search extends React.Component{
    //state
    state = {
        text: ''
    }


    //update state with input field value
    onInputChange = (e)=>{
        this.setState({
            text:e.target.value
        })  
       
    }

    //onsubmit function 
    getSubmitData =()=>{
     this.props.textProp(this.state.text);
        
    }
   
    
    render(){
        return(
            <div className="ui container">
                <label>Search for Image</label>
                    <div className="ui inverted segment">
                         
                             <input  type="text" value={this.state.text} onChange={this.onInputChange} placeholder="Search..." />
                      
                    </div>
                <div className="ui input"><input onClick={this.getSubmitData} type="submit" value="submit"/></div>
            </div>

        )
        
    }

}

export default Search;