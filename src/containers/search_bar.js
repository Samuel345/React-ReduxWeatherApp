import React, {Component} from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        
        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    
    onInputChange(event){
        this.setState({term: event.target.value});
    }
    
    onFormSubmit(event){
        event.preventDefault();
        
    }
    
    render(){
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input 
                className="form-control"
                placeholder="Enter the city you want to get 5 days forcast."
                value= {this.state.term}
                onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit </button>
                </span>
            </form>
        );
    }
}

export default SearchBar;