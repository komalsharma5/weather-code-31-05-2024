import React, { Component } from 'react'
import Search from './Search'
import Result from './Result'
import axios from 'axios'
import Recent from './Recent'


export class Wether extends Component {
  constructor() {
    super();

    this.state = {
      lat: "",
      lon: "",
      city: "",
      wetherData: null,
      loading : false,
      recent: []
    };
  }
  onChangeHandler = (e) => {
    //alert("hfyyfyf")
    const name = e.target.name;

    if (name === "city"){
      this.setState({
        city: e.target.value
      })
    }else if(name === "lat"){
      this.setState({
        lat: e.target.value
      })
    }else if(name === "lon"){
      this.setState({
        lon: e.target.value
      })
    }else{
      console.log("not valid");
    }
  };
  searchHandler = (e) => {
    //alert('bhhh')
    e.preventDefault();
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=239fced8729bd7c81308132238adf737`)
    .then((res) =>{
      //console.log(res);
      this.setState({
        city : res.data.name,
        wetherData : res.data
      },()=>{
        this.recentDataHandler()
      })
    }).catch((err) => {
      console.log(err);
    })
  }
  locationHandler=(e)=>{
   // alert('sddsfs')
   e.preventDefault();
   this.setState({
    loading : true
   })

   if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
        (res)=>  { 
          setTimeout(()=>{
          this.setState({
            lat:res.coords.latitude,
            lon:res.coords.longitude
          }) 
          
         const{ latitude,longitude}=res.coords
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=239fced8729bd7c81308132238adf737`).then((res)=> {
              this.setState({
                city: res.data.name,
                wetherData:res.data,
                loading : false
        
              },() =>{
                this.recentDataHandler()
              })
            })
            .catch((err)=>{
                  console.log(err);
            })
        },3000)
   },
    (err)=>{
      console.log(err);
    }
    )
  }else{
          console.log("Geolocation is not support.......");
   }
  }
  recentDataHandler = () =>{
    //console.log(this.state.recent)
    const Recent = this.state.recent
    console.log(Recent);
    Recent.push({
      city: this.state.city,
      lat : this.state.lat,
      lon : this.state.lon
    })
    this.setState({ Recent })
  }
  researchHandler = (lat, lon) => {
    // alert('hbh')
    this.setState({
      lat : lat,
      lon : lon
    })
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=239fced8729bd7c81308132238adf737`)
    .then((res)=> {
      console.log(res);
              this.setState({
                city: res.data.name,
                wetherData:res.data,
                loading : false
            })
          }).catch((err)=>{
                  console.log(err);
            })
       }
  render() {
   // console.log(this.state);
    return (
      <div>
        <Search
          lat={this.state.lat}
          lon={this.state.lon}
          city={this.state.city}
          change={this.onChangeHandler} location={this.locationHandler}
         search={this.searchHandler}></Search>
        <Result loading={this.state.loading} wetherData={this.state.wetherData}></Result>
        <Recent recent={this.state.recent} research={this.researchHandler}></Recent>
      </div>
    )
  }
}

export default Wether;