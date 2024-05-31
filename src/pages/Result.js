import React, { Component } from "react";
import Loader from "../componets/Loader";

export class Result extends Component {
  constructor(props){
    super(props)

    this.props = props 
  }
  render () {
   //console.log(this.props.weatherData)

   let { wetherData: wdata } = this.props;
   //console.log('wdata',wdata);
   
   const ktoc = (k) =>{
    return (k - 273.15).toFixed(2)+" °C"
   }

   const getTime = (time) =>{
    const date = new Date(time * 1000)
    //console.log(date);
    return date.toLocaleTimeString()
   }
   let showData;

    if(this.props.wetherData === null){
      //showData = <Loader></Loader>
      if(this.props.loading === true){
        showData = <Loader></Loader>
      }else{
        showData = ""
      }
    }else{
      showData = (
    
        <div className="container mt">
          <div className="row">
            <div className="col">
              <div className="card border-primary">
                <div className="card-body">
                  <h4 className="card-title">
                    <img src={`https://openweathermap.org/img/wn/${wdata.weather[0].icon}@2x.png`} alt=''></img>
                    <span className="pl-2 ms-3 ">{wdata.weather[0].description}</span>
                  </h4>
                  <div className="row">
                    <div className="col">
                      <div className="row">
                        <table className="table">
                          <tbody>
                            <tr>
                              <th>Feels Like</th>
                              <td>{ktoc(wdata.main.feels_like)}</td>
                            </tr>
                            <tr>
                              <th>Min.Temp</th>
                              <td>{ktoc(wdata.main.temp_min0)}</td>
                            </tr>
                            <tr>
                              <th>Max.Temp</th>
                              <td>{ktoc(wdata.main.temp_max)}</td>
                            </tr>
                            <tr>
                              <th>Sun Rise</th>
                              <td>{getTime(wdata.sys.sunrise)}</td>
                            </tr>
                            <tr>
                              <th>Sun Set</th>
                              <td>{getTime(wdata.sys.sunset)}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       )
  }
  return (
    <>
      {showData}
    </>
  );
}

}

export default Result
