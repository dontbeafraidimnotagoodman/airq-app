import React from 'react';
import './App.css';
import Form from './components/Form';
import AQ from './components/AQ';
import Title from './components/Title';
import Airqplot from './components/Airqplot';
import moment from 'moment';
import CountryCity from './components/countrycity';
import CityForm from './components/CityForm';


class App extends React.Component {
  state={
    city:undefined,
    location:undefined,
    so2:undefined,
    pm10:undefined,
    o3:undefined,
    no2:undefined,
    co:undefined,
    pm25:undefined,
    error:undefined,
    localtime:undefined,
    test_time:moment(new Date(),'YYYY/MM/DD',false).startOf('day').format('YYYY-MM-DD'),
    test_time_from:moment(new Date(),'YYYY/MM/DD',false).startOf('day').format('YYYY-MM-DD'),

    pltdata_so2:undefined,
    pltdata_pm10:undefined,
    pltdata_o3:undefined,
    pltdata_co:undefined,
    pltdata_no2:undefined,
    pltdata_pm25:undefined,
    pltdata_time:undefined,
    loc:undefined,
    choosecity:undefined,
    country:undefined,
  }

  handleCountryCity(e){
    e.preventDefault();
    this.setState({
      country:e.target.value,
    });
    console.log(e.target.value);
  }

  handleCityForm(e){
    e.preventDefault();
    this.setState({
      choosecity:e.target.cityform.value,
    })
    console.log(e.target.cityform.value)
  }

  handleDayChange(day){
    const true_day=moment(day,'YYYY/MM/DD',false).startOf('day').format('YYYY-MM-DD');
    let week_ago=moment(true_day).subtract(7, 'days');
    week_ago=moment(week_ago,'YYYY/MM/DD',false).startOf('day').format('YYYY-MM-DD');
    this.setState({
      test_time:true_day,
      test_time_from:week_ago,
    });
  }
  getAirQ = async(e)=>{
    e.preventDefault();
    const this_city="武汉市";
    const this_country="CN";
    const location=e.target.elements.location.value;
    console.log(this.state.test_time);
    const api_call=await fetch(`https://api.openaq.org/v1/measurements?city=${this_city}&country=${this_country}&location=${location}&date_from=${this.state.test_time}&date_to=${this.state.test_time}`);
    const data=await api_call.json();

    const another_call=await fetch(`https://api.openaq.org/v1/measurements?city=${this_city}&country=${this_country}&location=${location}&date_from=${this.state.test_time_from}&date_to=${this.state.test_time}&limit=1000`);
    const pltdata=await another_call.json();
    
    let pltdata_so2=[];
    let pltdata_pm10=[];
    let pltdata_o3=[];
    let pltdata_no2=[];
    let pltdata_co=[];
    let pltdata_pm25=[];
    let pltdata_time=[];
    
     /* pltdata_so2.push(pltdata[so2]);
      pltdata_o3.push(pltdata[o3]);
      pltdata_pm10.push(pltdata[pm10]);
      pltdata_no2.push(pltdata[no2]);
      pltdata_co.push(pltdata[co]);
      pltdata_pm25.push(pltdata[pm25]);
    });
    */
    console.log(pltdata_time);
    console.log(pltdata);
    console.log(data);
    if (data.statusCode==='404' || data.meta.found=== 0){
      this.setState({
        city:undefined,
        location:undefined,
        so2:undefined,
        pm10:undefined,
        o3:undefined,
        no2:undefined,
        co:undefined,
        pm25:undefined,
        error:"Bad Request, please check time and location",
        localtime:undefined
      });
    }else{
      let d=0;
      for (let i=pltdata.results.length-1;i>=0;i--){
        if (pltdata.results[i].parameter==='so2'){
          pltdata_so2.push(pltdata.results[i].value)
        }else if(pltdata.results[i].parameter==='pm10'){
          pltdata_pm10.push(pltdata.results[i].value)
        }else if(pltdata.results[i].parameter==='o3'){
          pltdata_o3.push(pltdata.results[i].value)
        }else if(pltdata.results[i].parameter==='no2'){
          pltdata_no2.push(pltdata.results[i].value)
        }else if(pltdata.results[i].parameter==='co'){
          pltdata_co.push(pltdata.results[i].value)
        }else if(pltdata.results[i].parameter==='pm25'){
          pltdata_pm25.push(pltdata.results[i].value);
          pltdata_time.push(d);
          d++;
        }
      }
      pltdata_time.reverse();
      this.setState({
        city:data.results[0].city,
        location:data.results[0].location,
        so2:data.results[0].value,
        pm10:data.results[1].value,
        o3:data.results[2].value,
        no2:data.results[3].value,
        co:data.results[4].value,
        pm25:data.results[5].value,
        error:undefined,
        localtime:data.results[0].local,
        pltdata_so2:pltdata_so2,
        pltdata_pm10:pltdata_pm10,
        pltdata_o3:pltdata_o3,
        pltdata_co:pltdata_co,
        pltdata_no2:pltdata_no2,
        pltdata_pm25:pltdata_pm25,
        pltdata_time:pltdata_time,
      });
    }
  }
  render() {
    return (
      <div>
          <div>
          <Title />
          <CountryCity handleCountryCity={this.handleCountryCity.bind(this)}/>
          {this.state.country && <CityForm handleCityForm={this.handleCityForm.bind(this)}/>}
          {this.state.choosecity && <Form getAirQ={this.getAirQ} handleDayChange={this.handleDayChange.bind(this)}/>}
          <div className="airq-display">
            <div className="text-dis">
              <AQ city={this.state.city}
                location={this.state.location}
                so2={this.state.so2}
                pm10={this.state.pm10}
                o3={this.state.o3}
                no2={this.state.no2}
                co={this.state.co}
                pm25={this.state.pm25}
                error={this.state.error}
                localtime={this.state.localtime}/>
            </div>
            <div className="img-dis"></div>
          </div>
          </div>
          <div className="plot-display">
            <Airqplot pltdata_so2={this.state.pltdata_so2} 
            pltdata_pm10={this.state.pltdata_pm10}
            pltdata_co={this.state.pltdata_co}
            pltdata_no2={this.state.pltdata_no2}
            pltdata_o3={this.state.pltdata_o3}
            pltdata_pm25={this.state.pltdata_pm25}
            pltdata_time={this.state.pltdata_time}/>
          </div>
      </div>
    );
  }
}

export default App;
