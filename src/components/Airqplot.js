import React from 'react';
import Plot from 'react-plotly.js';


class Airqplot extends React.Component{
    constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    
    componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    render(){
        return(
            <div className='airqplot'>
                <div  className='aiqplot-1'>
                    <Plot data={[{x:this.props.pltdata_time, 
                        y:this.props.pltdata_co,
                        type: 'scatter',
                        color:'orange',
                        name:'co',}]} 
                        layout={{xaxis:{autorange:'reversed'},width: this.state.width,title:'CO in the past week'}}
                        />
                </div>
                <div className='airqplot-2'>
                    <Plot data={[{x:this.props.pltdata_time, 
                    y:this.props.pltdata_so2,
                    type: 'scatter',
                    color:'red',
                    name:'so2',
                    },
                    {
                        x:this.props.pltdata_time, 
                        y:this.props.pltdata_pm10,
                        type: 'scatter',
                        color:'blue',
                        name:'pm10',

                    },{
                        x:this.props.pltdata_time, 
                        y:this.props.pltdata_no2,
                        type: 'scatter',
                        color:'black',
                        name:'no2',

                    },{
                        x:this.props.pltdata_time, 
                        y:this.props.pltdata_o3,
                        type: 'scatter',
                        color:'green',
                        name:'o3',

                    },{
                        x:this.props.pltdata_time, 
                        y:this.props.pltdata_pm25,
                        type: 'scatter',
                        color:'purple',
                        name:'pm25',

                    }]}
                    layout={{xaxis:{autorange:'reversed'},width: this.state.width,title:'Airquality in the past week for the chosen date'}}
                    />
                </div>
            </div>
        )
    }
}

export default Airqplot;