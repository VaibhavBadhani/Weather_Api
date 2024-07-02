


function showRenderedData(data){
    // let newPara = document.createElement('p');
    // newPara.textContent = '${data?.main?.temp.toFixed(2)} °C'
    // document.body.appendChild(newPara); 

    let cityName = document.createElement('p');
    let temperature = document.createElement('p');
    let weatherDescription = document.createElement('p');

    cityName.textContent = `City: ${data.name}`;
    temperature.textContent = `Temperature: ${data.main.temp} °C`;
    weatherDescription.textContent = `Weather: ${data.weather[0].description}`;

    document.body.appendChild(cityName); 
    document.body.appendChild(temperature); 
    document.body.appendChild(weatherDescription); 
}
async function fetchWeatherByTudes(){
    // try{
        
    //     let city="goa";
    //     const API_KEY = "f48593373582e7eafb1ca1385cc07888";
    //     const newLocal = await fetch();
    //     const data = await response.json();
    //     console.log("weather details->  ", data);
    //     // showRenderedData(data);
    // }
    // catch (error) {
    //     console.error("Error fetching weather data:", error); // Make sure this line is correct
    // }
    const lat = "44.34";
    const lon = "10.99";
    const apiKey = "3e888ebd826c69dc88f265549f584bd4"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        showRenderedData(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

fetchWeatherByTudes();
async function fetchWeatherByCity(){
    const city = "London"; 
    const apiKey = "3e888ebd826c69dc88f265549f584bd4"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        showRenderedData(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

// function switchTab(clickedTab){
//     apiErrorContainer.classList.remove("active");

//     if(clickedTab!=currentTab){
//         currentTab.classList.remove("active");
//         currentTab = clickedTab;
//         currentTab.classList.add("current-tab");

//         if(!searchFrom.classList.contains("active")){
//             userInfoContainer.classList.remove("active");
//             grantAccessContainer.classList.add("active");
//             searchForm.classList.add("active");
//         }
//         else{
//             searchForm.classList.remove("active");
//             userInfoContainer.classList.remove("active");
//         }
//     }
// }
// function getLocation(){
//     if(navigator.getLocation){
//         navigator.getLocation.getCurrentPosition(showPosition);
//     }
//     else{
//         console.log("donot support location");
//     }
// }
// function showPosition(position){
//     let lati = position.coords.latitude;
//     let long = position.coords.longitude;
//     console.log("latitude-> "+lati);
//     console.log("longitude-> "+long);
// }