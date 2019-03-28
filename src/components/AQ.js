import React from 'react';
import './AQ.css';

class AQ extends React.Component{
    render(){
        return(
            <div className="AQ">
                <div></div>
                <div>
                    {this.props.city && <p>city:{this.props.city}</p>}
                    {this.props.so2 && <p>so2:{this.props.so2} µg/m³</p>}
                    {this.props.pm10 && <p>PM 10:{this.props.pm10} µg/m³</p>}
                    {this.props.o3 && <p>O3:{this.props.o3} µg/m³</p>}
                    {this.props.no2 && <p>NO2:{this.props.no2} µg/m³</p>}
                    {this.props.co && <p>CO:{this.props.co} µg/m³</p>}
                    {this.props.pm25 && <p>PM2.5:{this.props.pm25} µg/m³</p>}
                    {this.props.error && <p>error:{this.props.error}</p>}
                    {this.props.localtime && <p>Local Time:{this.props.localtime}</p>}
                </div>
                <div></div>
            </div>
        )
    }
}

export default AQ;