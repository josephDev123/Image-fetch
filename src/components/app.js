import React from 'react';
import Axios from 'axios';
import Search from './searchcomponent';
import Image from './mainImage';


class App extends React.Component{
state={
    finalImageText: []
}
    getTextValueFromSearch =(item_text)=>{
        
            Axios.get('https://api.unsplash.com/search/photos',{
                   params: { query: item_text },
                   headers:{ Authorization: 'Client-ID D2Lblwxyvo2INe2kFs5uc-i5wzEIiLvbXYwvjQepFoY'}
           
               }).then(response =>  this.setState({
                        finalImageText:response.data.results
                    }))
               .catch(error =>console.log(error))
        
    }


    render(){
        return(
            <div className="ui container">
                <Search  textProp = {this.getTextValueFromSearch}/>
                <Image images = {this.state.finalImageText} />
                
            </div>
        );
    }
}

export default App;