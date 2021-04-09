// @ts-check

import axios from 'axios';
import React from 'react';

// BEGIN (write your solution here)
class Autocomplete extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      countries: [],
      text: ''
    }
  }
  
  handleInputChange = async (e) => {
    const value = e.target.value;
    this.setState({
		text: value
    });
    let countries = [];
    if (value !== '') {
      const res = await axios.get('/countries', { params: { term: value } });
      countries = res.data;
    }
    this.setState ({
      countries: countries
    });
    console.log(countries);
  }
  
  renderCountries () {
    const {countries} = this.state;
    return countries.length > 0 && <ul>
        {countries.map (x=> <li key={x}>{x}</li>) }
    </ul>;
  }
  
  render () {
    return <div>
      <form>
        <div className="form-group">
          <input type="text" value = {this.state.text} onChange={this.handleInputChange} className="form-control" placeholder="Enter Country"/>
        </div>
      </form>
      {this.renderCountries()}
    </div>;
  }
}

export default Autocomplete;
// END
