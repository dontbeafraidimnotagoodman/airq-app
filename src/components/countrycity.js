import React from 'react'

class CountryCity extends React.Component{
    state={
        city:undefined,
    }

    componentDidMount(){

    }
    render(){
        return(
            <div>
                    <select type="text" name="country" onChange={this.props.handleCountryCity}>
                        <option value="AD">Andorra</option>
                        <option value="AR">Argentina</option>
                        <option value="BE">Belgium</option>
                        <option value="BR">Brazil</option>
                        <option value="CA">Canada</option>
                        <option value="CL">Chile</option>
                        <option value="CN">China</option>
                        <option value="CO">Colombia</option>
                        <option value="HR">Croatia</option>
                        <option value="DK">Denmark</option>
                        <option value="FI">Finland</option>
                        <option value="FR">France</option>
                        <option value="DE">German</option>
                        <option value="HK">Hong Kong</option>
                        <option value="IN">India</option>
                        <option value="IQ">Iraq</option>
                        <option value="IE">Ireland</option>
                        <option value="IL">Israel</option>
                        <option value="IT">Italy</option>
                        <option value="LV">Latvia</option>
                        <option value="LU">Luxembourg</option>
                        <option value="MX">Mexico</option>
                        <option value="MN">Mongolia</option>
                        <option value="NL">Netherlands</option>
                        <option value="NG">Nigeria</option>
                        <option value="NO">Norway</option>
                        <option value="PH">Philipines</option>
                        <option value="PL">Poland</option>
                        <option value="RU">Russia Federation</option>
                        <option value="SG">Singapore</option>
                        <option value="ZA">South Africa</option>
                        <option value="ES">Spain</option>
                        <option value="SE">Sweden</option>
                        <option value="TW">Taiwan, Province of China</option>
                        <option value="TH">Thailand</option>
                        <option value="GB">United Kindom</option>
                        <option value="US">United States</option>
                        <option value="VN">Viet Nam</option>
                    </select>              
            </div>
        )
    }
}
export default CountryCity;