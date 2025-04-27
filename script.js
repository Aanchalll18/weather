// Tabs
const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-usersearchWeather]");

// Search form and input
const searchForm = document.querySelector("[data-searchform]");
const searchInput = document.querySelector("[data-searchInput]");

// Grant Location Section
const grantAccessContainer = document.querySelector(".grant-location-container");
const grantAccessButton = document.querySelector(".grant-location-container .btn");

// Loading Section
const loadingContainer = document.querySelector(".loading-container");

// User Weather Info Section
const userInfoContainer = document.querySelector(".user-info-container");
const cityName = document.querySelector("[data-cityName]");
const countryIcon = document.querySelector("[data-countryImg]");
const climate = document.querySelector("[data-climate]");
const climateIcon = document.querySelector("[data-climateImg]");
const temperature = document.querySelector("[data-temp]");
const windspeed = document.querySelector("[data-windspeed]");
const humidity = document.querySelector("[data-humidity]");
const cloudiness = document.querySelector("[data-cloud]");

let currentTab=userTab;
const API_KEY="8cf585be50d71b413ef0d1500283f683";
currentTab.classList.add("current-tab")

function switchTab(clickedTab){
    if(clickedTab != currentTab){
        currentTab.classList.remove("current-tab")
        currentTab=clickedTab;
        currentTab.classList.add("current-tab")
    }
    if(!searchForm.contains("active")){
        userInfoContainer.classList.remove("active");
        grantAccessContainer.classList.remove("active");
        searchForm.classList.add("active")
    }
    else{
        searchForm.classList.remove("active")
        userInfoContainer.classList.remove("active")
        getformSessionStorage();
    }
}

searchTab.addEventListener("click",()=>{
    switchTab(searchTab)
})

userTab.addEventListener("click",()=>{
    switchTab(userTab)
})

function  getformSessionStorage(){
    const localcoordinate=sessionStorage.getItem.add("active");
    if(!localcoordinate){
        grantAccessContainer.classList.add("active")
    }
    else{
        const coordinates=JSON.parse(localcoordinate)
            fetchWeatherInfo(coordinates);
    }
}

async function fetchWeatherInfo(coordinates){
    const {lat,lon}=coordinates;
    grantAccessContainer.classList.remove("active")
    loadingContainer.classList.add("active");

    try {
        const url =await fetch( `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);

        const data=await response.json()
        loadingContainer.classList.remove("active")
        userInfoContainer.classList.add("active")
        renderweatherInfo(data);

    } catch (error) {
        
    }
}
function renderweatherInfo(data){

}