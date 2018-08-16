import React, { Component } from 'react';
import "isomorphic-fetch";
import Data from './Input.js';
import { Navbar } from 'react-bootstrap';

class App extends Component {
  
    constructor(props){
    
    super(props);
    this.state = {
      apiData: []
    };
    
  }
  
  componentDidMount(){
    var freqMap = {};
    
    fetch('https://damp-wave-96092.herokuapp.com/')
      .then( (response) => {return response.json()} )
      .then( (data) =>  {
        console.log('Terribly Tiny Tales Challenge');
        //console.log(data.success);
        
        var words = (data.success).replace(/[.]/g, '').split(/\s/);
        words.forEach(function(w) {
            if (!freqMap[w]) {
                freqMap[w] = 0;
            }
            freqMap[w] += 1;
        });
        //console.log(freqMap);
        
        var items = Object.keys(freqMap).map(function(key) {
            return [key, freqMap[key]];
        });
        
        var solution = items.sort(function(first, second) {
            return second[1] - first[1];
        });
        
        //console.log(solution[100][0])
        
        this.setState({
          apiData: solution,
        })
        
      })
    
  }
  
  
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="http://terriblytinytales.com/test.txt">Word-Occurance - TTT</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Data mydata={this.state.apiData} />
      </div>
    );
  }
}

export default App;
