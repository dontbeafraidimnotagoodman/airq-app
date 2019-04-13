import React from 'react'

class CountryCity extends React.Component{
    state={
        country:[],
        city:[],
    }
    async fetchcountry(){
        const getcountry=await fetch(`https://api.openaq.org/v1/countries`);
        const countrydata=getcountry.json();
        let temp_country=[]
        for(let i=0;i<countrydata.results.length;i++){
            temp_country.push(<option value={countrydata.results[i].code}>{countrydata.results[i].name}</option>);
        }
        this.setState({
            country:temp_country
        })
    }
    componentDidMount(){

    }
    render(){
        return(
            <div>
                <form onSubmit={this.props.handleCountryCity}>
                    <select type="text" name="country">
                        {this.state.country}
                    </select>
                    <select type="text" name="city">
                        {this.state.city}
                    </select>
                </form>
                
            </div>
        )
    }
}
export default CountryCity;