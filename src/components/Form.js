import React from 'react';
import './Form.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Form extends React.Component{
    state={
        startDate:new Date(),
        op_tag:[],
    };
    createTag(){
        let tag=[];
        for(let i=0;i<this.props.locations.length;i++){
            tag.push(<option value={this.props.locations[i]} key={i}>{this.props.locations[i]}</option>);
        }
        this.setState({
            op_tag:tag,
        })
    }
    componentDidMount(){
        this.createTag()
    }
    shouldComponentUpdate(){
        this.createTag()
    }
    handleChange(date){
        this.setState({
            startDate: date
        });
        this.props.handleDayChange(date);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.props.getAirQ}>
                    <div className="input-Form">
                    <div>
                    </div>
                        <div id="inner-form">
                            <div></div>
                            <div> 
                                <select type="text" name="location">
                                    {this.state.op_tag}
                                </select>
                                <DatePicker 
                                            dateFormat="yyyy/MM/dd"        
                                            selected={this.state.startDate}
                                            onChange={this.handleChange.bind(this)}
                                            todayButton={"today"}
                                            placeholderText={"2019/01/01"}
                                            className="picker"
                                    />
                                <button>Get Air Quality</button>
                            </div>
                            <div></div> 
                        </div>
                        <div></div>
                    </div>
                </form>
            </div>
        )
    }
}
  


export default Form;