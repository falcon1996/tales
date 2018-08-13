import React, {Component} from 'react';

const newStyle = {
  fontSize: '25px',
  textAlign: 'center',
  margin: '100px',
};


class Data extends Component {
    
    
    /*
  
    Takes numeric user input and displays
    first 'n' words from the final data. 
  
    */
    
    constructor(props){
        super(props);
        this.state = {
            num: 0,
            mydisplay: [],
        }
        
    }
    
    mysubmit = (event) => {
        event.preventDefault();
        
        this.setState({
            mydisplay: this.props.mydata.slice(0,this.state.num),
        });
            
    }
    
    inputchange = (event) => {
        event.preventDefault();
        this.setState({
            num: event.target.value
        });
    }
    
    
    render(){
                
        const items = this.state.mydisplay.map( (item,i) => {
            return(
                    <li key={i}>'{item[0]}' occurs {item[1]} times
            		        <br /><br />
                    </li>
                );  
        });
        
        return(
            <div>
                <h3 style={{marginLeft: '30px'}}> <ol style={newStyle}>{items}</ol> </h3>
                <form onSubmit={this.mysubmit}>
                    <input placeholder='Number' onChange={this.inputchange} value={this.state.num} className="form-control" />
                    <button type='submit' className="btn btn-success">Submit!</button>
                </form>
            </div>
        );
    }
}

export default Data;