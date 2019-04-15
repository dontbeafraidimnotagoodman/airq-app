import React from 'react'

class CityForm extends React.Component{
    render(){
        return(
            <div>
                <form onSubmit={this.props.handleCityForm}>
                    <input type="text" placeholder="city name..." name="cityform" />
                    <button>Enter City Name</button>
                </form>
            </div>
        )
    }
}

export default CityForm;