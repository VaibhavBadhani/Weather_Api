
const API_KEY = "3e888ebd826c69dc88f265549f584bd4";

function showRenderedData(data){
    let newPara = document.createElement('p');
    newPara.textContent = '${data?.main?.temp.toFixed(2)} C'
    document.body.appendChild(newPara); 
}
try{
    // let latitude = 15.3333;
    // let longitude = 74.0833;
    let city="goa";
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q={city}&units={metric}&appid={API_KEY}');
    const data = await response.json();

     
    console.log("weather details->  ", data);

   

    showRenderedData(data);
}
catch(e){
    console.log("EROOR");
}


function switchTab(clickedTab){
    apiErrorContainer.classList.remove("active");

    if(clickedTab!=currentTab){
        currentTab.classList.remove("active");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

        if(!searchFrom.classList.contains("active")){
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.add("active");
            searchForm.classList.add("active");
        }
        else{
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
        }
    }
}
function getLocation(){
    if(navigator.getLocation){
        navigator.getLocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("donot support location");
    }
}
function showPosition(position){
    let lati = position.coords.latitude;
    let long = position.coords.longitude;
    console.log("latitude-> "+lati);
    console.log("longitude-> "+long);
}