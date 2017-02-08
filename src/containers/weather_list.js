import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherChart from '../components/weather_chart';
import CityMap from '../components/city_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temperatures = cityData.list.map(weather => weather.main.temp - 273.15);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const {lon, lat} = cityData.city.coord;

    return (
      <tr key={name}>
        <td>
          <CityMap lat={ lat } lon={ lon } />
        </td>
        <td><WeatherChart data={ temperatures } color="green" units="C" /></td>
        <td><WeatherChart data={ temperatures } color="grey" units="hPa" /></td>
        <td><WeatherChart data={ temperatures } color="red" units="%" /></td>
      </tr>
    );
  }

  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPA)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
