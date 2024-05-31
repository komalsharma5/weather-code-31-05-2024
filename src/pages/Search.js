import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

export class Search extends Component {
  constructor(props) {
    super(props)
  
    this.props=props
  }
  
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <form>
                <div className="mb-3 mt-5">
                  <label className="form-label">Enter City</label>
                  <input type="text" className="form-control" value={this.props.city} onChange={this.props.change} name='city' placeholder='Enter City Name'></input>
                </div>
              </form>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <form>
              <div className="mb-3">
                  <button className='btn' onClick={this.props.location}>Get Co-ordinate<span className=" ms-2 mt-5 material-symbols-outlined" >my_location</span></button>
                  </div>
                <div className="mb-3">
                  <label className="form-label">Lat:</label>
                  <input type="number" className="form-control"  value={this.props.lat} onChange={this.props.change} name='lat' placeholder='Enter latitute'></input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Lon</label>
                  <input type="number" className="form-control"  value={this.props.lon}  onChange={this.props.change} name='lon' placeholder='Enter longitude'></input>
                </div>
                <div className="mb-3">
                  <button className="btn" onClick={this.props.search}>search<i className="fa fa-search ms-3" style={{fontSize:"24px"}}></i></button>
                  
                </div>  
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;
