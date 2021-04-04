/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */

import React from 'react';

// BEGIN (write your solution here)
class MyForm extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      state: 'editing',
	  email: '',
	  password: '',
	  address: '',
	  city: '',
	  country: '',
	  acceptRules: false
    };
  }
  
  handleSubmit = (e) => {
    e.preventDefault ();
    this.setState ({
      state: 'viewing'
    });
  }
  
  handleBack = (e) => {
    e.preventDefault ();
    this.setState ({
      state: 'editing'
    });
  }
  
  handleInputChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({
		[e.target.name]: value
    });
  }
  
  renderForm () {
    return <form name="myForm" onSubmit={this.handleSubmit}>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="email" className="col-form-label">Email</label>
      <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} className="form-control" id="email" placeholder="Email"/>
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="password" className="col-form-label">Password</label>
      <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} className="form-control" id="password" placeholder="Password"/>
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="address" className="col-form-label">Address</label>
    <textarea type="text" className="form-control" value={this.state.address} onChange={this.handleInputChange} name="address" id="address" placeholder="1234 Main St"></textarea>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="city" className="col-form-label">City</label>
      <input type="text" className="form-control" name="city" id="city" value={this.state.city} onChange={this.handleInputChange}/>
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="country" className="col-form-label">Country</label>
      <select id="country" name="country" className="form-control" value={this.state.country} onChange={this.handleInputChange}>
        <option>Choose</option>
        <option value="argentina">Argentina</option>
        <option value="russia">Russia</option>
        <option value="china">China</option>
      </select>
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <label className="form-check-label" htmlFor="rules">
        <input id="rules" type="checkbox" name="acceptRules" className="form-check-input" checked={this.state.acceptRules} onChange={this.handleInputChange}/>
        Accept Rules
      </label>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Sign in</button>
</form>
  }
    
  getForm () {
    return Object.entries(this.state)
    .map(([key, value]) => {return {'key': key, 'value': value}})
    .filter((x) => {return x.key !== 'state'})
    .sort((a,b) => b.key.localeCompare(a.key))
    .reverse();
  }
  
  renderTable () {
    const form  = this.getForm();
      return <div>
        <button type="button" className="btn btn-primary" onClick={this.handleBack}>Back</button>
        <table className="table">
           <tbody>
             {form.map(item => <tr key={item.key}>
            <td>{item.key}</td>
            <td>{item.value.toString()}</td>
          </tr>)}
          </tbody>
      </table>
    </div>;
  }
  
  render () {
    switch (this.state.state) {
      case 'editing':
        return this.renderForm();
      case 'viewing':
        return this.renderTable();
    }
  }
}

export default MyForm;
// END
