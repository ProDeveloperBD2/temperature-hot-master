const apiKey = `d883dc240bfc720442a58eb1d5d8c9ee`;
const loadWeather = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data))
};
const displayWeather = weathers => {
    console.log(weathers);
    const cityName = document.getElementById('city-name');
    cityName.innerText = '';
    cityName.innerText = `${weathers.name}`;
    const displayTemp = document.getElementById('temperature');
    displayTemp.innerText = '';
    displayTemp.innerText = `${weathers.main.temp}`;
    const displayClouds = document.getElementById('clouds');
    displayClouds.innerText = '';
    displayClouds.innerText = `${weathers.sys.country}`;

};
const searchField = () => {
    const searchText = document.getElementById('search-field')
    const search = searchText.value;
    console.log(search);
    loadWeather(search)

}
loadWeather('dhaka');