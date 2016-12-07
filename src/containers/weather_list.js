import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component{
    renderWeather(weather){
        const name = weather.city.name;
        const temperature = weather.list.map(weather => weather.main.temp);
        const pressure = weather.list.map(weather => weather.main.pressure);
        const humidity = weather.list.map(weather => weather.main.humidity);
        const lat = weather.city.coord.lat;
        const lon = weather.city.coord.lon;
        
        return (
            <tr key={name}>
                <td> <GoogleMap lat={lat} lon={lon} /> </td>
                <td> <Chart data={temperature} color="red" unit="K"/> </td>
                <td> <Chart data={pressure} color="green" unit="hPa"/> </td>
                <td> <Chart data={humidity} color="black" unit="%"/> </td>
            </tr>
        );
    }
    
    
    render(){
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature (K)</th>
                            <th>Pressure (hPa)</th>
                            <th>Humidity (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weatherlist.map(this.renderWeather)}
                    </tbody>
                </table>

            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        weatherlist: state.weather
    };
}

export default connect(mapStateToProps)(WeatherList);
