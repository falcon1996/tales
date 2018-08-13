import React, { Component } from 'react';
import "isomorphic-fetch";
import Data from './Input.js';

class App extends Component {

  /*
  
  Takes text data from /myapi because of CORS using proxy and 
  converts it into [word, wordFrequency] form.
  Furthur sends it into Data component for user interactions.
  
  */
  
    constructor(props){
    
    super(props);
    this.state = {
      apiData: []
    };
    
  }
  
  componentDidMount(){
    var freqMap = {};
    
    fetch('/myapi')
      .then( (response) => {return response.json()} )
      .then( (data) =>  {
        console.log('API DATA:');
        
        // Converts data into {word: wordFrequency} form.
        
        var words = (data.success).replace(/[.]/g, '').split(/\s/);
        words.forEach(function(w) {
            if (!freqMap[w]) {
                freqMap[w] = 0;
            }
            freqMap[w] += 1;
        });
        
        //Converts data into [word,wordFrequency] form [Array(2), Array(2), Array(2), Array(2)]
        
        var items = Object.keys(freqMap).map(function(key) {
            return [key, freqMap[key]];
        });
        
        //Performs sorting on the final array
        
        var solution = items.sort(function(first, second) {
            return second[1] - first[1];
        });
        
        
        this.setState({
          apiData: solution,
        })
        
      })
    
  }
  
  
  render() {
    return (
      <div className="App">
        <Data mydata={this.state.apiData} />
      </div>
    );
  }
}

export default App;
