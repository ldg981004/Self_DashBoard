/* eslint-disable */

import React, { Component } from 'react';
import axios from 'axios';
import './weather.css'

class Weather extends Component {
    // 상태 변수 정의
    constructor(props) {
        super(props);
        this.state = { cityName: 'Seoul', temp: 0, desc: '', icon: '', loading: true }
    }
    // 컴포넌트 생성 후 날씨 정보 조회
    componentDidMount() {
        const cityName = 'Seoul';
        const apiKey = '49959af370996ea60d4e5fa365d1e25b';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

        // fetch() 함수를 이용
        // fetch(url)
        //     .then(response => response.json())
        //     .then(responseData => {
        //         this.setState({
        //             temp: responseData.main.temp,
        //             desc: responseData.weather[0].description,
        //             icon: responseData.weather[0].icon,
        //             loading: false
        //         });
        //     })
        //     .catch(error => console.log(error));

        // axios 라이브러리 이용
        axios.get(url)
            .then(responseData => {
                console.log(responseData);
                const data = responseData.data;
                this.setState({
                    
                    temp: Math.floor(data.main.temp - 273.15),
                    desc: data.weather[0].description,
                    icon: data.weather[0].icon,
                    loading: false
                });
            })
            .catch(error => console.log(error));

    }
    // 날씨 정보 출력
    render() {
        
        if (this.state.loading) {
            return <p>Loading</p>;
        } else {
            return (
                <div className="App">
                    <p>{this.state.cityName}</p>
                    <p>{this.state.temp}C</p>
                    <p>{this.state.desc}</p>
                </div>
            );
        }
    }
}

export default Weather;