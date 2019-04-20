import React from 'react';
import './cityformcss.css';

class CityForm extends React.Component{
    render(){
        return(
            <div className="city-form">
                <div>

                </div>
                <div>
                    <form onSubmit={this.props.handleCityForm}>
                        <input type="text" placeholder="city name..." name="cityform"/>
                        <button>Submit City Name</button>
                    </form>
                </div>
                <div>

                </div>
                
            </div>
        )
    }
}

export default CityForm;