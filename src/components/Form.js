import React from 'react';
import './Form.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Form extends React.Component{
    state={
        startDate:new Date(),
        op_tag:[],
    };
    componentDidMount(){
/*
        let tag=[];
        for(let i=0;i<this.props.locations.length;i++){
            tag.push(<option value={this.props.locations[i]}>{this.props.locations[i]}</option>);
        }
        this.setState({
            op_tag:tag,
        })
*/
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
                                    <option value="东湖梨园">东湖梨园</option>
                                    <option value="吴家山">吴家山</option>
                                    <option value="武昌紫阳">武昌紫阳</option>
                                    <option value="民族大道182号">民族大道182号</option>
                                    <option value="汉口江滩">汉口江滩</option>
                                    <option value="汉口花桥">汉口花桥</option>
                                    <option value="汉阳月湖">汉阳月湖</option>
                                    <option value="沉湖七壕">沉湖七壕</option>
                                    <option value="沌口新区">沌口新区</option>
                                    <option value="青山钢花">青山钢花</option>
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