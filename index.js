
const API_KEY = "3e888ebd826c69dc88f265549f584bd4";

try{
    // let latitude = 15.3333;
    // let longitude = 74.0833;
    let city="goa";
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q={city}&units={metric}&appid={API_KEY}');
    const data = await response.json();

     
    console.log("weather details->  ", data);

    // let newPara = document.createElement('p');
    // newPara.textContent = '${data?.main?.temp.toFixed(2)} C'
    // document.body.appendChild(newPara); 

    showRenderedData();
}
catch(e){
    console.log("EROOR");
}